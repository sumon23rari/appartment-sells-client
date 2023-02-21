import { useEffect, useState } from "react";

const useSeviceDetail=(serviceId)=>{
    const [service, setService] = useState({});
    useEffect(()=>{
        const url=`http://localhost:8000/services/${serviceId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[serviceId])
    return [service]
}
export default useSeviceDetail;