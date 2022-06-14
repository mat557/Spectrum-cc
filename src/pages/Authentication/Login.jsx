import React from 'react';
import './Authenticate.css';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);

    if(loading){
        return <Loading></Loading>;
    }

    let logInError;
    if(error){
        logInError = <h1 style={{color:"red",fontSize:"12px",fontWeight:"500"}}>{error.message}</h1>;
    }

    const onSubmit = (data) =>{
        console.log(data);
        signInWithEmailAndPassword(data.email,data.password)
    }


    if(user){
        
    }


    return (
        <div className='holder'>
            <div className='loginBox'>
                <div className='socail-holder'>
                    <SocialLogin></SocialLogin>
                    <div className='or-holder'>
                        <div className='or'></div>
                        <p>or</p>
                        <div className='or'></div>
                    </div>
                </div>
                <h1 className='text'>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <p>Email</p>
                        <input type="email" placeholder='Enter your email' {...register("email", { required: true })} />
                        {errors.lastName && "email is required"}
                        
                        <p>Password</p>
                        <input type="password" placeholder='Enter your password'  {...register("password", { required: true })} />
                        {errors.lastName &&  "password is required"}
      
                        <input type="submit" value="Login"/>
                        {logInError}
                        <p>Forget Password?<span><Link className='link-style' to="/signup">Please Register</Link></span></p>
                        <p>New To Spectrum?<span><Link className='link-style' to="/signup">Please Register</Link></span></p>
                </form>
            </div>
        </div>
    );
};

export default Login;