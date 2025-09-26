import React from 'react'
// import { heroImg } from '../../assets/hero_img.png'

function heroSection() {
    return (
        <div className='hero-section'>
            <div className='flx-col flex items-center justify-between gap-10'>

                {/* left Content */}
                <div className='text-wrapper py-15'>
                    <h1 className='font-bold'>REIMAGINE STORAGE. <br />
                        TRUSTED BY THOUSANDS. <br />
                        BUILT FOR THE FUTURE.</h1>
                    <p className='font-medium mt-3'>Save smart. Flexible month-to-month <br /> access. All in one platform.</p>
                    <div className="hero-btns mt-7 space-x-7">
                        <a href="#" className="find-space transition-all">Find Space</a>
                        <a href="#" className="list-space transition-all">List Space</a>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default heroSection
