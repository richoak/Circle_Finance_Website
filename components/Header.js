import React from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';


const Header = () => {
  const router = useRouter();

    return (
      <div className="container">
               <nav style={{marginTop:"15px", marginBottom:"15px"}} class="navbar navbar-expand-lg navbar-light bg-light">
      

      <Link href="/" activeClassName="is-active" >
      <a class="navbar-brand" href="/">Chores</a>
            </Link>
     
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
       
          <Link href="/helpers" activeClassName="is-active" >
            <a className={router.pathname == "/helpers" ? "nav-link nav-item navitemactive" : "nav-link nav-item"} href="#">Helpers </a>
            </Link>
      
            <Link href="/about" activeClassName="is-active" >
            <a className={router.pathname == "/about" ? "nav-link nav-item navitemactive" : "nav-link nav-item"} href="#">About </a>
            </Link>
    
        </ul>
        <div class="my-2 my-lg-0">
        <ul class="navbar-nav mr-auto">

        <Link href="/signup" activeClassName="is-active" >
            <a className={router.pathname == "/signup" ? "nav-link nav-item navitemactive" : "nav-link nav-item"} href="#">Sign Up </a>
            </Link>

           <Link href="/signin" activeClassName="is-active" >
            <a className={router.pathname == "/signin" ? "nav-link nav-item navitemactive" : "nav-link nav-item"} href="#">Sign In </a>
            </Link>
    
        </ul>
        </div>
      </div>
    </nav>
      </div>
 
    )
}

export default Header