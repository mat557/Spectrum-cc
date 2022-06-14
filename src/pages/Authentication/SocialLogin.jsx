import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
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

    if(user){
        // console.log(user)
    }
    
    const handleSignIn = () =>{
        signInWithGoogle();
    }

    return (
        <div>
            <button className='socialLogin' onClick={handleSignIn}>Signin with Google</button>
            {googleSignInError}
        </div>
    );
};

export default SocialLogin;