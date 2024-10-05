import React, { useContext } from "react";
import LoginDailog from "./account/LoginDailog";
import { AppBar, Box, Toolbar, styled } from "@mui/material";
import { AccountContext } from "../Context/AccountProvider";
import ChatDialog from "./chat/ChatDialog";

const Container = styled(Box)({
  minHeight: "100vh",
  background: "#DCDCDC",
});
const ChatHeader = styled(AppBar)({
  height: 125,
  backgroundColor: "#00A884",
  boxShadow: "none",
});
const LoginHeader = styled(AppBar)({
  height: 220,
  backgroundColor: "#00bfa5",
  boxShadow: "none",
});

export default function Messenger() {
  const { account } = useContext(AccountContext);

  return (
    <Container>
      {account ? (
        <>
         <ChatHeader>
            <Toolbar>

            </Toolbar>
          </ChatHeader>
        <ChatDialog />
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <LoginDailog />
        </>
      )}
    </Container>
  );
}
