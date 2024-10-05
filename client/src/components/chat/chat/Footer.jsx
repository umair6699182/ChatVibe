import React , {useEffect} from "react";
import { Box, InputBase, styled } from "@mui/material";
import { EmojiEmotions, AttachFile, Mic } from "@mui/icons-material";
import { uploadFile } from "../../../Service/Api";

const Container = styled(Box)`
  height: 59px;
  background: #ededed;
  width: 97%;
  display: flex;
  align-items: center;
  padding: 0 15px;
  & > * {
    margin: 5px;
    color: #919191;
  }
`;
const Search = styled(Box)`
  border-radius: 18px;
  background-color: #ffffff;
  width: calc(97% - 100px);
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding: 20px;
  padding-left: 25px;
  font-size: 14px;
  height: 20px;
  width: 100%;
`;
const ClipIcon = styled(AttachFile)`
  transform: "rotate(40deg)";
  cursor: pointer;
`;

export default function Footer({ SetText, setValue, value , file , setFile}) {

    useEffect(()=>{
        const getImage = async()=>{
            if(file){
                const data = new FormData();
                data.append('name', file.name);
                data.append('file' , file);


                await uploadFile(data);
            }

        }
        getImage();
    },[file])

    const onFileChange = (e)=>{
            setFile(e.target.files[0]);
            setValue(e.target.files[0].name);
    }

  return (
    <Container>
      <EmojiEmotions />
      <label htmlFor="inputfile">
        <ClipIcon />
      </label>

      <input type="file" id="inputfile" style={{ display: "none" }} onChange={(e)=> onFileChange(e)} />
      <Search>
        <InputField
          placeholder="Type a message"
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => SetText(e)}
          value={value}
        />
      </Search>
      <Mic />
    </Container>
  );
}
