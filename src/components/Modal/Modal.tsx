import { useSelector, useDispatch } from "react-redux";
import { closeModal, customerFeedback, close } from "../../features/modalSlice";
import './Modal.css';

interface props {
  make: string;
  model: string;
  year: string;
}



function Modal({make, model, year} : props) {

  const {isDisplayed, requestedTestDrive }  = useSelector((store: any) => store.modal);

  const dispatch = useDispatch();

  const handleSubmit = (event : React.FormEvent<HTMLFormElement>) : void => {
         event.preventDefault();
         dispatch(customerFeedback(requestedTestDrive));
  }

  return (
    <div className='modal_container'>
        {(requestedTestDrive) ? <div className="test_drive_form"><h3>Thank you for your interest in {make} {model} {year} test drive. Someone will reach out to you soon.</h3><button onClick={() => dispatch(close(isDisplayed))}>Ok</button></div> : <form onSubmit={handleSubmit} className="test_drive_form">
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
           <div className="buttons">
           <button type="submit" >Request Test Drive</button>
           <button onClick={() => dispatch(closeModal(isDisplayed))}>Cancel</button>

           </div>
           
        </form>}
        
    </div>
  )
}

export default Modal