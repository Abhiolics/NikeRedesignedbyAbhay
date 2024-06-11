import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
import ComingSoon from "@/components/ComingSoon";

export default function Home() {
    return <main>
        <HeroBanner/>
        <Wrapper>
            <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
            <div className="text-[58px] md:text-[34px] mb-5 font-bold leading-tight">
                        DON'T WASTE YOUR ENERGY
                    </div>
                    <div className="text-md md:text-xl">
                        A lightweight Nike ZoomX midsole is combined with
                        increased stack heights to help provide cushioning
                        during extended stretches of running.
                    </div>
            </div>



            {/* Product Cards */}
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

              {/* Coming Soon */}
              <ComingSoon/>


        </Wrapper>
    </main>;
}
