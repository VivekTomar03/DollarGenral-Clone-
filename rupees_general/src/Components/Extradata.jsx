import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Button, Grid, GridItem, Image, Text } from '@chakra-ui/react';
const baseurl ="https://distinct-lime-culottes.cyclic.app/"
const getdata = ()=>{
    return axios({
        method:"get",
        url:`https://mock-server-json-x067.onrender.com/toys`
    })
}

const Extradata = () => {
    const [data , setdata] = useState([])

    const fetchdata = ()=>{
        getdata().then((res)=>{
            setdata(res.data)
        })
    }

    useEffect(() => {
        fetchdata()
    }, []);

    console.log(data)
  return (
    <div>
        <Grid gridTemplateColumns="repeat(3,1fr)" gap={10} width="80%" margin={"auto"} marginTop="30px">
           {
            data.map((item)=>(
                <GridItem boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"} padding="10px">
                    <Image marginLeft={20} w={200} height="100px" src={`${item.image}`}/>
                    <Text>{item.name}</Text>
                    <Text>Rating : {item.rating}</Text>
                    <Text>Price : {item.price}</Text>
                    <Button bg={"yellow"}>Add To Cart</Button>
                </GridItem>
            ))
           }    
        
        </Grid>
    </div>
  );
}

export default Extradata;
