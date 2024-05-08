import React from 'react'
import "./usercard.scss"
const Usercard = ({children}) => {
  return (
    <div className="wrapper container">
        {children}
    </div>
  )
}

export default Usercard