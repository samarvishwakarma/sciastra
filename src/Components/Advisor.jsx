import React, { useState } from 'react'
import Menadv from './Menadv'

const Advisor = () => {

    const [men, setMen] = useState([
        {
            "name": "Dr. Omkar",
            "id": "M101",
            "university": "IIT",
            "country": "Madras",
            "img": "https://www.storypick.com/wp-content/uploads/2022/12/17.jpeg",
            "description": "Principal Project Scientist",
            "message": 0
        },
        {
            "name": "Akhil Tripathi",
            "id": "M102",
            "university": "",
            "country": "",
            "img": "https://pbs.twimg.com/media/FjNN1O4aYAE3-iU.jpg",
            "description": "",
            "message": 1
        },
        {
            "name": "Vivek Dwivedi",
            "id": "M103",
            "university": "",
            "country": "",
            "img": "https://www.storypick.com/wp-content/uploads/2022/12/10.jpeg",
            "description": "",
            "message": 1
        }
    ]) 

  return (
    <div className='h-full p-2 md:px-32 md:py-12'>
        <div className=' max-lg:text-center'>
            <h1 className=' text-3xl font-bold bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 bg-clip-text '>Mentor & Advisor</h1>
        </div>
        <div className="md:p-10 grid grid-cols-2 md:grid-cols-3 text-center">           
            {men.length> 0 && men.map( (mentor) => (
                    <Menadv key={mentor.id} mentor={mentor}/>
            ))}        
        </div>        
    </div>    
  )
}

export default Advisor