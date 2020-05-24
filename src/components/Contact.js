import React from 'react';
import Header from './Header';

function Contact() {
  return (
    <div>
        <Header title="CONTACT" subtitle="Any question? Reach out to me and I will get back at you shortly."/>
        <div className="contact-section" id="contact">
            <div className="contact-details">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, maiores ducimus. Delectus modi animi cumque?</p>
                <div className="detail-box">
                    <div className="phone detail">
                        <i className="fas fa-mobile-alt"></i>
                        <div>
                            <h5>PHONE</h5>
                            <p>+63 975 8883 582</p>
                        </div>
                    </div>
                    <div className="mail detail">
                        <i className="far fa-envelope"></i>
                        <div>
                            <h5>E-MAIL</h5>
                            <p>roseannobregon @ gmail.com</p>
                        </div>
                    </div>
                    <div className="location detail">
                        <i className="fas fa-map-marker-alt"></i>
                        <div>
                            <h5>LOCATION</h5>
                            <p>123 Santa Rosa, Laguna, PH</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-form">
                <form>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="E-mail"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                    <button>SUBMIT</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Contact;
