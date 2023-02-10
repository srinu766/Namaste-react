import React from "react"; 
import ReactDOM from "react-dom/client";

const Title =(
<h1 id="title" key="h2">
    Namaste React
    </h1>
    );

    //React components 

    const HeaderComponent =()=>{
        return(
        <div>
            <Title/>
            <h1>namaste react functional component</h1>
            <h2>this is tag2</h2>
            </div>
        )
    };

    
   

const root = ReactDom.createRoot(document.getElementById("root"));

//passing a react element inside the root

//async defer
root.render(<HeaderComponent/>);

 