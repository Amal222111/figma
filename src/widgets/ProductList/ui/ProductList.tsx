import ProductCard from "../../../entities/product/ui/ProductCard";
import { useGetProductsQuery } from "../../../entities/product/api/productApi";

interface ProductsListProps {
  limit?: number;
  columns?: number;
}

export default function ProductsList({ limit, columns = 4 }: ProductsListProps) {
    const { data: products, isLoading, isError } = useGetProductsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading products</div>;

    const displayedProducts = limit ? products?.slice(0, limit) : products;

    return (
        <div className={`grid gap-4`} style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>
            {displayedProducts?.map((product: any) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}