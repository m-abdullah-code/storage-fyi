import React from 'react'
import item from '../../assets/item.png'
import vehicle from '../../assets/vehicle.png'
import trailer from '../../assets/trailer.png'
import camper from '../../assets/camper.png'
import boat from '../../assets/boat.png'
import loader from '../../assets/loader.png'

function Categories() {

    const cate = [
        { logo: item, name: "Items" },
        { logo: vehicle, name: "Vehicle" },
        { logo: trailer, name: "Trailer" },
        { logo: camper, name: "RV/Camper" },
        { logo: boat, name: "Boat" },
        { logo: loader, name: "Oversized" }
    ]

    return (
        <div className='homeCate my-5 side-space '>
            <h2 className='text-center font-semibold lg:text-[47px] md:text-[30px] sm:text-[25px]'>What do you need space for?</h2>

            <div className="grd flex flex-wrap lg:gap-12 md:gap-10 sm:gap-7 gap-5 justify-center mt-15 transition-all">
                {cate.map((cat, index) => (
                    <div key={index} className='cat_item text-center flex flex-col items-center justify-center transition-all'>
                        <img src={cat.logo} alt={cat.name} className="mx-auto w-8 h-8 object-contain" />
                        <p className="mt-1">{cat.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categories
