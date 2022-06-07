import React from 'react';
import './Authenticate.css';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) =>{
        console.log(data)
    }

    return (
        <div className='body'>
            <div className=' signinBox'>
                <h1 className='text'>Register</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <p>Username</p>
                        <input type="text" placeholder='Enter your name' {...register("name", { required: true })} />
                        {errors.name && "email is required"}
                        
                        <p>Email</p>
                        <input type="email" placeholder='Enter your email' {...register("email", { required: true })} />
                        {errors.email && "email is required"}
                        
                        <p>Password</p>
                        <input type="password" placeholder='Enter your password'  {...register("password", { required: true })} />
                        {errors.password &&  "password is required"}
      
                        <input type="submit" value="Register"/>
                        <p>Forget Password?<span><Link className='link-style' to="/signup">Please Register</Link></span></p>
                        <p>Already have an account?<span><Link className='link-style' to="/login">Please Login</Link></span></p>
                </form>
            </div>
        </div>
    );
};

export default Signup;