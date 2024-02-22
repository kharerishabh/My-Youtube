import React from 'react'
import { USER_ICON } from '../utilis/constant'

const Comment = ({data}) => {
    const {name, text} = data
  return (
    <div className='flex shadow-sm rounded-lg bg-gray-100 p-2 my-2'>
        <img className='w-12 h-12' alt='user' src={USER_ICON}/>
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Comment