import React, { Fragment, useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Header from "./Header";
import Footer from "./Footer";
import Growth from "./Growth";
import Calculator from "./Calculator";
import classes from "./Credit.module.css"
import ContactExcerpt from "./Contactexcerpt";
import Link from 'next/link';


const Credit = () => {
const [ product, setProduct ] = useState()
const [ productDescription, setProductDescription ] = useState()
const [ productMinimumInvestment, setProductMinimumInvestment ] = useState()
const [ productDuration, setProductDuration ] = useState()
const [ productInterest, setProductInterest ] = useState()
const [ productRiskLevel, setProductRiskLevel ] = useState()

const router = useRouter()
const query = router.query



    return (
        <Fragment>

    <Header className={classes.header}/>
    <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="2000"
            >
    <div className={classes.about_second_box}>
    <div className="container">
    <div className="row">

        <div className={`col-md-5 ${classes.credithero}`}>
        <h1 className={`${classes.about_firstbox_title} ${classes.desktoponly}`}>Get seamless loans at<br/> the <span className={classes.make_red}>lowest</span> Interest rates</h1>
        <h1 className={`${classes.about_firstbox_title} ${classes.mobileonly}`}>Get seamless loans at the <span className={classes.make_red}>lowest</span> Interest rates</h1>

        <h6 className={classes.about_secondbox_subtitle}>
        Apply today to get a loan for your business and personal needs on your demand. No hassle, no hidden fees, no upfront costs. Available at the lowest interest rate possible.
            </h6>
        <p className={classes.tabsbuttons}>
                    <a target="_blank" href="https://app.circlefinance.com"><button  className={classes.homepage_button}>Get access to loans</button></a>

                    {/* <a href="/product?name=reif" style={{paddingLeft:"15px"}}>
                    <p  className={classes.tabs_button}>Learn more 
                    <img src="/images/homepage/green-right-arrow.svg" style={{paddingLeft:"15px", fontSize:"20px"}}/>
                    </p>
                    </a> */}
                    
                    </p>   
        </div> 

        <div className="col-md-1"></div>
        <div className={`col-md-5 ${classes.weprovideimage}`}>
        <Calculator/>
                    </div>
    </div>
    {/* <hr className={classes.secondboxhr}/> */}
</div>
</div>
</div>
   
<div
            data-aos="fade-up"
            data-aos-duration="2500"
            >
    <div className={classes.about_second_box}>
    <div className="container">
    <div className="row">
    <div className={`col-md-6 ${classes.weprovideimage}`}>
                        <p style={{textAlign:"center"}}><img className="img-fluid" src="/images/homepage/ellipse.svg" alt="" /></p>
                    </div>
        <div className="col-md-5">
        <h1 className={classes.about_firstbox_title}>Personal Loans for Every Need</h1>
        <h6 className={classes.about_secondbox_subtitle}>
        At Circle Finance, we understand that life is full of surprises, which is why we offer personal loans designed to help you navigate unexpected expenses and achieve your financial goals. Whether you need to consolidate debt, pay for a home renovation, or cover an unexpected medical bill, we offer flexible loan terms and competitive interest rates to suit your needs.
             </h6>
             <div className="row">
                <div className="col-md-6">
                <p className={classes.microserviceslist1}><img src="/images/homepage/check.svg"/> <span  className={classes.microserviceslist}>Customer support 24/7</span></p>
               <p className={classes.microserviceslist2}><img src="/images/homepage/check.svg"/> <span className={classes.microserviceslist}>Very low interest rate</span></p>
            
                </div>
                <div className="col-md-6">
                <p className={classes.microserviceslist2}><img src="/images/homepage/check.svg"/> <span className={classes.microserviceslist}>No fees, no catch</span></p>
                <p className={classes.microserviceslist2}><img src="/images/homepage/check.svg"/> <span className={classes.microserviceslist}>No collateral and paperwork</span></p>


                    </div>
             </div>
    
          
        <p className={classes.tabsbuttons}>
                    {/* <a target="_blank" href="https://app.circlefinance.com"><button  className={classes.homepage_button}>Start investing</button></a> */}

                    <Link  as={Link} href="/investment">
                    <p style={{cursor:"pointer"}}  className={classes.tabs_button}>Get access to loans 
                    <img src="/images/homepage/green-right-arrow.svg" style={{paddingLeft:"15px", fontSize:"20px"}}/>
                    </p>
                    </Link>
                    
                    </p>   
        </div> 
    </div>
    {/* <hr className={classes.secondboxhr}/> */}
</div>
</div>
</div>


<div
            data-aos="fade-up"
            data-aos-duration="3000"
            >
<div className={classes.about_second_box}>
    <div className="container">
    <div className="row">
    <div className={`col-md-6 ${classes.weprovideimage} ${classes.mobileonly}`}>
                        <p style={{textAlign:"center"}}><img className="img-fluid" src="/images/homepage/ellipse.svg" alt="" /></p>
                    </div>
        <div className="col-md-5">
        <h1 className={classes.about_firstbox_title}>Secure and Convenient<br/> Access to Funds</h1>
        <h6 className={classes.about_secondbox_subtitle}>
        With Circle Finance, you can access your loan funds quickly and easily. We offer secure and convenient online access to your loan account, so you can manage your funds from anywhere, at any time. Whether you need to make a payment or check your balance, our user-friendly platform makes it easy to stay on top of your finances.
            </h6>
        <p className={classes.tabsbuttons}>
        <Link  as={Link} href="/investment">
                    <p style={{cursor:"pointer"}}  className={classes.tabs_button}>Get access to loans
                    <img src="/images/homepage/green-right-arrow.svg" style={{paddingLeft:"15px", fontSize:"20px"}}/>
                    </p>
                    </Link>
                    
                    </p>   
        </div> 
        <div className={`col-md-6  ${classes.weprovideimage}  ${classes.desktoponly}`}>
                        <p style={{textAlign:"center"}}><img className="img-fluid" src="/images/homepage/ellipse.svg" alt="" /></p>
                    </div>
    </div>
    {/* <hr className={classes.secondboxhr}/> */}
</div>
</div>
</div>

<div
data-aos="fade-up"
data-aos-duration="3500"
>
<div className={classes.secondbox}>
<div className={classes.about_second_box}>
    <div className="container">
    <div className="row">
    <div className={`col-md-6 ${classes.weprovideimage}`}>
                        <p style={{textAlign:"center"}}><img className="img-fluid" src="/images/homepage/ellipse.svg" alt="" /></p>
                    </div>
        <div className="col-md-5">
        <h1 className={classes.about_firstbox_title}>Credit Building Tools and<br/> Resources</h1>
        <h6 className={classes.about_secondbox_subtitle}>
        We understand that building and maintaining good credit is an essential part of achieving financial stability. That's why we offer a range of credit-building tools and resources to help you establish and maintain good credit. From credit monitoring services to credit education resources, we're here to help you take control of your credit and achieve your financial goals.
             </h6>
        <p className={classes.tabsbuttons}>

        <Link  as={Link} href="/investment">
                    <p  style={{cursor:"pointer"}}  className={classes.tabs_button}>Get access to loans 
                    <img src="/images/homepage/green-right-arrow.svg" style={{paddingLeft:"15px", fontSize:"20px"}}/>
                    </p>
                    </Link>
                    
                    </p>   
        </div> 
    </div>
    {/* <hr className={classes.secondboxhr}/> */}
</div>
</div>
</div>
</div>

<div
data-aos="fade-up"
data-aos-duration="4000"
>
<div>
<div className={classes.about_second_box}>
    <div className="container">
    <div className="row">
    <div className={`col-md-6 ${classes.weprovideimage} ${classes.mobileonly}`}>
                        <p style={{textAlign:"center"}}><img className="img-fluid" src="/images/homepage/ellipse.svg" alt="" /></p>
                    </div>
        <div className="col-md-5">
        <h1 className={classes.about_firstbox_title}>Competitive Rates and Flexible Terms</h1>
        <h6 className={classes.about_secondbox_subtitle}>
        At Circle Finance, we believe in providing our clients with the best possible loan terms and rates. That's why we offer competitive interest rates and flexible repayment terms to help you manage your finances in a way that works for you. Our loans are designed to be transparent and easy to understand, so you know exactly what you're getting into before you sign on the dotted line.
            </h6>
            <p className={classes.tabsbuttons}>
                    {/* <a target="_blank" href="https://app.circlefinance.com"><button  className={classes.homepage_button}>Start investing</button></a> */}

                    <Link  as={Link} href="/investment">
                    <p style={{cursor:"pointer"}}   className={classes.tabs_button}>Get access to loans 
                    <img src="/images/homepage/green-right-arrow.svg" style={{paddingLeft:"15px", fontSize:"20px"}}/>
                    </p>
                    </Link>
                    
                    </p>   
        </div> 
        <div className={`col-md-6 ${classes.weprovideimage} ${classes.desktoponly}`}>
                        <p style={{textAlign:"center"}}><img className="img-fluid" src="/images/homepage/ellipse.svg" alt="" /></p>
                    </div>
    </div>
    {/* <hr className={classes.secondboxhr}/> */}
</div>
</div>
</div>
</div>


<div
data-aos="fade-up"
data-aos-duration="4500"
>
<div className={classes.growth_steps}>
<Growth/>
</div>
</div>

<div
data-aos="fade-up"
data-aos-duration="5000"
>
<div className={classes.contact_steps}>
<ContactExcerpt/>
</div>
</div>


{/* FOOTER */}
<div
data-aos="fade-up"
data-aos-duration="5500"
>
<Footer className={classes.footer}/>
</div>
{/* FOOTER */}

</Fragment>
)
}

export default Credit