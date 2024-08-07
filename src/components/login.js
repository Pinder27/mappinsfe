import axios from 'axios'
import React, { useRef,useState } from 'react'
import Signup from './signup';
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const navigate = useNavigate()
   
    const RefUsername = useRef(null);
    
    const RefPassword = useRef(null);

    //   const [message, setMessage] = useState({
    //       username: " ",
    //       password: " ",
    //       email: " "
    //   })
    const handleSubmit = async () => {

        try {
            await axios.post('http://localhost:5500/user/login', {
                username: RefUsername.current.value,
                password: RefPassword.current.value
            })
            localStorage.setItem("username",RefUsername.current.value)
            navigate('/')

        } catch (e) {
            console.error(e);
        }
    }
    const [loginPage, setLoginPage] = useState(true);
    const [signinPage, setSigninPage] = useState(false)

    const handelsignup = ()=>{
          setSigninPage(true);
          setLoginPage(false);
    }
    return (
        <>
        {signinPage&&<Signup setLoginPage={setLoginPage} setSigninPage={setSigninPage} loginPage={loginPage} signinPage={signinPage}/>}

        {loginPage&& <div className='formbox'>
            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <div className="user-box">
                        <input type="text"  ref={RefUsername} name="" required="" />
                        <label>Username</label>
                    </div>
                    <div className="user-box">
                        <input type="password" ref={RefPassword} name="" required="" />
                        <label>Password</label>
                    </div>
                    <a href="#" onClick={handleSubmit}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </a>

                </form>
                <button className='btnls' onClick = {handelsignup}>Sign up</button>
            </div>
        </div>}
        </>
    )
}

export default Login
