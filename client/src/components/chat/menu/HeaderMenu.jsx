import React , {useState} from 'react'
import {MoreVert} from '@mui/icons-material'
import { Menu , MenuItem } from '@mui/material'

export default function HeaderMenu({setOpenDrawer}) {

    const [open , setOpen] = useState(false);

    const handleClose = ()=>{
        setOpen(false)
    }

    const handleClick = (e)=>{
        setOpen(e.currentTarget)
    }

  return (
    <>
        <MoreVert onClick={handleClick} />
        <Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
        }}
      >
        <MenuItem onClick={()=> {handleClose(); setOpenDrawer(true)}}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  )
}
