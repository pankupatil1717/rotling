import React from 'react'

export default function Gallary() {
    return (
        <div  >
            <div className="banner  ">
                <img src="https://via.placeholder.com/1920x600?text=Gallery+Banner " style={{ height: "250px" }} alt="img" />
                <div className="banner-title text-center text-black">
                    Gallary
                </div>
            </div>
            <div class="container my-5">


            </div>


            {/* <!-- Content Section --> */}



            {/* <!-- Nav Tabs --> */}
            <ul class="nav nav-tabs justify-content-center pt-4" id="galleryTabs" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all" type="button" role="tab" aria-controls="all" aria-selected="true">All</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="nature-tab" data-bs-toggle="tab" data-bs-target="#nature" type="button" role="tab" aria-controls="nature" aria-selected="false">Nature</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="architecture-tab" data-bs-toggle="tab" data-bs-target="#architecture" type="button" role="tab" aria-controls="architecture" aria-selected="false">Architecture</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="animals-tab" data-bs-toggle="tab" data-bs-target="#animals" type="button" role="tab" aria-controls="animals" aria-selected="false">Animals</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="videos-tab" data-bs-toggle="tab" data-bs-target="#videos" type="button" role="tab" aria-controls="videos" aria-selected="false">Videos</button>
                </li>
            </ul>

            {/* <!-- Tab Content --> */}
            <div class="tab-content mt-4" id="galleryTabsContent">
                {/* <!-- All Tab --> */}
                <div class="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                    <div class="row gallery">
                        <div class="col-md-4 gallery-item"><img src="https://via.placeholder.com/300x200?text=Nature1" alt="Nature" /></div>
                        <div class="col-md-4 gallery-item"><img src="https://via.placeholder.com/300x200?text=Architecture1" alt="Architecture" /></div>
                        <div class="col-md-4 gallery-item"><img src="https://via.placeholder.com/300x200?text=Animal1" alt="Animal" /></div>
                        <div class="col-md-4 gallery-item"><img src="https://via.placeholder.com/300x200?text=Nature2" alt="Nature" /></div>
                        <div class="col-md-4 gallery-item"><img src="https://via.placeholder.com/300x200?text=Architecture2" alt="Architecture" /></div>
                        <div class="col-md-4 gallery-item"><img src="https://via.placeholder.com/300x200?text=Animal2" alt="Animal" /></div>
                    </div>
                </div>

                {/* <!-- Nature Tab --> */}
                <div class="tab-pane fade" id="nature" role="tabpanel" aria-labelledby="nature-tab">
                    <div class="row gallery">
                        <div class="col-md-4 gallery-item"><img src="https://via.placeholder.com/300x200?text=Nature1" alt="Nature" /></div>
                        <div class="col-md-4 gallery-item"><img src="https://via.placeholder.com/300x200?text=Nature2" alt="Nature" /></div>
                        <div class="col-md-4 gallery-item"><img src="https://via.placeholder.com/300x200?text=Nature3" alt="Nature" /></div>
                    </div>
                </div>

                {/* <!-- Architecture Tab --> */}
                <div class="tab-pane fade" id="architecture" role="tabpanel" aria-labelledby="architecture-tab">
                    <div class="row gallery">
                        <div class="col-md-4 gallery-item"><img src="https://via.placeholder.com/300x200?text=Architecture1" alt="Architecture" /></div>
                        <div class="col-md-4 gallery-item"><img src="https://via.placeholder.com/300x200?text=Architecture2" alt="Architecture" /></div>
                        <div class="col-md-4 gallery-item"><img src="https://via.placeholder.com/300x200?text=Architecture3" alt="Architecture" /></div>
                    </div>
                </div>

                {/* <!-- Animals Tab --> */}
                <div class="tab-pane fade" id="animals" role="tabpanel" aria-labelledby="animals-tab">
                    <div class="row gallery">
                        <div class="col-md-4 gallery-item"><img src="https://via.placeholder.com/300x200?text=Animal1" alt="Animal" /></div>
                        <div class="col-md-4 gallery-item"><img src="https://via.placeholder.com/300x200?text=Animal2" alt="Animal" /></div>
                        <div class="col-md-4 gallery-item"><img src="https://via.placeholder.com/300x200?text=Animal3" alt="Animal" /></div>
                    </div>
                </div>

                {/* <!-- Videos Tab --> */}
                <div class="tab-pane fade" id="videos" role="tabpanel" aria-labelledby="videos-tab">
                    <div class="row">
                        <div class="col-md-6 video-item">
                            <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Video 1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </div>
                        <div class="col-md-6 video-item">
                            <iframe src="https://www.youtube.com/embed/3tmd-ClpJxA" title="Video 2" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}
