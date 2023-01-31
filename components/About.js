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
    <div className={classes.about_first_box}>
    <div className="container">
    <div className="row">
    <div className={`col-md-6 ${classes.about_firstbox_image}`}>
            <p style={{textAlign:"center"}}><img className="img-fluid" src="/images/homepage/about.svg" alt="" /></p>
        </div>

        <div className="col-md-5">
        <h1 className={classes.about_firstbox_title}>The ideals that drives us</h1>
        <h6 className={classes.about_firstbox_subtitle}>

          At Oak Finance, we believe in helping families, institutions, and individuals build sustainable wealth, through our wide array of alternative investment classes. With our dedicated team of experienced investment experts, we help you make informed investment decisions about your finances and investments so you can achieve your financial goals.
            
            </h6>
        {/* <button  className={classes.about_button}>Learn more <i class="fas fa-angle-right" style={{paddingLeft:"15px", fontSize:"20px"}}></i></button> */}
    
        </div> 
    </div>
</div>
</div>
    {/* FIRST BOX */}


    {/* SECOND BOX */}
    <div className={classes.about_second_box}>
    <div className="container">
    <div className="row">
        <div className="col-md-12">
        <h1 className={classes.about_secondbox_title}>Our commitment to you</h1>
        <h6 className={`${classes.about_secondbox_subtitle} ${classes.desktoponly}`}>At Oak Finance, we are dedicated to offering the best financial guidance and investment <br/>opportunities to our clients. We understand that every individual has different needs and<br/> goals when it comes to their finances, which is why we strive to provide customised<br/> solutions that can help them reach their objectives..</h6>
        <h6 className={`${classes.about_secondbox_subtitle} ${classes.mobileonly}`}>At Oak Finance, we are dedicated to offering the best financial guidance and investment opportunities to our clients. We understand that every individual has different needs and goals when it comes to their finances, which is why we strive to provide customised solutions that can help them reach their objectives.</h6>

        
        {/* <button  className={classes.about_button}>Learn more <i class="fas fa-angle-right" style={{paddingLeft:"15px", fontSize:"20px"}}></i></button> */}
    
        </div> 
    </div>
    <hr className={classes.secondboxhr}/>
</div>
</div>
    {/* SECOND BOX */}


    {/* THIRD BOX */}
    <div className="container">
    <div className={classes.about_third_box}>
        <div className="row">

       
                <div className="col-md-4 col-12">
                <div className={classes.inner_third_box}>
                  <p className={classes.about_third_box_title}> Our Mission</p>
                  <p className={classes.about_third_box_body}>
                  Breaking barriers to be Africa’s biggest financial partner in asset base through professionalism, innovation, and providing premium value for our customers
                     </p>
                </div>
                </div>

                <div className="col-md-4 col-12">
                <div className={classes.inner_third_box}>
                  <p className={classes.about_third_box_title}> Our Vision</p>
                  <p className={classes.about_third_box_body}>
                  To be Africa’s Most Reliable Financial Partner
                     </p>
                </div>
                </div>

                <div className="col-md-4 col-12">
                <div className={classes.inner_third_box}>
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
                </div>
</div>
    {/* THIRD BOX */}

{/* PARTNERS */}
<div className={classes.about_partners}>
            <Partners/>
            </div>
{/* PARTNERS */}

{/* INVESTMENT IMPACT */}
<div className={classes.about_impact_box}>
    <div className="container">
    <div className="row">
    <div className="col-md-5">
        <h1 className={classes.about_firstbox_title}>Our investment <span className={classes.make_red}>impact </span></h1>
        <h6 className={classes.about_firstbox_subtitle}>
        Through partnerships that are based on shared values, we are dedicated to advancing the prosperity of African people and institutions.
         We believe that by working together and focusing on building value, we can make a positive impact on the continent and help improve the 
         lives of its people. Whether we are partnering with other businesses, working with institutions, or supporting individuals, our goal is to create 
         value and increase wealth for all involved.
            </h6>
        {/* <button  className={classes.about_button}>Learn more <i class="fas fa-angle-right" style={{paddingLeft:"15px", fontSize:"20px"}}></i></button> */}
    
        </div> 

    <div className={`col-md-6 ${classes.about_firstbox_image}`}>
            <p style={{textAlign:"center"}}><img className="img-fluid" src="/images/homepage/about.svg" alt="" /></p>
        </div>


    </div>
</div>
</div>
{/* INVESTMENT IMPACT */}

{/* CEO */}
<div className={`row ${classes.ceobox}`}>
        <div className="col-md-4 col-2">
            <hr className={classes.abouthr}/>
        </div>
        <div className="col-md-4 col-8">
        <p className={classes.ceoicon}><img  src="/images/homepage/ceoicon.svg" alt="" /> </p>
        <p className={classes.ceotext}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Aenean tristique risus quis bibendum iaculis.</p>
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