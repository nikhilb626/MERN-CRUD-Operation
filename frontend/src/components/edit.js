import {useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import {editCostumer,getCostumers} from "../service/axiosApi";
import { useNavigate } from "react-router";


import React from 'react'

const Edit = () => {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");

    const navigate=useNavigate();

    const {id}=useParams();

    useEffect(()=>{
        const loadDetails = async()=>{
            try{
                const response = await getCostumers(id);
            console.log(response.data);
            setName(response.data.name);
            setEmail(response.data.email);
            setPhone(response.data.phone);
            }
            catch(error){
                console.log(`cant load data due to ${error}`)
            }
            

        }

        loadDetails();
    },[]);


 
  

    const updateHandle=async()=>{
        const CostumerObj={
            name,email,phone
        }
    console.log(id);
        console.log(CostumerObj);
        try{
            await editCostumer(id,CostumerObj);
            navigate('/');
            console.log("update successfully");
        }catch(error){
            console.log(`the error is ${error}`)
        }
       
    
    }



    return (
        <>
 <div className="heading">UPDATE COSTUMER</div>

<div className="form_container">
    <input type="text" placeholder="enter name" value={name} onChange={(e)=>setName(e.target.value)} />
    <input type="text" placeholder="enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
    <input type="text" placeholder="enter phone" value={phone} onChange={(e)=>setPhone(e.target.value)} />

    <button onClick={()=>updateHandle()}>update</button>
</div>
        </>
    )
}

export default Edit;
