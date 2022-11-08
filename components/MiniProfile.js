import React from 'react'

const MiniProfile = () => {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img
        className='w-16 h-16 rounded-full border p-[2px]'
        src='https://portfolio-dontdude.vercel.app/static/media/logo.f202a4f66203c8577fc1.jpg'
        alt='User profile picture'
      />
      
      <div>
        <h2>mchandan</h2>
        <h3>Welcome to AKATSUKi Anime Community</h3>
      </div>

      <button>Sign Out</button>
    </div>
  )
}

export default MiniProfile