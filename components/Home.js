import React from 'react';
import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import Connection from './Connection_home_page';
import { useSelector } from 'react-redux';
import Articles from './Articles'

function Home() {
  const dispatch = useDispatch();
  
  const user = useSelector((state) => state.user);

  return (
    <>
        {user && user.value.length > 0 ? <Articles /> :<Connection />} 
    </>
  );
}

export default Home;
