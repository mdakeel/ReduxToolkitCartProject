import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, clearCart, decrement, removeFromCart } from '../redux/features/cartSlice';
import toast from 'react-hot-toast';


const Cart = () => {
    const {carts} = useSelector((state) => state.cart);
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantity, setTotalQuantity] = useState(0)

    const dispatch = useDispatch()

    const handleIncrement = (e) => {
        dispatch(addToCart(e))
    }

    const handleDec = (e) => {
        dispatch(decrement(e))
    }

    const handleRemoveFromCart = (e) => {
        dispatch(removeFromCart(e))
        toast.success("Item removed from cart!");
    }

    const handleClearCart = (e) => {
        dispatch(clearCart(e))
        toast.success("Cart cleared!");
    }

    // count total price
    const total = () => {
        const totalPrice = carts.reduce((acc, item) => {
            return acc + item.price * item.qnty;
        }, 0);

        setTotalPrice(totalPrice);
    };

     // count total price
     const countQuantity = () => {
        let totalQuantity = 0;
        carts.map((ele, ind) => {
            totalQuantity = totalQuantity + ele.qnty;
        });

        setTotalQuantity(totalQuantity);
    };

    useEffect(() => {
        total();
    }, [carts]);

    useEffect(() => {
        countQuantity()
    }, [countQuantity]);

    return (
        <div className='flex w-[60%] items-center justify-center m-auto mt-20 '>
            <div className='flex flex-col w-full shadow-md '>
                <div className='flex items-center justify-between bg-[#373A40] py-3 px-6'>
                    <h1 className='text-white text-[20px] font-semibold'>Cart Calculation : {carts.length} </h1>
                    <button onClick={() => handleClearCart()} className='bg-red-500 px-4 text-[17px] shadow-md  hover:shadow-none rounded-sm py-1 font-semibold text-white'>Clear Cart</button>
                </div>
                <div className=' w-full '>
                    {
                        carts.length === 0 ? (
                            <>
                                <div className='w-full h-[100px] py-7 '>
                                    <p className='text-2xl  text-[#B4B4B8] text-center pt-1 '>Your cart is Empty</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="relative overflow-x-auto ">
                                    <table className="w-full  text-sm text-left rtl:text-right text-gray-500 ">
                                        <thead className=" text-gray-700 uppercase bg-gray-100 ">
                                            <tr>
                                                <th scope="col" className="px-6 py-3">
                                                    Action
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Product
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Name
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Price
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Qty
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-right">
                                                    Total Amount
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className='text-gray-700 bg-gray-5 border-b-2 border-[#373A40] '>
                                            {
                                                carts.map((item, index) => {
                                                    return (
                                                        <>
                                                        <tr className='border-b border-gray-200'>
                                                            <td className="px-6 py-3"><button onClick={() => handleRemoveFromCart(item.id)} className='bg-red-200 px-4 py-3 shadow-md hover:bg-red-300 hover:red-900 rounded-sm'>❌</button></td>
                                                            <td className="px-6 py-3"><img className="w-12 h-11 rounded-sm shadow-md" src={item.imgdata} alt="" /></td>
                                                            <td className="px-6 py-3"><p>{item.dish}</p></td>
                                                            <td className="px-6 py-3">{item.price}</td>
                                                            <td className=" py-3">
                                                                <div className='flex flex-row items-center justify-center gap-2 text-center'>
                                                                    <button onClick={item.qnty <= 1 ? () => handleRemoveFromCart(item.id) : () => handleDec(item)} className='bg-blue-200 px-5 py-2 text-xl text-blue-600 font-semibold shadow-md hover:bg-blue-300 hover:text-900 rounded-sm'>-</button>
                                                                    <input type="text" value={item.qnty} className='outlin-none text-center border w-[70px] py-3 bg-transparent' disabled/>
                                                                    <button onClick={() => handleIncrement(item)} className='bg-blue-200 px-5 py-2 text-xl text-blue-600 font-semibold shadow-md hover:bg-blue-300 hover:text-900 rounded-sm'>+</button>
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-3 text-right">₹ {item.qnty * item.price}</td>
                                                        </tr>
                                                        </>
                                                    )
                                                })
                                            }
                                        </tbody>
                                        <tfoot className='text-sm text-black font-semibold'>
                                            <tr>
                                                <th>&nbsp;</th>
                                                <th colSpan={3}>&nbsp;</th>
                                                <th className='px-6 py-3'>Items In Cart : <span className='text-red-600'>{totalQuantity}</span></th>
                                                <th className='text-right px-6 py-3'>Total Price : <span className='text-red-600'>₹ {totalPrice}</span> </th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>

                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Cart