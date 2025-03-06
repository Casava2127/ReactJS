import React from 'react'

// Header Component
const Header = (props) => {
  console.log(props) // {welcome:'Welcome to 30 Days Of React'} -> The name of obj is PROPS 
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{props.welcome}</h1> // access object vavlue
      </div>
    </header>
  )
}
export default Header