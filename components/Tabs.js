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
<p className={`${classes.grow_wealth_title} ${classes.desktoponly}`}>Our products: empowering you to build wealth </p>
<p className={`${classes.grow_wealth_title} ${classes.mobileonly}`}>Our products: empowering you to build wealth. </p>

<h6 className={classes.grow_wealth_subtitle}>
At Circle Finance, we're committed to helping you build wealth and achieve your financial goals.<br/>
That's why we offer a range of financial products designed to help you grow your wealth,
 manage <br/>your finances, and achieve financial stability.
    </h6>
<div>

<div className={classes.tabsbox}>

<p className={classes.homepage_buttonp}>
    <img className={classes.rightarrow} src="/images/homepage/animated_arrow.svg" alt="" />
<button onClick={handleReif} className={`${classes.firsttabbuttons} ${classes.tabbuttons}`}
    style={{
        color: reif ? '#DD3636' : '#6B7487',
        backgroundColor: reif ? '#FCF7F7' : '#F1F2F4'
        }}>
    A A Investments
</button>

<button onClick={handlePplus}className={classes.tabbuttons}
   style={{
    color: pplus ? '#DD3636' : '#6B7487',
    backgroundColor: pplus ? '#FCF7F7' : '#F1F2F4'
    }}>
Short Term Loans
</button>

<button onClick={handlePremium}className={classes.tabbuttons}
   style={{
    color: premium ? '#DD3636' : '#6B7487',
    backgroundColor: premium ? '#FCF7F7' : '#F1F2F4'
    }}
>Fixed Investment Products
</button>

<button onClick={handlePlatinum}className={classes.tabbuttons}
   style={{
    color: platinum ? '#DD3636' : '#6B7487',
    backgroundColor: platinum ? '#FCF7F7' : '#F1F2F4'
    }}
>P.C.I Opportunities
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
                    <h1 className={classes.tab_title}>Alternative Asset Investments</h1>
                    <h6 className={classes.tab_subtitle}>
                    Our alternative asset investment products allow you to diversify your investment portfolio and reduce your overall risk. From credit investments to real estate crowdfunding opportunities, we offer a range of alternative asset investment products to suit your needs and investment goals. With our innovative investment platform, you can easily access alternative investment opportunities and start building wealth today.
                        </h6>
                    <div className={classes.tabsbuttons}>
                    <a target="_blank" href="https://app.circlefinance.com"><button  className={classes.homepage_button}>Start investing</button></a>

                    <a href="/product?name=reif">
                    <p  className={classes.tabs_button}>Learn more 
                    <img src="/images/homepage/green-right-arrow.svg" style={{paddingLeft:"15px", fontSize:"20px"}}/>
                    </p>
                    </a>
                    
                    </div>
                 
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
                    <h1 className={classes.tab_title}>Short-Term Loans</h1>
                    <h6 className={classes.tab_subtitle}>
                    Our fixed investment products offer a secure and reliable way to grow your wealth over time. With our competitive interest rates and flexible terms, you can earn a steady return on your investment while maintaining the flexibility you need to manage your finances. Whether you're looking to save for a specific goal or build long-term wealth, our fixed investment products are designed to help you achieve your financial goals.
                          
                          </h6>
                          <p className={classes.tabsbuttons}>
                    <a target="_blank" href="https://app.circlefinance.com"><button  className={classes.homepage_button}>Start investing</button></a>

                    <a href="/product?name=reif">
                    <p  className={classes.tabs_button}>Learn more 
                    <img src="/images/homepage/green-right-arrow.svg" style={{paddingLeft:"15px", fontSize:"20px"}}/>
                    </p>
                    </a>
                    
                    </p>                 
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
                    <h1 className={classes.tab_title}>Fixed Investment Products</h1>
                    <h6 className={classes.tab_subtitle}>
                    At Circle Finance, we believe in the power of collaboration to help you achieve your investment goals. That's why we offer partnership and collaborative investment opportunities to help you leverage the knowledge and expertise of other investors and financial professionals. With our collaborative investment opportunities, you can access a wider range of investment options and benefit from the collective wisdom of the investment community.
                     </h6>
                     <p className={classes.tabsbuttons}>
                    <a target="_blank" href="https://app.circlefinance.com"><button  className={classes.homepage_button}>Start investing</button></a>

                    <a href="/product?name=reif">
                    <p  className={classes.tabs_button}>Learn more 
                    <img src="/images/homepage/green-right-arrow.svg" style={{paddingLeft:"15px", fontSize:"20px"}}/>
                    </p>
                    </a>
                    
                    </p>
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
                    <h1 className={classes.tab_title}>Partnership and Collaborative Investment Opportunities</h1>
                    <h6 className={classes.tab_subtitle}>
                    At Circle Finance, we believe in the power of collaboration to help you achieve your investment goals. That's why we offer partnership and collaborative investment opportunities to help you leverage the knowledge and expertise of other investors and financial professionals. With our collaborative investment opportunities, you can access a wider range of investment options and benefit from the collective wisdom of the investment community.
                    </h6>
                    <p className={classes.tabsbuttons}>
                    <a target="_blank" href="https://app.circlefinance.com"><button  className={classes.homepage_button}>Start investing</button></a>

                    <a href="/product?name=reif">
                    <p  className={classes.tabs_button}>Learn more 
                    <img src="/images/homepage/green-right-arrow.svg" style={{paddingLeft:"15px", fontSize:"20px"}}/>
                    </p>
                    </a>
                    
                    </p>               
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
{/* <hr/> */}
</div>
  );
}

export default GrowWealthTabs;