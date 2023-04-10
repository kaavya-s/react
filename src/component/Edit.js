import React, { useState,useEffect } from 'react'
import Employees from './Employees';
import { Button, TextField, Typography } from "@mui/material";
import { Link,useNavigate } from 'react-router-dom'



export default function Edit() {
    const[name,setName]=useState('');
    const[age,setAge]=useState('');
    
    let history=useNavigate();

    var index =Employees.map(function(e){
        return e.id
    }).indexOf(id);

    const handleSubmit=(e)=>{
        e.preventDefault();

       let a=Employees[index];
       a.Name=name;
       a.Age=age;
        history('/')
    }
    useEffect(()=>{
        setName(localStorage.getItem('id'))
        setName(localStorage.getItem('Name'))
        setName(localStorage.getItem('Age'))
    })
  return (
    <div>
        <form>
            <Typography variant="h6" align="center" marginBottom={5}>Add Employees</Typography>
            <TextField sx={{marginBottom:2}} label="Name" value={name} fullWidth onChange={(e)=>setName(e.target.value)}/>
            <TextField sx={{marginBottom:2}} label="Age" value={age} fullWidth onChange={(e)=>setAge(e.target.value)}/>
        <Button onClick={(e)=>handleSubmit(e)} type="submit" variant="contained">Update</Button>
        </form>
    </div>
  )
}
