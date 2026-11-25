'use client'
import { StarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({ product }) => {

    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '$'

    // calculate the average rating of the product
    const rating = Math.round(product.rating.reduce((acc, curr) => acc + curr.rating, 0) / product.rating.length);

    return (
        <Link href={`/product/${product.id}`} className='group min-w-0'>
            <div className='relative flex aspect-[4/4.6] items-center justify-center overflow-hidden rounded-[1.25rem] bg-[#f1f3ef]'>
                <span className='absolute left-3 top-3 z-10 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600 backdrop-blur'>New</span>
                <Image fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className='object-contain p-5 transition duration-500 group-hover:scale-[1.06]' src={product.images[0]} alt={product.name} />
            </div>
            <div className='flex items-start justify-between gap-3 pt-3 text-sm'>
                <div className='min-w-0'>
                    <p className='truncate font-semibold text-slate-900'>{product.name}</p>
                    <div className='mt-1.5 flex'>
                        {Array(5).fill('').map((_, index) => (
                            <StarIcon key={index} size={12} className='text-transparent' fill={rating >= index + 1 ? "#10b981" : "#dfe4e1"} />
                        ))}
                    </div>
                </div>
                <p className='shrink-0 font-semibold text-slate-950'>{currency}{product.price}</p>
            </div>
        </Link>
    )
}

export default ProductCard