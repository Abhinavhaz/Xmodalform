import Modal from "../modal/modal";
import "../../App.css"
import { useState } from "react";
function Form(){
const [modal, setModal ] = useState(false)

const handleprev =()=>{
setModal(!modal)
}

const handleOutside = (e) => {
    if (e.target.className === "xyz") {
      setModal(false);
    }
  };
return(
   
<>
    <div style={{textAlign:"center"}}  onClick={handleOutside}
className={modal &&("xyz")} >
    
<h1>User Details Modal</h1>
       

        <button style={{ backgroundColor:" rgb(54, 173, 252)",borderRadius:"10px" ,color:"white",height: "40px",width: "10%",border:0}}
        onClick={handleprev}
        
        >Open Form</button>



{modal &&(
    <Modal setModal={setModal} />
)}
    </div>

    </>

)
}

export default  Form