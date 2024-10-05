import React ,{useEffect , useState} from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import { Box } from '@mui/material'
import { useContext } from 'react'
import { AccountContext } from '../../../Context/AccountProvider'
import { getConversation } from '../../../Service/Api'

export default function ChatBox() {

    const {person , account} = useContext(AccountContext);
    const [conversation , setConversation] = useState({})

    useEffect(()=>{
      const getConversationDetails = async()=>{
      let data =  await getConversation({senderId: account.sub , recieverId : person.sub})
      setConversation(data);
      }
      getConversationDetails();
    },[person.sub])

  return (
    <Box>
      <ChatHeader person={person} />
      <Messages person={person} conversation={conversation} />
    </Box>
  )
}
