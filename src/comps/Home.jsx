import React, { useState } from "react";

export default function Home() {
  // State to track the value of the range input

  // Initial product list
  const products = [
    { id: 1, name: 'Pureit Copper+ Mineral RO+UV Water Purifier', price: 15000, image: '/assets/images/gallary/Frame-14-179x300.jpg' },
    { id: 2, name: 'Pureit Ultima Mineral RO+UV Water Purifier', price: 18000, image: '/assets/images/gallary/Frame-14-179x300.jpg' },
    { id: 3, name: 'Pureit Eco RO+MF Water Purifier', price: 12500, image: '/assets/images/gallary/Frame-14-179x300.jpg' },
    { id: 4, name: 'Pureit Classic RO+MF Water Purifier', price: 9000, image: '/assets/images/gallary/Frame-14-179x300.jpg' },
    { id: 5, name: 'Pureit Advanced RO+UV Water Purifier', price: 30000, image: '/assets/images/gallary/Frame-14-179x300.jpg' },
  ];
  // Get the minimum and maximum prices
  const minPrice = Math.min(...products.map(product => product.price));
  const maxPrice = Math.max(...products.map(product => product.price));

  // State to track the selected price and sorting order
  const [price, setPrice] = useState(maxPrice);
  const [sortOrder, setSortOrder] = useState('lowToHigh');

  // Handle slider change
  const handleSliderChange = (event) => {
    setPrice(event.target.value);
  };

  // Handle sort order change
  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };
  // Sort products based on user selection
  const getSortedProducts = (products) => {
    if (sortOrder === 'lowToHigh') {
      return products.sort((a, b) => a.price - b.price);
    }
    if (sortOrder === 'highToLow') {
      return products.sort((a, b) => b.price - a.price);
    }
    return products;
  };

  // Filter products based on the selected price
  const filteredProducts = getSortedProducts(
    products.filter(product => product.price <= price)
  );


  return (
    <div  >
      <div id="responsiveSlider" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#responsiveSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Welcome to Our Store"></button>
          <button type="button" data-bs-target="#responsiveSlider" data-bs-slide-to="1" aria-label="Discover New Arrivals"></button>
          <button type="button" data-bs-target="#responsiveSlider" data-bs-slide-to="2" aria-label="Special Discounts"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/assets/images/Frame-17-2.jpg" className="w-100" alt="Welcome to Our Store" />
            <div className="slide-name" > Welcome to Our Store</div>
          </div>

          <div className="carousel-item">
            <img src="/assets/images/Frame-13-2.jpg" className="w-100" alt="Discover New Arrivals" />
            <div className="slide-name">Discover New Arrivals</div>
          </div>

          <div className="carousel-item">
            <img src="/assets/images/Frame-13-2.jpg" className="w-100" alt="Special Discounts" />
            <div className="slide-name">Special Discounts</div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#responsiveSlider" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#responsiveSlider" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container my-4">
        {/* Page Title */}
        <div className="text-center mb-4">
          <h1 style={{ color: "#00254f" }}>Pureit Water Purifier</h1>
          <p style={{ color: "#00254f" }}>Choose a Water Purifier that best suits your needs & budget.</p>
        </div>

        <div className="row">
          {/* Left Section: Filters + Video */}
          <div className="col-md-3">

            {/* Filters Section */}
            <div className="filters mb-2  ">
              <h5>Filters</h5>
              <div className="mb-3">
                <label className="form-label">Storage</label>
                <div>
                  <input type="checkbox" id="small" /> Small <br />
                  <input type="checkbox" id="medium" /> Medium <br />
                  <input type="checkbox" id="large" /> Large
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Budget</label>
                <input
                  type="range"
                  className="form-range"
                  min={minPrice}
                  max={maxPrice}
                  value={price}
                  onChange={handleSliderChange}
                />
                <p>Selected Budget: <b>₹{price}</b></p>
              </div>
              <div className="mb-3">
                <label className="form-label">Technology</label>
                <div>
                  <input type="checkbox" id="ro" /> RO <br />
                  <input type="checkbox" id="uv" /> UV <br />
                  <input type="checkbox" id="copper" /> Copper Range
                </div>
              </div>
            </div>

            {/* Video Container */}
            <div className="video-container">
              <h5 className="mb-3">Product Overview</h5>
              <video
                className="rounded-3"
                style={{ width: "100%", height: "445px", objectFit: "cover" }}
                autoPlay
                muted
                loop
                controls
              >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Product Listing Section */}
          <div className="col-lg-9">
            {/* Sort Options */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div style={{ color: "#00254f" }}>
                <input type="checkbox" /> Recommendations based on Pin Code
              </div>
              <select className="form-select w-auto" onChange={handleSortChange}>
                <option style={{ color: "#00254f" }}>Price: High to Low</option>
                <option style={{ color: "#00254f" }}>Price: Low to High</option>
              </select>
            </div>

            {/* Product Cards */}
            <div className="row">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div className="col-md-4 mb-4" key={product.id}>
                    <div className="product-card p-3 border rounded">
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                      />
                      <h6 className="mt-3" style={{ color: "#00254f" }}>{product.name}</h6>
                      <p className="text-muted">₹{product.price}</p>
                      <button className="btn btn-primary w-100">Learn More</button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center">
                  <p>No products available in this price range.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

    </div>


  );
}





