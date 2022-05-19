import React from 'react'

function Footer() {
  return (
    <main>
      <div>
      
        <div className='myending'>
          <div className='my'>
            <h1> BOOK YOUR SITES HERE </h1>
            <p>SmartBooking </p>
            <p>We are located in Wa, Upper West Region Ghana West Africa. </p>
            <h4>
              Working Hours:
              <br /> :24/7{" "}
            </h4>
          </div>
          <div>
            <h1>Subscribe to our news letter</h1>
            <input type="email" placeholder="email address" required />
            <button className='bitch'>Subscribe</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Footer;