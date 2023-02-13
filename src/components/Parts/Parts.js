import Part from '../Parts/Part'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useProduct from '../../hooks/useProduct';
import { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';


const Parts = () => {
    const [products] = useProduct();
    const [cart, setCart] = useState([])


    useEffect( () =>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products]);

    const handleAddToCart = (selectedProduct) =>{
        console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        
        setCart(newCart);
        addToDb(selectedProduct.id);
    }

    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center items-center lg:container lg:mx-auto gap-6 mt-[100px] ml-[100px] '>
            {
                products?.map(product => <Part
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    // card = {cart}
                />)
            }
            <ToastContainer />
        </div>
    );
};

export default Parts;