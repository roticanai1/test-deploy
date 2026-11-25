import Link from "next/link";

const Footer = () => {
    return (
        <footer className="mx-5 pb-5 sm:mx-8">
            <div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-slate-200 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight text-slate-900">
                    <span className="text-emerald-600">go</span>cart<span className="text-emerald-600">.</span>
                </Link>
                <nav className="flex flex-wrap gap-x-5 gap-y-2">
                    <Link href="/shop" className="transition hover:text-slate-900">Shop</Link>
                    <Link href="/create-store" className="transition hover:text-slate-900">Sell with us</Link>
                    <Link href="/orders" className="transition hover:text-slate-900">Orders</Link>
                </nav>
                <p>© 2026 GoCart</p>
            </div>
        </footer>
    );
};

export default Footer;
