import React from 'react'
import { motion, AnimatePresence } from "framer-motion"

const MentorModal = ({ isOpen, setIsOpen, mentor }) => {
  return (
    <AnimatePresence>
			{isOpen && (
						<motion.div
							className="absolute top-0 left-0 right-0 z-50 grid justify-center bg-gray-100  w-full h-full"
							initial={{
								opacity: 0,
								scale: 0.75,
							}}
							animate={{
								opacity: 1,
								scale: 1,
								transition: {
									ease: "easeOut",
									duration: 0.15,
								},
							}}
							exit={{
								opacity: 0,
								scale: 0.75,
								transition: {
									ease: "easeIn",
									duration: 0.15,
								},
							}}
						>

							<div
								className="p-2 "
								role="dialog"
								aria-modal="true"
								aria-labelledby="modal-headline"
							>
                                <div className="flex text-xs">
									<button
										type="button"
										tabIndex={0}
										className="rounded-[50%] border border-transparent shadow-sm w-5 h-5 bg-blue-600 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
										onClick={() => setIsOpen(false)}>
										X
									</button>
								</div>
                                <div className="flex flex-col  items-center">
									<img src={`${mentor.img}`} alt="" className="rounded-[50%] px-4 pb-1"/>
                                    <span className='font-semibold'>{mentor.name}</span>
                                    <span className='text-sm pb-1'>{mentor.university}, {mentor.country}</span>
                                    <span className='text-xs italic'>{mentor.description}</span>
                                </div>
							</div>
						</motion.div>
			)}
		</AnimatePresence>
  )
}

export default MentorModal