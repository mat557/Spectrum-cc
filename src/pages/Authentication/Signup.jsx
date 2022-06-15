import React from 'react';
import './Authenticate.css';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading';
import SocialLogin from './SocialLogin';
import useAddEmail from '../../Hooks/useAddEmail';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [createUserWithEmailAndPassword,user,loading,error] = useCreateUserWithEmailAndPassword(auth);

    if(loading){
        return <Loading></Loading>;
    }

    let signInError;
    if(error){
        signInError = <h1 style={{color:"red",fontSize:"12px",fontWeight:"500"}}>{error.message}</h1>;
    }

    const onSubmit = (data) =>{
        const name = data.name;
        const email = data.email;
        const password = data.password;
        createUserWithEmailAndPassword(email,password);
        const user = {
            name : name,
            email : email
        }

        fetch(`http://localhost:5000/users/${email}`,{
            method:'PUT',
            headers :{
                'content-type': 'application/json',
            },
            body : JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    if(user){
        console.log(user);
    }

    return (
        <div className='holder'>
            <div className=' signinBox'>
                <div className='socail-holder'>
                    <SocialLogin></SocialLogin>
                    <div className='or-holder'>
                        <div className='or'></div>
                        <p>or</p>
                        <div className='or'></div>
                    </div>
                </div>
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

                        {signInError}
                        <p>Forget Password?<span><Link className='link-style' to="/signup">Please Register</Link></span></p>
                        <p>Already have an account?<span><Link className='link-style' to="/login">Please Login</Link></span></p>
                </form>
            </div>
        </div>
    );
};

export default Signup;