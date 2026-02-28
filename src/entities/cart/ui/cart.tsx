// Cart.tsx
import { Link } from "react-router";
import { useGetCartDataQuery } from "../api/cartApi";

export default function Cart() {
  const { data: cartData, isLoading, isError } = useGetCartDataQuery();

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (isError) return <p className="text-center mt-10 text-red-500">Error loading cart</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid lg:grid-cols-4 gap-8">
        
        <div className="lg:col-span-3">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cartData?.items?.map((item) => (
              <div
                key={item.id}
                className="border rounded-xl shadow-sm p-4 hover:shadow-lg transition bg-white flex flex-col"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-contain mb-4"
                />

                <h2 className="font-semibold text-lg mb-2 line-clamp-2">
                  {item.title}
                </h2>

                <div className="flex items-center gap-2 mb-2">
                  {item.discount ? (
                    <>
                      <span className="text-red-600 font-bold">
                        ${item.price.toFixed(2)}
                      </span>
                      <span className="line-through text-gray-400 text-sm">
                        ${item.oldPrice?.toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <span className="font-bold">
                      ${item.price.toFixed(2)}
                    </span>
                  )}
                </div>

                <p className="text-sm text-gray-600">
                  Qty: {item.quantity}
                </p>

                <p className="mt-1 font-semibold">
                  Total: ${item.totalPrice.toFixed(2)}
                </p>

                <div className="mt-auto flex gap-2 pt-4">
                  <button className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition text-sm">
                    Add
                  </button>
                  <button className="flex-1 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition text-sm">
                    Buy
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {cartData && (
          <div className="border rounded-xl shadow-md p-6 h-fit bg-gray-50 space-y-4">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>
                {cartData.subtotal.toFixed(2)} {cartData.currency}
              </span>
            </div>

            <div className="flex justify-between text-red-500">
              <span>Discounts</span>
              <span>
                -{cartData.discountTotal.toFixed(2)} {cartData.currency}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Delivery</span>
              <span>
                {cartData.deliveryPrice.toFixed(2)} {cartData.currency}
              </span>
            </div>

            <div className="border-t pt-4 flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>
                {cartData.totalPrice.toFixed(2)} {cartData.currency}
              </span>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-lg mt-4 hover:bg-gray-800 transition">
              <Link to={"/cheackout"}>Checkout</Link> 
            </button>
          </div>
        )}
      </div>
    </div>
  );
}