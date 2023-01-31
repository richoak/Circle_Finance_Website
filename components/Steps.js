import React from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
// import classes from "./Home.module.css"
import classes from "./Steps.module.css"


const Steps = () => {
  const router = useRouter();

    return (
      <>
      <div className={classes.stepsbox}>
      <div className="container">
           
           <div className="row">
        
               
           <div className={`col-md-6 ${classes.investorsimage}  ${classes.desktoponly}`}>
                   <p style={{textAlign:"center"}} ><img className="img-fluid" src="/images/homepage/phone.svg" alt="" /></p>
               </div>

               <div className="col-md-6">
               <h1 className={`${classes.steps_title} ${classes.desktoponly}`}>Start your <span className={classes.make_red}>wealth </span> growth <br/>journey with just 4 steps</h1>
               <h1 className={`${classes.steps_title} ${classes.mobileonly}`}>Start your <span className={classes.make_red}>wealth </span> growth journey with just 4 steps</h1>


               <div className={`row ${classes.steps_inner_box}`}>
                <div className="col-md-1 col-2">
                <img className="img-fluid" src="/images/homepage/01.png" alt="" />
                </div>
                <div className="col-md-10 col-10">
                <h2 className={classes.steps_subtitle}>Create an account</h2>
                <h6 className={`${classes.steps_subtitle_trust} ${classes.desktoponly}`}>By providing your name, email address, and <br/> phone number.</h6>
                <h6 className={`${classes.steps_subtitle_trust} ${classes.mobileonly}`}>By providing your name, email address, and phone number.</h6>

                </div>
               </div>

               <div className={`row ${classes.steps_inner_box}`}>
                <div className="col-md-1 col-2">
                <img className="img-fluid" src="/images/homepage/01.png" alt="" />
                </div>
                <div className="col-md-10 col-10">
                <h2 className={classes.steps_subtitle}>Add a payment method</h2>
                <h6 className={`${classes.steps_subtitle_trust} ${classes.desktoponly}`}>Using your debit card, bank account, USSD, or <br/> QR Code, set up your first plan.</h6>
                <h6 className={`${classes.steps_subtitle_trust} ${classes.mobileonly}`}>Using your debit card, bank account, USSD, or  QR Code, set up your first plan.</h6>

                </div>
               </div>

               <div className={`row ${classes.steps_inner_box}`}>
                <div className="col-md-1 col-2">
                <img className="img-fluid" src="/images/homepage/01.png" alt="" />
                </div>
                <div className="col-md-10 col-10">
                <h2 className={classes.steps_subtitle}>Choose an investment vehicle</h2>
                <h6 className={`${classes.steps_subtitle_trust} ${classes.desktoponly}`}>Money heads-up shift ensure prioritize <br/> alarming. Team high-level jumping usabiltiy.</h6>
                <h6 className={`${classes.steps_subtitle_trust} ${classes.mobileonly}`}>Money heads-up shift ensure prioritize <br/> alarming. Team high-level jumping usabiltiy.</h6>

                </div>
               </div>

               <div className={`row ${classes.steps_inner_box}`}>
                <div className="col-md-1 col-2">
                <img className="img-fluid" src="/images/homepage/01.png" alt="" />
                </div>
                <div className="col-md-10 col-10">
                <h2 className={classes.steps_subtitle}>Watch your money grow</h2>
                <h6 className={`${classes.steps_subtitle_trust} ${classes.desktoponly}`}>Money heads-up shift ensure prioritize <br/> alarming. Team high-level jumping usabiltiy.</h6>
                <h6 className={`${classes.steps_subtitle_trust} ${classes.mobileonly}`}>Money heads-up shift ensure prioritize <br/> alarming. Team high-level jumping usabiltiy.</h6>

                </div>
               </div>
           
               </div>
               <div className={`col-md-6 ${classes.investorsimage}  ${classes.mobileonly}`}>
                   <p style={{textAlign:"center"}} ><img className="img-fluid" src="/images/homepage/phone.svg" alt="" /></p>
               </div>
         

             
           </div>
       </div>
      </div>
  
     </>
    )
}

export default Steps