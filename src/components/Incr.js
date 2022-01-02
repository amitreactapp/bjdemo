import React, { useState } from "react";

const Incr=()=>{
    const Indata = 0;
    const [CurData, setCurData]=useState(Indata);
    const [Name, setName] = useState("");
    const[FullName, setFullName] = useState(Name);
    const Msg=(event)=>{
    setName(event.target.value);
    }
const DispName=()=>{
    setFullName(Name);
}
    const Increm=()=>{
        let upData=CurData+1;
        setCurData(upData);

        
        }
    return(
        <>
    <h1> {CurData}</h1>
    <button className="btn-danger" btn-primary    onClick={Increm}> Increment</button>
    <h1>Hello {FullName} </h1>
<input type="text" placeholder="Enter your Name" defaultValue="" onChange={Msg}/> 

<button className="btn-dark" onClick={DispName}>Submit</button>       
        </>
    )
}
export default Incr;