import React from "react";
import Layout from "../components/layout/Layout";

const About = () => {
  return (
    <Layout title={"About Us"}>
      <div className="row aboutus">
        <div className="col-md-6">
          <img
            src="/images/about.jpg"
            alt="contactus"
            style={{ maxWidth: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">ABOUT US</h1>
          <p className="text-justify mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              quam eu ligula ullamcorper cursus. Sed euismod, metus eu aliquam
              eleifend, turpis mi congue libero, et facilisis odio ligula et ex.
              Nullam nec nisi nec felis bibendum sollicitudin.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
