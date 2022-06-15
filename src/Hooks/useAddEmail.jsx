import { useState } from "react";

const useAddEmail = () =>{

    const [comp,setComp] = useState();


    return [comp,setComp]
}

export default useAddEmail;