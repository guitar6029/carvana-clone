import React from 'react'
import './Modal.css';

function Modal() {


  const handleSubmit = (event : React.FormEvent<HTMLFormElement>) : void => {
         event.preventDefault();
  }

  return (
    <div className='modal_container'>
        <form onSubmit={handleSubmit} className="test_drive_form">
           <div className='input_container'>
           <label>First Name</label>
            <input type="text" placeholder='Enter your first name' required/>
           </div>
           <div className='input_container'>
           <label>Last Name</label>
            <input type="text" placeholder='Enter your last name' required/>
           </div>
           <div className='input_container'>
           <label>Email</label>
            <input type="email" placeholder='Enter your email here' required/>
           </div>
           <div className='input_container'>
           <label>Contact Number</label>
            <input type="text" placeholder='Enter your contact info' required/>
           </div>
           <button type="submit" >Request Test Drive</button>
           
        </form>
    </div>
  )
}

export default Modal