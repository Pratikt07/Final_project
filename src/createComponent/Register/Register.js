import React,{useState} from "react"
import "./reg.css";
import axios from 'axios';


const Register=(props)=>{
    //console.log(props);

const [state , setState] = useState({
   fullname:"",
    email : "",
    mobile : "",
    password : "",
    confirmPassword : "",
    successMessage: null
})
const handleChange = (e) => {
    const {id , value} = e.target 
    //console.log(e);  
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
}

const handleSubmit = (e) => {
    e.preventDefault();

        console.log(state);
        if(state.password === state.confirmPassword) {
            sendDetailsToServer() 
            // redirectToLogin();   
        } else {
            props.showError('Passwords do not match');
        }
    }
    const sendDetailsToServer = () => {
        const payload={
            "fullname": state.fullname,
            "email": state.email,
            "mobile": state.mobile,
            "password": state.password,
        }
        
        axios.post('http://localhost:8000/register', payload)
            .then(function (response) {
                console.log(response);
                if(response.status === 200){
                    setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Registration successful. Redirecting to home page..'
                    }))
                    
                    redirectToLogin();
                    console.log("Successful")
                    //props.showError(null)
                } else{
                    //props.showError("Some error ocurred");
                    redirectToHome();
                    console.log("UnSuccessful")
                }
            })
            
            .catch(function (error) {
                console.log(error);
            });
        }
    
        const redirectToLogin = () => {
            //props.updateTitle('Login')
            props.history.push('/login'); 
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
                    <h2 className="title">Sign Up</h2>
                    <div className="input-field">
                        <i className="fas fa-envelope"></i>

                        <input type="text" id="fullname" value={state.fullname} onChange={handleChange} placeholder="fullname" required />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-envelope"></i>

                        <input type="email" id="email" value={state.email} onChange={handleChange} placeholder="Email" required />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-mobile"></i>
                        <input type="text" id="mobile" value={state.mobile} onChange={handleChange}placeholder="mobile no" required pattern="[0-9]{10}" title="contact must contain  10 degits" />
                    </div>
                
                    <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" id="password" value={state.password} onChange={handleChange} placeholder="Password" required />
                    </div>

                    <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" id="confirmPassword" value={state.confirmPassword} onChange={handleChange} placeholder="confirm Password" required/>
                    <br/>
                    </div>
                    <input type="submit" id="regbtn" value="registration" className="btn solid" />
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

export default  Register;