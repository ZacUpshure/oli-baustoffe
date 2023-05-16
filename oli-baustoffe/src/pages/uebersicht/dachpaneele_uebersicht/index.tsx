import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from '../../../constants/images';
import overview from '../../../data/dachpaneele_overview.json';
import {AiOutlineArrowLeft} from 'react-icons/ai';

import {
    Navbar,
    NavbarTwo,
    Footer,
    Card
  } from '../../../components';

export async function getStaticProps(context: any) {
    return {
      props: {overview}, // will be passed to the page component as props
    }
}

const DachpaneeleUebersicht = (props: any) => {
  console.log("props", props)
const router = useRouter();
console.log("router: ", router);
return (
  <>
      <div className='container'>
        <NavbarTwo />
        <Link href="http://localhost:3000/uebersicht/" className='backlink link'><AiOutlineArrowLeft /> Zurück</Link>
      </div>
      <div className={'container center-text'}>
          <h1 className='heading_primary'> Trapezplatten Übersicht</h1>
          <div className="container grid grid--3-cols margin-bottom-md">
              {props.overview.map((overview: { id: any; name: any; imgUrl: any; websiteUrl: any; description: any; }) => {
                  return (
                      <Card key={overview.id}
                       name={overview.name} 
                       imgUrl={overview.imgUrl} 
                       websiteUrl={overview.websiteUrl} 
                       description={overview.description} />
                  );
              })}
          </div>
      </div>
      <Footer />
    </> 
  )
}

export default DachpaneeleUebersicht