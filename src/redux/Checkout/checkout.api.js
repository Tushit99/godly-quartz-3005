import axiox from 'axios';

export const getCheckoutdataAPI=async()=>{
 let res = await axiox.get(`https://tame-lime-hose.cyclic.app/checkout`);
 return res.data
}

export const postCheckoutdataAPI=async(product)=>{
    let res = await axiox.post(`https://tame-lime-hose.cyclic.app/checkout`,product);
    return res.data
}

export const deleteCheckoutdataAPI=async(id)=>{
let res = await axiox.delete(`https://tame-lime-hose.cyclic.app/checkout/${id}`);
return res.data
}   