import React from "react";
import Layout from "../components/layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact Us"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img src="/images/support.jpg" alt="contactus" style={{ maxWidth: "100%" }} />
        </div>
        <div className="innercontactus col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            ny query and info anout the product feel free to call anytime we are
            24X7 available
          </p>
          <p className="mt-3">
            <BiMailSend />
            :www.help@decommerceapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall />: 0123456789
          </p>
          <p className="mt-3">
            <BiSupport />
            :1200-3456-8567(tollfree)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
