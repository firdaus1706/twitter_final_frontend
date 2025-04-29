import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';
import LeftSidebar from './LeftSidebar';
import useOtherUsers from '../hooks/useOtherUsers';
import RightSideBar from './RightSidebar';

const Home = () => {
  const { user, otherUsers } = useSelector(store => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');//if needed further will change to /home
    }
  }, [user, navigate]);

  useOtherUsers(user?._id);
  return (
    <div className='flex justify-between w-[80%] mx-auto'>
      <LeftSidebar />
      <Outlet />
      <RightSideBar otherUsers={otherUsers} />
    </div>
  )
}

export default Home;