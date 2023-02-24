import axios from "axios"


export const fetchCartAPI = async () => {
    let res = await axios.get(`https://tame-lime-hose.cyclic.app/cart`)
    //console.log(res?.data)
    return res.data
}

export const deleteCartAPI = async (id) => {
    let res = await axios.delete(`https://tame-lime-hose.cyclic.app/cart/${id}`)
    //console.log(res?.data)
    return res
}