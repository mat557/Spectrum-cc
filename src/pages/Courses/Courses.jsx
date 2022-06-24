import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useCourses from '../../Hooks/useCourses';
import Loading from '../../Shared/Loading';
import './Courses.css'
import SingleCourse from './SingleCourse';

const Courses = () => {
    const [course] = useCourses();
    const [user,loading] = useAuthState(auth);


    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className='courses-holder'>
            <h1>All Our Courses At one place</h1>
            <div className='all-course'>
                {
                    course.map(c => <SingleCourse
                    key={c._id}
                    c={c}
                    ></SingleCourse>)
                }
            </div>
        </div>
    );
};

export default Courses;