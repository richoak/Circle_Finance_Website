import React from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from "./Header";
import Growth from "./Growth";
import Footer from "./Footer";
import classes from "./Faq.module.css"
import { Accordion } from 'react-bootstrap'


const Faq = () => {
  const router = useRouter();

    return (
      <>
         <Header className={classes.header}/>
      <div className={classes.faq}>
            <h1 className={classes.faq_title}>Frequently Asked Questions</h1>
            <p className={`${classes.faq_subtitle} ${classes.desktoponly}`}>
            At Oak Finance, we are dedicated to offering the best financial guidance and investment <br/>opportunities to our clients. We understand that every individual has different needs <br/>and goals when it comes
                </p>
                <p className={`${classes.faq_subtitle} ${classes.mobileonly}`}>
            At Oak Finance, we are dedicated to offering the best financial guidance and investment opportunities to our clients. We understand that every individual has different needs and goals when it comes
                </p>
<div className="container">
<h1 className={classes.faq_title2}>General</h1>
    <div className="row">
    <div className="col-md-6">
    <Accordion>
      
  <Accordion.Item eventKey="0">
    <Accordion.Header className={classes.faqheader}>Do you have a physical office that I can visit?

</Accordion.Header>
    <Accordion.Body className={classes.faqbody}>

    Yes, we do, you can visit our office at Plot 1702, Grand Pela Hotel Street, Durumi, Abuja.

    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="1">
    <Accordion.Header className={classes.faqheader}>What type of investment do you do?

</Accordion.Header>
    <Accordion.Body className={classes.faqbody}>
    We are consistently exploring the investment industry as a company, we invest in Real estate, credits and Agriculture.
    </Accordion.Body>
  </Accordion.Item>



  {/* <Accordion.Item eventKey="4">
    <Accordion.Header className={classes.faqheader}>How do I set up?
</Accordion.Header>
    <Accordion.Body className={classes.faqbody}>
    Boar Provides the all in one solution to cater for businesses to manage all on-prem and off-prem order sources in one system.

    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="5">
    <Accordion.Header className={classes.faqheader}>How can i sign up?

</Accordion.Header>
    <Accordion.Body className={classes.faqbody}>
    Boar Provides the all in one solution to cater for businesses to manage all on-prem and off-prem order sources in one system.


    </Accordion.Body>
  </Accordion.Item> */}





</Accordion>
    </div>

    <div className="col-md-6">
    <Accordion>
    <Accordion.Item eventKey="2">
    <Accordion.Header className={classes.faqheader}>Are you registered with SEC or CBN?
</Accordion.Header>
    <Accordion.Body className={classes.faqbody}>
    We are registered with SEC and actively working on our registration with CBN.
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="3">
    <Accordion.Header className={classes.faqheader}>	Do you give loans?
</Accordion.Header>
    <Accordion.Body className={classes.faqbody}>
    Yes, we do
    </Accordion.Body>
  </Accordion.Item>

  {/* <Accordion.Item eventKey="2">
    <Accordion.Header className={classes.faqheader}>How can i sign up?
</Accordion.Header>
    <Accordion.Body className={classes.faqbody}>
    Boar Provides the all in one solution to cater for businesses to manage all on-prem and off-prem order sources in one system.

    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="3">
    <Accordion.Header className={classes.faqheader}>What is the subscription like?
</Accordion.Header>
    <Accordion.Body className={classes.faqbody}>
    Boar Provides the all in one solution to cater for businesses to manage all on-prem and off-prem order sources in one system.

    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="4">
    <Accordion.Header className={classes.faqheader}>How do I set up?
</Accordion.Header>
    <Accordion.Body className={classes.faqbody}>
    Boar Provides the all in one solution to cater for businesses to manage all on-prem and off-prem order sources in one system.

    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="5">
    <Accordion.Header className={classes.faqheader}>How can i sign up?

</Accordion.Header>
    <Accordion.Body className={classes.faqbody}>
    Boar Provides the all in one solution to cater for businesses to manage all on-prem and off-prem order sources in one system.


    </Accordion.Body>
  </Accordion.Item>
 */}




</Accordion>
        </div>
    </div>

</div>

<div className="container">
<hr className={classes.faqhr}/>
</div>


<div className="container">
<h1 className={classes.faq_title2}>Investment</h1>
    <div className="row">
    <div className="col-md-6">
    <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header className={classes.faqheader}>
    What are your different investment plans?
</Accordion.Header>
    <Accordion.Body className={classes.faqbody}>

    We have three (3) investment plans; Premium plan, Premium plus plan, REIF plan. 

    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="1">
    <Accordion.Header className={classes.faqheader}>
    What is the minimum amount I can start investing with?

</Accordion.Header>
    <Accordion.Body className={classes.faqbody}>
    At Circle Finance, you can start investing with as low as N 5,000 only.
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="2">
    <Accordion.Header className={classes.faqheader}>Can I invest for just 6 months?
</Accordion.Header>
    <Accordion.Body className={classes.faqbody}>
    Yes you can, with our premium plus plan you can invest for a minimum of 6 months.
    </Accordion.Body>
  </Accordion.Item>







</Accordion>
    </div>

    <div className="col-md-6">
    <Accordion>
    <Accordion.Item eventKey="3">
    <Accordion.Header className={classes.faqheader}>What is the maximum investment duration?
</Accordion.Header>
    <Accordion.Body className={classes.faqbody}>
    There is no limit to how long you want your money to work for you. You can invest for as long as you wish.
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="4">
    <Accordion.Header className={classes.faqheader}>Will my interest be paid monthly or upfront?
</Accordion.Header>
    <Accordion.Body className={classes.faqbody}>
    You can receive your interest monthly (this is applicable to our premium plus plan and REIF) or you can get your money upfront (this is applicable to the premium plus plan only)
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="5">
    <Accordion.Header className={classes.faqheader}>Can I pull out my money anytime I feel like?

</Accordion.Header>
    <Accordion.Body className={classes.faqbody}>
    No, once you invest your money, you can only receive your liquidation at the end of your maturity date.

    </Accordion.Body>
  </Accordion.Item>



</Accordion>
        </div>
    </div>

</div>

<div className="container">
<hr className={classes.faqhr}/>
</div>

<div className="container">
<h1 className={classes.faq_title2}>Credit</h1>
    <div className="row">
    <div className="col-md-6">
    <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header className={classes.faqheader}>Do you do Proof of Fund?

</Accordion.Header>
    <Accordion.Body className={classes.faqbody}>

    Yes, we do give Proof of Fund.

    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="1">
    <Accordion.Header className={classes.faqheader}>What is the interest for Proof of Fund?

</Accordion.Header>
    <Accordion.Body className={classes.faqbody}>
    The interest rate is 5%
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="2">
    <Accordion.Header className={classes.faqheader}>Must I bring a collateral to get a loan?
</Accordion.Header>
    <Accordion.Body className={classes.faqbody}>
    All loans are collateralized except for the Proof of Funds.
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="3">
    <Accordion.Header className={classes.faqheader}>What type of collateral do you accept?
</Accordion.Header>
    <Accordion.Body className={classes.faqbody}>
    Car collateral, Gadgets collateral.
    </Accordion.Body>
  </Accordion.Item>






</Accordion>
    </div>

    <div className="col-md-6">
    <Accordion>
    <Accordion.Item eventKey="4">
    <Accordion.Header className={classes.faqheader}>Do you give salary earners loans?
</Accordion.Header>
    <Accordion.Body className={classes.faqbody}>
    Yes we do
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="5">
    <Accordion.Header className={classes.faqheader}>Do you give business funding loans?

</Accordion.Header>
    <Accordion.Body className={classes.faqbody}>
    Yes we do

    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="6">
    <Accordion.Header className={classes.faqheader}>How many percent interest will I repay for loans? 

</Accordion.Header>
    <Accordion.Body className={classes.faqbody}>
    The interest varies for each type of loans you are collecting;
    Proof of Fund – 5%
    Salary backed loan – 6%
    Business loan – 10%


    </Accordion.Body>
  </Accordion.Item>




</Accordion>
        </div>
    </div>

</div>

{/* START GROWING */}
<div className={classes.growth_steps}>
<Growth/>
</div>
{/* START GROWING */}

{/* FOOTER */}
<Footer className={classes.footer}/>
{/* FOOTER */}

            </div>
     </>
    )
}

export default Faq