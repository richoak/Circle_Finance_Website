import React, {Fragment} from "react"
import Head from "next/head"
import Stepthree from "../components/Order/Stepthree"

const StepthreePage = () => {
  return (
    <Fragment>
    <Head>
    <title>Step Three | Workerr </title>
    <meta 
    name="description" 
    content="Find trusted hands to handle your chores"/>  
    </Head>  
    <Stepthree/>
</Fragment>
   
  )
}

export default StepthreePage 