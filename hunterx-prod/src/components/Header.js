import React from 'react'

class Header extends React.Component {
  
  render(){
   
    return(
    <header className='header-container box'>
      <div className="header-title-container box">
        <div className="header-left"></div>
        <div className="header-title">
          Hunter  XO
        </div>
        <div className="header-right"></div>
      </div>
    </header>
    )
  }
}
  


export default Header