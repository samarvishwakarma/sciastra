import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Modal } from './Modal'

const Menadv = (props) => {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='p-5'>
        <motion.div className='drop-shadow bg-white rounded-lg p-6 md:p-10' >
            <img src={`${props.mentor.img}`} alt={`${props.mentor.name}`} className='pfp rounded-[50%] pr-1 pt-2 mb-2'/>
            <p className='font-semibold '>{props.mentor.name}</p>
            <p className='text-sm'>{props.mentor.description}</p>
            <span className='text-xs'>{props.mentor.university} {props.mentor.country}</span>
            {props.mentor.message ? <motion.button whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} onClick={()=> setIsOpen(!isOpen)} className='grid grid-flow-col items-center border border-x-2 border-t-4 rounded-3xl mt-2 p-1 md:px-5 md:py-1 md:m-2 drop-shadow-xl md:font-semibold text-xs md:text-sm message'>
              Message him now 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 md:ml-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
              </motion.button> : <></>} 
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} mentor={props.mentor} />
        </motion.div>
    </div>
  )
}

export default Menadv