import { Link } from "react-router";
import type { Product } from "../model/types";
import { useAddProductToCartMutation } from "../../../feature/cart/useAddProduct/api/useAddProductApi";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [addProductToCart, { isLoading, isError, error }] = useAddProductToCartMutation();

  const handleAddToCart = async () => {
    try {
      await addProductToCart(product.id).unwrap();
      console.log("Product added to cart:", product.id);
    } catch (err) {
      console.error("Failed to add product:", err);
    }
  };

  return (
    <div key={product.id} className=" px-6 p-4 border rounded-2xl ">
      <img src={product.imgUrl} alt={product.title} />
      <Link to={`/products/${product.id}`}>
        <h2 className="text-xl font-semibold">{product.title}</h2>
      </Link>
      <div className="flex gap-1 my-2 ">
        <img className="w-6" src="./public/rating.png" alt="" />
        <h1 className="font-bold">{product.rating}</h1>
      </div>
      <p className="font-bold">${product.price}</p>
      <div className="flex gap-2">
        <button
          onClick={handleAddToCart}
          className=" text-purple-700 p-2 text-start border-purple-700 border-2 rounded-2xl w-full"
          disabled={isLoading}
        >
          {isLoading ? "Adding..." : "Add to cart"}
        </button>
        {isError && <p className="text-red-500">Error: {JSON.stringify(error)}</p>}
        <button ><img className="w-max" src="./public/wishlist.png" alt="" /></button>
      </div>

    </div>

  );
}
