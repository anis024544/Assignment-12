import React from "react";
import { Link } from "react-router-dom";
import faqs from "../../Assets/faqs.jpg";
const Faq = () => {
  return (
    <section>
      <div
        className="h-36 flex justify-center items-center"
        style={{ background: `url(${faqs})` }}
      >
        <h1 className="text-white text-6xl font-bold">
          Frequently Asked Question
        </h1>
      </div>
      <div className="text-black my-10  flex justify-around items-center">
       
        <div>
        <h2 className="bg-success inline rounded font-bold text-1xl">Vimo Membership</h2>
             <Link to=''> <li style={{listStyleType:'circle'}}>Basic information</li></Link>
         <Link to=''> <li style={{listStyleType:'circle'}}>Basic information</li></Link>
         <Link to=''> <li style={{listStyleType:'circle'}}>Basic information</li></Link>
         <Link to=''> <li style={{listStyleType:'circle'}}>Basic information</li></Link>
        </div>
       
        <div>
        <h2 className="bg-success inline rounded font-bold text-1xl">Vimo Membership</h2>
        
             <Link to=''> <li style={{listStyleType:'circle'}}>Basic information</li></Link>
         <Link to=''> <li style={{listStyleType:'circle'}}>Basic information</li></Link>
         <Link to=''> <li style={{listStyleType:'circle'}}>Basic information</li></Link>
         <Link to=''> <li style={{listStyleType:'circle'}}>Basic information</li></Link>
        </div>
      
        <div>
        <h2 className="bg-success inline rounded font-bold text-1xl">Vimo Membership</h2>
        
             <Link to=''> <li style={{listStyleType:'circle'}}>Basic information</li></Link>
         <Link to=''> <li style={{listStyleType:'circle'}}>Basic information</li></Link>
         <Link to=''> <li style={{listStyleType:'circle'}}>Basic information</li></Link>
         <Link to=''> <li style={{listStyleType:'circle'}}>Basic information</li></Link>
        </div>
      </div>
    </section>
  );
};

export default Faq;
