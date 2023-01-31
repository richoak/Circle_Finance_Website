import React from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import classes from "./Partners.module.css"


const Partners = () => {
  const router = useRouter();

    return (
      <>
      
        <div className={classes.partners_box}>
        <div className="container">
            <img className={classes.partners_image} src="/images/homepage/partners/1.svg"/>
            <img className={classes.partners_image} src="/images/homepage/partners/2.svg"/>
            <img className={classes.partners_image} src="/images/homepage/partners/3.svg"/>
            <img className={classes.partners_image} src="/images/homepage/partners/4.svg"/>
            <img className={classes.partners_image} src="/images/homepage/partners/5.svg"/>
            <img className={classes.partners_image} src="/images/homepage/partners/6.svg"/>
        </div>
        </div>
     </>
    )
}

export default Partners