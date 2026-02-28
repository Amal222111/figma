import { useParams } from "react-router";
import { useGetProductByIdQuery } from "../../../entities/product/api/productApi";
import ProductsList from "../../../widgets/ProductList/ui/ProductList";

export default function ProductPage() {
    const { id } = useParams<{ id: string }>();
    const { data: product, error, isLoading } = useGetProductByIdQuery(id!);

    return (
        <>
            {product ?
                <div className="max-w-7xl mx-auto p-6">
                    <div>
                        <div className="grid md:grid-cols-2 gap-10">

                            <div>
                                <div className="flex gap-3 mt-4">
                                    <img
                                        src={product.img}
                                        className="h-20 object-cover ro"
                                    />
                                </div>

                            </div>
                            <div className="space-y-4">

                                <h1 className="text-3xl font-semibold">
                                    {product.title}
                                </h1>

                                <p className="text-gray-500">
                                    {product.description}
                                </p>
                                <div className="flex items-center gap-3">
                                    <span className="text-3xl font-bold text-red-500">
                                        ${product.price}
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 mt-4">
                                    <div className="flex border rounded-lg overflow-hidden">
                                        <button className="px-4 py-2 border-r">-</button>
                                        <span className="px-4 py-2">1</span>
                                        <button className="px-4 py-2 border-l">+</button>
                                    </div>

                                    <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
                                        Add to cart
                                    </button>

                                    <button className="bg-black text-white px-6 py-3 rounded-lg">
                                        Buy now
                                    </button>
                                </div>
                                <div className="border rounded-lg text-sm text-gray-600 space-y-2 mt-6">
                                    <div className="border-b flex gap-10 p-4">
                                        <img src="./public/list.png" alt="" />
                                        <p> Payment. Payment upon receipt of goods, Payment by card in the department, Google Pay,
                                            Online card, -5% discount in case of payment</p>
                                    </div>
                                    <div className="p-4 flex gap-10">
                                        <img src="./public/icon.png" className="" alt="" />
                                        <p> Warranty. The Consumer Protection Act does not provide for the return of this product of proper
                                            quality.</p>
                                    </div>

                                </div>
                                <div className="flex gap-6 text-gray-500 text-sm mt-4">
                                    <button>♡ Add to wishlist</button>
                                    <button>↗ Share</button>
                                    <button>⇄ Compare</button>
                                </div>

                            </div>
                        </div>
                        <div className="mt-14">
                            <h2 className="text-xl font-semibold border-b pb-2 mb-4">
                                Description
                            </h2>

                            <p className="text-gray-600 leading-relaxed">
                                {product.description}
                            </p>
                        </div>
                    </div>
                    <div className="py-20">
                        <h1 className="text-xl">
                            Related products
                        </h1>
                        <ProductsList />
                    </div>
                </div>
                : <div>no data</div>
            }

        </>
    )
}