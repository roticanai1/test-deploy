'use client'
import { assets } from '@/assets/assets'
import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Hero = () => {

    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '$'

    return (
        <div className='mx-5 sm:mx-8'>
            <div className='mx-auto my-5 max-w-7xl sm:my-8'>
                <div className='relative flex min-h-[420px] overflow-hidden rounded-[1.75rem] bg-[#dcefe3] sm:min-h-[520px]'>
                    <div className='relative z-10 flex max-w-2xl flex-col justify-center p-7 sm:p-12 lg:p-16'>
                        <p className='text-xs font-bold uppercase tracking-[0.2em] text-emerald-800'>The everyday edit</p>
                        <h1 className='mt-4 text-[2.65rem] font-semibold leading-[0.98] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl'>
                            Better things for everyday life.
                        </h1>
                        <p className='mt-5 max-w-md text-sm leading-6 text-slate-600 sm:text-base'>
                            Thoughtfully selected tech, accessories, and essentials—all at prices that make sense.
                        </p>
                        <Link href='/shop' className='mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700'>
                            Shop the collection <ArrowRightIcon size={16} />
                        </Link>
                    </div>
                    <div className='absolute bottom-[-8%] right-[-18%] w-[78%] opacity-95 sm:right-[-4%] sm:w-[58%] lg:right-0 lg:w-[48%]'>
                        <Image priority className='h-auto w-full' src={assets.hero_model_img} alt="Featured collection" />
                    </div>
                    <div className='absolute bottom-5 right-5 hidden rounded-2xl border border-white/70 bg-white/80 p-4 shadow-lg backdrop-blur-md sm:block'>
                        <p className='text-xs font-medium text-slate-500'>Starting at</p>
                        <p className='mt-1 text-2xl font-semibold text-slate-950'>{currency}29</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero