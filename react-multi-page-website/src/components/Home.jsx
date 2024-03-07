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
        <div className="row" style={{ display: 'flex' }}>
          <div className="col-lg-10 offset-lg-1">
            <h2 className="font-weight-light" style={{ fontSize: '2.5rem', fontStyle: 'italic' }}>Our Story</h2>
            <span className="font-italic" style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center' }}>
              At Naples Pizza, our story is one of passion, dedication, and family values. Since 1995, we've been serving the Farmington community with delicious Neapolitan-style pizza, calzones, and more. What started as a small takeout store has grown into a beloved family-friendly restaurant. Our commitment to quality is unwavering, with the freshest ingredients and homemade pizza dough crafted daily. Join us at Naples Pizza, where every meal is made with love and served with a smile.
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnwC43fJA4XwWGHO4CUT77oITbwpKAvSuNFA&usqp=CAU" alt="Pizza" style={{ marginLeft: '1rem' }} />
            </span>
            <h2 className="font-italic" style={{ width: '100%', fontSize: '1.2rem', display: 'flex', alignItems: 'center', marginTop: '2rem' }}>
              Our commitment to quality shines through in every dish, with fresh ingredients and daily-made signature pizza dough.
            </h2>
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
      `}</style>
    </div>
  );
}

export default Home;