import React from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import classes from "./Contactexcerpt.module.css"


const ContactExcerpt = () => {
  const router = useRouter();

    return (
      <>
      
      <div className="container">
           
           <div className="row">
        
               
           <div className={`col-md-6 ${classes.investorsimage} ${classes.desktoponly}`}>
                   <p style={{textAlign:"center"}} ><img className="img-fluid" src="/images/homepage/contact.png" alt="" /></p>
               </div>

               <div className="col-md-6">
               <h1 className={classes.steps_title}>Ready to connect <br/> with us? </h1>
               {/* <h2 className={classes.steps_subtitle}>Building wealth shouldn't be nerve racking. With Oak Finance.</h2> */}
                <h6 className={classes.steps_subtitle_trust}>Hi, Welcome to Circle Finance Platform. <br/>How may i help you today?</h6>
                
                <Link  as={Link} href="/contact">
                <p className={classes.cus_sup_button}>
                <button  className={classes.about_button}>Customer  support <img src="/images/homepage/whitearrow.svg" style={{paddingLeft:"15px", fontSize:"20px"}}/></button>
                </p>
                </Link>

               </div>

               <div className={`col-md-6 ${classes.investorsimage} ${classes.mobileonly}`}>
                   <p style={{textAlign:"center"}} ><img className="img-fluid" src="/images/homepage/contact.png" alt="" /></p>
               </div>

         

             
           </div>
       </div>
     </>
    )
}

export default ContactExcerpt