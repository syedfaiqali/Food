import React, { useState } from 'react';
import Modal from 'react-modal';
import './CreateNewAcct.css';
import Loader from '../Loader/loader';

const CreateNewAcct = (props) => {
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);
    const [againPasword, setAgainPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const closecreateNewAcct = () => {
        setLoading(true);
        setTimeout(() => {
            props.closeModal1();
            props.closeLoginModal();
            setLoading(false);
        }, 2000)
    };
    return (
        <Modal
            isOpen={props.isOpenModal}
            onRequestClose={props.closeModal1}
            className="modal"
        >
            <div className="modal-content">
                <div className='fullwidth'>
                    <div className='headingwidth'>
                        <h1 className="app__login-headtext">Register</h1>
                    </div>
                    <div className='crosswidth'>
                        <h1 className='x' onClick={closecreateNewAcct}>X</h1>
                    </div>
                </div>
                <div className="" style={{ marginTop: '3%' }}>
                    <p className="">I want to Register as</p>
                    <h1 className="Password">User Name</h1>
                    <input type="text" placeholder="faiq123@gmail.com"
                        onClick={(e) => setEmail(e.target.value)}
                        className="form-control " />
                    <br />
                    <h1 className="Password">Password</h1>
                    <input type="password" placeholder="password"
                        onClick={(e) => setPassword(e.target.value)}
                        className="form-control" />
                    <h1 className="Password">Confirm Password</h1>
                    <input type="password" placeholder="password"
                        onClick={(e) => setAgainPassword(e.target.value)}
                        className="form-control" />
                    <br />
                </div>
                {loading && <Loader />}
                <div style={{ padding: "0% 4%" }}>
                    <button type="button" className="btn btn-primary" onClick={closecreateNewAcct}>Continue</button>
                    <button type="button" className="btn-secondary" onClick={props.closeModal1}>Back</button>
                </div>
            </div>
        </Modal>
    )
};

export default CreateNewAcct;