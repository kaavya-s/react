import { Button, Table, Typography } from '@mui/material'
import React from 'react'
import { Fragment } from 'react'
import Employees from './Employees'
import { Link,useNavigate } from 'react-router-dom'

export default function Home() {

    let history=useNavigate();
    const handleDelete=(id)=>{
        var index =Employees.map(function(e){
            return e.id
        }).indexOf(id);
        Employees.splice(index,1);
        history("/home")
    }
  return (
 
        <Fragment >
            <Typography>Employee List</Typography>
            <div style={{margin:"10rem"}}>
                <Table border="1px">
  
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        Employees && Employees.length>0
                        ?
                        Employees.map((item)=>{
                            return(
                                <tr>
                                    <td>
                                        {item.Name}
                                    </td>
                                    <td>
                                        {item.Age}
                                    </td>
                                    <td>
                                        {/* <Link to={`/edit`}>
                                        <Button variant="outlined" color="secondary" onClick={handleEdit}>EDIT</Button></Link>
                                        &nbsp; */}
                                        <Button variant="outlined" color="error" onClick={handleDelete}>DELETE</Button>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        "No data available"
                        }
                    </tbody>
                </Table>
                <br></br>
                <Link to="/create" style={{textDecoration: 'none'}}>
                    <Button variant='contained' color='secondary'>Create</Button>
                </Link>
            </div>
        </Fragment>
  )
}
