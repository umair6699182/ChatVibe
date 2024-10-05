import React from "react";
import { Dialog, Box, styled } from "@mui/material";
import Menu from "./menu/Menu";
import Emptychat from "./chat/Emptychat";
import ChatBox from "./chat/ChatBox";
import { useContext } from "react";
import { AccountContext } from "../../Context/AccountProvider";


const Component = styled(Box)`
  display: flex;
`;

const LeftComponent = styled(Box)`
  min-width: 450px;
`;

const RightComponent = styled(Box)`
  width: 73%;
  min-width: 300px;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.14);
`;

const DailogStyle = {
  maxHeight: "100%",
  height: "95%",
  maxWidth: "100%",
  width: "100%",
  boxShadow: "none",
  margin: "20px",
  borderRadius: 0,
};

export default function ChatDialog() {

  const {person} = useContext(AccountContext);


  return (
    <Dialog open={true} PaperProps={{ sx: DailogStyle }} hideBackdrop={true} maxWidth={'md'}>
      <Component>
        <LeftComponent>
          <Menu />
        </LeftComponent>
        <RightComponent>
          {
            Object.keys(person).length ? <ChatBox /> : <Emptychat />
          }
        </RightComponent>
      </Component>
    </Dialog>
  );
}
