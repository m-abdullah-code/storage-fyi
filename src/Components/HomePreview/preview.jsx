import React from 'react'
import videoPlay from '../../assets/video_play.png'
import preHome from '../../assets/pre_home.png'
import homePark from '../../assets/home_park.png'
import btnArrow from '../../assets/btn-arrow.png'

function preview() {
    return (
        <div className='homePreview side-space'>
            <div className='flx-col flex items-center justify-between py-15 gap-10'>
                {/* left content */}
                <div className='home-review relative'>
                    <div className="preview_book flex gap-x-6 items-center">
                        <div className="img">
                            <img src={videoPlay} alt="img" className='w-16 h-16 object-contain' />
                        </div>
                        <div className="text">
                            <h3 className='font-bold'>Preview before you book</h3>
                            <p>Check out spaces digitally with ease</p>
                        </div>
                    </div>
                    <div className="main_img">
                        <img src={preHome} alt="img" />
                    </div>
                    <div className="home_park relative">
                        <img src={homePark} alt="img" className='absolute img w-16 h-16 object-contain' />
                        <h3>Find the best parking</h3>
                        <p>Explore available parking spaces</p>
                    </div>
                </div>

                {/* Right content */}
                <div className='text-wrapper'>
                    <h2>We make it easy for storing or parking.</h2>
                    <p className='mt-7'>Whether you're looking for covered garages, open driveways, secure lots, or specialized spaces for large vehicles, Storage.fyi shows you the best deals for everything in one simple search.</p>
                    <a href="#" className="search inline-flex items-center justify-center gap-x-3 mt-7 transition-all">Search Near You <img src={btnArrow} alt="img" className='transition-all' /></a>
                </div>

            </div>
        </div>
    )
}

export default preview
