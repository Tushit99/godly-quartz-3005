import axios from "axios"


export const fetchCartAPI = async () => {
    let res = await axios.get(`http://localhost:8080/cart`)
    //console.log(res?.data)
    return res.data
}

export const deleteCartAPI = async (id) => {
    let res = await axios.delete(`http://localhost:8080/cart/${id}`)
    //console.log(res?.data)
    return res
}