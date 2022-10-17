import { useRef, useEffect } from "react";
import { AiFillCloseCircle, AiOutlineCar } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { closeModal, customerFeedback, close } from "../../features/modalSlice";
import "./Modal.css";

interface props {
  make: string;
  model: string;
  year: string;
}

function Modal({ make, model, year }: props) {
  const { isDisplayed, requestedTestDrive } = useSelector(
    (store: any) => store.modal
  );

  const modalFormRef = useRef<any>(null);
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(customerFeedback(requestedTestDrive));
  };

  //detects if user clicks outside of modal => closes the modal
  useEffect(() => {
    function handleClickedOutside(event: Event) {
      //if click is outside the review modal container and the flag review modal is not opened
      if (
        modalFormRef.current &&
        !modalFormRef.current.contains(event.target)
      ) {
        dispatch(close(isDisplayed));
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickedOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickedOutside);
    };
  }, [modalFormRef, dispatch, isDisplayed]);
 
 
  //detects if clicked esc key , closes the modal
 useEffect(() => {
  function handleKeyDown(e: KeyboardEvent) {
    const val = e.code;
    if (val === "Escape") {
      dispatch(close(isDisplayed));
    }
  }

  document.addEventListener("keydown", handleKeyDown);
  return () => {
    document.removeEventListener("keydown", handleKeyDown);
  };
}, []);


   


  return (
    <div className="modal_container">
      {requestedTestDrive ? (
        <div className="test_drive_form">
          <AiOutlineCar className="test_drive_form_icon" />
          <h3>
            {make} {model} {year} Test Drive Request - Successfully Sent.
          </h3>
          <h3>Please Check your email.</h3>
          <button
            className="button_type"
            onClick={() => dispatch(close(isDisplayed))}
          >
            Close
          </button>
        </div>
      ) : (
        <form ref={modalFormRef}   onSubmit={handleSubmit} className="test_drive_form">
          <AiFillCloseCircle className="test_drive_close_icon" onClick={() => dispatch(closeModal(isDisplayed))} />
          <AiOutlineCar className="test_drive_form_icon" />
          <h3 className="test_drive_form_main_title">TEST DRIVE REQUEST</h3>
          <div className="test_drive_input_container">
            <label>First Name</label>
            <input type="text" placeholder="Enter your first name" required />
          </div>
          <div className="test_drive_input_container">
            <label>Last Name</label>
            <input type="text" placeholder="Enter your last name" required />
          </div>
          <div className="test_drive_input_container">
            <label>Email</label>
            <input type="email" placeholder="Enter your email here" required />
          </div>
          <div className="test_drive_input_container">
            <label>Contact Number</label>
            <input type="text" placeholder="Enter your contact info" required />
          </div>
          <div className="buttons">
            <button type="submit" className="button_type">
              Request Test Drive
            </button>
            <button
              className="button_type"
              onClick={() => dispatch(closeModal(isDisplayed))}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Modal;
