"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
    {
        id: 1,
        url: "https://images.pexels.com/photos/25484473/pexels-photo-25484473/free-photo-of-blooming-pink-rose-on-a-shrub.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        id: 2,
        url: "https://images.pexels.com/photos/29940459/pexels-photo-29940459/free-photo-of-artistic-blurred-portrait-in-chic-fashion.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        id: 3,
        url: "https://images.pexels.com/photos/29677266/pexels-photo-29677266/free-photo-of-cozy-tea-setting-with-candlelight-and-rainy-window.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
        id: 4,
        url: "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
];

const ProductImages = () => {
    const [index, setIndex] = useState(0);

    return (
        <div className="">
            <div className="h-[500px] relative">
                <Image
                    src={images[index].url}
                    alt=""
                    fill
                    sizes="50vw"
                    className="object-cover rounded-md"
                />
            </div>
            <div className="flex justify-between gap-4 mt-8 cursor-pointer">
                {images.map((img, i) => (
                    <div
                        className="w-1/4 h-32 relative gap-4 mt-8"
                        key={img.id}
                        onClick={() => setIndex(i)}
                    >
                        <Image
                            src={img.url}
                            alt=""
                            fill
                            sizes="30vw"
                            className="object-cover rounded-md"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductImages;
