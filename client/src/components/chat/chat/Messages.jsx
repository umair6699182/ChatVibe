import React , {useContext , useState , useEffect} from 'react'
import { Box , styled } from '@mui/material'
import {AccountContext} from '../../../Context/AccountProvider'
import { getMessage, newMesasge } from '../../../Service/Api';
import Footer from './Footer';
import Message from './Message';

const Wrapper = styled(Box)`
    background-image : url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
`;
const Component = styled(Box)`
    height: 78vh;
    overflow-y: scroll

`;


export default function Messages({person , conversation}) {

  const [value , setValue] = useState('');
  const {account} = useContext(AccountContext);
  const [message , setMessage] = useState([]);
  const [newMesasgeFlag , setnewMessageFlag] = useState(false);
  const [file , setFile] = useState('');

  const SetText = async(e)=>{
      const code = e.which;
      if(code === 13){
        let message = {
          senderId : account.sub,
          recieverId : person.sub,
          conversationId : conversation._id,
          type: 'text',
          text: value
        }
        await newMesasge(message);
        setValue('');
        setnewMessageFlag(prev => !prev);
      }
     
  }

  useEffect(()=>{
    const getMessageDetails = async()=>{
      let data = await getMessage(conversation._id)
      setMessage(data);
    }
     conversation._id &&  getMessageDetails();
  },[person._id , conversation._id , newMesasgeFlag])

  return (
    <Wrapper>
      <Component>
        {
          message && message.map(message=> (
            <Message message={message} />
          ))
        }
      </Component>
      
      <Footer SetText={SetText} setValue={setValue} value={value} file={file} setFile={setFile} />
    </Wrapper>
  )
}

