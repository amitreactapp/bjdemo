import React from 'react';

const Navbar=()=> {
  return (
    <>
    
    {/* creating a navbar */}
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">MHaq</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <p className="nav-link" href="#">Home <span className="sr-only"></span></p>
      </li>
      <li className="nav-item">
        <p className="nav-link" href="#">Contact</p>
      </li>
      <li className="nav-item">
        <p className="nav-link" href="#">About Us</p>
      </li>
      
      <li>
      <button type="button" className="btn btn-success" >Login</button>
      </li>
    </ul>
  </div>
</nav>
</>
  )
}
export default Navbar;