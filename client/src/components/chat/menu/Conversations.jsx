import React from 'react'
import { useEffect , useState , useContext} from 'react'
import { GetUser } from '../../../Service/Api'
import { Box , Divider, styled } from '@mui/material';
import { AccountContext } from '../../../Context/AccountProvider';
import Conversation from './Conversation';

const Component = styled(Box)`
    overflow: overlay;
    height: 70vh;
`;
const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity: .6;
`;


export default function Conversations({text}) {

    const [users , setUsers] = useState([]);
    const {account} = useContext(AccountContext);

    useEffect(()=>{
        const FetchData = async ()=>{
           let response =  await GetUser();
           const filterData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
           setUsers(filterData);
        }
        FetchData();
    }, [text])
  return (
    <Component>
        {
            users.map(item => (
              item.sub !== account.sub &&
              <>
              <Conversation item={item} />
              <StyledDivider />
              </>
            ))
        }
    </Component>
  )
}
