import React, { useState } from "react";
import { FaFacebook } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import pic from './image.png';
import './Body.css'

const Body = () => {
    const [email, setEmail] = useState("");
    console.log(email);
    const [password, setPassword] = useState("");
    console.log(password);
    const handleSubmit = () => {
        const data = {
            email: email,
            password: password,
        };
        alert(JSON.stringify(data));
    }
    return (
        <div className="body">
            <h1>Welcome Back</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <div className="email">
                        <h5>Your email</h5>
                        <input className="container"
                            type="text"
                            placeholder="name@domain.com"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }
                            }
                        ></input></div>
                    <div className="password">
                        <h5>Password</h5>
                        <input className="container"
                            type="password"
                            placeholder="at least 8 characters"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }
                            }
                        ></input><br></br></div>
                    <div className="check">
                        <input type="checkbox"></input>
                        <p>Keep me logged in</p> <span>Forgot password?</span></div>
                </label>
                <button>Login</button>
            </form>
            <div className="lines">
                <hr className="line-one" size="1" width="11.8%" color="black"></hr>  <span>Or</span>
                <hr className="line-two" size="1" width="11.8%" color="black"></hr>
            </div>
            <div className="icons">
                <div className="fb"><FaFacebook /></div>
                <div className="google"><FaGoogle /></div>
                <div className="ig"><FaInstagram /></div>
            </div>
            <div className="image">
                <img src={pic} />
            </div>
        </div>
    )
};
export default Body;