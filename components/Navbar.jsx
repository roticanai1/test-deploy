'use client'
import { Menu, Search, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {

    const router = useRouter();

    const [search, setSearch] = useState('')
    const [mobileOpen, setMobileOpen] = useState(false)
    const cartCount = useSelector(state => state.cart.total)

    const handleSearch = (e) => {
        e.preventDefault()
        router.push(`/shop?search=${search}`)
    }

    return (
        <nav className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
            <div className="mx-5 sm:mx-8">
                <div className="flex h-18 items-center justify-between max-w-7xl mx-auto">

                    <Link href="/" className="relative text-2xl font-bold tracking-tight text-slate-900">
                        <span className="text-emerald-600">go</span>cart<span className="text-emerald-600">.</span>
                        <p className="absolute -top-2 -right-9 rounded-full bg-emerald-600 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                            plus
                        </p>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden sm:flex items-center gap-5 lg:gap-7 text-sm font-medium text-slate-600">
                        <Link className="transition hover:text-slate-950" href="/">Home</Link>
                        <Link className="transition hover:text-slate-950" href="/shop">Shop</Link>
                        <Link className="transition hover:text-slate-950" href="/create-store">Sell</Link>
                        <Link className="transition hover:text-slate-950" href="/">About</Link>

                        <form onSubmit={handleSearch} className="hidden xl:flex items-center w-56 text-sm gap-2 rounded-full border border-slate-200 bg-stone-50 px-4 py-2.5 transition focus-within:border-emerald-300 focus-within:ring-4 focus-within:ring-emerald-100">
                            <Search size={17} className="text-slate-400" />
                            <input className="w-full bg-transparent outline-none placeholder:text-slate-400" type="text" placeholder="Search products" value={search} onChange={(e) => setSearch(e.target.value)} required />
                        </form>

                        <Link href="/cart" className="relative flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 transition hover:border-emerald-200 hover:bg-emerald-50">
                            <ShoppingCart size={18} />
                            <span className="hidden lg:inline">Cart</span>
                            {cartCount > 0 && <span className="absolute -right-2 -top-2 grid size-5 place-items-center rounded-full bg-slate-950 text-[10px] text-white">{cartCount}</span>}
                        </Link>

                        <button className="rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-800">Sign in</button>
                    </div>

                    {/* Mobile User Button  */}
                    <div className="flex items-center gap-2 sm:hidden">
                        <Link href="/cart" className="relative grid size-10 place-items-center rounded-full border border-slate-200">
                            <ShoppingCart size={18} />
                            {cartCount > 0 && <span className="absolute -right-1 -top-1 grid size-4 place-items-center rounded-full bg-slate-950 text-[9px] text-white">{cartCount}</span>}
                        </Link>
                        <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu" className="grid size-10 place-items-center rounded-full border border-slate-200">
                            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>
                </div>
                {mobileOpen && (
                    <div className="border-t border-slate-100 py-4 sm:hidden">
                        <div className="grid gap-1">
                            {[
                                ["Home", "/"],
                                ["Shop", "/shop"],
                                ["Sell", "/create-store"],
                            ].map(([label, href]) => (
                                <Link key={href} href={href} onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-3 text-sm font-medium text-slate-700 hover:bg-emerald-50">{label}</Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar