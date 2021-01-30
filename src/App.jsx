import React from 'react';
import Card from "./Cards"; 
import Data from './Data.jsx';
import "./index.css";

function cdata(val){ 
return(<Card sname={val.sname} 
             imgsrc={val.imgsrc}
             title={val.title}
             links={val.links}
  />);

}


function App(){
    return(
    <>
    <h1 className="heading_style"> Welcome to learn Potrait sketching</h1>
    {Data.map(cdata)}
     
    </>
    );
}
export default App;
