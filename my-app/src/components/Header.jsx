import React from 'react'

const Header = () => {
  return (
   <nav>
    <NavContent/>
   </nav>
  )
}
const NavContent= ()=>(
  <>
  
  <h1>Akash Ghosh</h1>
  <div>
  <a href='#home'>Home</a>
  <a href='#work'>Work</a>
  <a href='#timeline'>Experience</a>
  <a href='#services'>Services</a>
  <a href='#testimonial'>Testimonial</a>
  <a href='#contact'>Contact</a>
  
 
  </div>
  <a href="akashghosh9635@gmail.com">
      <button>Email</button>
    </a>
 
 


  </>
)

export default Header