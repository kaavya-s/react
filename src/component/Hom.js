import { AppBar, TextField, Toolbar, Typography } from '@mui/material'
import React from 'react';
import { Link } from 'react-router-dom';


export default function Hom() {
  return (
    <div>
<AppBar style={{ background: 'black',padding:'10px' }}>Employee Management System
</AppBar>
<Link to="/home" style={{textDecoration: 'none'}}>
<Typography textAlign={'center'} paddingTop={"50px"}><h1>Home</h1></Typography>
</Link>
</div>
  )
}
