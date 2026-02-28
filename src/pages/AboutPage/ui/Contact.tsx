import Footer from "../../../widgets/Footer/ui/Footer"
import Layout from "../../../app/layouts/MainLayout"
export default function Contact() {
    return (
        <>
            <div className=" text-gray-800">
                <section className="max-w-6xl mx-auto py-16 text-center">
                    <p className="text-sm font-medium text-gray-500 mb-3">
                        Contact With Us
                    </p>
                    <h1 className="text-4xl font-bold mb-4">
                        You can ask us questions
                    </h1>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Contact us for all your questions and opinions, or you can solve your
                        problems in a shorter time with our contact offices.
                    </p>
                </section>
                <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-40">
                    <div className="px">
                        <h2 className="text-xl font-semibold mb-4">
                            Our Offices
                        </h2>
                        <p className="text-gray-500 mb-8">
                            On dekande mydurtad mora även om skurkstat. Semirade timaheten rena. Radiogen pasam inte loba även om
                            prerade i garanterad traditionell specialitet till bebel. Ev is sönde. Tun gps-väst att epiligt. Diliga tresk dira. Ens
                            biov dijevis.
                        </p>
                        <div className="grid grid-cols-2 gap-20">
                            <div className="mb-6">
                                <p className="font-semibold text-xs">United States</p>
                                <p className="font-medium">United States Office</p>
                                <p className="text-gray-500 text-sm">
                                    205 Middle Road, 2nd Floor, New York
                                </p>
                                <p className="mt-2 font-medium">+02 1234 567 88</p>
                                <a href="#" className="text-blue-600 text-sm">
                                    info@example.com
                                </a>
                            </div>
                            <div>
                                <p className="font-semibold text-xs">Munich</p>
                                <p className="font-medium">Munich States Office</p>
                                <p className="text-gray-500 text-sm">
                                    205 Middle Road, 2nd Floor, New York
                                </p>
                                <p className="mt-2 font-medium">+5 456 123 22</p>
                                <a href="#" className="text-blue-600 text-sm">
                                    contact@example.com
                                </a>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <p className="text-sm mt-1">Follow us:</p>
                            <div className="flex gap-2">
                                <img src="./public/1589.png" alt="" />
                                <img src="./public/1590.png" alt="" />
                                <img src="./public/1591.png" alt="" />
                                <img src="./public/1592.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-500 mb-6">
                            On dekande mydurtad mora även om skurkstat. Semirade timaheten rena. Radiogen pasam
                            inte loba även om prerade i garanterad traditionell specialitet till bebel.
                        </p>
                        <form className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium">Your name *</label>
                                    <input
                                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md
                           focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium">Your email *</label>
                                    <input
                                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md
                           focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-medium">Subject *</label>
                                <input
                                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md
                         focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium">Your message</label>
                                <textarea
                                    rows={5}
                                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md
                         focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-purple-600 text-white px-6 py-2 rounded-md
                       hover:bg-purple-700 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </section>
                <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-4 gap-4">
                    <div className="flex gap-2 pb-3">
                        <img src="./public/SVG.png" alt="" />
                        <div>
                            <h1 className="text-xl">
                                Payment only online
                            </h1>
                            <p className="text-gray-500">
                                Tasigförsamhet beteendedesign. Mobile
                                checkout. Ylig kärrtorpa.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2 pb-3">
                        <img src="./public/SVG.png" alt="" />
                        <div>
                            <h1 className="text-xl">
                                Payment only online
                            </h1>
                            <p className="text-gray-500">
                                Tasigförsamhet beteendedesign. Mobile
                                checkout. Ylig kärrtorpa.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2 pb-3">
                        <img src="./public/SVG.png" alt="" />
                        <div>
                            <h1 className="text-xl">
                                Payment only online
                            </h1>
                            <p className="text-gray-500">
                                Tasigförsamhet beteendedesign. Mobile
                                checkout. Ylig kärrtorpa.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2 pb-3">
                        <img src="./public/SVG.png" alt="" />
                        <div>
                            <h1 className="text-xl">
                                Payment only online
                            </h1>
                            <p className="text-gray-500">
                                Tasigförsamhet beteendedesign. Mobile
                                checkout. Ylig kärrtorpa.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}