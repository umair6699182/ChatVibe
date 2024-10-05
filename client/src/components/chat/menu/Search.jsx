import React from 'react'
import { Box, InputBase , styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const Component = styled(Box)({
    background: '#fff',
    height: '45px',
    borderBottom: '1px solid #F2F2F2',
    display: 'flex',
    alignItems: 'center'
});
const Wrapper = styled(Box)`
    position: relative;
    border-radius: 10px;
    background-color: #f0f2f5;
    margin: 0 13px;
    width: 100%;
`;

const Icon = styled(Box)`
    color: #919191;
    padding: 8px;
    height: 100%;
    position: absolute;
`;
      
const InputField = styled(InputBase) `
    width: 100%;
    padding: 16px;
    padding-left: 65px;
    font-size: 14px;
    height: 15px;
    width: 100%;
`;

export default function Search({setText}) {
  return (
    <Component>
      <Wrapper>
        <Icon>
            <SearchIcon fontSize='small' />
        </Icon>
        <InputField
        placeholder='Search or start new chat'
        onChange={(e)=> setText(e.target.value)}
        />
      </Wrapper>
    </Component>
  )
}
