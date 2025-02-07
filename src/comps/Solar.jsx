import React from 'react'

export default function Solar() {
  return (
    <div>
      <section className="header-section">
        <h1>Solar</h1>
        <p>Experience the ultimate in water purification technology, designed for your family's health and well-being.</p>
      </section>
      <div className="container">
        {/* <!-- Header Section --> */}


        {/* <!-- Content Section --> */}
        <section className="content-section container" />
        {/* <!-- Product Description Row --> */}
        <div className="row align-items-center">
          {/* <!-- Product Description --> */}
          <div className="col-md-6">
            <h2>Why Aqua Akshara?</h2>
            <p className="product-description">
              Fully automatic operation with auto-on and auto-off function, ensuring you never run out of pure water.
              Its wall-mounted design is perfect for domestic use, compact yet powerful. Boost your immunity with the
              goodness of copper and UV technology, assuring the removal of maximum contaminants such as arsenic, chlorine,
              lead, and fluoride. Provides ultra-fresh, clean, and great-tasting water right at home.
            </p>
            <ul className="feature-list">
              <li><i className="bi bi-check-circle-fill"></i> 7-Stage Advanced Filtration System</li>
              <li><i className="bi bi-check-circle-fill"></i> Removes 99.9% of Bacteria and Contaminants</li>
              <li><i className="bi bi-check-circle-fill"></i> Compact Wall-Mounted Design</li>
              <li><i className="bi bi-check-circle-fill"></i> Energy-Efficient and Durable</li>
            </ul>
          </div>

          {/* <!-- Product Image --> */}
          <div className="col-md-6 text-center">
            <img src="/assets/images/Image solar4.jpg" alt="Aqua Akshara" className="img-fluid" />
          </div>
        </div>

        {/* <!-- Product Images Row --> */}
        <div className="row mt-5 pb-2">
          <div className="col-md-4 text-center">
            <img src="/assets/images/gallary/Frame-14-179x300.jpg" alt="Aqua Akshara Box" className="img-fluid product-images" />
          </div>
          <div className="col-md-4 text-center">
            <img src="/assets/images/gallary/Frame-14-179x300.jpg" alt="Aqua Akshara Features" className="img-fluid product-images" />
          </div>
          <div className="col-md-4 text-center">
            <img src="/assets/images/gallary/Frame-14-179x300.jpg" alt="Aqua Akshara Closeup" className="img-fluid product-images" />
          </div>
        </div>
      </div>
    </div>
  )
}
