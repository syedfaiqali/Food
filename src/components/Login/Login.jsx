import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import CreateNewAcct from '../CreateNewAcct/CreateNewAcct';
import './login.css';
import Loader from '../Loader/loader';

const Login = (props) => {
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);
    const [createAcct, setCreateAcct] = useState(false);
    const [loading, setLoading] = useState(false);
    let isLoading = true;
    let API = 'https://jsonplaceholder.typicode.com/todos/1';

    const fetchApiData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            isLoading = false;
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchApiData(API);
    }, []);

    const closeLoginModal = () => {
        setLoading(true);
        setTimeout(() => {
            props.closeModal();
            setLoading(false);
        }, 2000);
    };

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            props.closeModal();
        }, 2000);
    };

    const OpenAcct = () => {
        setLoading(true);
        setTimeout(() => {
            setCreateAcct(true);
            setLoading(false);
        }, 2000)
    };

    const CloseAcct = () => {
        setCreateAcct(false);
    };

    return (
        <>
            {createAcct && <CreateNewAcct closeLoginModal={closeLoginModal} isOpenModal={createAcct} closeModal1={CloseAcct} />}
            <Modal isOpen={props.isOpen} onRequestClose={props.closeModal} className="modal">
                <div className="modal-content">
                    <div className='fullwidth'>
                        <div className='headingwidth'>
                            <h1 className="app__login-headtext">Sign In</h1>
                        </div>
                        <div className='crosswidth'><h1 className='x' onClick={closeLoginModal}>X</h1></div>
                    </div>
                    <div className="">
                        <h1 className="Password">Email</h1>
                        <input
                            type="text"
                            placeholder="xyz@gmail.com"
                            onClick={(e) => setEmail(e.target.value)}
                            className="form-control"
                            required={true}
                        />
                        <br />
                        <h1 className="Password">Password</h1>
                        <input
                            type="password"
                            required={true}
                            placeholder="password"
                            onClick={(e) => setPassword(e.target.value)}
                            className="form-control"
                        />
                        <br />
                        <div className="">
                            <div className="">
                                <a className="" style={{ color: '#1f2168' }} target='_blank'>Forgot Your Password?</a>
                            </div>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={handleClick}>
                            Login
                        </button>
                        <button type="button" setCreateAcct={setCreateAcct} onClick={OpenAcct} className="btn faiq btn-primary">
                            Create New Account
                        </button>
                    </div>
                    {loading && <Loader />}
                    <button type="button" className="btn-secondary" onClick={closeLoginModal}>
                        Close
                    </button>
                </div>
            </Modal>
        </>
    );
};

export default Login;
