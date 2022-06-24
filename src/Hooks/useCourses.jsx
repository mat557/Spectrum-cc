import { useEffect, useState } from "react"

const useCourses = () =>{
    const [course,setCourse] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/courses`)
        .then(res => res.json())
        .then(data => {
            setCourse(data)
        })
    },[])
    

    return [course,setCourse];
}

export default useCourses;