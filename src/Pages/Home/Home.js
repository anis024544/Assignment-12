import React from "react";
import Faq from "../Faq/Faq";
import Banner from "../Home/Banner";
import AddProduct from "../Parts/AddProduct";
import Parts from '../Parts/Parts'
import BusinessSummary from "./BusinessSummary";
import ContactForm from "./ContactForm";
import Testimonials from "./Testimonials";
const Home = () => {
  return (
    <div>
      <Banner />
      <Parts />
      <BusinessSummary />
      <Testimonials />
      <ContactForm/>
      <Faq/>
      <AddProduct/>
    </div>
  );
};

export default Home;
