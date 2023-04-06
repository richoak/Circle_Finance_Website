import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Partners from "./Partners";
import Growth from "./Growth";
import classes from "./Microservices.module.css"





const Microservices = () => {

    return (
        <Fragment>

    <Header className={classes.header}/>

    <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="2000"
            >
    <div className={classes.about_first_box}>
    <div className="container">
    <div className="row">
   

        <div className="col-md-12">
        <h1 className={classes.about_firstbox_title}>We also provide a range <br/> of micro services</h1>
        <h6 className={`${classes.about_firstbox_subtitle} ${classes.desktoponly}`}>The Oak Finance team provides a variety of microservices<br/> to its users, including:</h6>
        <h6 className={`${classes.about_firstbox_subtitle} ${classes.mobileonly}`}>The Oak Finance team provides a variety of microservices to its users, including:</h6>

        
        
        {/* <button  className={classes.about_button}>Learn more <i class="fas fa-angle-right" style={{paddingLeft:"15px", fontSize:"20px"}}></i></button> */}
    
        </div> 
    </div>
</div>
</div>
</div>
 


<div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="2500"
            >
    <div className={classes.about_second_box}>
    <div className="container">
    <div className="row">
        <div className="col-md-6">
        <h1 className={classes.about_secondbox_title}>Business advisory</h1>
        <h6 className={classes.about_secondbox_subtitle}>
        Oak Finance offers a range of business advisory services to assist clients in enhancing their financial literacy. These services include personalized support and guidance tailored to address specific financial issues or questions, as well as educational resources to improve overall understanding of finance. The team at Oak Finance works closely with clients to understand their unique investment preferences and provide customized support accordingly.
             </h6>
        </div> 
        <div className="col-md-6">
      
        </div> 
    </div>

</div>
</div>
</div>



<div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="3000"
            >
    <div className={classes.about_second_box}>
    <div className="container">
    <div className="row">
    <div className="col-md-6">
      
      </div> 
        <div className="col-md-6">
        <h1 className={classes.about_secondbox_title}>Portfolio management</h1>
        <h6 className={classes.about_secondbox_subtitle}>
        Oak Finance team offers a wide range of portfolio management services, to help our clients identify and prioritise their financial goals and develop a personalised investment strategy including investment planning, asset allocation, and risk management.            
             </h6>
        </div> 
     
    </div>
    {/* <hr className={classes.secondboxhr}/> */}
</div>
</div>
   </div>


   <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="3500"
            >
<div className={classes.about_second_box}>
    <div className="container">
    <div className="row">
        <div className="col-md-6">
        <h1 className={classes.about_secondbox_title}>Financial Education</h1>
        <h6 className={classes.about_secondbox_subtitle}>
        Oak Finance team provides various educational resources to help users understand and improve their financial literacy. The former includes personalised support and guidance to help users navigate specific financial challenges or questions they may encounter, based on unique investment preferences.             </h6>
        </div> 
        <div className="col-md-6">
      
        </div> 
    </div>
  
    <hr className={classes.secondboxhr}/>
</div>
</div>
</div>

<div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="4000"
            >
<div className={classes.contact_secondbox}>
    <div className="container">
    <p className={classes.contact_firstbox_title}>Oak Finance features</p>
    <p className={`${classes.contact_firstbox_subtitle} ${classes.desktoponly}`}>
    We offer a range of financial services to make managing finances easy and help reach<br/> financial goals. Whether it's investing, retirement planning, or budgeting, we have the tools <br/> and resources to take control of your financial future.
                        </p>
                        <p className={`${classes.contact_firstbox_subtitle} ${classes.mobileonly}`}>
    We offer a range of financial services to make managing finances easy and help reach financial goals. Whether it's investing, retirement planning, or budgeting, we have the tools  and resources to take control of your financial future.
                        </p>
    <div className="row">   


                <div className={`col-md-4 ${classes.featuresbox}`}>
                  <img width="50" src="/images/homepage/ao.svg" alt="" />
                <p className={classes.contact_secondbox_title}>Dedicated Account Officer</p>
                 <p className={classes.contact_secondbox_subtitle}>
                 Each client is assigned a dedicated account officer who is responsible for providing personalised support and guidance. Your account officer will work with you to understand your financial goals and help you make informed decisions about your investments.
                    </p>
                </div>
                <div className={`col-md-4 ${classes.featuresbox} ${classes.featuresbox2}`}>
                <img width="50" src="/images/homepage/ma.svg" alt="" />
                <p className={classes.contact_secondbox_title}>Mobile Application</p>
                 <p className={classes.contact_secondbox_subtitle}>
                 Our mobile application allows you to manage your investments on the go. You can access your account information, review your statement, and interact with your account officer in real-time.
                 </p>
                </div>  

                <div className={`col-md-4 ${classes.featuresbox} ${classes.featuresbox2}`}>
                <img width="50" src="/images/homepage/as.svg" alt="" />
                <p className={classes.contact_secondbox_title}>Account Statement</p>
                 <p className={classes.contact_secondbox_subtitle}>
                 With Oak Finance, you'll have easy access to your account statement, which includes all transactions, balances, and returns. You can review your statement online, ensuring that you're always up-to-date on your account activity.
                 </p>
                    </div>  

          
           </div>
    </div>
      
       </div>
       </div>

<>

<div className={classes.growth_steps}>
<Growth/>
</div>

</>


{/* FOOTER */}
<Footer className={classes.footer}/>
{/* FOOTER */}

</Fragment>
)
}

export default Microservices