import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="h-20 px-4 md:px-16 xl:32 2xl:px-64">
            {/* MOBILE */}
            <div className=" h-full flex items-center justify-between relative">
                <Link href="/">
                    <div className="text-2xl tracking-wide">LAMA</div>
                </Link>
                <Menu />
            </div>
            {/* DESKTOP */}
            <div className="hidden md:flex items-center justify-between gap-8 h-full">
                {/* Left */}
                <div className="w-1/3">
                    <Link href="/">
                        <Image src="/logo.png" alt="" width={24} height={24} />
                        <div className="text-2xl tracking-wide">LAMA</div>
                    </Link>
                </div>
                {/* Right */}
                <div className="w-2/3"></div>
            </div>
        </div>
    );
};

export default Navbar;