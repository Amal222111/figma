import Carousel from "../../../shared/ui/Carousel"
import ProductsList from "../../../widgets/ProductList/ui/ProductList"
export default function Home() {
    return (
        <>
            <section className="py-20 px-96 bg-gray-100 justify-center align-center">
                <section className="py-10 px-4">
                    <Carousel />
                </section>
                <div className="flex gap-20">
                    <div className="flex">
                        <img src="./public/SVG.png" alt="" />
                        <div>
                            <h3>Payment only online</h3>
                            <p className="text-sm">
                                Tasigförsamhet betendedesign. Mobile checkout. Ylig karttropa.
                            </p>
                        </div>

                    </div>

                    <div className="flex">
                        <img src="/public/SVG1.png" alt="" />

                        <div>
                            <h3>New stocks and sales</h3>
                            <p className="text-sm">
                                Tasigförsamhet betendedesign. Mobile checkout. Ylig karttropa.
                            </p>
                        </div>

                    </div>

                    <div className="flex">
                        <img src="/public/SVG2.png" alt="" />
                        <div>
                            <h3>Quality assurance</h3>
                            <p className="text-sm">
                                Tasigförsamhet betendedesign. Mobile checkout. Ylig karttropa.
                            </p>
                        </div>

                    </div>
                    <div className="flex">
                        <img src="/public/SVG3.png" alt="" />
                        <div>
                            <h3>Delivery from 1 hour</h3>
                            <p className="text-sm">
                                Tasigförsamhet betendedesign. Mobile checkout. Ylig karttropa.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="py-10 flex gap-10">
                    <img className="w-full" src="./public/120.png" alt="" />
                    <img className="w-full" src="./public/119.png" alt="" />
                    <img className="w-full" src="./public/118.png" alt="" />

                </div>
                <div>
                    <div className="flex justify-baseline">
                        <h1 className="text-2xl">
                            New Arrivals
                        </h1>
                        <p className="p-2 pl-4 text-gray-500 text-sm">
                            Dont miss this opportunity at a special discount just for this week.
                        </p>
                    </div>
                    <div>
                        <ProductsList limit={6} columns={6} />
                    </div>

                </div>
                <div className="py-10 flex gap-10">
                    <img className="w-full" src="./public/116.png" alt="" />
                    <img className="w-full" src="./public/115.png" alt="" />
                    <img className="w-full" src="./public/114.png" alt="" />
                    <img className="w-full" src="./public/113.png" alt="" />
                </div>
                <div className="flex py-10">
                    <div className="flex-1">
                        <ProductsList limit={2} columns={2} />
                    </div>
                    <div className="flex-shrink-0 mx-0">
                        <img
                            src="./public/90.png"
                            alt="Promo"
                            className="h-80 w-80 object-cover rounded-lg"
                        />
                    </div>
                    <div className="flex-1">
                        <ProductsList limit={2} columns={2} />
                    </div>
                </div>
                <div className="flex py-10">
                    <div className="flex-1">
                        <ProductsList limit={2} columns={2} />
                    </div>
                    <div className="flex-shrink-0 mx-0">
                        <img
                            src="./public/93.png"
                            alt="Promo"
                            className="h-80 w-80 object-cover rounded-lg"
                        />
                    </div>
                    <div className="flex-1">
                        <ProductsList limit={2} columns={2} />
                    </div>
                </div>
                <div>
                    <img src="./public/97.png" className="w-full py-10" alt="" />
                </div>
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-xl font-semibold">Popular Companies</h2>
                        <p className="text-sm text-gray-500">
                            Some of the new products arriving this weeks
                        </p>
                    </div>

                    <button className="flex items-center gap-2 border px-4 py-2 rounded-full text-sm hover:bg-gray-100 transition">
                        View All →
                    </button>
                </div>
                {/* Cards */}
                <div className="grid grid-cols-4 border rounded-xl overflow-hidden">
                    {/* Card 1 */}
                    <div className="p-6 border-r last:border-r-0">
                        <div className="flex gap-4">
                            <div className="w-14 h-14 bg-gray-300 rounded-lg flex items-center justify-center">
                                <img src="./public/714.png" alt="" />
                            </div>

                            <div>
                                <h3 className="font-semibold">Machic</h3>
                                <p className="text-xs text-gray-500">Featured</p>

                                <div className="flex items-center gap-1 text-sm">
                                    <span className="text-yellow-400">★★★★☆</span>
                                    <span className="text-gray-400">41</span>
                                </div>
                            </div>
                        </div>

                        <p className="text-sm text-gray-600 mt-4">
                            Good quality product can only be found in good stores
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-6 border-r last:border-r-0">
                        <div className="flex gap-4">
                            <div className="w-14 h-14 bg-gray-300 rounded-lg flex items-center justify-center">
                                <img src="./public/714.png" alt="" />
                            </div>

                            <div>
                                <h3 className="font-semibold">Blonwe</h3>
                                <p className="text-xs text-gray-500">Featured</p>

                                <div className="flex items-center gap-1 text-sm">
                                    <span className="text-yellow-400">★★★★☆</span>
                                    <span className="text-gray-400">37</span>
                                </div>
                            </div>
                        </div>

                        <p className="text-sm text-gray-600 mt-4">
                            All kinds of grocery products are available in our store.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-6 border-r last:border-r-0">
                        <div className="flex gap-4">
                            <div className="w-14 h-14 bg-gray-300 rounded-lg flex items-center justify-center">
                                <img src="./public/714.png" alt="" />
                            </div>

                            <div>
                                <h3 className="font-semibold">Bacola</h3>
                                <p className="text-xs text-gray-500">Featured</p>

                                <div className="flex items-center gap-1 text-sm">
                                    <span className="text-yellow-400">★★★★☆</span>
                                    <span className="text-gray-400">35</span>
                                </div>
                            </div>
                        </div>

                        <p className="text-sm text-gray-600 mt-4">
                            Our work can definitely support the local economy.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="p-6">
                        <div className="flex gap-4">
                            <div className="w-14 h-14 bg-gray-300 rounded-lg flex items-center justify-center">
                                <img src="./public/714.png" alt="" />
                            </div>

                            <div>
                                <h3 className="font-semibold">Medibazar</h3>
                                <p className="text-xs text-gray-500">Featured</p>

                                <div className="flex items-center gap-1 text-sm">
                                    <span className="text-yellow-400">★★★★☆</span>
                                    <span className="text-gray-400">30</span>
                                </div>
                            </div>
                        </div>

                        <p className="text-sm text-gray-600 mt-4">
                            Save your time – save your money – shop from our grocery store.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}