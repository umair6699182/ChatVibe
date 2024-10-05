import React from 'react'
import { Box , Typography , styled } from '@mui/material';
import { useContext } from 'react';
import { AccountContext } from '../../../Context/AccountProvider';
import { SetConversation } from '../../../Service/Api';


const Component = styled(Box)`
    height: 45px;
    display: flex;
    padding: 13px 0;
    cursor: pointer;
`;
    
const Image = styled('img') ({
    width: 50,
    height: 50,
    objectFit: 'cover',
    borderRadius: '50%',
    padding: '0 14px'
});


export default function Conversation({item}) {

  const {setPerson , account } = useContext(AccountContext);

  const getUser = async()=>{
    setPerson(item);
    await SetConversation({senderId: account.sub , recieverId: item.sub})
  }

  return (
    <Component onClick={()=> getUser()}>
      <Box>
            <Image src={item.picture} alt='dp' />
      </Box>
      <Box>
            <Typography>{item.name}</Typography>
      </Box>
    </Component>
  )
}
