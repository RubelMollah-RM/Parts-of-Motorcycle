import React from 'react';
import useCard from '../../hooks/useCard';
import useProduct from '../../hooks/useProduct';

const Orders = () => {
     const [products] = useProduct();
    const {card} = useCard(products);
    
   
    return (
        <div>
           <h1>All product is here</h1>
           <h1>{card.length}</h1>
        </div>

    );
};

export default Orders;




        // <div className='grid lg:grid-cols-2 grid-cols-1'>
        //     <div className=' mt-11 border-r-2 border-red-800'>
        //         <div className='text-2xl text-center text-white underline underline-offset-8'>
        //             <h1>Your Orders</h1>
        //         </div>
        //         <div>
        //             {products.length}
        //         </div>
        //     </div>
        //     <div>
        //         <div className='text-2xl text-center text-white mt-11 underline underline-offset-8' >
        //             Order Summery
        //         </div>
        //         <div className='flex justify-center align-middle'>
        //             <div className='my-4'>
        //                 <p className='p-3 text-white'>Selected item:{ }</p>
        //                 <p className='p-3 text-white'>Total Price :{ }</p>
        //                 <p className='p-3 text-white'>Shipping charge :{ }</p>
        //                 <p className='p-3 text-white'>Tax :{ }</p>
        //                 <h1 className='text-xl mb-4 text-white underline underline-offset-8'>Total Price :{ }</h1>
        //                 <button className='btn btn-outline btn-secondary text-center px-11 mt-6 text-white'>Total</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        // const [card, setCard] = useState([]);

    
        // const handelAddToCard = () => {
        //     console.log('click me');
        //     setCard(...card, product)
        // }