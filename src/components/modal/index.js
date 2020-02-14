import React from 'react';
import { Cross } from '../icons';

const Modal = props =>(
  <div 
    className={`modal-outer ${props.isShow?'isShow':'isHide'}`}
    onClick={props.closeModal}>
    <div className='modal-wrapper' onClick={e=>{e.stopPropagation()}}>
      <div className='close-btn' onClick={props.closeModal}>
        <Cross width={18} height={18}/>
      </div>
      {props.children}
    </div>
  </div>
)

export default Modal;