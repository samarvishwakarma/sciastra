import React from 'react'
import { motion } from "framer-motion"

const University = (props) => {
  return (
    <a className='p-5' href={`https://www.google.com/search?q=${props.univ}`}>
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='border h-32 md:w-44 bg-white rounded-lg drop-shadow-xl p-5 message'
        >
            <span>{props.univ}</span>
        </motion.button>
    </a>
  )
}

export default University