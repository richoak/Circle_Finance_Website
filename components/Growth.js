import React from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import classes from "./Growth.module.css"


const Growth = () => {
  const router = useRouter();

    return (
      <>
      
      <div className="container">
           
           <div className="row">
        
               
           <div className={`col-md-6 ${classes.investorsimage}`}>
           <h1 className={classes.steps_title}>Join Circle Finance Today </h1>
                <h6 className={classes.steps_subtitle_trust}>Ready to start building your financial future with Circle Finance? Join us<br/> today and discover a world of financial possibilities.</h6>
              
               </div>

               <div className={`col-md-6 ${classes.investorsimage}`}>
     
                <p style={{textAlign:"center"}} ><img className="img-fluid" src="/images/homepage/mockupphone.svg" alt="" /></p>

               </div>

         

             
           </div>
       </div>
     </>
    )
}

export default Growth