import { Link, Outlet } from "react-router";
import style from "../styles/Layout.module.scss";
import Footer from "../../widgets/Footer/ui/Footer";


export default function Layout() {
    return (
        <div>
            <header>
                <div className="p-3 bg-purple-600 flex justify-center gap-40">
                    <p className="text-white">
                        FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.
                    </p>
                    <div className="flex justify-center gap-2">
                        <p className="text-gray-400">Until the end of the sale:</p>
                        <p className="text-xl text-white">47</p>
                        <p className="text-gray-400">days</p>
                        <p className="text-xl text-white">06</p>
                        <p className="text-gray-400">hours</p>
                        <p className="text-xl text-white">55</p>
                        <p className="text-gray-400">minutes</p>
                        <p className="text-xl text-white">51</p>
                        <p className="text-gray-400">seconds</p>
                    </div>
                </div>
                <div className={style.divHeader}>
                    <div className={style.divLinkDeliver}>
                        <div className={style.divLink}>
                            <Link to="/about">About Us</Link>
                            <Link to="/profile">My account</Link>
                            <Link to="/wishlist">Wishlist</Link>
                        </div>
                        <div>
                            <div className="text-center text-gray-500">
                                <p>
                                    We deliver to you every day from{" "}
                                    <span className="text-red-600">7:00 to 23:00</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 justify-end text-gray-500">
                        <select className="bg-transparent focus:outline-none">
                            <option>English</option>
                            <option>Русский</option>
                            <option>Deutsch</option>
                        </select>
                        <select className="bg-transparent focus:outline-none">
                            <option>USD</option>
                            <option>EUR</option>
                            <option>AZN</option>
                        </select>
                        <p>Order Tracking</p>
                    </div>
                </div>
                <div className={style.divSearch}>
                    <div>
                        <img className="p-2" src="./public/jinstore.png" alt="" />
                    </div>
                    <div>
                        <img className="p-2" src="./public/location.png" alt="" />
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs">Deliver too</p>
                        <h5>all</h5>
                    </div>
                    <input type="search"
                        placeholder="Search for products, categories or brands..."
                        className="bg-gray-200 border-1 border-gray-200 rounded-md px-3 w-1/2"
                    />
                    <div>
                        <img className="w-14 p-2" src="./public/person.png" alt="" />
                    </div>
                    <Link to={"/login"}>
                        <div className="py-2">
                            <p className="text-gray-500 text-xs">
                                Sign in
                            </p>
                            <h5>
                                Account
                            </h5>
                        </div>
                    </Link>
                    <Link to={"/wishlist"}>
                        <img className="p-4" src="./public/wishlist.png" alt="" />
                    </Link>
                    <Link to={"/basket"}>
                        <img className="p-4" src="./public/basket.png" alt="" />
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-4 p-5 px-40 ">
                    <div className="flex gap-4 justify-begin">
                        <select className="bg-transparent focus:outline-none">
                            <option>Home</option>
                            <option>Profile</option>
                            <option>Wishlist</option>
                        </select>
                        <select className="bg-transparent focus:outline-none">
                            <option>Magazine</option>
                            <option>Cold Drinks</option>
                            <option>Household</option>
                        </select>
                        <p>Fruits & Vegetables</p>
                        <p>Beverages</p>
                        <Link to={"/Blog"}>
                            <p>Blog</p>
                        </Link>
                        <Link to={"/Contact"}>
                            <p>Contact</p>
                        </Link>
                    </div>
                    <div>
                        <select className="bg-transparent focus:outline-none">
                            <option>Trending Products</option>
                            <option>Snacks & Sweets</option>
                            <option>Dairy & Eggs </option>
                        </select>
                        <select className="bg-transparent text-red-600 focus:outline-none">
                            <option>Almost Finished</option>
                            <option>Cleaning Supplies</option>
                            <option>Dairy & Eggs </option>
                        </select>
                    </div>
                </div>
            </header>
            <Outlet />
            <Footer />
        </div>
    );
}
