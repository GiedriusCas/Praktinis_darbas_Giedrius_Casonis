import React from 'react'
import './feedback.scss'
import { useAuthCtx } from '../../../store/AuthProvider'

function Feedback() {
    const {feedback, ui} = useAuthCtx();
    const { show, type, msg } = feedback;
    const handleClose = () => ui.closeAlert(); 
  return show? (
    <div className={`feedback-container ${type}`}>
        <p className='msg'>{msg}</p>
        <button className="close-button" onClick={handleClose}>
        &times;
      </button>
    </div>
  ) : null;
};

export default Feedback