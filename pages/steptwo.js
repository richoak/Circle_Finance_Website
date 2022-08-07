import React, {Fragment} from "react"
import Head from "next/head"
import Steptwo from "../components/Order/Steptwo"
import { MongoClient } from "mongodb";

const SteptwoPage = (props) => {
  return (
    <Fragment>
    <Head>
    <title>Step Two | Chores </title>
    <meta 
    name="description" 
    content="Find trusted hands to handle your chores"/>  
    </Head>  
    <Steptwo helpers={props.helpers}/>
</Fragment>
   
  )
}


// RUNS DURING THE BUILD PROCESS
export async function getStaticProps(){
  // Fetch data from API
  const client = await MongoClient.connect(
      'mongodb+srv://meetups:marvinsroom@cluster0.psbon9s.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();

    const helpersCollection = db.collection('helpers');

    const helpers = await helpersCollection.find().toArray()

    client.close()

  return {
      props:{
          helpers:helpers.map(helper => ({
              id: helper._id.toString(),
              name:helper.name,
              totalErrand: helper.totalerrand,
              mobile: helper.mobile,
              summary: helper.summary,
              image:helper.image,
              ratings:helper.ratings,
              noofreviews:helper.noofreviews,
              price:helper.price,
              phone:helper.phone
          }))
      },
      // IF YOU WANT NEXTJS TO UPDATE THE DATA IN SECONDS
      revalidate: 1
  }

}

export default SteptwoPage 