import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email"
                            name='email'
                            placeholder='Your Email'
                            className='footer-input'
                        />
                        <Button buttonStyle='btn--outline'>
                            Subscribe
                        </Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-links-wrapper">
                    <div className="footer-links-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className="footer-links-items">
                        <h2>Contacts Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorship</Link>
                    </div>
                </div>

                <div className="footer-links-wrapper">
                    <div className="footer-links-items">
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div className="footer-links-items">
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebok</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            TRVL <i className="fab fa-typo3" />
                        </Link>
                    </div>
                    <div className="website-rights">TRVL © 2022</div>
                    <div className="social-icons">
                        <Link to='/' className='social-icons-link'><i class="fab fa-facebook-f"/></Link>
                        <Link to='/' className='social-icons-link'><i class="fab fa-instagram"/></Link>
                        <Link to='/' className='social-icons-link'><i class="fab fa-youtube"/></Link>
                        <Link to='/' className='social-icons-link'><i class="fab fa-twitter"/></Link>
                        <Link to='/' className='social-icons-link'><i class="fab fa-linkedin-in"/></Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
