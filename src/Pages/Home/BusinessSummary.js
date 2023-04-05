import React from 'react';


import { BsFlag, BsFillMotherboardFill} from "react-icons/bs";
import { AiFillAlert } from "react-icons/ai";
import { VscFeedback } from "react-icons/vsc";
import mapBackground from '../../Assets/mapBackground.png'

const BusinessSummary = () => {

    
    return (
        <div className=' my-20' style={{ background: `url(${mapBackground})`}}>
            {/* <img src={mapBackground} alt="" srcset="" /> */}
           <div className='pt-10'>
             <h1 className='font-bold text-5xl text-accent '>MILLIONS BUSINESS TRUST US</h1>
             <p className='uppercase text-2xl mt-4'>Try to understand users expectation</p>
           </div>
           <div className='flex justify-around items-center mt-20 pb-10'>
             <div className='flex  flex-col items-center'>
                 <BsFlag className='text-6xl  text-accent'/>
                <h2 className='text-6xl font-bold text-[050C93' >72</h2>
                <p className='text-2xl text-accent '>Countries</p>
             </div>
             <div className='flex  flex-col items-center '>
                 <BsFillMotherboardFill className='text-6xl  text-accent'/>
                <h2 className='text-6xl font-bold text-[050C93' >535+</h2>
                <p className='text-2xl text-accent'>Complete Projects</p>
             </div>
             <div className='flex  flex-col items-center'>
                 <AiFillAlert className='text-6xl  text-accent'/>
                <h2 className='text-6xl font-bold text-[050C93' >273+</h2>
                <p className='text-2xl text-accent'>Happy Clients</p>
             </div>
             <div className='flex  flex-col items-center'>
                 <VscFeedback className='text-6xl  text-accent'/>
                <h2 className='text-6xl font-bold text-[050C93' >432+</h2>
                <p className='text-2xl text-accent'>Feedbacks</p>
             </div>
           </div>
        </div>
    );
};

export default BusinessSummary;