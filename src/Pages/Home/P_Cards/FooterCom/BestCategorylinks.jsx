import React from 'react'

function BestCategorylinks() {

  const quicklinks = [
    {
      id: 1,
      value: "Fabrics",
    },
    {
      id: 2,
      value: "Kurta Suit Sets",
    },
    {
      id: 3,
      value: "Dress Materials",
    },
    {
      id: 4,
      value: "Bed Covers",
    },


    {
      id: 5,
      value: "Curtains",
    },
    {
      id: 6,
      value: "Shirts",
    },
    {
      id: 7,
      value: "Blouse Materials",
    },
    {
      id: 8,
      value: "Metalware",
    },
    {
      id: 9,
      value: "Earrings",
    },
    {
      id:10,
      value: "Footwear"
    }


  ]

  const quicklinks2 = [
    {
      id: 1,
      value: "Kurtas",
    },
    {
      id: 1,
      value: "Dupattas",
    },
    {
      id: 1,
      value: "Sarees",
    },
    {
      id: 1,
      value: "Cushion Covers",
    },
    {
      id: 1,
      value: "Tops",
    },
    {
      id: 1,
      value: "Men's Kurtas",
    },

    {
      id: 1,
      value: "Home Decor",
    },
    {
      id: 1,
      value: "Gifting",
    },
    {
      id: 1,
      value: "Shoulder Bags",
    },


  ]


  return (
    <div className="first ">
      <h2 className="w-full font-bold text-gray-400 text-[1.4rem]">Best Category Links</h2>
      <div className="w-full flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col text-white mt-5">
        <div className="w-1/2 ">
          {
            quicklinks.map((item, index) => (
              <p className="hover:text-black py-2 px-3" key={index}>{item.value}</p>
            ))
          }
        </div>

        <div className="w-1/2">
          {
            quicklinks2.map((item, index) => (
              <p className="hover:text-black py-2 px-3" key={index}>{item.value}</p>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default BestCategorylinks;