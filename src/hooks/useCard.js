import { useEffect } from "react";
import { useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCard = (products) => {
    const [card, setCard] = useState([]);
    useEffect(() => {
        const storeCard = getStoredCart();
        const saveCard = [];
        for (const id in storeCard) {
            const addProduct = products.find(product => product.id === id);
            if (addProduct) {
                const quentity = storeCard[id]
                addProduct.quentity = quentity;
                saveCard.push(addProduct);
            }
        }
        setCard(saveCard);
    }, [products]);

    return {
        card,
        setCard
    };
}

export default useCard;