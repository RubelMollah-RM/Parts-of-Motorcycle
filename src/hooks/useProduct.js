import { useEffect, useState } from "react"

const useProduct = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('parts.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, []);

    return [products, setProducts]
}

export default useProduct ;