import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"

export const Modal = ({ isOpen, setIsOpen, mentor }) => {
	return (
		<AnimatePresence>
			{isOpen && (
						<motion.div
							className="absolute top-0 left-0 right-0 z-50 grid justify-center bg-gray-100 bg-opacity-90 w-full h-full"
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
								className="px-2 sm:p-5 "
								role="dialog"
								aria-modal="true"
								aria-labelledby="modal-headline"
							>
                                <div className="flex sm:flex-col p-1 items-center">
                                    <p className="max-lg:hidden">Send Text Message to: </p>{mentor.name}
                                    <img src={`${mentor.img}`} alt="" className="rounded-[50%] w-1/4"/>
                                </div>
								<textarea className="h-2/6 sm:h-2/4 w-11/12 border-4 rounded-xl message focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"></textarea>
								<div className="flex flex-col gap-1 sm:flex-row text-xs">
									<button
										type="button"
										tabIndex={0}
										className="rounded-md border border-transparent shadow-sm sm:px-4 py-2 bg-blue-600 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto"
										onClick={() => setIsOpen(false)}
									>
										Send Message
									</button>
									<button
										type="button"
										tabIndex={0}
										className="rounded-md border border-gray-300 shadow-sm sm:px-4 py-2 bg-white font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto"
										onClick={() => setIsOpen(false)}
									>
										Cancel
									</button>
								</div>
							</div>
						</motion.div>
			)}
		</AnimatePresence>
	)
}
