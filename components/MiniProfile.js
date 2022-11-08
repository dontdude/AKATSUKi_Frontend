import React from 'react'

const MiniProfile = () => {
  return (
    <div className='flex items-center justify-between mt-12 mx-8'>
      <img
        className='w-16 h-16 rounded-full border p-1'
        src='https://portfolio-dontdude.vercel.app/static/media/logo.f202a4f66203c8577fc1.jpg'
        alt='User profile picture'
      />
      
      <div className='flex-1 mx-4'>
        <h2 className='font-bold'>mchandan</h2>
        <h3 className='text-sm text-gray-500'>Chandan Mishra <br/> Welcome to AKATSUKi</h3>
      </div>

      <button className='font-semibold text-blue-500'>Sign Out</button>
    </div>
  )
}

export default MiniProfile