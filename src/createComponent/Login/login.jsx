import React,{useState} from "react";
import axios from 'axios';
import "./login.css";

const Login=(props)=>{
    const [state , setState] = useState({
        email : "",
        password : "",
        successMessage: null
    })
    
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload={
            "email":state.email,
            "password":state.password,
        }
        
        axios.post('http://localhost:8000/login', payload)
            .then(function (response) {
                if(response.status === 200){
                    setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Login successful. Redirecting to home page..'
                    }))
                    //localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
                    redirectToHome();
                    console.log("home page");
                    //props.showError(null)
                }
                else if(response.code === 204){
                    console.log("login page\nPassword dosen't match");
                    //props.showError("Username and password do not match");
                }
                else{
                    console.log("login page");
                    //props.showError("Username does not exists");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    
    const redirectToHome = () => {
        //props.updateTitle('Home')
        props.history.push('/home');
    }
    

    return(
       
             <div className="container">
        <div className="forms-container">

            <div className="signin-signup">


              
                <form onSubmit={handleSubmit} className="sign-in-form">
                    <h2 className="title">Sign in</h2>
                    <div className="input-field">
                        <i className="fas fa-user"></i>
                        <input type="email" id="email" value={state.email} onChange={handleChange} placeholder="Email" required/>
                    </div>
                    <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" id="password" value={state.password} onChange={handleChange} placeholder="Password" required />
                    </div>
                    <input type="submit" id="Loginbtn" value="Login" className="btn solid" />
                    <p className="social-text">Or Sign in with social platforms</p>

                
                    <div className="social-media">
                        <a href={{}} className="social-icon">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href={{}} className="social-icon">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href={{}} className="social-icon">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href={{}} className="social-icon">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>

                </form>
        


               </div>
        </div>
    </div>
       
    );
}

export default Login;