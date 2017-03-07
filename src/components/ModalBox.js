import React from 'react';
import './ModalBox.css';

const ModalBox = () => (

    <div className='modal'>
        <div className='modal-content'>
            <div className='modal-header'>
                <span className='close'>&times;</span>
                <h2>Modal Header</h2>
            </div>
            <div className='modal-body'>
                <p>Some text here</p>
                <p>and some text here</p>
            </div>
            <div className='modal-footer'>
                <h3>Modal Footer</h3>
            </div>
        </div>
    </div>
);

export default ModalBox;
