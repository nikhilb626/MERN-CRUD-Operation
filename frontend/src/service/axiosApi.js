import axios from "axios";

const costumerUrl=`http://localhost:5000/costumers`;

export const getCostumers=async(id)=>{
    id=id || '';
    return await axios.get(`${costumerUrl}/${id}`);
}

export const addCostumer=async(costumer)=>{
    return await axios.post(`${costumerUrl}/add`,costumer);
}


export const deleteCostumer=async(id)=>{
    return await axios.delete(`${costumerUrl}/${id}`);
}

export const editCostumer= async (id,costumer)=>{
    return await axios.put(`${costumerUrl}/${id}`,costumer)
}