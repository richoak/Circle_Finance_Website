import React from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import classes from "./Faqexcerpt.module.css"
import { Accordion } from 'react-bootstrap'


const Faqexcerpt = () => {
  const router = useRouter();

    return (
      <>
      <hr/>
      <div className={classes.faq}>
            <h1 className={classes.faq_title}>Frequently asked questions</h1>
            {/* <p className={classes.faq_subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus mattis vel feugiat erat tortor eleifend..</p> */}
<div className="container">
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




</Accordion>
        </div>
    </div>

</div>

            </div>
     </>
    )
}

export default Faqexcerpt