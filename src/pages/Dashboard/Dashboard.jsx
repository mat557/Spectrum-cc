import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import ExampleLoading from '../../Shared/ExampleLoading';
import Loading from '../../Shared/Loading';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();
    const [user,loading] = useAuthState(auth);

   

    useEffect(()=>{
        if(!user){
            navigate('/')
        }
    },[navigate,user])
    

    if(loading){
        return <ExampleLoading></ExampleLoading>
    }


    return (
        <div className='dashbord-container'>
            <div className='dashboard-navbar'>
                <nav className='nav-links'>
                    <ul>
                        <li><Link className='direction' to='/dashboard'><button>Profile</button></Link></li>
                        <li><Link className='direction' to='/dashboard/result'><button>Result</button></Link></li>
                        <li><Link className='direction' to='/dashboard/result'><button>Admin</button></Link></li>
                        <li><Link className='direction' to='/dashboard/result'><button>Dont k</button></Link></li>
                    </ul>
                </nav>
            </div>
            <div className='dashboard-contant'>
            <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;