import React from 'react';
import ProfileCard from './assets/components/profileCard';
import Attribution from './assets/components/Attribution';

const App = () => {

  return (
      <div className='w-screen h-screen bg-gray-900 flex flex-col justify-center items-center text-white'>
        <ProfileCard/>
        <Attribution/>
      </div>
  )
}

export default App