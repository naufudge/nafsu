import React from 'react'

const about = () => {
  const firstPara = "We are introducing a web app that focuses on personalized mental healthcare for Maldivian’s well-being, using assessment and machine-learning technology to understand and match users to personalized care or specialized doctors. We aim to provide a fully encrypted end-to-end open source connecting the gap between the users and the mental health service providers with advanced match-making by language processing artificial intelligence based on the requirements of the user."
  const secondPara = "Currently, our focus is on the Greater Male region, however, we would like to scale it up throughout the country. With the appointment system, introducing a rating system from user feedback and more importantly introducing video conferencing therapy sessions and a freelance marketplace for Psychiatrists and psychologists."
  
  return (
    <div className='about-main overflow-clip'>
        <h1>About us?</h1>
        <div className='flex-col w-1/2 text-justify'>
          <div>{firstPara}</div>
          <br />
          <div>{secondPara}</div>
        </div>
    </div>
  )
}

export default about