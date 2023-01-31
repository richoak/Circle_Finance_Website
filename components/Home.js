import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Partners from "./Partners";
import classes from "./Home.module.css"
import GrowWealthTabs from "./Tabs";
import Steps from "./Steps";
import Security from "./Security"
import Growth from "./Growth";
import Testimonials from "./Testimonials";
import Faqexcerpt from "./Faqexcerpt";
import ContactExcerpt from "./Contactexcerpt";
import { Accordion } from "react-bootstrap";




const Home = () => {


    return (
        <>
           
            <Header className={classes.header}/>
         
            <div className="container">

            
            <div className={classes.homepage}>
           
                <div className={classes.box}>
                <div className="row">
                    
                    <div className="col-md-6">
                    <h4 className={classes.homepage_title}>Building <span className={classes.make_red}>Wealth</span>, the easy and reliable way.</h4>
                    <h6 className={classes.homepage_subtitle}>Building wealth shouldn't be nerve racking. With Oak Finance, you  can now make the most of your finances and build wealth with  ease.</h6>
                    <button  className={classes.homepage_button}>Sign up now</button>
                    {/* <a href="#partners"> <img className={classes.homepage_scroll} src="/images/homepage/scroll.svg"/></a> */}
                   
                    <img className={`downarrow ${classes.homepage_scroll}`}  src="/images/homepage/scroll.svg" alt="" />
             
                    </div>
                    <div className="col-md-1">
                        
                    </div>
                    <div className="col-md-5">
                        <img className="img-fluid" src="/images/homepage/1.svg"/>
                    </div>
                </div>
                
                        
                </div>         
            </div>
            </div>


{/* PARTNERS */}
            <div className={classes.homepage_partners} id="partners">
            <Partners/>
            </div>
{/* PARTNERS */}




{/* ABOUT */}
            <div className={`container ${classes.homepage_about_us}`}>
           
                <div className="row">
                <div className={`col-md-6 ${classes.weprovideimage} ${classes.desktoponly} `}>
                        <p style={{textAlign:"center"}}><img className="img-fluid" src="/images/homepage/about.svg" alt="" /></p>
                    </div>

                    <div className="col-md-6">
                    <h1 className={classes.about_us_title}>We provide opportunity <br/>to grow <span className={classes.make_red}>wealth </span></h1>
                    <p className={classes.homepage_subtitle}>
                        We are a top financial investment platform that offers premium
                        value to our global clientele. Our team of experts has a proven 
                        track record in various asset classes, including real estate, credit, 
                        and agriculture. Our goal is to be Africa's most reliable financial partner, helping clients achieve financial success. 
                        Trust us to be your partner in wealth creation.</p>
                    <p  className={classes.about_button}>Learn more <img src="/images/homepage/green-right-arrow.svg" style={{paddingLeft:"15px", fontSize:"20px"}}/></p>
                
                    </div>

                    <div className={`col-md-6 ${classes.weprovideimage} ${classes.mobileonly} `}>
                        <p style={{textAlign:"center"}}><img className="img-fluid" src="/images/homepage/about.svg" alt="" /></p>
                    </div>

                  
                </div>
            </div>
  {/* ABOUT US */}

  {/* TRUST */}
  <div className="container">
           
           <div className="row">
           <div className="col-md-6">
               <h1 className={`${classes.trust_title} ${classes.desktoponly}`}>Why our investors <span className={classes.make_red}>trust </span> us</h1>

               <h1 className={`${classes.trust_title} ${classes.mobileonly}`}>Why our<br/> investors <span className={classes.make_red}>trust </span> us</h1>


               <div className={`row ${classes.trust_inner_box}`}>
                <div className="col-md-1">
                <img className="img-fluid" src="/images/homepage/security.svg" alt="" />
                </div>
                <div className="col-md-10">
                <h2 className={classes.trust_subtitle}>Security of funds</h2>
                <h6 className={classes.homepage_subtitle_trust}>
                We place a huge premium on the security of our investor's funds. 
                This is why we take stringent measures in both research  
                and other safe investment practices to ensure that our investor's funds are secure.
                    </h6>
                </div>
               </div>

               <div className={`row ${classes.trust_inner_box}`}>
                <div className="col-md-1">
                <img className="img-fluid" src="/images/homepage/money-send.svg" alt="" />
                </div>
                <div className="col-md-10">
                <h2 className={classes.trust_subtitle}>Profitability</h2>
                <h6 className={classes.homepage_subtitle_trust}>
                We prioritize profitability in our goal to generate reliable and profitable returns for our clients. We believe that the 
                ultimate goal of investing is to increase wealth and achieve financial success.
                     
                     </h6>
                </div>
               </div>

               <div className={`row ${classes.trust_inner_box}`}>
                <div className="col-md-1">
                <img className="img-fluid" src="/images/homepage/chart.svg" alt="" />
                </div>
                <div className="col-md-10">
                <h2 className={classes.trust_subtitle}>Diverse assets class</h2>
                <h6 className={classes.homepage_subtitle_trust}>
                We believe strongly in asset diversification for long-term  financial success. This is why we have a trained team of 
                 investment experts who can identify profitable opportunities  across various markets and asset classes, such as credit, real estate, 
                 and alternatives, for our clients.
                    
                    </h6>
                </div>
               </div>
           
               </div>
               
           <div className={`col-md-6 ${classes.investorsimage}`}>
                   <p style={{textAlign:"center"}}><img className="img-fluid" src="/images/homepage/investors_img.svg" alt="" /></p>
               </div>

         

             
           </div>
       </div>
{/* TRUST */}



{/* GROW WEALTH */}
<GrowWealthTabs/>
{/* GROW WEALTH */}

{/* MISCRO SERVICES */}
<div className={`container ${classes.homepage_about_us}`}>
           
           <div className="row">
       

               <div className="col-md-6">
               <h1 className={`${classes.microservices_title} ${classes.desktoponly}`}>We make building <span className={classes.make_red}>wealth <br/></span> easier for you.</h1>
               <h1 className={`${classes.microservices_title} ${classes.mobileonly}`}>We make building <span className={classes.make_red}>wealth </span> easier for you.</h1>

               <h6 className={classes.homepage_subtitle}>The Oak Finance team provides a variety of <br/> microservices to its users, including:.</h6>
               <p><img src="/images/homepage/check.svg"/> <span  className={classes.microserviceslist}>Business Advisory</span></p>
               <p><img src="/images/homepage/check.svg"/> <span className={classes.microserviceslist}>Portfolio management</span></p>
               <p><img src="/images/homepage/check.svg"/> <span className={classes.microserviceslist}>Financial Education</span></p>
           
               </div>

               <div className={`col-md-6 ${classes.microservicesimage}`}>
                   <p style={{textAlign:"center"}}><img className="img-fluid" src="/images/homepage/about.svg" alt="" /></p>
               </div>             
           </div>
</div>
{/* MISCRO SERVICES */}

{/* STEPS */}
<div className={classes.home_steps}>
<Steps/>
</div>

{/* STEPS */}

{/* DATA SECURITY */}
<div className={classes.security_steps}>
<Security/>
</div>

{/* DATA SECURITY */}

{/* START GROWING */}
<div className={classes.growth_steps}>
<Growth/>
</div>
{/* START GROWING */}

{/* TESTIMONIALS */}
<div className={classes.testimonial_steps}>
<Testimonials/>
</div>
{/* TESTIMONIALS */}

{/* FAQ */}
<div className={classes.faq_steps}>
<Faqexcerpt/>
</div>
{/* FAQ */}

{/* CONTACT US*/}
<div className={classes.contact_steps}>
<ContactExcerpt/>
</div>
{/* CONTACT US*/}





{/* FOOTER */}
<Footer className={classes.footer}/>
{/* FOOTER */}

        </>
       
    )
}

export default Home