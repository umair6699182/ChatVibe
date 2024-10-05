import React,{useContext} from "react";
import { Box, Dialog, List, ListItem, Typography, styled } from "@mui/material";
import { qrCodeImage } from "../../Constant/Data";
import { GoogleLogin } from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";
import { AccountContext } from "../../Context/AccountProvider";
import { AddUser } from "../../Service/Api";


const DailogStyle = {
    maxHeight: '100%',
    height: '90%',
    maxWidth: '100%',
    width: '60%',
    marginTop: 12,
    boxShadow: 'none'
}
const Component = styled(Box)({
    display: 'flex'
})
const Container = styled(Box)({
    padding: '56px 0 56px 56px'
})
const Qrcode = styled('img')({
    width: 264,
    height: 264,
    margin: '50px 0 0 56px'
})
const Title = styled(Typography)({
    fontSize: 26,
    color: '#525252',
    fontWeight: 300,
    fontFamily: 'inherit'
})
const StyledList = styled(List)`
    &  > li {
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        color: #4a4a4a;
    }
`;

export default function LoginDailog() {

    const {setAccount , account} = useContext(AccountContext);
    console.log(account)

    const onLoginSuccess = async (res)=>{
        const decode = jwtDecode(res.credential);
        setAccount(decode);
        await AddUser(decode);
    }
    const onLoginError = (res)=>{
        console.log("Login Failed",res)
    }

  return (
    <Dialog 
    open={true}
    PaperProps={{sx: DailogStyle}}
    hideBackdrop={true}
    >
    <Component>
        <Container>
            <Title>To use WhatsApp on your computer:</Title>
            <StyledList>
                <ListItem>1. Open WhatsApp on your phone</ListItem>
                <ListItem>2. Tap Menu settings and select WhatsApp Web</ListItem>
                <ListItem>3. Point your phone to this screen to capture the code</ListItem>
            </StyledList>
        </Container>
        <Box style={{position: 'relative',}}>
            <Qrcode src={qrCodeImage} alt="qr code" />
            <Box style={{position: 'absolute' , top: '50%', left: '30%'}}>
                <GoogleLogin 
                onSuccess={onLoginSuccess}
                onError={onLoginError}
                />
            </Box>
        </Box>
    </Component>
    </Dialog>
  );
}
