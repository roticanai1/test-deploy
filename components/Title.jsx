'use client'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Title = ({ title, description, visibleButton = true, href = '' }) => {

    return (
        <div className='flex items-end justify-between gap-5'>
            <div>
                <p className='mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#b9dd72]'>Curated for you</p>
                <h2 className='text-2xl font-semibold tracking-tight text-white sm:text-3xl'>{title}</h2>
                <p className='mt-2 text-sm text-zinc-500'>{description}</p>
            </div>
            {visibleButton && (
                <Link href={href || '/shop'} className='hidden shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-zinc-300 transition hover:border-[#b9dd72]/40 hover:text-white sm:flex'>
                    View all <ArrowRight size={15} />
                </Link>
            )}
        </div>
    )
}

export default Title