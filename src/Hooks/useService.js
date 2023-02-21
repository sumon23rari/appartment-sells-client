import { useEffect, useState } from "react"

const useService=()=>{
    const [service,setService]=useState([]);
    useEffect(()=>{
    const url=`http://localhost:8000/services`
    fetch(url)
    .then(res=>res.json())
    .then(data=>setService(data))
    },[])
    return [service,setService]
}
export default useService;