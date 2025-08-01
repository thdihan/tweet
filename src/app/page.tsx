import { poppins } from "@/fonts/Poppins";
import Image from "next/image";
import hero from "@/images/hero.png";
import logo from "@/images/logo.png";
import profile from "@/images/profile.jpg";
import { rancho } from "@/fonts/Rancho";
import { MdOutlineGpsFixed } from "react-icons/md";

export default function Home() {
    return (
        <main>
            {/* Top Header Text  */}
            <div className="bg-primary flex justify-center py-2">
                <p className={"text-sm text-white " + poppins.className}>
                    Free Delivery on Your First Order – Order Now!
                </p>
            </div>

            <div className="container px-16">
                {/* Header  */}
                <header className=" flex justify-between py-4">
                    <div>
                        <Image
                            src={logo}
                            alt="Tweet"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="rounded-full ">
                        <Image
                            src={profile}
                            alt="Profile"
                            width={60}
                            height={60}
                            className="rounded-full size-12 overflow-hidden inset-0 object-cover border-2 border-primary"
                        />
                    </div>
                </header>

                {/* Hero Section  */}
                <div className="flex justify-between space-x-4 py-8 ">
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
                            restaurants and Enjoy fast, reliable delivery right
                            to you.
                        </p>

                        <div className="flex">
                            <div className="border border-primary rounded-l-lg relative">
                                <input
                                    type="text"
                                    name="location"
                                    className="border-0 outline-0 w-full h-full px-2 text-sm"
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

                    <div className="w-1/2">
                        <Image
                            src={hero}
                            alt="Hero"
                            width={undefined}
                            height={undefined}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
