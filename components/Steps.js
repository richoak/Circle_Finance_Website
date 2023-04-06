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

           <div className={`row ${classes.steps_inner_box1}`}>
                <div className="col-md-2 col-2">
                  <p className={classes.step1}>01</p>
                </div>
                <div className="col-md-10 col-10">
                <h2 className={classes.steps_subtitle}>Create an account</h2>
                <h6 className={`${classes.steps_subtitle_trust} ${classes.desktoponly}`}>By providing your name, email address, and <br/> phone number.</h6>
                <h6 className={`${classes.steps_subtitle_trust} ${classes.mobileonly}`}>By providing your name, email address, and phone number.</h6>

                </div>
               </div>

               <div className={`row ${classes.steps_inner_box}`}>
                <div className="col-md-2 col-2">
                <p className={classes.step2}>02</p>
                {/* <img className="img-fluid" src="/images/homepage/01.png" alt="" /> */}
                </div>
                <div className="col-md-10 col-10">
                <h2 className={classes.steps_subtitle}>Add a payment method</h2>
                <h6 className={`${classes.steps_subtitle_trust} ${classes.desktoponly}`}>Using your debit card, bank account, USSD, or <br/> QR Code, set up your first plan.</h6>
                <h6 className={`${classes.steps_subtitle_trust} ${classes.mobileonly}`}>Using your debit card, bank account, USSD, or  QR Code, set up your first plan.</h6>

                </div>
               </div>

               <div className={`row ${classes.steps_inner_box}`}>
                <div className="col-md-2 col-2">
                <p className={classes.step3}>03</p>
                {/* <img className="img-fluid" src="/images/homepage/01.png" alt="" /> */}
                </div>
                <div className="col-md-10 col-10">
                <h2 className={classes.steps_subtitle}>Choose an investment vehicle</h2>
                <h6 className={`${classes.steps_subtitle_trust} ${classes.desktoponly}`}>Money heads-up shift ensure prioritize <br/> alarming. Team high-level jumping usabiltiy.</h6>
                <h6 className={`${classes.steps_subtitle_trust} ${classes.mobileonly}`}>Money heads-up shift ensure prioritize <br/> alarming. Team high-level jumping usabiltiy.</h6>

                </div>
               </div>

               <div className={`row ${classes.steps_inner_box}`}>
                <div className="col-md-2 col-2">
                <p className={classes.step4}>04</p>
                {/* <img className="img-fluid" src="/images/homepage/01.png" alt="" /> */}
                </div>
                <div className="col-md-10 col-10">
                <h2 className={classes.steps_subtitle}>Watch your money grow</h2>
                <h6 className={`${classes.steps_subtitle_trust} ${classes.desktoponly}`}>Money heads-up shift ensure prioritize <br/> alarming. Team high-level jumping usabiltiy.</h6>
                <h6 className={`${classes.steps_subtitle_trust} ${classes.mobileonly}`}>Money heads-up shift ensure prioritize <br/> alarming. Team high-level jumping usabiltiy.</h6>

                </div>
               </div>
                   {/* <p style={{textAlign:"center"}} ><img className="img-fluid" src="/images/homepage/phone.svg" alt="" /></p> */}
               </div>

               <div className="col-md-6">
               <h1 className={`${classes.steps_title} ${classes.desktoponly}`}>Start growing your wealth  <br/>in 4 easy steps.</h1>
               <h1 className={`${classes.steps_title} ${classes.mobileonly}`}>Start growing your <br/>wealth  in 4 easy steps.</h1>
               <h6 className={`${classes.steps_subtitle_trust} ${classes.desktoponly}`}>At Circle Finance, we understand that the safety and security of <br/>your funds are paramount.</h6>
                <h6 className={`${classes.steps_subtitle_trust} ${classes.mobileonly}`}>At Circle Finance, we understand that the safety and security of  your funds are paramount.</h6>
                <div className={classes.tabsbuttons}>
                    <a target="_blank" href="https://app.circlefinance.com"><button  className={classes.homepage_button}>Get started now</button></a>

                    <a href="/product?name=reif">
                    <p  className={classes.tabs_button}>Learn more 
                    <img src="/images/homepage/green-right-arrow.svg" style={{paddingLeft:"15px", fontSize:"20px"}}/>
                    </p>
                    </a>
                    
                    </div>   

           
               </div>

               <div className={`col-md-6 ${classes.investorsimage}  ${classes.mobileonly}`}>

<div className={`row ${classes.steps_inner_box1}`}>
     <div className="col-md-2 col-2">
       <p className={classes.step1}>01</p>
     </div>
     <div className="col-md-10 col-10">
     <h2 className={classes.steps_subtitle}>Create an account</h2>
     <h6 className={`${classes.steps_subtitle_trust} ${classes.desktoponly}`}>By providing your name, email address, and <br/> phone number.</h6>
     <h6 className={`${classes.steps_subtitle_trust} ${classes.mobileonly}`}>By providing your name, email address, and phone number.</h6>

     </div>
    </div>

    <div className={`row ${classes.steps_inner_box}`}>
     <div className="col-md-2 col-2">
     <p className={classes.step2}>02</p>
     {/* <img className="img-fluid" src="/images/homepage/01.png" alt="" /> */}
     </div>
     <div className="col-md-10 col-10">
     <h2 className={classes.steps_subtitle}>Add a payment method</h2>
     <h6 className={`${classes.steps_subtitle_trust} ${classes.desktoponly}`}>Using your debit card, bank account, USSD, or <br/> QR Code, set up your first plan.</h6>
     <h6 className={`${classes.steps_subtitle_trust} ${classes.mobileonly}`}>Using your debit card, bank account, USSD, or  QR Code, set up your first plan.</h6>

     </div>
    </div>

    <div className={`row ${classes.steps_inner_box}`}>
     <div className="col-md-2 col-2">
     <p className={classes.step3}>03</p>
     {/* <img className="img-fluid" src="/images/homepage/01.png" alt="" /> */}
     </div>
     <div className="col-md-10 col-10">
     <h2 className={classes.steps_subtitle}>Choose an investment vehicle</h2>
     <h6 className={`${classes.steps_subtitle_trust} ${classes.desktoponly}`}>Money heads-up shift ensure prioritize <br/> alarming. Team high-level jumping usabiltiy.</h6>
     <h6 className={`${classes.steps_subtitle_trust} ${classes.mobileonly}`}>Money heads-up shift ensure prioritize <br/> alarming. Team high-level jumping usabiltiy.</h6>

     </div>
    </div>

    <div className={`row ${classes.steps_inner_box}`}>
     <div className="col-md-2 col-2">
     <p className={classes.step4}>04</p>
     {/* <img className="img-fluid" src="/images/homepage/01.png" alt="" /> */}
     </div>
     <div className="col-md-10 col-10">
     <h2 className={classes.steps_subtitle}>Watch your money grow</h2>
     <h6 className={`${classes.steps_subtitle_trust} ${classes.desktoponly}`}>Money heads-up shift ensure prioritize <br/> alarming. Team high-level jumping usabiltiy.</h6>
     <h6 className={`${classes.steps_subtitle_trust} ${classes.mobileonly}`}>Money heads-up shift ensure prioritize <br/> alarming. Team high-level jumping usabiltiy.</h6>

     </div>
    </div>
        {/* <p style={{textAlign:"center"}} ><img className="img-fluid" src="/images/homepage/phone.svg" alt="" /></p> */}
    </div>
               {/* <div className={`col-md-6 ${classes.investorsimage}  ${classes.mobileonly}`}>
                   <p style={{textAlign:"center"}} ><img className="img-fluid" src="/images/homepage/phone.svg" alt="" /></p>
               </div> */}
         

             
           </div>
       </div>
      </div>
  
     </>
    )
}

export default Steps