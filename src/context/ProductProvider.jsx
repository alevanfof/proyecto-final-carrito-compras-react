import React, { useEffect, useState } from 'react'
import { ProductContext } from './ProductContext'
import Swal from 'sweetalert2'

export const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setProducts(data)

        } catch (error) {
            Swal.fire(
                {
                    icon: 'error',
                    title: '¡Error!',
                    text: 'No se pudo cargar la lista de productos',
                    confirmButtonText: 'Aceptar'
                }
            )
            console.error(error)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <ProductContext.Provider value={{products}}>
            {children}
        </ProductContext.Provider>
    )
}
