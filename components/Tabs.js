import React, { useState } from "react"
import classes from "./Home.module.css"
// import Sonnet from '../../components/Sonnet';




const GrowWealthTabs = () => {
const [ reif, setReif ] = useState(true)
const [ pplus, setPplus ] = useState(false)
const [ premium, setPremium ] = useState(false)
const [ platinum, setPlatinum ] = useState(false)
const [ limited, setLimited ] = useState(false)

const handleReif = () => {
    setPremium(false)
    setPplus(false)
    setPlatinum(false)
    setLimited(false)
    setReif(true)
}

const handlePplus = () => {
    setReif(false)
    setPremium(false)
    setPlatinum(false)
    setLimited(false)
    setPplus(true)
}

const handlePremium = () => {
    setReif(false)
    setPplus(false)
    setPlatinum(false)
    setLimited(false)
    setPremium(true)
}

const handlePlatinum = () => {
    setReif(false)
    setPplus(false)
    setPlatinum(true)
    setLimited(false)
    setPremium(false)
}

const handleLimited = () => {
    setReif(false)
    setPplus(false)
    setPlatinum(false)
    setLimited(true)
    setPremium(false)
}
  return (
    <div className="container">
<div className={`col-md-12 ${classes.grow_wealth_box}`}>
<p className={`${classes.grow_wealth_title} ${classes.desktoponly}`}>Our wealth-building strategy is <br/>based on diversification. </p>
<p className={`${classes.grow_wealth_title} ${classes.mobileonly}`}>Our wealth-building strategy is based on diversification. </p>

<h6 className={classes.grow_wealth_subtitle}>We offer a wide range of alternative investment options to our clients, to<br/>  ensure a balanced and well-rounded portfolio.</h6>
<div>

<div className={classes.tabsbox}>

<p className={classes.homepage_buttonp}>

{/* <div className="testarrow"> */}
    <img className="rightarrow" src="/images/homepage/animated_arrow.svg" alt="" />

    {/* </div> */}
<button onClick={handleReif} className={`${classes.firsttabbuttons} ${classes.tabbuttons}`}
    style={{
        color: reif ? '#DD3636' : '#6B7487',
        backgroundColor: reif ? '#FCF7F7' : '#F1F2F4'
        }}>
    REIF
</button>

<button onClick={handlePplus}className={classes.tabbuttons}
   style={{
    color: pplus ? '#DD3636' : '#6B7487',
    backgroundColor: pplus ? '#FCF7F7' : '#F1F2F4'
    }}>
Premium Plus
</button>

<button onClick={handlePremium}className={classes.tabbuttons}
   style={{
    color: premium ? '#DD3636' : '#6B7487',
    backgroundColor: premium ? '#FCF7F7' : '#F1F2F4'
    }}
>Premium
</button>

<button onClick={handlePlatinum}className={classes.tabbuttons}
   style={{
    color: platinum ? '#DD3636' : '#6B7487',
    backgroundColor: platinum ? '#FCF7F7' : '#F1F2F4'
    }}
>Platinum Investment
</button>

<button onClick={handleLimited}className={classes.tabbuttons}
   style={{
    color: limited ? '#DD3636' : '#6B7487',
    backgroundColor: limited ? '#FCF7F7' : '#F1F2F4'
    }}
>Limited Partnership
</button>

</p>


 
</div>



    


    <div className={classes.tab_content}>
        {
            reif && (
                <div className="row">
                <div className={`col-md-5 ${classes.mobilephone}`}>
                        <p style={{textAlign:"center"}}><img className="img-fluid" src="/images/homepage/tab_image.svg" alt="" /></p>
                    </div>

                    <div className="col-md-6">
                    <h1 className={classes.tab_title}>Real Estate Investment Fund</h1>
                    <h6 className={classes.tab_subtitle}>Our Real Estate Investment Fund presents an opportunity for individuals to own a share of prime real estate assets without having to come up with the full purchase price on their own. With just 500,000 and above at 18%   per annum, you become a fund owner.</h6>
                    <p className={classes.tabsbuttons}>
                    <button  className={classes.homepage_button}>Start investing</button>
                    <p  className={classes.tabs_button}>Learn more <img src="/images/homepage/green-right-arrow.svg" style={{paddingLeft:"15px", fontSize:"20px"}}/></p>
                    
                    </p>
                 
                    </div>

                  
                </div>
            )
            
        }

{
            pplus && (
                <div className="row">
                <div className={`col-md-5 ${classes.mobilephone}`}>
                        <p style={{textAlign:"center"}}><img className="img-fluid" src="/images/homepage/tab_image.svg" alt="" /></p>
                    </div>

                    <div className="col-md-6">
                    <h1 className={classes.tab_title}>Premium Plus</h1>
                    <h6 className={classes.tab_subtitle}>Our Real Estate Investment Fund presents an opportunity for individuals <br/>to own a share of prime real estate assets without having to come up <br/>with the full purchase price on their own. With just 500,000 and above at<br/> 18%, per annum, you become a fund owner..</h6>
                    <p className={classes.tabs_learn_more}>Learn more <img src="/images/homepage/green-right-arrow.svg" style={{paddingLeft:"15px", fontSize:"20px"}}/></p>
                    </div>

                  
                </div>
            )
            
        }

{
            premium && (
                <div className="row">
                <div className={`col-md-5 ${classes.mobilephone}`}>
                        <p style={{textAlign:"center"}}><img className="img-fluid" src="/images/homepage/tab_image.svg" alt="" /></p>
                    </div>

                    <div className="col-md-6">
                    <h1 className={classes.tab_title}>Premium</h1>
                    <h6 className={classes.tab_subtitle}>Our Real Estate Investment Fund presents an opportunity for individuals <br/>to own a share of prime real estate assets without having to come up <br/>with the full purchase price on their own. With just 500,000 and above at<br/> 18%, per annum, you become a fund owner..</h6>
                    <p className={classes.tabs_learn_more}>Learn more <img src="/images/homepage/green-right-arrow.svg" style={{paddingLeft:"15px", fontSize:"20px"}}/></p>
                    </div>

                  
                </div>
            )
            
        }

{
            platinum && (
                <div className="row">
                <div className={`col-md-5 ${classes.mobilephone}`}>
                        <p style={{textAlign:"center"}}><img className="img-fluid" src="/images/homepage/tab_image.svg" alt="" /></p>
                    </div>

                    <div className="col-md-6">
                    <h1 className={classes.tab_title}>Platinum</h1>
                    <h6 className={classes.tab_subtitle}>Our Real Estate Investment Fund presents an opportunity for individuals <br/>to own a share of prime real estate assets without having to come up <br/>with the full purchase price on their own. With just 500,000 and above at<br/> 18%, per annum, you become a fund owner..</h6>
                    <p className={classes.tabs_learn_more}>Learn more <img src="/images/homepage/green-right-arrow.svg" style={{paddingLeft:"15px", fontSize:"20px"}}/></p>
                    </div>

                  
                </div>
            )
            
        }

{
            limited && (
                <div className="row">
                <div className={`col-md-5 ${classes.mobilephone}`}>
                        <p style={{textAlign:"center"}}><img className="img-fluid" src="/images/homepage/tab_image.svg" alt="" /></p>
                    </div>

                    <div className="col-md-6">
                    <h1 className={classes.tab_title}>Limited</h1>
                    <h6 className={classes.tab_subtitle}>Our Real Estate Investment Fund presents an opportunity for individuals <br/>to own a share of prime real estate assets without having to come up <br/>with the full purchase price on their own. With just 500,000 and above at<br/> 18%, per annum, you become a fund owner..</h6>
                    <p className={classes.tabs_learn_more}>Learn more <img src="/images/homepage/green-right-arrow.svg" style={{paddingLeft:"15px", fontSize:"20px"}}/></p>
                    </div>

                  
                </div>
            )
            
        }
    </div>
</div>
</div>
<hr/>
</div>
  );
}

export default GrowWealthTabs;