import React from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import classes from "./Footer.module.css"


const Footer = () => {
  const router = useRouter();

    return (
      <div className={`container ${classes.navigationbar}`}>
      <div  className={`${classes.navigationmenu}`}>
        <div className={classes.footerlogo}>

        <Link href="/" activeClassName="is-active" >
        <a className="navbar-brand" href="/">
        <img width="" height="40" src="/images/homepage/logo.svg"/>
          </a>
        </Link>
        
        </div>
    

        <div className="row">

          <div className="col-md-2 col-6">
          <p className={classes.footertitle}>About</p>
      
            <p><a className={classes.footersubtitle} href="">Blog</a></p>
            <Link  as={Link} href="/about" className={classes.footersubtitle}><p style={{cursor:"pointer"}}>About</p></Link>
            <p><a className={classes.footersubtitle} href="">Career</a></p>

          <div>
          <p  className={classes.footersocialicons}><a className={classes.footersubtitle} href=""><img src="/images/homepage/facebook.svg"/></a></p>
          <p  className={classes.footersocialicons}><a className={classes.footersubtitle} href=""><img src="/images/homepage/youtube.svg"/></a></p>
          <p  className={classes.footersocialicons}><a className={classes.footersubtitle} href=""><img src="/images/homepage/linkedin.svg"/></a></p>
          <p  className={classes.footersocialicons}><a className={classes.footersubtitle} href=""><img src="/images/homepage/instagram.svg"/></a></p>

          </div>

          </div>


          <div className="col-md-2 col-6">
          <p className={classes.footertitle}>Products</p>
          <Link  as={Link} href="/credit" className={classes.footersubtitle}><p style={{cursor:"pointer"}}>Credit</p></Link>
          <Link  as={Link} href="/investment" className={classes.footersubtitle}><p style={{cursor:"pointer"}}>Investment</p></Link>
          <Link  as={Link} href="/microservices" className={classes.footersubtitle}><p style={{cursor:"pointer"}}>Microservices</p></Link>
            {/* <p><a className={classes.footersubtitle} href="">Blog</a></p>
            <p><a className={classes.footersubtitle} href="">About</a></p>
            <p><a className={classes.footersubtitle} href="">Company</a></p> */}
          </div>


<div className={`col-md-2 col-6 ${classes.footermid}`}>
          <p className={classes.footertitle}>Legal</p>
            <p><a className={classes.footersubtitle} href="">Privacy Policy</a></p>
            <p><a className={classes.footersubtitle} href="">Terms of Use</a></p>
            <p><a className={classes.footersubtitle} href="">Legal Notice</a></p>
            {/* <p><a className={classes.footersubtitle} href="">Blog</a></p>
            <p><a className={classes.footersubtitle} href="">About</a></p>
            <p><a className={classes.footersubtitle} href="">Company</a></p> */}
          </div>

          {/* <div className={`col-md-2 col-6 ${classes.footermid}`}>
        <p className={classes.footertitle}>Get Started</p>
        <p><a className={classes.footersubtitle} href="">Blog</a></p>
            <p><a className={classes.footersubtitle} href="">About</a></p>
            <p><a className={classes.footersubtitle} href="">Company</a></p>
            <p><a className={classes.footersubtitle} href="">Blog</a></p>
            <p><a className={classes.footersubtitle} href="">About</a></p>
            <p><a className={classes.footersubtitle} href="">Company</a></p>
        </div> */}

        {/* <div className="col-md-2 col-6">
        <p className={classes.footertitle}>External Links</p>
        <p><a className={classes.footersubtitle} href="">Rich Oak</a></p>
            <p><a className={classes.footersubtitle} href="">Credisol</a></p>
            <p><a className={classes.footersubtitle} href="">Earth VII</a></p>
    
        </div> */}
</div>
     

      


  
  
     <hr className={classes.footerhr}/>
       
      </div>
      <p className={classes.footertitle}>Other Information</p>

      <p className={classes.otherfootersubtitle}>Could pups adoption key watches disband regroup beforehand. Make fured believe window like criticality. 
        Buy-in left wiggle staircase unlock vec. Better production respectively competitors another economy caught. 
        Deliverables deliverables files back pulling relaxation metal. 
        Marketing roll anyway beforehand of silently moving both live devil. Managing / flesh it idea beforehand. 
        Invested door meaningful what's seems more helicopter ipsum.
        </p>

        <p className={classes.otherfootersubtitle}>
Chime slipstream dunder lot note zoom hanging. Fit power ipsum organic whistles first back-end club. 
Every three masking discussions we've gmail marginalised dive message shoot. 
Helicopter conversation also paradigm deck future-proof. In vendor working back contribution after can were dangerous. Strategy hurting hammer note define.
</p>

<p className={classes.otherfootersubtitle}>
Into opportunity like like third hanging. In 4-blocker feature ladder read what's initiative while.
 Competitors high-level chime live invite happenings world go job. Incentivization do message manager hands canatics.
</p>
        </div>
 
    )
}

export default Footer