import React from 'react';

export default function Gallery() {
    return (
        <div>
            <div className="banner text-center">
                <img 
                    src="/assets/images/gallary/sub-banner.jpg" 
                    style={{ height: "250px", width: "100%", objectFit: "cover" }} 
                    alt="Gallery Banner" 
                />
                <div className="banner-title text-center text-black fs-2 fw-bold mt-2 h-25">
                    Gallery
                </div>
            </div>

            <div className="container my-5">
                {/* Nav Tabs */}
                <ul className="nav nav-tabs justify-content-center" id="galleryTabs" role="tablist">
                    {["All", "Gallery", "Videos"].map((tab) => (
                        <li className="nav-item" role="presentation" key={tab}>
                            <button 
                                className={`nav-link ${tab === "All" ? "active" : ""}`} 
                                id={`${tab.toLowerCase()}-tab`} 
                                data-bs-toggle="tab" 
                                data-bs-target={`#${tab.toLowerCase()}`} 
                                type="button" 
                                role="tab" 
                                aria-controls={tab.toLowerCase()} 
                                aria-selected={tab === "All"}>
                                {tab}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Tab Content */}
                <div className="tab-content mt-4 text-center" id="galleryTabsContent">
                    
                    {/* All Tab */}
                    <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                        <div className="row justify-content-center">
                            {["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg"].map((img, index) => (
                                <div className="col-md-4 col-sm-6 mb-3" key={index}>
                                    <img 
                                        src={`/assets/images/veeranchi25-225x300.jpg ${img}`} 
                                        className="img-fluid rounded shadow" 
                                        alt={`All - ${img}`} 
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Gallery Tab */}
                    <div className="tab-pane fade" id="gallery" role="tabpanel" aria-labelledby="gallery-tab">
                        <div className="row justify-content-center">
                            {["gallery1.jpg", "gallery2.jpg", "gallery3.jpg", "gallery4.jpg"].map((img, index) => (
                                <div className="col-md-4 col-sm-6 mb-3" key={index}>
                                    <img 
                                        src={`/assets/images/gallery/${img}`} 
                                        className="img-fluid rounded shadow" 
                                        alt={`Gallery - ${img}`} 
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Videos Tab */}
                    <div className="tab-pane fade" id="videos" role="tabpanel" aria-labelledby="videos-tab">
                        <div className="row justify-content-center">
                            {["dQw4w9WgXcQ", "3tmd-ClpJxA"].map((videoId, index) => (
                                <div className="col-md-6 mb-3" key={index}>
                                    <div className="ratio ratio-16x9">
                                        <iframe 
                                            src={`https://www.youtube.com/embed/${videoId}`} 
                                            title={`Video ${index + 1}`} 
                                            frameBorder="0" 
                                            allow="autoplay; encrypted-media" 
                                            allowFullScreen>
                                        </iframe>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
