import ProductCard from '@/components/ProductCard'
import Wrapper from '@/components/Wrapper'
import React, { use } from 'react'
// import { useRouter } from 'next/router'


const  Category = () => {
    // const router = useRouter();
    // const { slug } = router.query;

  return (
    <div className='w-full md:py-20'>
        <Wrapper>
            <div className='text-center max-w-[800px] mt-8 md:mt-0 mx-auto'>
                <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'>
                   Running Shoes
                </div>
            </div>
        


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 my-14
              px-5 md:px-0">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
             </div>

             </Wrapper>
    </div>
  )
}

export default  Category
