import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    
    if(loading){
        return <Loading></Loading>
    }


    let googleSignInError;

    if(error){
        googleSignInError = <h1 style={{color:"red",fontSize:"12px",fontWeight:"500"}}>{error.message}</h1>;
    }

    
    
    const handleSignIn = () =>{
        signInWithGoogle();
    }
    if(user){
        console.log(user)
        const googleUser = {
            name : user.user.displayName,
            email : user.user.email
        }

        fetch(`http://localhost:5000/users/${user.user.email}`,{
            method:'PUT',
            headers :{
                'content-type': 'application/json',
            },
            body : JSON.stringify(googleUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
            }
        })
    }

    return (
        <div>
            <button className='socialLogin' onClick={handleSignIn}>Signin with Google</button>
            {googleSignInError}
        </div>
    );
};

export default SocialLogin;