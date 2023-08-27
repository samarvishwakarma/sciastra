import React, { useState } from 'react'
import Mentor from './Mentor'

const Members = () => {

    const [men, setMen] = useState([
        {
            "name": "Shubham",
            "id": "M101",
            "university": "Cambridge University",
            "country": "UK",
            "img": "https://www.storypick.com/wp-content/uploads/2022/12/16.jpeg",
            "description": "Principal Project Scientist",
        },
        {
            "name": "Satyam",
            "id": "M102",
            "university": "Havard University",
            "country": "USA",
            "img": "https://www.storypick.com/wp-content/uploads/2022/12/15.jpeg",
            "description": "Principal Project Scientist",
        },
        {
            "name": "Sundar",
            "id": "M103",
            "university": "John's Hopkins",
            "country": "USA",
            "img": "https://www.storypick.com/wp-content/uploads/2022/12/6.jpeg",
            "description": "Principal Project Scientist",
        },
        {
            "name": "Shivam",
            "id": "M104",
            "university": "John's Hopkins",
            "country": "USA",
            "img": "https://www.storypick.com/wp-content/uploads/2022/12/8.jpeg",
            "description": "Principal Project Scientist",
        },
        {
            "name": "Shubh",
            "id": "M105",
            "university": "Havard University",
            "country": "USA",
            "img": "https://www.storypick.com/wp-content/uploads/2022/12/12.jpeg",
            "description": "Project Scientist",
        }
    ]) 

  return (
    <div className='h-full p-5 md:px-32 md:py-16'>
        <div className='text-center'>
            <h1 className=' text-5xl font-bold py-2 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 bg-clip-text '>Meet Your Mentors</h1>
        </div>
        <div className="md:p-10 grid grid-cols-2 md:grid-cols-4 text-center ">
            {men.length> 0 && men.map( (mentor) => (
                <Mentor key={mentor.id} mentor={mentor}/>
            ))}           
        </div>        
    </div>
  )
}

export default Members