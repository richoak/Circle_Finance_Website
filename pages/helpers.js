import React, {Fragment} from "react"
import Head from "next/head"
import Helpers from "../components/Helpers"

const HelpersPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Helpers | Chores </title>
    <meta 
    name="description" 
    content="Find trusted hands to handle your chores"/>  
    </Head>  
    <Helpers/>
</Fragment>
   
  )
}

export default HelpersPage 