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
import { motion } from "framer-motion";

const content = {
    animate: {
      transition: { staggerChildren: 0.1 },
    },
  };

const box1 = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const box2 = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 5.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const title3 = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 4.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };



const Home = () => {


    return (
        <>          
            <Header className={classes.header}/>
            {/* <motion.section
      exit={{ opacity: 0 }}
    >
      <motion.div
        variants={content}
        animate="animate"
        initial="initial"
      
      > */}
       
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="2000"
            >
            {/* <div className={classes.hompepagebg}> */}
            <div className={classes.about_first_box}>
            <div className="container">         
            <div className={classes.homepage}>
                <div className={classes.box}>
                <div className="row">
                    <div className="col-md-6">
                    <h4 className={classes.homepage_title}>Connect Your <span className={classes.make_red}>Wealth</span> <br/>Circles With Circle Finance</h4>
                    <h6 className={classes.homepage_subtitle}>Our innovative financial platform is more than just a service—it's a community of like-minded individuals who want to see their money grow and their financial dreams come true!</h6>
                    <a href="https://app.circlefinance.com" target="_blank"> <button  className={classes.homepage_button}>Sign up now</button></a>                   
                    <img className={`downarrow ${classes.homepage_scroll}`}  src="/images/homepage/scroll.svg" alt="" />
                    </div>
                    <div className="col-md-1">                
                    </div>
                    <div className="col-md-5">
                        <img className={`img-fluid ${classes.homepage_image}`} src="/images/homepage/1.svg"/>
                    </div>
                </div>                  
                </div>         
            </div>
            </div>
            </div>
            {/* </div> */}
          
    
            <div className={classes.homepage_partners} id="partners">
            <Partners/>
            </div>
            </div>
       

            <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="2000"
            >
            <div className={`container ${classes.homepage_about_us}`}>     
                <div className="row">
                <div className={`col-md-6 ${classes.weprovideimage} ${classes.desktoponly} `}>
                        <p style={{textAlign:"center"}}><img className="img-fluid" src="/images/homepage/about.svg" alt="" /></p>
                    </div>

                    <div className="col-md-6">
                    <h1 className={classes.about_us_title}>Our wealth buiilding strategy</h1>
                    <p className={classes.homepage_subtitle}>
                    At Circle Finance, we understand that building wealth requires a multifaceted financial strategy. 
                    That's why we offer a comprehensive suite of financial services, including loans and investments in alternative assets like credit and real estate,
                     through short-term savings, fixed investments, and partnerships. Our platform is designed to help you grow your wealth and achieve your financial 
                     dreams in the most efficient and effective way possible.
                        </p>
                    <p  className={classes.about_button}>Learn more <img src="/images/homepage/green-right-arrow.svg" style={{paddingLeft:"15px", fontSize:"20px"}}/></p>
                
                    </div>

                    <div className={`col-md-6 ${classes.weprovideimage} ${classes.mobileonly} `}>
                        <p style={{textAlign:"center"}}><img className="img-fluid" src="/images/homepage/about.svg" alt="" /></p>
                    </div>              
                </div>
            </div>

            <div className={`container ${classes.investorsimage}`}>
           
           <div className="row">
           <div className="col-md-5">
           <h1 className={classes.why_trust_us_title}>Why trust us as an <br/> Investor?</h1>
                    <p className={classes.homepage_subtitle}>
                    At Circle Finance, we believe that trust is the cornerstone of any successful financial partnership. That's why we're committed to providing our clients with the highest levels of transparency, accountability, and integrity. With years of experience in the financial industry, our team of experts is dedicated to helping you achieve your financial goals through our innovative investment platform, and we're always here to answer any questions you may have.
                        </p>
                        <div className={classes.tabsbuttons}>
                    <a target="_blank" href="https://app.circlefinance.com"><button  className={classes.homepage_button}>Get started now</button></a>

                    <a href="/product?name=reif">
                    <p  className={classes.tabs_button}>Learn more 
                    <img src="/images/homepage/green-right-arrow.svg" style={{paddingLeft:"15px", fontSize:"20px"}}/>
                    </p>
                    </a>
                    
                    </div>   
               </div>
               <div className="col-md-1"></div>
               
           <div className={`col-md-6`}>
                   <div className={`row ${classes.trust_inner_box}`}>
                <div className="col-md-1 col-2">
                <img className="img-fluid" src="/images/homepage/security.svg" alt="" />
                </div>
                <div className="col-md-10 col-10">
                <h2 className={classes.trust_subtitle}>Security of funds</h2>
                <h6 className={classes.homepage_subtitle_trust}>
                We place a huge premium on the security of our investor's funds. 
                This is why we take stringent measures in both research  
                and other safe investment practices to ensure that our investor's funds are secure.
                    </h6>
                </div>
               </div>

               <div className={`row ${classes.trust_inner_box2}`}>
                <div className="col-md-1 col-2">
                <img className="img-fluid" src="/images/homepage/money-send.svg" alt="" />
                </div>
                <div className="col-md-10 col-10">
                <h2 className={classes.trust_subtitle}>Profitability</h2>
                <h6 className={classes.homepage_subtitle_trust}>
                We prioritize profitability in our goal to generate reliable and profitable returns for our clients. We believe that the 
                ultimate goal of investing is to increase wealth and achieve financial success.
                     
                     </h6>
                </div>
               </div>

               <div className={`row ${classes.trust_inner_box2}`}>
                <div className="col-md-1 col-2">
                <img className="img-fluid" src="/images/homepage/chart.svg" alt="" />
                </div>
                <div className="col-md-10 col-10">
                <h2 className={classes.trust_subtitle}>Diverse assets class</h2>
                <h6 className={classes.homepage_subtitle_trust}>
                We believe strongly in asset diversification for long-term  financial success. This is why we have a trained team of 
                 investment experts who can identify profitable opportunities  across various markets and asset classes, such as credit, real estate, 
                 and alternatives, for our clients.
                    
                    </h6>
                </div>
               </div>
               </div>

         

             
           </div>
            </div>
            </div>
       

            <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="2000"
            >
<GrowWealthTabs/>
</div>


<div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="2000"
            >
<div className={classes.commitmentbox}>
<div className={`container ${classes.homepage_about_us}`}>
           
           <div className="row">
       

               <div className="col-md-5">
               <h1 className={`${classes.microservices_title} ${classes.desktoponly}`}>Our Commitment to <br/>Innovation.</h1>
               <h1 className={`${classes.microservices_title} ${classes.mobileonly}`}>Our Commitment to <br/>Innovation</h1>

               <h6 className={classes.homepage_subtitle}>
               At Circle Finance, we're committed to staying on the cutting edge of financial technology. We believe that innovation is key to providing our clients with the best possible investment experience, which is why we're always exploring new ways to enhance our platform and improve our services. Whether it's through the latest financial tools and resources or the development of new investment products, we're dedicated to helping you achieve your financial goals in the most innovative and efficient way possible.
                </h6>
                <p className={classes.tabs_learn_more}>Learn more <img src="/images/homepage/green-right-arrow.svg" style={{paddingLeft:"15px", fontSize:"20px"}}/></p>

           
               </div>

               <div className="col-md-2"></div>

               <div className={`col-md-5 ${classes.microservicesimage}`}>
                   <p className={classes.microserviceslist1}><img src="/images/homepage/check.svg"/> <span  className={classes.microserviceslist}>Business Advisory</span></p>
               <p className={classes.microserviceslist2}><img src="/images/homepage/check.svg"/> <span className={classes.microserviceslist}>Portfolio management</span></p>
               <p className={classes.microserviceslist2}><img src="/images/homepage/check.svg"/> <span className={classes.microserviceslist}>Financial Education</span></p>
          
               </div>             
           </div>
</div>
</div>


<div className={classes.home_steps}>
<Steps/>
</div>
</div>


<div className={classes.growth_steps}>
<Growth/>
</div>

<div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="2000"
            >
<div className={classes.testimonial_steps}>
<Testimonials/>
</div>

<div className={classes.faq_steps}>
<Faqexcerpt/>
</div>
</div>

<div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="2000"
            >
<div className={classes.contact_steps}>
<ContactExcerpt/>
</div>
</div>

<Footer className={classes.footer}/>



{/* </motion.div>
</motion.section> */}


        </>
       
    )
}

export default Home