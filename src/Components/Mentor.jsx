import React, { useState } from 'react'
import { motion } from "framer-motion"
import MentorModal from './MentorModal'

const Mentor = (props) => {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='p-5'>
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={()=> setIsOpen(!isOpen)}
            className='border h-64 md:w-44 bg-white rounded-lg drop-shadow-xl p-5'
        >
            <img src={`${props.mentor.img}`} alt={`${props.mentor.name}`} className='pfp rounded-[50%] pr-1 pt-2 mb-2'/>
            <p className='font-semibold '>{props.mentor.name}</p>
            <span className='text-xs'>{props.mentor.university}, {props.mentor.country}</span>
            <MentorModal isOpen={isOpen} setIsOpen={setIsOpen} mentor={props.mentor} />
        </motion.div>
    </div>
  )
}

export default Mentor