import { useState } from "react";

const withCounter = (OldComponent)=>{

    return (props)=>{

        const [counter,setCounter] = useState(0);

        return <OldComponent {...props} counterValue={counter} incrementCounter={()=>setCounter(counter+1)} />
    }

}

export default withCounter;

