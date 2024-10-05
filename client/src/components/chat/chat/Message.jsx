import React , {useContext} from 'react'
import { Box , Typography , styled} from '@mui/material';
import { formatDate } from '../../../utilis/common-utils';
import { AccountContext } from '../../../Context/AccountProvider';

const Wrapper = styled(Box)`
    background: #FFFFFF;
    padding: 5px;
    max-width: 60%;
    width: fit-content;
    margin-left: 10px;
    display: flex;
    border-radius: 10px;
    word-break: break-word;
`;
    
const Own = styled(Box)`
    background: #dcf8c6;
    padding: 5px;
    max-width: 60%;
    width: fit-content;
    margin-top: 10px;
    margin-right: 15px;
    margin-left: auto;
    display: flex;
    border-radius: 10px;
    word-break: break-word;
`;
const Text = styled(Typography)`
    font-size: 14px;
    padding: 0 25px 0 5px;
`;

const Time = styled(Typography)`
    font-size: 10px;
    color: #919191;
    margin-top: 6px;
    word-break: keep-all;
    margin-top: auto;
`;

export default function Message({message}) {

    const {account} = useContext(AccountContext);

  return (
    <>
        {
            account.sub === message.senderId ?
                <Own>
                    <Text>{message.text}</Text>
                    <Time>{formatDate(message.createdAt)}</Time>
                </Own>
            :
            <Wrapper>
                    <Text>{message.text}</Text>
                    <Time>{formatDate(message.createdAt)}</Time>
            </Wrapper>

        }
    
    </>


  
  )
}
