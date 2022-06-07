import React from 'react';
import './Authenticate.css';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) =>{
        console.log(data)
    }


    return (
        <div className='body'>
            <div className='loginBox'>
                <h1 className='text'>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <p>Email</p>
                        <input type="email" placeholder='Enter your email' {...register("email", { required: true })} />
                        {errors.lastName && "email is required"}
                        
                        <p>Password</p>
                        <input type="password" placeholder='Enter your password'  {...register("password", { required: true })} />
                        {errors.lastName &&  "password is required"}
      
                        <input type="submit" value="Login"/>
                        <p>Forget Password?<span><Link className='link-style' to="/signup">Please Register</Link></span></p>
                        <p>New To Spectrum?<span><Link className='link-style' to="/signup">Please Register</Link></span></p>
                </form>
            </div>
        </div>
    );
};

export default Login;