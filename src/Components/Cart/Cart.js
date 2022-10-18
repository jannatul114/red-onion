import React, { useContext } from 'react';
import { CartContext } from '../../App';
import background from '../../images/images/bannerbackground.png'
import Header from '../Header/Header';

const Cart = () => {
    const [carts, setCart] = useContext(CartContext);
    const removeCart = (meal) => {
        const removed = carts.filter(p => p.id !== meal.id);
        console.log(removed);
        setCart(removed)
    }
    return (

        <div >
            <h1 className='text-center text-red-500 text-4xl my-4 font-bold'>Cart added foods</h1>
            {
                carts.length >= 1 ?
                    <div>
                        <div className='flex justify-center'>
                            <div className='container'>
                                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4">
                                    {
                                        carts.map(cart =>
                                            <div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg border-2 border-red-300">
                                                <div class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
                                                    <img src={cart?.img}
                                                        alt=""
                                                        class="h-full w-full" />
                                                </div>

                                                <h2 class="mt-4 font-bold text-xl">{cart.name}</h2>
                                                <p class="text-xs text-gray-500 text-center mt-3">
                                                    {cart?.text}
                                                </p>
                                                <button onClick={() => removeCart(cart)} className='py-2 px-3 bg-red-400 rounded-2 my-2 text-white text-bold'>Remove</button>
                                            </div>

                                        )}
                                </div>
                            </div>
                        </div>
                    </div> : <p className='text-4xl font-semibold text-center'>No meals yet</p>
            }
        </div>
    );
};

export default Cart;