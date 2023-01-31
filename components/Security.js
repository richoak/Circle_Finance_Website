import React from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import classes from "./Security.module.css"


const Security = () => {
  const router = useRouter();

    return (
      <>
      
      <div className="container">
           
               
      <p className={classes.steps_title}>Create content for security of  <br/> funds and data</p>
           <p className={classes.security_title}>Office ipsum you must be muted. Marginalised policy the thought while <br/>by better barn back.</p>

           <div className="row">
        
               
      
               <div className="col-md-5">

               <div className={`row ${classes.steps_inner_box}`}>

                <div className="col-md-2 col-2">
                <img className="img-fluid"  src="/images/homepage/tick-circle.svg" alt="" />
                </div>
                
                <div className="col-md-10 col-10">
                <h2 className={classes.steps_subtitle}>Security of funds</h2>
                <h6 className={classes.steps_subtitle_trust}>
                At Oak Finance, the safety and security of our clients' funds is our top priority. We employ strict measures such as diversification, market research and a highly skilled team to ensure that our clients' investments are secure at all times.                  </h6>
                </div>
               </div>

               <div className={`row ${classes.steps_inner_box}`}>
                <div className="col-md-2 col-2">
                <img className="img-fluid"  src="/images/homepage/tick-circle.svg" alt="" />
                </div>

                <div className="col-md-10 col-10">
                <h2 className={classes.steps_subtitle}>Data Protection</h2>
                <h6 className={classes.steps_subtitle_trust}>
                At Oak Finance, we prioritize the protection of our clients' personal and financial data. We comply with regulations, store data securely, and limit access to authorized personnel. Our comprehensive data protection policy covers all aspects of data protection as stipulated by law and finance regulations.                  </h6>
                </div>
               </div>

           
               </div>

               <div className="col-md-1"></div>

               <div className={`col-md-6 ${classes.investorsimage}`}>
                   <p style={{textAlign:"center"}} ><img className="img-fluid" src="/images/homepage/security_img.svg" alt="" /></p>
               </div>

             
           </div>
       </div>
     </>
    )
}

export default Security