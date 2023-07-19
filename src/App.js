import React from "react";


//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";                                       
import { Button } from 'primereact/button'; 


//components

import Content from "./components/Contents/Content";



function App() {
  return (
    <div >
     
      <Content/>
    </div>
  );
}

export default App;
