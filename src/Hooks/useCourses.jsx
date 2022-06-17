import { useState } from "react"

const useCourses = () =>{
    const [course,setCourse] = useState([]);

    fetch(`http://localhost:5000/courses`)
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        setCourse(data)
    })

    return [course,setCourse];
}

export default useCourses;