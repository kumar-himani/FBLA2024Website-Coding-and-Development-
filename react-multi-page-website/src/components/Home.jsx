import React from 'react';

function Home() {
  return (
    <div className="home" style={{ overflowY: 'auto' }}>
      <div
        className="home-image"
        style={{
          position: 'absolute',
          top: '10%', // adjust the top value
          left: 0,
          width: '100%',
          height: '40%', // adjust the height value
          backgroundImage: `url(https://static1.squarespace.com/static/5c5227557c9327dd7e2299be/t/5c7932a9f4e1fcf09bbaf911/1551446704863/Spicy-Sopp-held-min.jpg?format=1500w)`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="home-image-text" style={{ textAlign: 'center', zIndex: 1 }}>
          <h1 className="text-white" style={{ fontSize: '5rem', fontStyle: 'italic' }}>Naples Pizza</h1>
        </div>
      </div>
      <div className="container" style={{ position: 'left', zIndex: 2, paddingTop: '25rem' }}>
      <div
        className="home-image"
        style={{
          position: 'absolute',
          top: '10%', // adjust the top value
          left: 0,
          width: '100%',
          height: '40%', // adjust the height value
          backgroundImage: `url(https://static1.squarespace.com/static/5c5227557c9327dd7e2299be/t/5c7932a9f4e1fcf09bbaf911/1551446704863/Spicy-Sopp-held-min.jpg?format=1500w)`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >

</div>
<div className="row" style={{ display: 'flex' }}>
  <div className="col-lg-10 offset-lg-1">
    <h2 className="our-story-heading" style={{ color: '#AF672D' }}>Our Story</h2>
    <span className="font-italic" style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', paddingBottom: '3rem' }}>
      At Naples Pizza, our story is one of passion, dedication, and family values. Since 1995, we've been serving the Farmington community with delicious Neapolitan-style pizza, calzones, and more. What started as a small takeout store has grown into a beloved family-friendly restaurant. Our commitment to quality is unwavering, with the freshest ingredients and homemade pizza dough crafted daily. Join us at Naples Pizza, where every meal is made with love and served with a smile.
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnwC43fJA4XwWGHO4CUT77oITbwpKAvSuNFA&usqp=CAU" alt="Pizza" style={{ marginLeft: '1rem', float: 'left' }} />
    </span>
    <span style={{ width: '100%', fontSize: '1.2rem', alignItems: 'center', marginTop: '10rem', fontStyle: 'italic', fontWeight: 'bold' }}>
      Our commitment to quality shines through in every dish with fresh ingredients and daily-made signature pizza dough.
    </span>
    <hr class="solid-line" />
  </div>
</div>
      </div>
      <div className="container" style={{ position: 'right', zIndex: 2, paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="row" style={{ display: 'flex' }}>
          <div className="col-lg-10 offset-lg-1">
          <h2 className="our-story-heading" style={{ color: '#AF672D' }}>Join our Family!</h2>
            <span className="font-italic" style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center' }}>
            Join us on our newly added patio for outdoor dining, and experience the warmth and hospitality of Naples Pizza. Explore exciting career opportunities and discover the opportunities that await you at Naples Pizza. Whether you're passionate about crafting delicious pizzas or providing exceptional customer service, we have a place for you on our team!
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5oLL78X8l0B9bNT9NqvgdS5f1ohPq9dgklg&usqp=CAU" alt="Pizza" style={{ marginLeft: '1rem' }} />
            </span>
            <hr class="solid-line" />
          </div>
        </div>
      </div>
      <div className="container" style={{ position: 'right', zIndex: 2, paddingTop: '0.5rem', paddingBottom: '5rem' }}>
  <div className="row" style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div className="col-lg-4">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSprlPZe8N5JpaLA32r37R2MS8Lvx440dEwfxeiZwymkjBZJBSFJ2w_lXJyUow2vpEfK_E&usqp=CAU" alt="Person" style={{ width: '100%' }} />
      <h2 className="our-story-heading" style={{ color: '#AF672D', fontSize: '2rem', textAlign: 'center', paddingTop: '1rem', paddingBottom: '1rem'}}>John Smith</h2>
      <h3 className="font-weight-bold" style={{ textAlign: 'center', fontSize: '1.4rem', paddingBottom: '1rem' }}>Head Chef</h3>
      <p className="font-italic" style={{ textAlign: 'center', fontSize: '1.2rem', paddingBottom: '3rem'  }}>
        Working at Naples Pizza feels like being part of a big, happy family! The support and camaraderie among the staff create a positive and rewarding work environment.
      </p>
    </div>
    <div className="col-lg-4">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsn96sxdKgHanLBZNLLYmDlfFbWy3UekCNFQ&usqp=CAU" alt="Person" style={{ width: '100%' }} />
      <h2 className="our-story-heading" style={{ color: '#AF672D', fontSize: '2rem', textAlign: 'center', paddingTop: '1rem', paddingBottom: '1rem' }}>Emily Johnson</h2>
      <h3 className="font-weight-bold" style={{ textAlign: 'center', fontSize: '1.4rem', paddingBottom: '1rem' }}>Customer Service Representative</h3>
      <p className="font-italic" style={{ textAlign: 'center', fontSize: '1.2rem', paddingBottom: '3rem'  }}>
        I love being part of the Naples Pizza team! The friendly atmosphere and opportunities for growth make it a great place to work!
      </p>
    </div>
    <div className="col-lg-4">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0oaq-2sVZRnTZVb3t0x_ZNP1fi0UwbXHtLA&usqp=CAU" alt="Person" style={{ width: '100%', height: "36.5%" }} />
      <h2 className="our-story-heading" style={{ color: '#AF672D', fontSize: '2rem', textAlign: 'center', paddingTop: '1rem', paddingBottom: '1rem' }}>Michael Lee</h2>
      <h3 className="font-weight-bold" style={{ textAlign: 'center', fontSize: '1.4rem', paddingBottom: '1rem' }}>Delivery Driver</h3>
      <p className="font-italic" style={{ textAlign: 'center', fontSize: '1.2rem', paddingBottom: '3rem' }}>
        Naples Pizza values its employees and recognizes hard work. It's rewarding to be part of a company that cares about its team members' well-being and success.
      </p>
    </div>
    <div class="rectangle-with-text">Where 90% of employees stay happy, and 95% stay satisfied</div>
  </div>
  <h2 class="most-popular-positions">Our Most Popular Positions!</h2>
  <div className="container" style={{ position: 'right', zIndex: 2, paddingTop: '3rem', paddingBottom: '5rem' }}>
  <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
    <div className="col-lg-4 text-center" style={{ paddingBottom: '1rem' }}>
      <h2 className="our-story-heading" style={{ color: '#58483A', paddingBottom: '1rem' }}>Pizza Chef</h2>
      <p style={{ fontSize: '1.1rem', marginBottom: '1rem', paddingBottom: '1rem' }}>Craft artisanal pizzas using the freshest ingredients and traditional Neapolitan techniques. As a Pizza Chef at Naples Pizza, you'll showcase your culinary skills and creativity to deliver mouthwatering pizzas that delight our customers.</p>
      <a href="/contact" style={{ backgroundColor: '#AF672D', color: 'white', padding: '0.7rem 8rem', textDecoration: 'none', paddingBottom: '1rem' }}>Apply Now</a>
      <p style={{ fontStyle: 'italic', marginTop: '1rem', paddingTop: '1rem'  }}>Join 6 others to create wonderful pizzas! 4 people have applied for this position in the last 10 days.</p>
    </div>
    <div className="col-lg-4 text-center" style={{ paddingBottom: '1rem' }}>
      <h2 className="our-story-heading" style={{ color: '#58483A', paddingBottom: '1rem' }}>Customer Service Representative</h2>
      <p style={{ fontSize: '1.1rem', marginBottom: '1rem', paddingBottom: '1rem' }}>Provide exceptional service and hospitality to our guests, ensuring a positive dining experience from start to finish. As a Customer Service Representative at Naples Pizza, you'll interact with customers, take orders, and assist with inquiries to ensure their satisfaction.</p>
      <a href="/contact" style={{ backgroundColor: '#AF672D', color: 'white', padding: '0.7rem 8rem', textDecoration: 'none', paddingBottom: '1rem' }}>Apply Now</a>
      <p style={{ fontStyle: 'italic', marginTop: '1rem', paddingTop: '1rem'  }}>Join 17 others and help grow our customers! 7 people have applied for this position in the last 10 days.</p>
    </div>
    <div className="col-lg-4 text-center" style={{ paddingBottom: '1rem' }}>
      <h2 className="our-story-heading" style={{ color: '#58483A', paddingBottom: '1rem' }}>Kitchen Staff</h2>
      <p style={{ fontSize: '1.1rem', marginBottom: '1rem', paddingBottom: '1rem' }}>Work alongside our talented culinary team to prepare and assemble a variety of delicious dishes, including pizzas, calzones, panini, and more. As part of the kitchen staff at Naples Pizza, you'll contribute to the seamless operation of our kitchen and help maintain our high standards of food quality and presentation.</p>
      <a href="/contact" style={{ backgroundColor: '#AF672D', color: 'white', padding: '0.7rem 8rem', textDecoration: 'none', paddingBottom: '1rem' }}>Apply Now</a>
      <p style={{ fontStyle: 'italic', marginTop: '1rem', paddingTop: '1rem' }}>Join 3 others and help support our chefs! 2 people have applied for this position in the last 10 days.</p>
    </div>
  </div>
</div>
</div>
      <style jsx>{`
        .home-image {
          background-image: url(https://source.unsplash.com/random/1920x600?pizza);
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .home-image-text {
          text-align: center;
          z-index: 1;
        }

        .font-italic {
          font-style: italic;
        }

        .our-story-heading {
          font-size: 2.5rem;
          font-style: italic;
          font-weight: bold;
          font color: #AF672D;
        }
        .solid-line {
          border: 0;
          border-top: 2px solid #58483A;
          margin: 20px auto;
          width: 100%;
        }
        .rectangle-with-text {
          background-color: #58483A;
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
          padding: 1rem;
          text-align: center;
          width: 100%;
        }
        .most-popular-positions {
          color: #AF672D;
          font-size: 3.5rem;
          text-align: center;
          margin-top: 5rem;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}

export default Home;