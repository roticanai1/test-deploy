'use client'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Title = ({ title, description, visibleButton = true, href = '' }) => {

    return (
        <div className='flex items-end justify-between gap-5'>
            <div>
                <p className='mb-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700'>Curated for you</p>
                <h2 className='text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl'>{title}</h2>
                <p className='mt-2 text-sm text-slate-500'>{description}</p>
            </div>
            {visibleButton && (
                <Link href={href || '/shop'} className='hidden shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-950 sm:flex'>
                    View all <ArrowRight size={15} />
                </Link>
            )}
        </div>
    )
}

export default Title