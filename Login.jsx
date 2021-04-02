import React, { useState } from 'react';
import background from '../assets/message_in_a_bottle_2.jpeg'


const Login = (props) => {
    const [log,setLog] = useState("");
    const {onNameSubmit} = props;
    const onSubmitHandler = (event) => {
        event.preventDefault()
        // console.log('submit handler does in fact work')

        onNameSubmit(log)
    }

    const styles = {
        backgroundImage: `url(${background})`, 
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        width: `100%`,
        height: `100vh`
    }
    
    return (
        <div className="loginContainer" style = {styles}>
            <form onSubmit = {onSubmitHandler}>
                <div className = 'loginWrapper mx-auto'>
                    <div class="d-flex justify-content-center">
                        <div class="col-lg-8">
                            <input required type="name" class="form-control form-control-lg" value={log} onChange={(e) => setLog(e.target.value)} placeholder="Username"/>
                        </div>
                    </div>
                    <button type='submit' className = "mt-5 btn-lg btn-info border border-4 border-dark ">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login