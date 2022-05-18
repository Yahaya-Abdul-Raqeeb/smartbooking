import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
    

     <nav>
     <h1>SMARTBOOKING</h1>
  <ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/addsites">Add Sites</Link></li>
<li> <Link to="/contact">Contact</Link></li>

  </ul>

     </nav>


    </div>
  )
}

export default Navbar