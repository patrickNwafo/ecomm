import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
            {/* Top */}
            <div className="flex flex-col md:flex-row justify-between gap-24">
                {/* Left */}
                <div className=" w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
                    <Link href="/" className="text-2xl tracking-wide">
                        LAMA
                    </Link>
                    <p>
                        3352 Winding Way, Central Plaza, Willowbrook, CA 90210,
                        United States
                    </p>
                    <span className="font-semibold">
                        patrickchinwafor@gmail.com
                    </span>
                    <span className="font-semibold">*234 703 7729 150</span>
                    <div className="flex gap-6">
                        <Image
                            src="/facebook.png"
                            alt=""
                            width={16}
                            height={16}
                        />
                        <Image
                            src="/instagram.png"
                            alt=""
                            width={16}
                            height={16}
                        />
                        <Image
                            src="/youtube.png"
                            alt=""
                            width={16}
                            height={16}
                        />
                        <Image
                            src="/pinterest.png"
                            alt=""
                            width={16}
                            height={16}
                        />
                        <Image src="/x.png" alt="" width={16} height={16} />
                    </div>
                </div>
                {/* CENTER */}
                <div className="hidden lg:flex justify-between w-1/2">
                    <div className="flex flex-col justify-between">
                        <h1> Company</h1>
                        <div className="flex flex-col gap-6">
                            <Link href="/">About</Link>
                            <Link href="/">Affiliates</Link>
                            <Link href="/">Blog</Link>
                            <Link href="/">Contact Us</Link>
                        </div>
                    </div>
                </div>
                {/* RIGHT */}
                <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
                    <h1 className="font-medium text-lg">SUBSCRIBE</h1>
                    <p>
                        Be the first to get the latest news about trends,
                        promotions, and much more!
                    </p>
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Email address"
                            className="p-4 w-3/4"
                        />
                        <button className="w-1/4 bg-lama text-white">
                            JOIN
                        </button>
                    </div>
                    <span className="font-semibold">Secure Payments</span>
                    <div className="flex justify-between">
                        <Image
                            src="/discover.png"
                            alt=""
                            width={40}
                            height={20}
                        />
                        <Image
                            src="/skrill.png"
                            alt=""
                            width={40}
                            height={20}
                        />
                        <Image
                            src="/paypal.png"
                            alt=""
                            width={40}
                            height={20}
                        />
                        <Image
                            src="/mastercard.png"
                            alt=""
                            width={40}
                            height={20}
                        />
                        <Image src="/visa.png" alt="" width={40} height={20} />
                    </div>
                </div>
            </div>
            {/* Bottom */}
            <div className=""></div>
        </div>
    );
};

export default Footer;
