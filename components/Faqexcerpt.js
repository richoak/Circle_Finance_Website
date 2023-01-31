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
            <h1 className={classes.faq_title}>Frequently Asked Questions</h1>
            <p className={classes.faq_subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus mattis vel feugiat erat tortor eleifend..</p>
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

            </div>
     </>
    )
}

export default Faqexcerpt