import React, { useState } from 'react'
import CardsData from './CardsData'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/features/cartSlice'
import toast from 'react-hot-toast'



const Home = () => {
    const [cartData, setCartData] = useState(CardsData)
    const dispatch = useDispatch()

    // add to cart / send data to cart
    const handleAddToCart = (e) => {
        dispatch(addToCart(e))
        toast.success("Item added successfully")
    }

  return (
    <div className='flex  justify-center items-center grid grid-cols-5 gap-y-8 px-20 py-8'>
        {
            cartData.map((item, index) => {
                return (
                <div className=' w-[16rem] bg-gray-100  shadow-md hover:shadow-none'>
                <div className=' p-2'>
                    <img className="w-full h-[200px] " src={item.imgdata} alt="" />
                    <div className='mt-2'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-black font-semibold '>{item.dish}</h1>
                            <p className='text-white font-semibold bg-green-900 px-2 rounded-md'>{item.rating} ⭐</p>
                        </div> 
                        <div className='flex items-center justify-between '>
                            <h2 className='text-black ' >{item.address}</h2>
                            <p className='text-black font-semibold'>{item.price}</p>
                        </div>
                        <button onClick={() => handleAddToCart(item)} className='text-black font-bold bg-red-600 w-full py-1 mt-1 '>Add To Cart</button>
                    </div>
                </div>
            </div>
                )
            })
        }
       
    </div>
  )
}

export default Home