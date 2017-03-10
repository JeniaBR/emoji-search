import React from 'react';
import './ModalBox.css';
import helloGif from '../img/hello.gif';

const ModalBox = () => (

    <div id='start-modal' className='my-modal'>
        <div className='my-modal-content'>
            <div className='my-modal-body'>
                <div className="img-container">
                    <img className='greet-image' alt='Hi!' src={helloGif}/>
                </div>
                <div className="modal-instractions">
                    <p>Search emoji</p>
                    <p>Click on it!</p>
                    <p>Paste it anywhere</p>
                </div>               
                
            </div>
        </div>
    </div>
);

export default ModalBox;
