import React from "react";
import Jumbo from "./components/BJjumbo";
import Bjv from "./components/BJvideos";
import BJhead from "./components/BJheader";
import Bjfoot from "./components/BJfooter";
const BJhome=()=>{
    return(
        <>
          <BJhead/>
  <Jumbo/>
  <Bjv/>
  <Bjfoot/>

        </>
    )
}
export default BJhome;