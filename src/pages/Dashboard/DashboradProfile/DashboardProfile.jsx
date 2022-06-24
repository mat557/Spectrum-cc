import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import Loading from '../../../Shared/Loading';
import './DashboardProfile.css'; 

const DashboardProfile = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user,loading] = useAuthState(auth);

    if(loading){
        return <Loading></Loading>
    }

    const onSubmit = (data) =>{
        const img = data.image[0];
        const formData = new FormData();
         formData.append('image',img)
        
        const API_KEY = '4957c3c668ded462db1fb1002c4535e6';
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${API_KEY}`

        fetch(url,{
            method : 'POST',
            body : formData,
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    }


    return (
        <div className='profile-holder'>
            <div className='profile'>
                <div className='profile-card'>
                    <h1>Your Profile</h1>
                    <img src="" alt="" />
                    <p>Name:{user?.displayName}</p>
                    <p>Email:{user?.email}</p>
                    <p>Role:</p>
                    <p>Class:</p>
                    <p>Current Address:</p>
                    <p>Last year cgpa:</p>
                    <p>School/College:</p>
                </div>
            </div>
            <div className='update'>
            <div className='update-card'>
                <h1>Update Profile</h1>
                    <div className='form-holder'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <p>Name</p>
                            <input type="text" placeholder='Enter your name' {...register("name", { required: true })} /> <br />
                            {errors.name && "name is required"}
                            
                            <p>Class</p>
                            <input type="text" placeholder='Enter your class' {...register("class", { required: true })} /> <br />
                            {errors.class && "class is required"}
                            {/* {errors.class && <p>{errors.class.message}</p>} */}
                            
                            <p>Cgpa</p>
                            <input type="text" placeholder='Enter your last year cgpa' {...register("cgpa", { required: true })} /> <br />
                            {errors.cgpa && "cgpa is required"}
                            
                            <p>Current Address</p>
                            <input type="text" placeholder='Enter your current address' {...register("places", { required: true })} /> <br />
                            {errors.places && "Current address is required"}
                            
                            <p>School</p>
                            <input type="text" placeholder='Enter your name' {...register("schools", { required: true })} /> <br />
                            {errors.school && "School is required"}
                            
                            <p>Profile Picture</p>
                            <input type="file" placeholder='share your picture' {...register("image", { required: true })} /> <br />
                            {errors.image && "name is required"}
                                <br />
                            <input type="submit" value="Update"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardProfile;