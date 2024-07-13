import React from 'react';
import './Home.css'
import Carousel from '../../Components/ChildComponents/Crousel';
import Footer from '../../Components/Footer/Footer';
import TradingCat from './TrandingCategories/TradingCat';
import Bag_Category from './Category_To_Bag/Bag_Category';
import Second from './Second_section/Second';
import BestSeller from './BestSeller/BestSeller';
import { Link } from 'react-router-dom';
import TopSection from './TopSectionCrousel/TopSection';
import P_Cards from './P_Cards/P_Cards';
import OriginData from './P_Cards/OriginData';
import B_seller from './P_Cards/B_seller';
import Videos from './P_Cards/Videos';
import ViewCat from './P_Cards/ViewCat';
import NewFooter from './P_Cards/NewFooter';

function Home() {

  const viewdata_1 = [
    {
      id: 1,
      image: "https://itokri.com/cdn/shop/files/Sanganeri_Fabrics_11_96c9deb9-3b3b-4eae-aeae-ce1d230dffb9_1500x.jpg?v=1720447273",
    },
    {
      id: 2,
      image: "https://itokri.com/cdn/shop/files/Dharwad_Dress_Materials_11_27eb5121-c8d7-410b-ab8b-8a2e8106e60e_1500x.jpg?v=1720447317",
    },
    {
      id: 3,
      image: "https://itokri.com/cdn/shop/files/Mix_Jewellery_11_1500x.jpg?v=1720447339",
    },
    {
      id: 4,
      image: "https://itokri.com/cdn/shop/files/Ajrakh_Block_Printed_Pure_Handloom_Cotton_Towel_1500x.jpg?v=1720447357",
    },
    {
      id: 5,
      image: "https://itokri.com/cdn/shop/files/Mix_Jewellery_11_1500x.jpg?v=1720447339",
    },
    {
      id: 6,
      image: "https://itokri.com/cdn/shop/files/Ajrakh_Block_Printed_Pure_Handloom_Cotton_Towel_1500x.jpg?v=1720447357",
    }

  ]

  const viewdata_2 = [
    {
      id: 1,
      image: "https://itokri.com/cdn/shop/files/Batik_Kurtas_11_3eb693c6-7542-45b7-bd36-c5354328e188_1500x.jpg?v=1720461333",
    },
    {
      id: 2,
      image: "https://itokri.com/cdn/shop/files/Bagru_Shirts_11_1500x.jpg?v=1720461382",
    },
    {
      id: 3,
      image: "https://itokri.com/cdn/shop/files/Plain_Dresses_11_87b08a4d-e167-468a-ac72-9143247801a1_1500x.jpg?v=1720084144",
    },
    {
      id: 4,
      image: "https://itokri.com/cdn/shop/files/Jacquard_Co-Ord_Sets_11_1500x.jpg?v=1720461446",
    },
    {
      id: 5,
      image: "https://itokri.com/cdn/shop/files/Jaipur_Printed_Bottoms_11_1500x.jpg?v=1720084175",
    },
    {
      id: 6,
      image: "https://itokri.com/cdn/shop/files/Pochampally_Ikat_Kurta_Sets_11_b1500bff-c05c-42ef-8a73-9fa565686966_1500x.jpg?v=1720461484",
    }

  ]
  

  return (
    <div className='home w-full h-fit block overflow-hidden bg-red-50'>
      
      <div className=" w-full lg:h-[550px] h-fit  gap-3 flex justify-center  mb-5">
        <TopSection/> 
        {/* <Carousel/> */}
      </div>

      <div className="flex items-center justify-center gap-3 w-full h-[auto] text-center text-black text-sm my-5 ">
        <P_Cards />
      </div>
      

      {/* this contain to contains the cards  */}





      {/* /////////////////////////////////////////////////////////////// */}

      {/*  old code  */}
      {/* <div className="flex gap-3 w-full h-[260px] text-center text-black text-sm lg:px-[200px]">
       <Second/>
      </div> */}

      {/* <div className="w-full h-54">
        <img className='w-full h-54' src="https://images.bewakoof.com/uploads/grid/app/Blockbuster-deal-thin-strip-Desktop-Hoodies-under-999-1701969138.jpg" alt="" />
      </div> */}

      <div className="block w-full h-[40rem] py-2 mb-10">
        <h2 className='w-full h-8 text-center lg:text-2xl md:text-lg text-[0.8rem] font-800'> Designs of the Week</h2>
        <div className="images flex w-full h-[40rem]">
          <img className='w-1/2' src="https://cdn.shopify.com/s/files/1/0155/8131/products/Q8A6531.jpg?v=1659791015" alt="" />
          <img className='w-1/2' src="https://cdn.shopify.com/s/files/1/0155/8131/files/3E9A9391_a5f205e4-bdc9-4c21-b034-9a6fda54b7b5.jpg?v=1719497121" alt="" />
        </div>
      </div>

      {/* <div className="block w-full h-78 py-2">
        <h2 className='w-full h-8 text-center lg:text-2xl md:text-lg text-[0.8rem] font-800'> TRENDING CATEGORIES</h2>
        <div className='w-full grid  grid-cols-6 '>
          <TradingCat />
        </div>
      </div> */}

      {/* best seller category  */}
     


        {/* Origin category */}

      <div className="block w-full py-2">
        <h2 className='w-full h-8 text-center lg:text-2xl md:text-lg text-[0.8rem] font-800'> Product Category</h2>
        <OriginData/>
      </div>

      <div className="view_more">
        
        <div className="w-full  h-[auto]">
          {/* popular category*/}
          <p className="w-full flex flex-col items-center justify-center">
            <span className="border-b-2 border-black font-semibold text-[1rem]">View More</span>
            <h2 className="text-[2rem] font-bold">POPULAR CATEGORIES</h2>
            <p>Everyone loves coming back to these categories</p>
          </p>
          

          {/*  view cart products */}
          <ViewCat data={viewdata_1} />

          {/* best seller */}


        </div>

        
      </div>

      <div className="block w-full py-2 mb-10">
        <h2 className='w-full h-8 text-center lg:text-2xl md:text-lg text-[0.8rem] font-800'>Brand Video</h2>
        <Videos />
      </div>
      


        <NewFooter/>
      
      

      {/* <Footer /> */}

    </div>

  )
}

export default Home;