import React from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import classes from "./Header.module.css"
// import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";


const Header = () => {
  const router = useRouter();

    return (
      <>
      <div className={classes.headernavbar}>
      <div className={`container ${classes.navigationbar}`}>
    <nav  className={`navbar navbar-expand-lg navbar-light ${classes.navigationmenu}`}>
      

      <Link href="/" activeClassName="is-active" >
      <a className="navbar-brand" href="/">
        <img width="" height="40" src="/images/homepage/logo.svg"/>
        </a>
            </Link>
     
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
    
        </ul>

        {/* CENTERD MENU */}
        <ul className="nav navbar-nav">


        <div  className={`nav-item dropdown ${classes.menuitem}`} >
        <a className={`nav-link dropdown-toggle ${classes.menuitem} ${classes.firstmenuitem}`} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Our Company
        </a>
        <div className={`dropdown-menu ${classes.menuitem} ${classes.navbarouter} ${classes.companyoption}`} aria-labelledby="navbarDropdown">
          <div className={`dropdown-item ${classes.navbarinner}`}>
            <div className={`row ${classes.navbarinnerrow}`}>
              <div className="col-md-2 col-2">
                <img src="/images/homepage/navbar_icon.svg" alt="" />
              </div>
              <div className="col-md-10 col-10">
                <div>
                <Nav.Link className="hmothermenu2" as={Link} href="/about" eventKey="4"  >
                <p className={classes.navbartitle}>About Us</p>
                </Nav.Link>
                <p className={classes.navbardescription}>View including no-brainer across <br/>resources horse money devil data.</p>
               
                </div>
              </div>      
            </div>

            <div className={`row ${classes.navbarinnerrow}`}>
              <div className="col-md-2 col-2">
                <img src="/images/homepage/navbar_icon.svg" alt="" />
              </div>
              <div className="col-md-10 col-10">
                <div>
                <Nav.Link href="http://linkedin.com/richoakgroup/jobs" eventKey="8"   >
                <p className={classes.navbartitle}>Blog & Media</p>
                </Nav.Link>
                <p className={classes.navbardescription}>View including no-brainer across <br/>resources horse money devil data.</p>
                </div>
              </div>      
            </div>

            <div className={`row ${classes.navbarinnerrow}`}>
              <div className="col-md-2 col-2">
                <img src="/images/homepage/navbar_icon.svg" alt="" />
              </div>
              <div className="col-md-10 col-10">
                <div>
                <Nav.Link  href="http://linkedin.com/richoakgroup/jobs" eventKey="8" >
                <p className={classes.navbartitle}>Career</p>
                <p className={classes.navbardescription}>View including no-brainer across <br/>resources horse money devil data.</p>
                </Nav.Link>

                </div>
              </div>      
            </div>
            </div>
     
      </div>
      </div>


      <div  className={`nav-item dropdown ${classes.menuitem}`} >
        <a className={`nav-link dropdown-toggle ${classes.menuitem} ${classes.secondmenuitem}`} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Products
        </a>
        <div className={`dropdown-menu ${classes.menuitem} ${classes.navbarouter} ${classes.productoption} `} aria-labelledby="navbarDropdown">
          <div className={`dropdown-item ${classes.navbarinner} ${classes.productmenu}`}>
            <div className="row">
              <div className="col-md-6">
              <div className={`row ${classes.navbarinnerrow} `}>
              <div className="col-md-2 col-1">
                <img src="/images/homepage/navbar_icon.svg" alt="" />
              </div>
              <div className="col-md-10 col-11">
                <div>
                <Nav.Link className="hmothermenu2" as={Link} href="/product?name=premium" eventKey="4"  >
                <p className={classes.navbartitle}>Premium</p>
                </Nav.Link>
                <p className={classes.navbardescription}>View including no-brainer across <br/>resources horse money devil data.</p>
               
                </div>
              </div>      
            </div>

            <div className={`row ${classes.navbarinnerrow}`}>
              <div className="col-md-2 col-1">
                <img src="/images/homepage/navbar_icon.svg" alt="" />
              </div>
              <div className="col-md-10 col-11">
                <div>
                <Nav.Link className="hmothermenu2" as={Link} href="/product?name=premiumplus" eventKey="4"  >
                <p className={classes.navbartitle}>Premium Plus</p>
                </Nav.Link>
                <p className={classes.navbardescription}>View including no-brainer across <br/>resources horse money devil data.</p>
                </div>
              </div>      
            </div>

            <div className={`row ${classes.navbarinnerrow}`}>
              <div className="col-md-2 col-1">
                <img src="/images/homepage/navbar_icon.svg" alt="" />
              </div>
              <div className="col-md-10 col-11">
                <div>
                <Nav.Link className="hmothermenu2" as={Link} href="/product?name=reif" eventKey="4"  >
                <p className={classes.navbartitle}>Real Estate Investment Fund</p>
                </Nav.Link>
                <p className={classes.navbardescription}>View including no-brainer across <br/>resources horse money devil data.</p>
             

                </div>
              </div>      
            </div>
              </div>




              <div className="col-md-6">
              <div className={`row ${classes.navbarinnerrow}`}>
              <div className="col-md-2 col-1">
                <img src="/images/homepage/navbar_icon.svg" alt="" />
              </div>
              <div className="col-md-10 col-11">
                <div>
                <Nav.Link className="hmothermenu2" as={Link} href="/product?name=platinum" eventKey="1"  >
                <p className={classes.navbartitle}>Platinum Investment</p>
                </Nav.Link>
                <p className={classes.navbardescription}>View including no-brainer across <br/>resources horse money devil data.</p>
               
                </div>
              </div>      
            </div>

            <div className={`row ${classes.navbarinnerrow}`}>
              <div className="col-md-2 col-1">
                <img src="/images/homepage/navbar_icon.svg" alt="" />
              </div>
              <div className="col-md-10 col-11">
                <div>
                <Nav.Link className="hmothermenu2" as={Link} href="/product?name=partnership" eventKey="2"  >
                <p className={classes.navbartitle}>Limited Partnership</p>
                </Nav.Link>
                <p className={classes.navbardescription}>View including no-brainer across <br/>resources horse money devil data.</p>
                </div>
              </div>      
            </div>

            <div className={`row ${classes.navbarinnerrow}`}>
              <div className="col-md-2 col-1">
                <img src="/images/homepage/navbar_icon.svg" alt="" />
              </div>
              <div className="col-md-10 col-11">
                <div>
                <Nav.Link className="hmothermenu2" as={Link} href="microservices" eventKey="3"  >
                <p className={classes.navbartitle}>Our Micro Services</p>
                </Nav.Link>
                <p className={classes.navbardescription}>View including no-brainer across <br/>resources horse money devil data.</p>
                

                </div>
              </div>      
            </div>
              </div>
            </div>
          
            </div>
     
      </div>
      </div>






      <div  className={`nav-item dropdown ${classes.lastmenuitem}`} >
        <a className={`nav-link dropdown-toggle ${classes.menuitem} ${classes.secondmenuitem}`} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Support
        </a>
        <div className={`dropdown-menu ${classes.menuitem} ${classes.navbarouter}`} aria-labelledby="navbarDropdown">
          <div className={`dropdown-item ${classes.navbarinner}`}>
            <div className={`row ${classes.navbarinnerrow}`}>
              <div className="col-md-2 col-2">
                <img src="/images/homepage/navbar_icon.svg" alt="" />
              </div>
              <div className="col-md-10 col-10">
                <div>
                <Nav.Link className="hmothermenu2" as={Link} href="/contact" eventKey="4"  >
                <p className={classes.navbartitle}>Contact Us</p>
                </Nav.Link>
                <p className={classes.navbardescription}>View including no-brainer across <br/>resources horse money devil data.</p>
               
                </div>
              </div>      
            </div>

            <div className={`row ${classes.navbarinnerrow}`}>
              <div className="col-md-2 col-2">
                <img src="/images/homepage/navbar_icon.svg" alt="" />
              </div>
              <div className="col-md-10 col-10">
                <div>
                <Nav.Link className="hmothermenu2" as={Link} href="/faq" eventKey="5"  >
                <p className={classes.navbartitle}>FAQs</p>
                </Nav.Link>
                <p className={classes.navbardescription}>View including no-brainer across <br/>resources horse money devil data.</p>
                </div>
              </div>      
            </div>

         
            </div>
     
      </div>
      </div>
    

            
      </ul>

        <div className="my-2 my-lg-0">
        <ul className="navbar-nav mr-auto">
        {/* {router.pathname == "/signup" ? "nav-link nav-item navitemactive" : "nav-link nav-item"}  */}
        {/* <Link href="/signup" activeClassName="is-active" className={classes.menuitem}>
            <a className={`nav-link nav-item ${classes.menuitem}`} href="#">Our Company </a>
            </Link>

        <Link href="/signup" activeClassName="is-active" className={classes.menuitem}>
            <a className={`nav-link nav-item ${classes.menuitem}`} href="#">Products </a>
            </Link>

           <Link href="/signin" activeClassName="is-active" className={classes.lastmenuitem}>
            <a className={`nav-link nav-item ${classes.lastmenuitem}`}  href="#">Support </a>
            </Link>
     */}
           <button  className={`${classes.desktoponly} ${classes.header_button}`}>Sign up now </button>

        </ul>
        </div>
        <button  className={`${classes.mobileonly} ${classes.header_button}`}>Create account </button>


      </div>
    </nav>







    
      </div>
      </div>
   
 {/* <hr className={classes.header_hr}/> */}
 </>
    )
}

export default Header