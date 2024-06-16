import React, {  useState } from "react"
import "../../App.css"

function Modal({setModal}){
const [formdata, setFormdata] = useState({
    username:"",
    email:"",
    phoneNumber :"",
    date:""
})





const handlesubmit=(e)=>{
    // const username = formdata.username
    const email = formdata.email
    const phone = formdata.phoneNumber
    const dob = formdata.date

    if (!email.includes("@")) {
        alert("Invalid email. Please check your email address.");
        return;
      }
  
      if (!/^\d{10}$/.test(phone)) {
        alert("Invalid phone number");
        return;
      }
  
      const today = new Date();
      const selectedDate = new Date(dob);
      if (selectedDate > today) {
        alert("Invalid date of birth");
        return;
      }
  
      e.preventDefault();
setModal(false)

}


const handleOutside=()=>{
    setModal(false)
}


    return(
        <div  className="modal" onClick={handleOutside}>

        
        <div className="modal-content" >
           

<h2>Fill Details</h2>

<form onSubmit={handlesubmit}>
    <div>
    <label>Username:</label>
    </div>
<input type="text"  className="input" required
id="username"
  onChange={(e) =>
    setFormdata({
      ...formdata,
      username: e.target.value,
    })
    
  }
/>





    <div>
    <label>Email Address:</label>
    </div>
<input type="email" className="input" required id="email"
onChange={(e) =>
    setFormdata({
      ...formdata,
      email: e.target.value,
    })
  }
/>





    <div>
    <label>Phone Number:</label>
    </div>
<input  type="number" className="input" required  id="phone"
onChange={(e) =>
    setFormdata({
      ...formdata,
      phoneNumber: e.target.value,
    })
  }
/>

  



    <div>
    <label>Date of Birth:</label>
    </div>
<input type="date"   className="input" required id="dob"
onChange={(e) =>
    setFormdata({
      ...formdata,
      date: e.target.value,
    })
  }
/>


<div>
<button className="submit-button" type="submit">Submit</button>

</div>
</form>
        </div>
        </div>
    )

}
export default Modal
