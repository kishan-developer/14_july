import React from 'react'

function ViewCat({ data }) {

    

  return (
    <div className="w-full h-[250px] flex items-center flex-row gap-5 px-[150px]">
        {
            data.map((item , index)=> (
                <div key={index} className="parent">
                    <img src={item.image} alt="images" className="rounded-lg" />
                </div>
            ))
        }
        
    </div>
  )
}

export default ViewCat;