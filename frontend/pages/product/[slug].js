import Wrapper from '@/components/Wrapper'
import React from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel'
import RelatedProducts from '@/components/RelatedProducts'

const ProductDetails = () => {
  return (
    <div className='w-full md:py-20'>
        <Wrapper>
            <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[108px]'>
            {/* Left Col */}
            <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full
             mx-auto lg:mx-0'>
                <ProductDetailsCarousel/>
             </div>


            {/* Right Col */}
            <div className='flex-[1] py-3'>
                
                {/* TITLE */}
                <div className='text-[34px] font-semibold mb-2'>Sneakers S4</div>

                {/* SUBTITLE */}
                <div className='text-lg font-semibold mb-5'>Men&apos; Golffy Snkrs</div>

                {/* PRICE */}
                <div className='text-lg font-semibold'> MRP : @19, 900.00</div>

                <div className='text-md font-medium text-black/[0.5]'> Incl. of taxes</div>
                <div className='text-md font-medium text-black/[0.5] mb-20 '>
                {`(Also includes all applicable duties)`}
                </div>

                {/* SIZE RANGE */}
                <div className='flex justify-between mb-2'>
                    <div className='text-md font-semibold'>
                       Select Size
                    </div>
                    <div className='text-md font-medium text-black/[0.5] cursor-pointer'>
                        Select Guide
                    </div>
                </div>

                {/* SIZE CHART */}
                <div className='grid grid-cols-3 gap-2'>
                    <div className='border rounded-md text-center py-3 font-medium  hover:border-black cursor-pointer'>
                        UK 6
                    </div>
                    <div className='border rounded-md text-center py-3 font-medium  hover:border-black cursor-pointer'>
                        UK 6.5
                    </div>
                    <div className='border rounded-md text-center py-3 font-medium  hover:border-black cursor-pointer'>
                        UK 7
                    </div>
                    <div className='border rounded-md text-center py-3 font-medium  hover:border-black cursor-pointer'>
                        UK 7.5
                    </div>
                    <div className='border rounded-md text-center py-3 font-medium  hover:border-black cursor-pointer'>
                        UK 8
                    </div>
                    <div className='border rounded-md text-center py-3 font-medium  hover:border-black cursor-pointer'>
                        UK 9
                    </div>
                    <div className='border rounded-md text-center py-3 font-medium  hover:border-black cursor-pointer'>
                        UK 10
                    </div>
                    <div className='border rounded-md text-center py-3 font-medium  hover:border-black cursor-not-allowed bg-black/[0.1] opacity-50'>
                        UK 10.5
                    </div>
                    <div className='border rounded-md text-center py-3 font-medium  hover:border-black cursor-not-allowed bg-black/[0.1] opacity-50'>
                        UK 11
                    </div>
                </div>


                {/* ERR MSG */}
                <div className='text-red-600 mt-1'>
                    Size Selection is required
                
            </div>


            {/* BUTTON */}
            <button className='w-full py-4 rounded-full bg-black text-white
            text-lg font-medium transition-transform active:scale-95 mt-3 mb-5 hover:opacity-75'>
                Add to Cart
            </button>

            <button className='w-full py-4 rounded-full border border-black text-lg
             font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10'>
               Wishlist
            </button>

             {/* PRODUCT DETAILS */}
             <div className='text-lg font-bold mb-5'>Product Details</div>
              <div className='text-md mb-5'>Comfortable, durable and timeless—the AF-1 is a fan favourite for a reason. Classic '80s construction paired with perforated leather brings style that tracks whether you're on the court or on the go. This special edition is decked out in black from top to bottom, plus a pop of Game Royal on the insoles for a little something extra. </div>
            </div>

            </div>

            <RelatedProducts/>
        </Wrapper>
      
    </div>
  )
}

export default ProductDetails
