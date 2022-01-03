import React,{useState,useEffect} from 'react';
import {getCostumers,addCostumer,deleteCostumer} from "../service/axiosApi";
import {useNavigate} from "react-router";

const Home = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");


    

    const [data,setData]=useState([]);


    const navigate=useNavigate();

    const [error,setError]=useState("error");
    const [addmsg,setAddmsg]=useState("addclose");
    const [deletemsg,setDeletemsg]=useState("deleteclose");

   


    const addHandle=async()=>{
       if(name==="" || email==="" || phone===""){
         setError("error open");
       }
       else if(name!=="" && email!=="" && phone!==""){
        const costumerObject={
            name,email,phone
        }

      await addCostumer(costumerObject);
      setAddmsg("addclose open");
      setName("");
      setEmail("");
      setPhone("");

   await  getAllCostumers();

       }
    }


    const deleteCostumerData=async(id)=>{
        await deleteCostumer(id);
        getAllCostumers();
        setDeletemsg("deleteclose open");

    }


   

    const getAllCostumers=async()=>{
        let response=await getCostumers();
        console.log("here below is response please check it")
        console.log(response.data);
        setData(response.data);
     

    }


    useEffect(()=>{
        getAllCostumers();
    },[]);


    const handleEditBtn=(id)=>{
        navigate(`/edit/${id}`)
    }
  


    const closeHandle=()=>{
        setError("error");
}


const closeHandle1=()=>{
    setAddmsg("addclose")
}

const closeHandle2=()=>{
    setDeletemsg("deleteclose")
}



    return (
        <>
      <div className="heading">MERN CRUD APP</div>

      <div className="message_container">
            <div className={error}>please fill all the value first <span onClick={closeHandle}>X</span></div>
            <div className={addmsg}> successfully added <span onClick={closeHandle1}>X</span></div>
            <div className={deletemsg}> successfully deleted <span onClick={closeHandle2}>X</span></div>
           
        </div>
      <div className="form_container">
          <input type="text" placeholder="enter name" value={name} onChange={(e)=>setName(e.target.value)} />
          <input type="text" placeholder="enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input type="text" placeholder="enter phone" value={phone} onChange={(e)=>setPhone(e.target.value)} />

          <button onClick={()=>addHandle()}>add customer</button>
      </div>



      <div className="table_container">
      <table id="customers">
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Action</th>

  </tr>

 {
     data.map((customer)=>{
         return(
            <tr>
      <td>{customer.name}</td>
      <td>{customer.email}</td>
      <td>{customer.phone}</td>
      <td>
          <button className="info" onClick={()=>handleEditBtn(customer._id)}><i class="fas fa-edit"></i></button> &nbsp;| &nbsp;
          <button className="danger" onClick={()=>deleteCostumerData(customer._id)}><i class="far fa-trash-alt"></i></button>
      </td>

  </tr>
         )
     })
 }

</table>
</div>
        </>
    )
}

export default Home;
