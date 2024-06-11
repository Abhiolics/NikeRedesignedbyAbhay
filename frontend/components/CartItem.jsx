import React from 'react'
import { MdOutlineDelete } from "react-icons/md";

const CartItem = () => {
  return (
    <div className='flex gap-3 py-5 md:gap-5 border-b'>
        {/* IMAGE */}
        <div className='shrink-0 aspect-square w-[50px] md:w-[120px]'>
            <img src="product-1.webp" alt="" />
        </div>
      {/* END */}

      <div className="w-full flex flex-col">
                <div className="flex flex-col md:flex-row justify-between">
                    {/* PRODUCT TITLE */}
                    <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
                        Sneakers Retro GenX
                    </div>

                    {/* PRODUCT SUBTITLE */}
                    <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
                        Men's Golfy
                    </div>

                    {/* PRODUCT PRICE */}
                    <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
                        MRP : &#8377; 19000
                    </div>
                </div>

                {/* PRODUCT SUBTITLE */}
                <div className="text-md font-medium text-black/[0.5] hidden md:block">
                Men's Golfy
                </div>

                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
                        <div className="flex items-center gap-1">
                            <div className="font-semibold">Size:</div>
                            <select className='hover:text-black'>
                                <option value="1"> Uk 6</option>
                                <option value="2"> Uk 6.5</option>
                                <option value="3"> Uk 7</option>
                                <option value="4"> Uk 8</option>
                                <option value="5"> Uk 8.5</option>
                                <option value="6"> Uk 9</option>
                                <option value="7"> Uk 10</option>
                                <option value="8"> Uk 11</option>
                            </select>
                            </div>
                            

                            <div className="flex items-center gap-1">
                            <div className="font-semibold">Quantity:</div>
                            <select className='hover:text-black'>
                                <option value="1" className='border w-32'> 1</option>
                                <option value="2"> 2</option>
                                <option value="3"> 3</option>
                                <option value="4"> 4</option>
                                <option value="5"> 5</option>
                                <option value="6"> 6</option>
                                <option value="7"> 7</option>
                                <option value="8"> 10</option>
                            </select>
                            </div>
                            </div>
                            <MdOutlineDelete size={20} className="cursor-pointer text-black/[0.5]
                             hover:text-black text-[16px] md:text-[20px]"
                             /> 
                            </div>


       </div>
    </div>
  )
}

export default CartItem
