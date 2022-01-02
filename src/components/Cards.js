import React from "react";


const Card=({props})=>{
  
    return(
    
        <>
        <section >
     {props.map((curElem)=>{
      return(
      <>
<div className="card-group" key={curElem.id}>
  <div className="card">
    <img className="card-img-top" src={curElem.source} width="100px" height="100px"  alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{curElem.title}</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  </div>
</>
      )
    })}
        
        </section>
        </>
    )
}
export default Card;