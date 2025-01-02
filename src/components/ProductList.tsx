import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
    return (
        <div className=" mt-12 flex gap-x-0 gap-y-0 justify-between flex-wrap">
            <Link
                href="/test"
                className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
            >
                <div className="relative w-full h-80">
                    <Image
                        src="https://images.pexels.com/photos/29803460/pexels-photo-29803460/free-photo-of-charming-slovak-church-amidst-scenic-mountains.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                        alt=""
                        fill
                        sizes="25vw"
                        className=" absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image
                        src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt=""
                        fill
                        sizes="25vw"
                        className=" absolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <div className="rounded-2xl ring-1 ring-lama py-2 px-4 text-xs hover:bg-lama hover:text-white w-max">
                    Add to Cart
                </div>
            </Link>
            <Link
                href="/test"
                className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
            >
                <div className="relative w-full h-80">
                    <Image
                        src="https://images.pexels.com/photos/29803460/pexels-photo-29803460/free-photo-of-charming-slovak-church-amidst-scenic-mountains.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                        alt=""
                        fill
                        sizes="25vw"
                        className=" absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image
                        src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt=""
                        fill
                        sizes="25vw"
                        className=" absolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <div className="rounded-2xl ring-1 ring-lama py-2 px-4 text-xs hover:bg-lama hover:text-white w-max">
                    Add to Cart
                </div>
            </Link>
            <Link
                href="/test"
                className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
            >
                <div className="relative w-full h-80">
                    <Image
                        src="https://images.pexels.com/photos/29803460/pexels-photo-29803460/free-photo-of-charming-slovak-church-amidst-scenic-mountains.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                        alt=""
                        fill
                        sizes="25vw"
                        className=" absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image
                        src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt=""
                        fill
                        sizes="25vw"
                        className=" absolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <div className="rounded-2xl ring-1 ring-lama py-2 px-4 text-xs hover:bg-lama hover:text-white w-max">
                    Add to Cart
                </div>
            </Link>
            <Link
                href="/test"
                className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
            >
                <div className="relative w-full h-80">
                    <Image
                        src="https://images.pexels.com/photos/29803460/pexels-photo-29803460/free-photo-of-charming-slovak-church-amidst-scenic-mountains.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                        alt=""
                        fill
                        sizes="25vw"
                        className=" absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image
                        src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt=""
                        fill
                        sizes="25vw"
                        className=" absolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <div className="rounded-2xl ring-1 ring-lama py-2 px-4 text-xs hover:bg-lama hover:text-white w-max">
                    Add to Cart
                </div>
            </Link>
        </div>
    );
};

export default ProductList;
