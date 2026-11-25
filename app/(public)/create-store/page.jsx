'use client'
import { assets } from "@/assets/assets"
import { useEffect, useState } from "react"
import Image from "next/image"
import toast from "react-hot-toast"
import Loading from "@/components/Loading"
import {
    ArrowRight,
    Building2,
    Check,
    Mail,
    MapPin,
    Phone,
    Store,
    Upload,
    UserRound,
} from "lucide-react"

export default function CreateStore() {

    const [alreadySubmitted, setAlreadySubmitted] = useState(false)
    const [status, setStatus] = useState("")
    const [loading, setLoading] = useState(true)
    const [message, setMessage] = useState("")

    const [storeInfo, setStoreInfo] = useState({
        name: "",
        username: "",
        description: "",
        email: "",
        contact: "",
        address: "",
        image: ""
    })

    const onChangeHandler = (e) => {
        setStoreInfo({ ...storeInfo, [e.target.name]: e.target.value })
    }

    const fetchSellerStatus = async () => {
        // Logic to check if the store is already submitted


        setLoading(false)
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        // Logic to submit the store details


    }

    useEffect(() => {
        fetchSellerStatus()
    }, [])

    return !loading ? (
        <>
            {!alreadySubmitted ? (
                <div className="relative overflow-hidden px-5 py-10 sm:px-8 lg:py-14">
                    <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-100/80 blur-3xl" />
                    <div className="mx-auto max-w-6xl">
                        <div className="mb-8 max-w-2xl">
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                                <Store size={14} />
                                Seller application
                            </div>
                            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                                Start your store
                            </h1>
                            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                                Share a few details about your business. Your store will go live after our team completes a quick verification.
                            </p>
                        </div>

                        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
                            <form
                                onSubmit={e => toast.promise(onSubmitHandler(e), { loading: "Submitting data..." })}
                                className="rounded-3xl border border-slate-200/80 bg-white p-5 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.25)] sm:p-8"
                            >
                                <div className="mb-7 flex items-center justify-between border-b border-slate-100 pb-5">
                                    <div>
                                        <p className="text-sm font-semibold text-slate-900">Store information</p>
                                        <p className="mt-1 text-xs text-slate-400">All fields are required</p>
                                    </div>
                                    <span className="hidden rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500 sm:block">
                                        Step 1 of 1
                                    </span>
                                </div>

                                <div className="grid gap-5 sm:grid-cols-2">
                                    <label className="group block sm:col-span-2">
                                        <span className="mb-2 block text-sm font-medium text-slate-700">Store logo</span>
                                        <div className="flex items-center gap-4 rounded-2xl border border-dashed border-slate-300 bg-stone-50/80 p-4 transition hover:border-emerald-300 hover:bg-emerald-50/40">
                                            <div className="grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                                                <Image
                                                    src={storeInfo.image ? URL.createObjectURL(storeInfo.image) : assets.upload_area}
                                                    className="h-full w-full object-cover"
                                                    alt="Store logo preview"
                                                    width={80}
                                                    height={80}
                                                />
                                            </div>
                                            <div>
                                                <span className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2 text-sm font-medium text-white transition group-hover:bg-emerald-700">
                                                    <Upload size={15} />
                                                    Upload image
                                                </span>
                                                <p className="mt-2 text-xs text-slate-400">PNG or JPG, recommended size 1:1</p>
                                            </div>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => setStoreInfo({ ...storeInfo, image: e.target.files[0] })}
                                                hidden
                                            />
                                        </div>
                                    </label>

                                    <label className="block">
                                        <span className="mb-2 block text-sm font-medium text-slate-700">Username</span>
                                        <div className="relative">
                                            <UserRound className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
                                            <input name="username" onChange={onChangeHandler} value={storeInfo.username} type="text" required placeholder="your-store" className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100" />
                                        </div>
                                    </label>

                                    <label className="block">
                                        <span className="mb-2 block text-sm font-medium text-slate-700">Store name</span>
                                        <div className="relative">
                                            <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
                                            <input name="name" onChange={onChangeHandler} value={storeInfo.name} type="text" required placeholder="Your business name" className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100" />
                                        </div>
                                    </label>

                                    <label className="block sm:col-span-2">
                                        <span className="mb-2 block text-sm font-medium text-slate-700">Description</span>
                                        <textarea name="description" onChange={onChangeHandler} value={storeInfo.description} required rows={4} placeholder="Tell customers what makes your store special..." className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100" />
                                    </label>

                                    <label className="block">
                                        <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
                                        <div className="relative">
                                            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
                                            <input name="email" onChange={onChangeHandler} value={storeInfo.email} type="email" required placeholder="store@example.com" className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100" />
                                        </div>
                                    </label>

                                    <label className="block">
                                        <span className="mb-2 block text-sm font-medium text-slate-700">Contact number</span>
                                        <div className="relative">
                                            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
                                            <input name="contact" onChange={onChangeHandler} value={storeInfo.contact} type="tel" required placeholder="+1 555 000 0000" className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100" />
                                        </div>
                                    </label>

                                    <label className="block sm:col-span-2">
                                        <span className="mb-2 block text-sm font-medium text-slate-700">Business address</span>
                                        <div className="relative">
                                            <MapPin className="absolute left-3.5 top-3.5 text-slate-400" size={17} />
                                            <textarea name="address" onChange={onChangeHandler} value={storeInfo.address} required rows={3} placeholder="Street, city, state and postal code" className="w-full resize-none rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100" />
                                        </div>
                                    </label>
                                </div>

                                <button className="mt-7 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-slate-950 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:bg-emerald-700 active:scale-[0.99] sm:w-auto sm:px-8">
                                    Submit for review
                                    <ArrowRight size={17} />
                                </button>
                            </form>

                            <aside className="rounded-3xl border border-slate-200/80 bg-slate-950 p-6 text-white shadow-[0_20px_60px_-30px_rgba(15,23,42,0.45)] lg:sticky lg:top-6">
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">What happens next</p>
                                <div className="mt-6 space-y-6">
                                    {[
                                        ["Submit details", "Send your business information for review"],
                                        ["Team verification", "We check your store and contact details"],
                                        ["Start selling", "Get access to your seller dashboard"],
                                    ].map(([title, detail], index) => (
                                        <div key={title} className="flex gap-3">
                                            <div className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/15 bg-white/10 text-xs font-semibold">
                                                {index + 1}
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold">{title}</p>
                                                <p className="mt-1 text-xs leading-5 text-slate-400">{detail}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                                    <div className="flex items-center gap-2 text-sm font-medium">
                                        <Check size={16} className="text-emerald-300" />
                                        Secure application
                                    </div>
                                    <p className="mt-2 text-xs leading-5 text-slate-400">
                                        Your details are used only to verify and set up your store.
                                    </p>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex min-h-[70vh] items-center justify-center px-5 py-16">
                    <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-[0_20px_60px_-30px_rgba(15,23,42,0.25)] sm:p-10">
                        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-orange-50 text-orange-600">
                            {status === "approved" ? <Check size={28} /> : <Store size={28} />}
                        </div>
                        <p className="mt-6 text-2xl font-semibold tracking-tight text-slate-900">{message}</p>
                        {status === "approved" && (
                            <p className="mt-3 text-sm text-slate-500">
                                Redirecting to dashboard in <span className="font-semibold text-slate-800">5 seconds</span>
                            </p>
                        )}
                    </div>
                </div>
            )}
        </>
    ) : (<Loading />)
}