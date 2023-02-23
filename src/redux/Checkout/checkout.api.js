import axiox from 'axios';

export const getCheckoutdataAPI=async()=>{
 let res = await axiox.get(`http://localhost:8080/checkout`);
 return res.data
}

export const postCheckoutdataAPI=async(product)=>{
    let res = await axiox.post(`http://localhost:8080/checkout`,product);
    return res.data
}

export const deleteCheckoutdataAPI=async(id)=>{
let res = await axiox.delete(`http://localhost:8080/checkout/${id}`);
return res.data
}   