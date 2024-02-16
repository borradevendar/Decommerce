import React from 'react'
import Layout from '../components/layout/Layout'

const Policy = () => {
  return (
    <Layout title={"Policy - Decommerce app"}>
        <div className="row aboutus">
        <div className="col-md-6">
          <img
            src="/images/policy.jpg"
            alt="contactus"
            style={{ maxWidth: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">Privacy Policy</h1>
          <ul>
            <li>Data Collection</li>
            <li>Purpose Limitation</li>
            <li>Data Security</li>
            <li>User Consent</li>
            <li>Data Access</li>
            <li>Data Retention</li>
            <li>Transparency</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Policy