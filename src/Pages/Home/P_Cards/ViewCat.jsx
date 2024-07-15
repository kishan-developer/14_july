import React from 'react'

function ViewCat({ data }) {

  
  return (
    <div className="w-full h-[fit] flex gap-5 items-center xl:flex-row flex-col xl:gap-5 xl:px-[150px]">
      {
        data.map((item, index) => (
          <div key={index} className="parent">
            <img src={item.image} alt="images" className="rounded-lg xl:h-full lg:h-full md:h-[320px] sm:h-[250px] h-[200px]" />
          </div>
        ))
      }

    </div>
  )
}

export default ViewCat;