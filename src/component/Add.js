import React, { useState } from "react";
import {v4 as uuid} from 'uuid';
import { useNavigate } from "react-router-dom";
import Employees from "./Employees";
import { Button, TextField, Typography } from "@mui/material";

export default function Add() {

    const[name,setName]=useState('');
    const[age,setAge]=useState('');

    let history=useNavigate();
    
    const handleSubmit=(e)=>{
        e.preventDefault();

        const ids=uuid();
        let uniqueId=ids.slice(0,8);

        let a=name, b=age;
        Employees.push({id:uniqueId,Name:a,Age:b});
        history('/home')
    }
  return (
    <div>
        <form>
            <Typography variant="h6" align="center" marginBottom={5}>Add Employees</Typography>
            <TextField sx={{marginBottom:2}} label="Name" fullWidth onChange={(e)=>setName(e.target.value)}/>
            <TextField sx={{marginBottom:2}} label="Age" fullWidth onChange={(e)=>setAge(e.target.value)}/>
        <Button onClick={(e)=>handleSubmit(e)} type="submit" variant="contained">Submit</Button>
        </form>
    </div>
  )
}
