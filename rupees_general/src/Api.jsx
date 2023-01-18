import axios from  "axios"


export const getdata = ()=>{
    return axios({
        method:"get",
        url:"https://mock-server-json-x067.onrender.com/Vitamins"
    })
}
export const postdata = (obj)=>{
    const{name,price,description,rating,Brand_Description,Unit_Size,image} =obj
    return axios({
        method:"post",
        url:"https://mock-server-json-x067.onrender.com/Vitamins",
        data:{
          name,
          price,
          description,
          rating,
          Brand_Description,
          Unit_Size,
          image

        }
    })
}

export const deletedata = (id)=>{
   return axios({
    method:"delete",
    url:`https://mock-server-json-x067.onrender.com/Vitamins/${id}`
   })
}