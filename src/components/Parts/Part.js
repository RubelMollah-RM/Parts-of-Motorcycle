import { FaCartPlus } from "react-icons/fa";
import './Part.css';



const Part = ({ product, handleAddToCart }) => {
    const { name, img, price } = product;

    return (
        <div>
            <div className='cards'>
                <img className='h-[250px] w-[285px] mx-auto' src={img} alt="" />
                <div className='text-center'>
                    <h1 className='mt-2'>Name : {name}</h1>
                    <p>Price : {price}</p>
                </div>
                <button onClick={() => handleAddToCart(product)} className='border absolute bottom-0 border-red-700 p-3 w-full rounded-md hover:bg-orange-600 hover:text-black flex justify-around align-middle'>
                    <h1 className="text-center"> Add to card</h1>
                    <div className='text-4xl'>
                        <FaCartPlus />
                    </div>
                </button>

            </div>

        </div>
    );
};

export default Part;