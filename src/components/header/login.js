import React from 'react';
import "../../styles/header.css";

const Login = () => {
    return (
        <div className='authorithation'>
            <div className='user'>
                <div className='name'>Name</div>
                <div className='email'>Email@domain.com</div>  
            </div>     
            <div className='exit'>
                <img src='logout.png' alt='exit'/>
            </div>     
        </div>
    );
}

export default Login;
