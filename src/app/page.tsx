import { poppins } from "@/fonts/Poppins";
import Image from "next/image";

export default function Home() {
    return (
        <main>
            <div className="bg-primary flex justify-center py-2">
                <p className={"text-sm text-white " + poppins.className}>
                    Free Delivery on Your First Order – Order Now!
                </p>
            </div>
        </main>
    );
}
