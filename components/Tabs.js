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
                    <h6 className={classes.tab_subtitle}>
                    The Oak Real Estate Investment Fund is a unique investment opportunity that allows individuals to invest in a diversified portfolio of real estate assets. The fund is designed for investors who do not have the deep pockets to buy off properties or build from the ground up, but wish to own prime real estate. This means that you don't need to have a large amount of money to get started, and you can share in the ownership of valuable real estate assets.
                        </h6>
                    <p className={classes.tabsbuttons}>
                    <a href="/product?name=reif"><button  className={classes.homepage_button}>Start investing</button></a>
                    {/* <p  className={classes.tabs_button}>Learn more <img src="/images/homepage/green-right-arrow.svg" style={{paddingLeft:"15px", fontSize:"20px"}}/></p> */}
                    
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
                    <h6 className={classes.tab_subtitle}>
                    The Oak Premium Plus is a high-yield investment option that allows investors to invest a larger sum of money at a competitive interest rate. This option is designed for individuals who have a significant amount of idle cash that they want to put to work and potentially increase their long-term earnings.
Investing in Oak Premium Plus also offers investors the opportunity to diversify their portfolio and potentially mitigate risk by spreading their investment across multiple assets. 
                          
                          </h6>
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
                    <h6 className={classes.tab_subtitle}>
                    The Oak Premium Investment Plan is a savings plan that is tailored for individuals who earn a salary and
                     want to consistently invest a specific amount of money each month towards a specific financial goal.
                     This means that at the end of the first year, an additional 12% of the total investment will be added to the overall amount saved. This plan is an excellent option for those who want to save money consistently over time and earn a higher return on their investment.
                     </h6>
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
                    <h6 className={classes.tab_subtitle}>
                    The Oak Platinum Investment Plan is a high-value investment option designed for individuals with large sums of money starting at 10 million naira and above. This plan is tailored for individuals who are looking to invest in a safe and profitable plan and want to get good returns on their investment.
                    </h6>
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
                    <h6 className={classes.tab_subtitle}>The Limited Partnership Fund is a partnership investment vehicle, where profit is shared between investing partners, based on their stake in the business (55% for major partners and 25% for minority partners). The project will run for ten years, during which time partners will receive monthly earnings. This is a unique investment opportunity that allows investors to be a part of a real estate project and share in its profits.
                     </h6>
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