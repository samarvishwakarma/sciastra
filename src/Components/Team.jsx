import React, {useState } from 'react'
import University from './University'

const Team = () => {

    const [uni, setUni] = useState(["Cambridge University", 
                                    "Havard University",
                                    "University of California",
                                    "ETH Zurich",
                                    "Max Planck",
                                    "University of Edinberg",
                                    "John's Hopkins",
                                    "Midigon State",
                                    "University of Illinois",
                                    "Humboldt University of Berlin" ]) 

  return (
    <div className='h-full p-2 md:px-32 md:py-16'>
        <div className='grid justify-center text-center'>
            <h1 className=' text-5xl font-bold py-5 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 bg-clip-text '>Team Page</h1>
            <span className='font-medium' >Learn from Scientists, research scholars from the top institute in the world.</span>
        </div>
        <div className="md:p-10 grid grid-cols-2 md:grid-cols-4 text-center">
            {uni.length> 0 && uni.map( (univ, index) => (
                <University key={index} univ={univ}/>
            ))}            
            <span className=' self-end p-5'>..and so on</span>
        </div>        
    </div>
  )
}

export default Team