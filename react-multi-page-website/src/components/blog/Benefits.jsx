import React, { useEffect } from "react";
import { useParams } from "react-router";

function Benefits() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  return (
    <div className="home1">
      <div className="container1">
        <h1 style={{ color: '#886839', fontSize: '2.5rem', textAlign: 'center', paddingTop: '3rem', fontWeight: 'bold' }}>At Naples Pizza, we prioritize the health, happiness, and financial security of our team members</h1>
        <p style={{ color: '#58483A', fontSize: '1.2rem', textAlign: 'left', paddingBottom: '3rem', paddingTop: '3rem' }}>
          At Naples Pizza, we prioritize the health, happiness, and financial security of our team members. Our benefits package includes:
          <br />
          <br />
          - Health Insurance: Access to medical, dental, and vision coverage to support your physical well-being.
          <br />
          <br />
          - Retirement Plans: Secure your future with our retirement savings plans and employer contributions.
          <br />
          <br />
          - Paid Time Off: Enjoy a healthy work-life balance with generous vacation and paid time off policies.
          <br />
          <br />
          - Employee Discounts: Receive discounts on delicious meals and beverages at Naples Pizza locations.
          <br />
          <br />
          - Career Development Opportunities: Grow your skills and advance your career through training and development programs.
        </p>
        <div className="row" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="col-lg-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSprlPZe8N5JpaLA32r37R2MS8Lvx440dEwfxeiZwymkjBZJBSFJ2w_lXJyUow2vpEfK_E&usqp=CAU" alt="Person" style={{ width: '100%' }} />
            <h2 className="our-story-heading" style={{ color: '#AF672D', fontSize: '2rem', textAlign: 'center', paddingTop: '1rem', paddingBottom: '1rem'}}>John Smith</h2>
            <h3 className="font-weight-bold" style={{ textAlign: 'center', fontSize: '1.4rem', paddingBottom: '1rem' }}>Head Chef</h3>
            <p className="font-italic" style={{ textAlign: 'center', fontSize: '1.2rem', paddingBottom: '3rem', color: '58483A'  }}>
              "Working at Naples Pizza feels like being part of a big, happy family! The support and camaraderie among the staff create a positive and rewarding work environment."
            </p>
          </div>
          <div className="col-lg-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsn96sxdKgHanLBZNLLYmDlfFbWy3UekCNFQ&usqp=CAU" alt="Person" style={{ width: '100%' }} />
            <h2 className="our-story-heading" style={{ color: '#AF672D', fontSize: '2rem', textAlign: 'center', paddingTop: '1rem', paddingBottom: '1rem' }}>Emily Johnson</h2>
            <h3 className="font-weight-bold" style={{ textAlign: 'center', fontSize: '1.4rem', paddingBottom: '1rem' }}>Customer Service Representative</h3>
            <p className="font-italic" style={{ textAlign: 'center', fontSize: '1.2rem', paddingBottom: '3rem'  }}>
              "I love being part of the Naples Pizza team! The friendly atmosphere and opportunities for growth make it a great place to work!"
            </p>
          </div>
          <div className="col-lg-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0oaq-2sVZRnTZVb3t0x_ZNP1fi0UwbXHtLA&usqp=CAU" alt="Person" style={{ width: '100%', height: "36.5%" }} />
            <h2 className="our-story-heading" style={{ color: '#AF672D', fontSize: '2rem', textAlign: 'center', paddingTop: '1rem', paddingBottom: '1rem' }}>Michael Lee</h2>
            <h3 className="font-weight-bold" style={{ textAlign: 'center', fontSize: '1.4rem', paddingBottom: '1rem'}}>Delivery Driver</h3>
            <p className="font-italic" style={{ textAlign: 'center', fontSize: '1.2rem', paddingBottom: '3rem' }}>
              "Naples Pizza values its employees and recognizes hard work. It's rewarding to be part of a company that cares about its team members' well-being and success."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  }
  export default Benefits;