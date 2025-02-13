import React , {useContext , useState} from 'react'
import { AccountContext } from '../../../Context/AccountProvider'
import { Box , styled} from '@mui/material';
import { Chat } from '@mui/icons-material';
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../infoDrawer/InfoDrawer';

const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;
const Wrapper = styled(Box) `
    margin-left: auto;
    & > * {
        margin-left: 2px;
        padding: 8px;
        color: #000;
    };
    & :first-child {
        font-size: 22px;
        margin-right: 8px;
        margin-top: 3px;
    }
`;
const Image = styled('img') ({
    height: 40,
    width: 40,
    borderRadius: '50%'
})


export default function Header() {

  const [openDrawer , setOpenDrawer] = useState(false);

    const {account} = useContext(AccountContext);

    const toggleDrawer = ()=>{
      setOpenDrawer(true)
    }

  return (
    <>
      <Component>
        <Image src={account.picture} alt='dp' onClick={()=> toggleDrawer()} />
        <Wrapper>
          <Chat />
          <HeaderMenu setOpenDrawer={setOpenDrawer} />
        </Wrapper>
      </Component>
      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
  )
}
