import React from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import classes from "./Testimonials.module.css"


const Testimonials = () => {
  const router = useRouter();

    return (
      <>
      
      <div className="container">
           
           <div className="row">
        
               
          
       
               <div className="col-md-12">
                <div className={classes.desktoponly}>
                <p className={classes.testimonial_title}>What our  <span className={classes.make_red}>customers </span>have <br/>to say about us</p>
                </div>

                <div className={classes.mobileonly}>
                <p className={classes.testimonial_title}>What our  <span className={classes.make_red}>customers </span>have to say about us</p>
                </div>
              {/* <p className={classes.testimonial_subtitle}>Office ipsum you must be muted.<br/> Marginalised policy the  thought while by<br/> better barn back.</p> */}

               </div>


<div className="col-md-4">
                <div className={classes.testimonial_box}>
                  <p><img src="/images/homepage/testimonial_1.svg"/> <span className={classes.testify_title} style={{marginLeft:"10px"}}>Mike Okri</span></p>
                  <p className={classes.testify_body}>
                  Oak Finance is the best investment company I've ever worked with. Their team of experts helped me create a diversified portfolio that has consistently delivered solid returns. I trust their advice and appreciate their transparent and professional approach.
                     </p>
                </div>
              </div>

               <div className="col-md-4">
               <div className={classes.testimonial_box}>
                  <p><img src="/images/homepage/testimonial_1.svg"/> <span className={classes.testify_title} style={{marginLeft:"10px"}}>Mike Okri</span></p>
                  <p className={classes.testify_body}>
                  I've been with Oak Finance for several years now and I couldn't be happier. They've helped me navigate the often-volatile market and make smart investment decisions. I've seen my portfolio grow significantly thanks to their expert guidance.                    </p>
                </div>

               </div>
       
               <div className="col-md-4">
                <div className={classes.testimonial_box}>
                  <p><img src="/images/homepage/testimonial_1.svg"/> <span className={classes.testify_title} style={{marginLeft:"10px"}}>Mike Okri</span></p>
                  <p className={classes.testify_body}>
                  I was hesitant to invest my money, but Oak Finance made the process easy and stress-free. Their team took the time to understand my goals and risk tolerance, and tailored a portfolio that was perfect for me. I've seen great returns and I'm confident in my investment with Oak Finance.                    </p>
                </div>

              </div>

     


            

             
           </div>
       </div>
     </>
    )
}

export default Testimonials