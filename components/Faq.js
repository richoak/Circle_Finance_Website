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
<h1 className={classes.faq_title2}>Products</h1>
    <div className="row">
    <div className="col-md-6">
    <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header className={classes.faqheader}>What is Boar about?

</Accordion.Header>
    <Accordion.Body className={classes.faqbody}>

    Boar Provides the all in one solution to cater for businesses to manage all on-prem and off-prem order sources in one system.


    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="1">
    <Accordion.Header className={classes.faqheader}>Can I set-up more than 10 branches

</Accordion.Header>
    <Accordion.Body className={classes.faqbody}>
    Boar Provides the all in one solution to cater for businesses to manage all on-prem and off-prem order sources in one system.

    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="2">
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





</Accordion>
    </div>

    <div className="col-md-6">
    <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header className={classes.faqheader}>What is Boar about?

</Accordion.Header>
    <Accordion.Body className={classes.faqbody}>

    Boar Provides the all in one solution to cater for businesses to manage all on-prem and off-prem order sources in one system.


    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="1">
    <Accordion.Header className={classes.faqheader}>Can I set-up more than 10 branches

</Accordion.Header>
    <Accordion.Body className={classes.faqbody}>
    Boar Provides the all in one solution to cater for businesses to manage all on-prem and off-prem order sources in one system.

    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="2">
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





</Accordion>
        </div>
    </div>

</div>

<div className="container">
<hr className={classes.faqhr}/>
</div>


<div className="container">
<h1 className={classes.faq_title3}>Products</h1>
    <div className="row">
    <div className="col-md-6">
    <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header className={classes.faqheader}>What is Boar about?

</Accordion.Header>
    <Accordion.Body className={classes.faqbody}>

    Boar Provides the all in one solution to cater for businesses to manage all on-prem and off-prem order sources in one system.


    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="1">
    <Accordion.Header className={classes.faqheader}>Can I set-up more than 10 branches

</Accordion.Header>
    <Accordion.Body className={classes.faqbody}>
    Boar Provides the all in one solution to cater for businesses to manage all on-prem and off-prem order sources in one system.

    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="2">
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





</Accordion>
    </div>

    <div className="col-md-6">
    <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header className={classes.faqheader}>What is Boar about?

</Accordion.Header>
    <Accordion.Body className={classes.faqbody}>

    Boar Provides the all in one solution to cater for businesses to manage all on-prem and off-prem order sources in one system.


    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="1">
    <Accordion.Header className={classes.faqheader}>Can I set-up more than 10 branches

</Accordion.Header>
    <Accordion.Body className={classes.faqbody}>
    Boar Provides the all in one solution to cater for businesses to manage all on-prem and off-prem order sources in one system.

    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="2">
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





</Accordion>
        </div>
    </div>

</div>

<div className="container">
<hr className={classes.faqhr}/>
</div>

<div className="container">
<h1 className={classes.faq_title3}>Products</h1>
    <div className="row">
    <div className="col-md-6">
    <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header className={classes.faqheader}>What is Boar about?

</Accordion.Header>
    <Accordion.Body className={classes.faqbody}>

    Boar Provides the all in one solution to cater for businesses to manage all on-prem and off-prem order sources in one system.


    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="1">
    <Accordion.Header className={classes.faqheader}>Can I set-up more than 10 branches

</Accordion.Header>
    <Accordion.Body className={classes.faqbody}>
    Boar Provides the all in one solution to cater for businesses to manage all on-prem and off-prem order sources in one system.

    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="2">
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





</Accordion>
    </div>

    <div className="col-md-6">
    <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header className={classes.faqheader}>What is Boar about?

</Accordion.Header>
    <Accordion.Body className={classes.faqbody}>

    Boar Provides the all in one solution to cater for businesses to manage all on-prem and off-prem order sources in one system.


    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="1">
    <Accordion.Header className={classes.faqheader}>Can I set-up more than 10 branches

</Accordion.Header>
    <Accordion.Body className={classes.faqbody}>
    Boar Provides the all in one solution to cater for businesses to manage all on-prem and off-prem order sources in one system.

    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="2">
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