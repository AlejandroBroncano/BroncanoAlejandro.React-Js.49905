import { useState, useEffect } from "react";
import { getProductById, getProducts } from "../services";

/**
 * @description Custom hook from get products
 * @returns {Array}
 */


export const useGetProducts = (limit) => {
    const [productsData, setProductsData] = useState([]);
    
    useEffect(() => {
        getProducts(limit)
            .then((response) => {
            setProductsData(response.data.products);
            })
            .catch((error) => {
            console.log(error);
            });
        }, []);

        return { productsData }
}

export const useGetProductById = (id) => {
    const [productData, setProductData] = useState([]);
    
    useEffect(() => {
        getProductById(id)
            .then((response) => {
            setProductData(response.data);
            })
            .catch((error) => {
            console.log(error);
            });
        }, []);

        return { productData }
}