import axios from 'axios'
import React, { useRef,useState } from 'react'
import Signup from './signup';

const Login = (props) => {
   
    const RefUsername = useRef(null);
    
    const RefPassword = useRef(null);

    //   const [message, setMessage] = useState({
    //       username: " ",
    //       password: " ",
    //       email: " "
    //   })
    const handleSubmit = async () => {

        try {
            await axios.post('http://ec2-3-108-223-201.ap-south-1.compute.amazonaws.com:5500/user/login/', {
                username: RefUsername.current.value,
                password: RefPassword.current.value
            })
            props.setUser(RefUsername.current.value);
            localStorage.setItem("username",RefUsername.current.value)
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
