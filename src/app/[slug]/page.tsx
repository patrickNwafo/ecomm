import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";

const SinglePage = () => {
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
            {/* IMG */}
            <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
                <ProductImages />
            </div>
            {/* TEXTS */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h1 className="text-4xl font-medium">Product Name</h1>
                <p className="text-gray-500">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto maxime, quisquam sequi maiores error culpa hic
                    corporis reiciendis saepe eaque, soluta explicabo
                    reprehenderit! Voluptatibus ipsum illo quaerat commodi
                    pariatur dignissimos.
                </p>
                <div className="h-[20px] bg-gray-100" />
                <div className="flex gap-4 items-center">
                    <h3 className="text-xl text-gray-500 line-through">$59</h3>
                    <h2 className="font-medium text-2xl">$49</h2>
                </div>
                <div className="h-[20px] bg-gray-100" />
                <CustomizeProducts />
                <Add />
                <div className="h-[20px] bg-gray-100" />
                <div className="text-sm">
                    <h4 className="font-medium mb-4">Title</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus nobis veniam nemo quisquam enim minus maxime
                        repellendus? Reprehenderit veniam voluptatibus quibusdam
                        voluptates praesentium? Explicabo voluptatem
                        reprehenderit facere, soluta quasi alias.
                    </p>
                </div>
                <div className="text-sm">
                    <h4 className="font-medium mb-4">Title</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus nobis veniam nemo quisquam enim minus maxime
                        repellendus? Reprehenderit veniam voluptatibus quibusdam
                        voluptates praesentium? Explicabo voluptatem
                        reprehenderit facere, soluta quasi alias.
                    </p>
                </div>
                <div className="text-sm">
                    <h4 className="font-medium mb-4">Title</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus nobis veniam nemo quisquam enim minus maxime
                        repellendus? Reprehenderit veniam voluptatibus quibusdam
                        voluptates praesentium? Explicabo voluptatem
                        reprehenderit facere, soluta quasi alias.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SinglePage;
