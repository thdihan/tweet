import { poppins } from "@/fonts/Poppins";
import Image from "next/image";
import { rancho } from "@/fonts/Rancho";
import { MdOutlineGpsFixed } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { IoIosStar } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";

export default function Home() {
    return (
        <main>
            {/* Top Header Text  */}
            <div className="bg-primary flex justify-center py-2">
                <p className={"text-sm text-white " + poppins.className}>
                    Free Delivery on Your First Order – Order Now!
                </p>
            </div>

            <div className="w-full">
                {/* Header  */}
                <header className="container px-16 mx-auto flex justify-between py-4">
                    <div>
                        <Image
                            src="/logo.png"
                            alt="Tweet"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="rounded-full ">
                        <Image
                            src="/profile.jpg"
                            alt="Profile"
                            width={60}
                            height={60}
                            className="rounded-full size-12 overflow-hidden inset-0 object-cover border-2 border-primary"
                        />
                    </div>
                </header>

                {/* Hero Section  */}
                <div className="bg-hero">
                    <div className="container mx-auto px-16 flex justify-between space-x-12 py-24 ">
                        <div className="w-1/2 space-y-6">
                            <h1 className={"text-8xl " + rancho.className}>
                                Hungry?
                            </h1>

                            <h2
                                className={
                                    "text-6xl font-bold text-primary " +
                                    poppins.className
                                }
                            >
                                <span className="text-black">Let Us</span> Bring
                                <br /> The Feast to You
                            </h2>
                            <p className="text-secondary">
                                Explore hundreds of delicious options from top
                                restaurants and Enjoy fast, reliable delivery
                                right to you.
                            </p>

                            <div className="flex">
                                <div className="border border-primary rounded-l-lg relative bg-white w-3/4">
                                    <input
                                        type="text"
                                        name="location"
                                        className="border-0 outline-0 w-full h-full px-2 text-sm "
                                        placeholder="Enter your location"
                                    />

                                    <p className="absolute top-1/2 -translate-y-1/2 right-2 flex space-x-2 items-center">
                                        <MdOutlineGpsFixed className="" />
                                        <span className="text-sm text-primary">
                                            Locate me
                                        </span>
                                    </p>
                                </div>
                                <button className="bg-primary h-[64px] px-6 rounded-r-lg text-lg font-semibold text-white">
                                    Find Food
                                </button>
                            </div>
                        </div>

                        <div className="w-1/2 relative h-full">
                            <div className="absolute bg-white p-3 rounded-lg shadow-2xl">
                                <div className="flex">
                                    <Image
                                        src="/profile2.jpg"
                                        alt="Hero"
                                        width={50}
                                        height={50}
                                        className="rounded-full size-12 overflow-hidden inset-0 object-cover border-2 border-white"
                                    />
                                    <Image
                                        src="/profile3.jpg"
                                        alt="Hero"
                                        width={50}
                                        height={50}
                                        className="rounded-full size-12 overflow-hidden inset-0 object-cover border-2 border-white -mx-6"
                                    />
                                    <Image
                                        src="/profile4.jpg"
                                        alt="Hero"
                                        width={50}
                                        height={50}
                                        className="rounded-full size-12 overflow-hidden inset-0 object-cover border-2 border-white"
                                    />
                                    <div className="rounded-full size-12  border-2 border-white flex justify-center items-center bg-[#FAFAFA] -ms-6">
                                        <FiPlus />
                                    </div>
                                </div>
                                <p className="font-semibold">
                                    Satisfied Customer
                                </p>
                                <div className="flex items-center text-sm text-secondary space-x-2">
                                    <IoIosStar className="text-amber-500 text-lg" />
                                    <span>5.0 (3K Reviews)</span>
                                </div>
                            </div>

                            <div className="absolute -bottom-10 bg-white/50 backdrop-blur p-3 rounded-lg shadow-lg flex items-center space-x-4 border border-white">
                                <div>
                                    <img
                                        src="/hero2.jpg"
                                        alt="Hero"
                                        className="rounded-lg size-24 overflow-hidden inset-0 object-cover "
                                    />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-semibold">
                                        Flavour fusion Bistro
                                    </h4>
                                    <p className="text-sm">
                                        Kaliurang, Seleman
                                    </p>
                                    <div className="flex items-center text-sm text-secondary space-x-2">
                                        <span>4.9</span>
                                        <IoIosStar className="text-amber-500 text-lg" />
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-10 right-10 bg-white/70 backdrop-blur px-6 py-3 rounded-lg shadow-lg flex items-center space-x-4 border border-white">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-[#F5EAE3] rounded-full p-3">
                                        <TbTruckDelivery className="text-xl text-primary  " />
                                    </div>

                                    <div className="space-y-1">
                                        <h4 className="font-semibold">24/7</h4>
                                        <p className="text-[#737373] text-sm">
                                            Delivery
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <img
                                src="/hero.png"
                                alt="Hero"
                                className="w-[100%]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
