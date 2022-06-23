import React from 'react'
import './Newsletter.css'

function Newsletter() {
  return (
    <div className='newsletter__container container'>
        <h4>Like travel deals?</h4>
        <p>Enter your email and we'll send them your way.</p>
        <div className="subscribe__container">
            <form className="form__container">
                <input type="email" className="email-field" />
                <button type="submit" className='button-btn'>Subscribe</button>
            </form>
        </div>
        <p className='p-footer'> Your privacy is important to us, so we'll never spam you or share your info with third parties. Take a look at our privacy policy. You can unsubscribe at any time. </p>
    </div>
  )
}

export default Newsletter