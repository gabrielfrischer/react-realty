import React, { Component} from 'react'



export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
    }
  }

  render () {
    return (
        <header>
           
            <div className="logo">Angels Realty<span className="trademark">  &trade;</span> </div>

            <img height="140" src="https://preview.ibb.co/eAaJNy/Angels_Realty_Full_Logo.png" alt="Angels_Realty_Full_Logo" border="0"/>
            <nav>
                <a href="#" className="register-btn">Contact Steve at (818) 577-8499</a>
               
            </nav>
        </header>
    )
  }
}
