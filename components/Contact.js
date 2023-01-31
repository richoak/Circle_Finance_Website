import React from "react";
import Link from 'next/link';
import Header from "./Header";
import Footer from "./Footer";
import Growth from "./Growth";
import { useRouter } from 'next/router';
import classes from "./Contact.module.css"


const Contact = () => {
  const router = useRouter();

    return (
      <>
          <Header className={classes.header}/>
      <div className={classes.contact2boxes}>
      <div>
        <img src="/images/homepage/contct_header.svg" alt="" />
      </div>

      <div className="container">
      <div className={classes.contact_firstbox}>
      <div className="row">   
                <div className="col-md-12">
                <p className={classes.contact_firstbox_title}>Do you have any <br/> question or enquiry</p>
                 <p className={`${classes.contact_firstbox_subtitle} ${classes.desktoponly}`}>Please contact us at any of the undersigned, and <br/> we will get back to you as soon as possible.</p>
                 <p className={`${classes.contact_firstbox_subtitle} ${classes.mobileonly}`}>Please contact us at any of the undersigned, and  we will get back to you as soon as possible.</p>

                </div>         
    </div>
      </div>

      <div className={classes.contact_secondbox}>
           <div className="row">   
                <div className="col-md-3">
                  <img src="/images/homepage/map.svg" alt="" />
                <p className={classes.contact_secondbox_title}>Locate us at</p>
                 <p className={classes.contact_secondbox_subtitle}>Plot 1072 Grand Pela Hotel <br/> Street, Durumi Area 1. Abuja</p>
                </div>
                <div className={`col-md-3 ${classes.call}`}>
                <img src="/images/homepage/phoneicon.svg" alt="" />
                <p className={classes.contact_secondbox_title}>Call us on</p>
                 <p className={classes.contact_secondbox_subtitle}><a style={{color:"#687181"}}  href="tel:234 123 456 7890">+23490909090</a></p>
                 <p className={classes.contact_secondbox_subtitle}><a style={{color:"#687181"}}  href="tel:234 123 456 7890">+23490909090</a></p>
                </div>  

                <div className={`col-md-3 ${classes.call}`}>
                <img src="/images/homepage/mail.svg" alt="" />
                <p className={classes.contact_secondbox_title}>Send us an email</p>
                 <p className={` ${classes.contactemail}`}><a style={{color:"#2F6D67"}} href="mailto:hello@oakfinance.com">hello@oakfinance.com</a></p>
                    </div>  

                    <div className={`col-md-3 ${classes.call}`}>
                    <img src="/images/homepage/chat.svg" alt="" />
                    <p className={classes.contact_secondbox_title}>Connect with us</p>
                    <div>
          <p  className={classes.footersocialicons}><a  href=""><img src="/images/homepage/facebook.svg"/></a></p>
          <p  className={classes.footersocialicons}><a  href=""><img src="/images/homepage/youtube.svg"/></a></p>
          <p  className={classes.footersocialicons}><a  href=""><img src="/images/homepage/linkedin.svg"/></a></p>
          <p  className={classes.footersocialicons}><a  href=""><img src="/images/homepage/instagram.svg"/></a></p>

          </div>
                    </div>  
           </div>
       </div>
       </div>
       </div>


       <div className="container">
       <div className={classes.contact_thirdbox}>
       <div className="row">   
                <div className="col-md-6">
                <p className={classes.contact_firstbox_title}>Have a quick tip</p>
                 <p className={`${classes.contact_firstbox_subtitle} ${classes.desktoponly}`}>At Oak Finance, we are dedicated to offering the <br/> best financial guidance and investment<br/>  opportunities to our .</p>
                 <p className={`${classes.contact_firstbox_subtitle} ${classes.mobileonly}`}>At Oak Finance, we are dedicated to offering the best financial guidance and investment opportunities to our .</p>

                </div>         

                <div className="col-md-6">
                  <div className={classes.contactbox}>
                  <div class="form-group">
                    <label for="firstname" className={classes.fullnamelabel}>Full Name</label>
                    <input type="text" class="form-control form-control-lg" id="firstname" placeholder="Enter first name"/>
                </div>

                <div class="form-group">
                    <label for="lastname" className={classes.emaillabel}>Email Address</label>
                    <input type="text" class="form-control form-control-lg" id="" placeholder="Enter Last name"/>
                </div>

                <div class="form-group">
                    <label for="emailaddress" className={classes.messagelabel}>Message</label>
                    {/* <input type="email" class="form-control form-control-lg" id="" placeholder="Enter email address"/> */}
                    <textarea class="form-control form-control-lg" id="" rows="5" placeholder="Type a comment"></textarea>
                </div>
               <button className={`btn-block ${classes.contactbutton}`}>Send your message </button>
            
                  </div>
             
                </div>     
    </div>
    </div>


      </div>
  
      <div className={classes.growth_steps}>
      <Growth/>
      </div>

      <Footer/>


     
     </>
    )
}

export default Contact