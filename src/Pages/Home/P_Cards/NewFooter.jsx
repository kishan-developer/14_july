import React from 'react'
import BestCategorylinks from './FooterCom/BestCategorylinks';
import Follow from './FooterCom/Follow';

function NewFooter() {

    const quicklinks = [
        {
            id: 1,
            value: "Contact-Us",
        },
        {
            id: 1,
            value: "Blog",
        },
        {
            id: 1,
            value: "Social Reviews",
        },
        {
            id: 1,
            value: "International Orders",
        },


        {
            id: 1,
            value: "Sell @ आई.टोकरी",
        },
        {
            id: 1,
            value: "iTokri Wale फोटो",
        },
        {
            id: 1,
            value: "Bulk Orders",
        },
        {
            id: 1,
            value: "Track टोकरी",
        },
        {
            id: 1,
            value: "Bulk Orders",
        },


    ]

    const quicklinks2 = [
        {
            id: 1,
            value: "About",
        },
        {
            id: 1,
            value: "e-Gift Cards",
        },
        {
            id: 1,
            value: "Shipping",
        },
        {
            id: 1,
            value: "Payments",
        },
        {
            id: 1,
            value: "Terms & Conditions",
        },
        {
            id: 1,
            value: "Sell @ आई.टोकरी",
        },

        {
            id: 1,
            value: "Returns & Cancellation",
        },
        {
            id: 1,
            value: "Terms & Conditions",
        },
        {
            id: 1,
            value: "Privacy Policy",
        },


    ]
    return (
        <>
            <div className="w-full bg-[#313131] h-[fit-content] grid grid-cols-4 gap-7 py-10 px-20">

                <div className="first w-1/4">
                    <img src="https://itokri.com/cdn/shop/files/Group_1458_3x_be73e1fb-423f-4514-8f4c-5ddc73c2a69c.png?v=1661708430&width=100" alt="" />
                </div>

                <div className="first ">
                    <h2 className="w-full font-bold text-gray-400 text-[1.4rem]">Quick links</h2>
                    <div className="w-full flex flex-row text-white mt-5">
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

                <div className="first">
                    <BestCategorylinks />
                </div>

                <div className="first ">
                    <Follow />
                </div>

            </div>

            <div className="copyright w-full bg-[#313131] h-[50px] flex items-center justify-center text-white border-t-[0.9px] border-white" >
                <p>
                    <span className="text-[0.6rem]">© 2024</span>
                    iTokri आई.टोकरी
                </p>
            </div>
        </>
    )
}

export default NewFooter;