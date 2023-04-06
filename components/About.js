import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Partners from "./Partners";
import classes from "./About.module.css"
import Growth from "./Growth";





const About = () => {

    return (
        <Fragment>

    <Header className={classes.header}/>

    {/* FIRST BOX */}
    <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="2000"
            >
    <div className={classes.about_first_box}>
    <div className="container">
    <div className="row">
    <div className={`col-md-6 ${classes.about_firstbox_image}`}>
            <p style={{textAlign:"center"}}><img className="img-fluid" src="/images/homepage/about.svg" alt="" /></p>
        </div>

        <div className="col-md-5">
        <h1 className={classes.about_firstbox_title}>Democratizing Access to Financial Products and Services</h1>
        <h6 className={classes.about_firstbox_subtitle}>

        At Circle Finance, we are committed to empowering individuals and businesses to take control of their financial futures. Our mission is to democratize access to financial products and services, providing everyone with the tools and resources they need to succeed.
            
            </h6>
        {/* <button  className={classes.about_button}>Learn more <i class="fas fa-angle-right" style={{paddingLeft:"15px", fontSize:"20px"}}></i></button> */}
    
        </div> 
    </div>
</div>
</div>
</div>
    {/* FIRST BOX */}



    <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="2000"
            >
    <div className={classes.about_second_box}>
    <div className="container">
    <div className="row">

        <div className="col-md-5">
        <h1 className={classes.about_secondbox_title}>Our commitment to you</h1>
        <h6 className={`${classes.about_secondbox_subtitle} ${classes.desktoponly}`}>
        At Circle Finance, our primary focus is on delivering excellent financial guidance and investment options to our clients. We acknowledge that everyone has distinctive financial needs and ambitions, and that's why we make every effort to provide personalized solutions that can help them hit their financial goals.
        </h6>
        <h6 className={`${classes.about_secondbox_subtitle} ${classes.mobileonly}`}>
        At Circle Finance, our primary focus is on delivering excellent financial guidance and investment options to our clients. We acknowledge that everyone has distinctive financial needs and ambitions, and that's why we make every effort to provide personalized solutions that can help them hit their financial goals.
             </h6>    
             <p className={classes.tabsbuttons}>
                    <a target="_blank" href="https://app.circlefinance.com"><button  className={classes.homepage_button}>Get started now</button></a>

                    <a href="/product?name=reif">
                    <p  className={classes.tabs_button}>Learn more 
                    <img src="/images/homepage/green-right-arrow.svg" style={{paddingLeft:"15px", fontSize:"20px"}}/>
                    </p>
                    </a>
                    
                    </p>   
        </div> 


        <div className="col-md-1"></div>

        <div className="col-md-6">
        <div className={classes.inner_third_box1}>
                  <p className={classes.about_third_box_title}> Our Mission</p>
                  <p className={classes.about_third_box_body}>
                  Breaking barriers to be Africa’s biggest financial partner in asset base through professionalism, innovation, and providing premium value for our customers
                     </p>
                </div>

                <div className={classes.inner_third_box}>
                  <p className={classes.about_third_box_title}> Our Vision</p>
                  <p className={classes.about_third_box_body}>
                  To be Africa’s Most Reliable Financial Partner
                     </p>
                </div>

                <div className={classes.inner_third_box3}>
                  <p className={classes.about_third_box_title}> Our Core Values</p>
                  <div className="row">
                    <div className="col-md-7">
                    <p className={classes.about_third_box_body}>
                        <img className={classes.core_values_img} src="/images/homepage/single_check.svg" style={{paddingRight:"10px"}} alt="" />
                    Long term thinking
                    </p>
                    </div>
                    <div className="col-md-5">
                    <p className={classes.about_third_box_body}>
                    <img src="/images/homepage/single_check.svg" style={{paddingRight:"10px"}} alt="" />
                    Excellence
                    </p>
                    </div>
                    <div className="col-md-7">
                    <p className={classes.about_third_box_body}>
                    <img src="/images/homepage/single_check.svg" style={{paddingRight:"10px"}} alt="" />
                    Entrepreneurial
                    </p>
                    </div>
                    <div className="col-md-5">
                    <p className={classes.about_third_box_body}>
                    <img src="/images/homepage/single_check.svg" style={{paddingRight:"10px"}} alt="" />
                    Integrity
                    </p>
                    </div>
                  </div>
                
                </div>


        </div>
    </div>
    {/* <hr className={classes.secondboxhr}/> */}
</div>
</div>


<div className={classes.about_partners}>
            <Partners/>
            </div>
</div>

{/* INVESTMENT IMPACT */}
<div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="2000"
            >
<div className={classes.about_impact_box}>
<div className="container">
    <div className="row">
    <div className={`col-md-6 ${classes.about_firstbox_image}`}>
            <p style={{textAlign:"center"}}><img className="img-fluid" src="/images/homepage/rectangle.svg" alt="" /></p>
        </div>

        <div className="col-md-5">
        <h1 className={classes.about_constantly}>Constantly Evolving: Staying Ahead of the Curve</h1>
        <h6 className={classes.about_firstbox_subtitle}>

        We are constantly adapting to the changing landscape of the financial industry, and we are committed to staying ahead of the curve. Our team is always looking for new and innovative ways to help our clients achieve their goals, and we are excited to be at the forefront of the WealthTech revolution.
            
            </h6>
        {/* <button  className={classes.about_button}>Learn more <i class="fas fa-angle-right" style={{paddingLeft:"15px", fontSize:"20px"}}></i></button> */}
    
        </div> 
    </div>
</div>
</div>
{/* INVESTMENT IMPACT */}
<hr className={classes.secondboxhr}/>
</div>


<div>
<div className="container">
    <div className="row">
    {/* <div className={`col-md-6 ${classes.about_firstbox_image}`}>
            <p style={{textAlign:"center"}}><img className="img-fluid" src="/images/homepage/about.svg" alt="" /></p>
        </div> */}
<div className="col-md-2">

</div>

        <div className="col-md-8">
        <h1 className={classes.meetourteam}>Meet Our Team: Experts in <br/> WealthTech</h1>
        <h6 className={classes.about_firstbox_subtitle3}>

        Our team is composed of experienced professionals who bring a range of skills and expertise to our organization. We believe in transparency, integrity, and accountability, and we strive to provide our clients with the best possible service and support.            
            </h6>
        {/* <button  className={classes.about_button}>Learn more <i class="fas fa-angle-right" style={{paddingLeft:"15px", fontSize:"20px"}}></i></button> */}
    
        </div> 

        <div className="col-md-2">

</div>
    </div>
</div>
</div>
<div className="container">
    <img className="img-fluid"src="/images/homepage/firmbg.jpg" alt="" />
</div>
{/* CEO */}
<div className={`row ${classes.ceobox}`}>
        <div className="col-md-4 col-2">
            <hr className={classes.abouthr}/>
        </div>
        <div className="col-md-4 col-8">
        <p className={classes.ceoicon}><img  src="/images/homepage/ceoicon.svg" alt="" /> </p>
        <p className={classes.ceotext}> Thank you for considering Circle Finance for your financial<br/> needs. We look forward to serving you and helping you <br/>  build the future you deserve.</p>
        <p className={classes.ceoimgp}><img className={classes.ceo} src="/images/homepage/williams.jpg" alt="" /></p>
        <p className={classes.ceoname}>Williams Olatunbosun</p>
        <p className={classes.ceoposition}>(Executive Director)</p>
        </div>
        <div className="col-md-4 col-2">
        <hr className={classes.abouthr}/>
        </div>
</div>
{/* CEO */}

{/* START GROWING */}
<div className={classes.growth_steps}>
<Growth/>
</div>
{/* START GROWING */}

{/* FOOTER */}
<Footer className={classes.footer}/>
{/* FOOTER */}

</Fragment>
)
}

export default About