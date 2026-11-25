'use client'
import React from 'react'
import Title from './Title'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'

const LatestProducts = () => {

    const displayQuantity = 8
    const products = useSelector(state => state.product.list)

    return (
        <section className='mx-5 my-16 sm:mx-8 sm:my-20'>
            <div className='mx-auto max-w-7xl'>
            <Title title='New arrivals' description='Fresh finds, selected for everyday living.' href='/shop' />
            <div className='mt-8 grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 sm:gap-x-5'>
                {products.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, displayQuantity).map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
            </div>
        </section>
    )
}

export default LatestProducts