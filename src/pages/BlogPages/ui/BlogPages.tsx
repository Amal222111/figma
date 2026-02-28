
import { Link } from "react-router";

export default function Blog() {
    return (
        <div className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto grid grid-cols-3 gap-12 px-6">
                <div className="col-span-2 flex flex-col gap-12">
                    <div>
                        <img
                            src="./public/55.png"
                            alt="blog"
                            className="w-full h-[450px] object-cover rounded-xl"
                        />
                        <h1 className="text-4xl font-bold mt-8 text-gray-900">
                            How grocers are approaching delivery as the market evolves
                        </h1>
                        <p className="text-gray-500 text-sm mt-3">
                            November 3, 2023 · Kibtheme, store, themeforest
                        </p>
                        <p className="text-gray-600 leading-8 mt-6 text-lg">
                            Bilmälvakt treskade i nib el noblmisbruk deren jyn
                            nöning osk heterostik i rel ultran. Falass tunekösa och
                            tenöv servicebarn nyra om än muren för fönde slivy i
                            vobba, och hyng samt sesam, plahaten. Polytresam ren att
                            orca och pläl fömitheten, tulogi eftersom tibesan ologi
                            renat, i tiss gömivis. Supraskop prebelig för att
                            psykolog geon sper.
                        </p>
                        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg mt-6">
                            Read More
                        </button>
                    </div>
                    <div>
                        <img
                            src="./public/54.png"
                            alt="blog"
                            className="w-full h-[450px] object-cover rounded-xl"
                        />
                        <h1 className="text-4xl font-bold mt-8 text-gray-900">
                            The Friday Checkout: Food insecurity keeps retailers off
                            balance                        </h1>
                        <p className="text-gray-500 text-sm mt-3">
                            November 3, 2023 · Kibtheme, store
                        </p>
                        <p className="text-gray-600 leading-8 mt-6 text-lg">
                            Bilmålvakt treskade i nibel den mobilmissbruk deren jyn nöning osk heterostik i rel ultran. Fälass tunekösa och tenöv servicebarn nyra om än muren för fönde sijyv i vobba,
                            och hyng samt esam, plaheten. Polytresam iren att ora och plal fömityheten, tulogi eftersom tibesam ologi renat, i tiss gömivis. Supraskop prebelig för att psykolog geon sper
                        </p>
                        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg mt-6">
                            Read More
                        </button>
                    </div>
                    <div>
                        <img
                            src="./public/53.png"
                            alt="blog"
                            className="w-full h-[450px] object-cover rounded-xl"
                        />
                        <h1 className="text-4xl font-bold mt-8 text-gray-900">
                            Consumer want grocer to use AI to help them save money
                            Dunnhumby                        </h1>
                        <p className="text-gray-500 text-sm mt-3">
                            November 3, 2023 · Kibtheme,  themeforest
                        </p>
                        <p className="text-gray-600 leading-8 mt-6 text-lg">
                            Bilmålvakt treskade i nibel den mobilmissbruk deren jyn nöning osk heterostik i rel ultran. Fälass tunekösa och tenöv servicebarn nyra om än muren för fönde sijyv i vobba,
                            och hyng samt esam, plaheten. Polytresam iren att ora och plal fömityheten, tulogi eftersom tibesam ologi renat, i tiss gömivis. Supraskop prebelig för att psykolog geon sper
                        </p>
                        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg mt-6">
                            Read More
                        </button>
                    </div>
                </div>
                <div className="col-span-1 flex flex-col gap-8">
                    <div>
                        <h2 className="text-xl font-bold mb-4">Blog Post List</h2>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3 items-center">
                                <img
                                    src="./public/1286.png"
                                    alt="post"
                                    className="w-14 h-14 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-sm">
                                        How grocers are approaching delivery as the market evolves
                                    </p>
                                    <p className="text-gray-500 text-xs">November 3, 2023</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center">
                                <img
                                    src="./public/1289.png"
                                    alt="post"
                                    className="w-14 h-14 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-sm">
                                        The Friday Checkout: Food insecurity keeps retailers off balance
                                    </p>
                                    <p className="text-gray-500 text-xs">November 3, 2023</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center">
                                <img
                                    src="./public/1292.png"
                                    alt="post"
                                    className="w-14 h-14 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-sm">
                                        Consumer want grocer to use AI to help them save money Dunnhumby
                                    </p>
                                    <p className="text-gray-500 text-xs">November 3, 2023</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center">
                                <img
                                    src="./public/1295.png"
                                    alt="post"
                                    className="w-14 h-14 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-sm">
                                        Order up! How grocers are replicating the restaurant experience in retail
                                    </p>
                                    <p className="text-gray-500 text-xs">November 3, 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-4">Social Media Widget</h2>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-md cursor-pointer">
                                <img src="/public/facebook.png" alt="Facebook" className="w-5 h-5" />
                                <span>Facebook</span>
                            </div>
                            <div className="flex items-center gap-2 bg-blue-400 text-white py-2 px-4 rounded-md cursor-pointer">
                                <img src="/public/twitter.png" alt="Twitter" className="w-5 h-5" />
                                <span>Twitter</span>
                            </div>
                            <div className="flex items-center gap-2 bg-red-600 text-white py-2 px-4 rounded-md cursor-pointer">
                                <img src="/public/instagram.png" alt="Instagram" className="w-5 h-5" />
                                <span>Instagram</span>
                            </div>
                            <div className="flex items-center gap-2 bg-blue-700 text-white py-2 px-4 rounded-md cursor-pointer">
                                <img src="/public/in.png" alt="LinkedIn" className="w-5 h-5" />
                                <span>LinkedIn</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
