import React from 'react';

const Menu = () => {
  
  const images = [
    'Bonda.jpg',
    'Dosa.jpg',
    'Juice.jpg',
    'Pancake.jpg',
    'Idli.jpg',
    'Poha.jpg',
    

  ];

  return (
    <div style={{ marginTop: '80px', padding: '20px', position: 'fixed', top: 40, width: '70%', zIndex: 1000 }}>
      <div className="container">
        <div className="row justify-content-center">
          {images.map((image, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2">
              <img
                src={image}
                alt={`Food ${index + 1}`}
                className="img-fluid rounded"
                style={{ width: '100%', height: '120px', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
