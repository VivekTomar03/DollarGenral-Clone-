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

export const updatedata = (id,obj)=>{
    const{name,price,description,rating,Brand_Description,Unit_Size,image} =obj
    return axios({
        method:"patch",
        url:`https://mock-server-json-x067.onrender.com/Vitamins/${id}`,
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

export const getdatavitamins = (searchdata)=>{
   
    return axios({
        method:"get",
        url:`https://mock-server-json-x067.onrender.com/Vitamins`,
        params:{
            q:searchdata,
            _limit:1

        }
    })
}
export const getdataforproddetails = (id)=>{
    return axios({
        method:"get",
        url:`https://mock-server-json-x067.onrender.com/Vitamins/${id}`
    })
}

export const getdatafortoys = ()=>{
    return axios({
        method:"get",
        url:"https://mock-server-json-x067.onrender.com/Toys"
    })
}


export const adminloginpost = (obj)=>{
    const{email,password} = obj
 
    return axios({
        method:"post",
        url:"https://reqres.in/api/login",
        data:{
          email,
          password
        }
    })
}


export const userLoginPost= (obj)=>{
    const{email,password,name,age} = obj
 
    return axios({
        method:"post",
        url:"https://mock-server-json-x067.onrender.com/users",
        data:{
            name,
            age,
            email,
            password,
        }
    })
}


export const userLoginGet = (obj)=>{
    const{email,password} = obj
    return axios({
        method:"get",
        url:"https://mock-server-json-x067.onrender.com/users",
        params:{
            _email:email,
            _password:password
        }
    
    })
}