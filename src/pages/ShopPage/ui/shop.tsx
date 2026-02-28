import { useState } from "react";
import ProductsList from "../../../widgets/ProductList/ui/ProductList";

interface Filters {
    minPrice: number;
    maxPrice: number;
    categories: string[];
    inStock: boolean;
    onSale: boolean;
}

interface ShopFiltersProps {
    onChange: (filters: Filters) => void;
}

const categoriesList = [
    "Fruits & Vegetables",
    "Baby & Pregnancy",
    "Beverages",
    "Meats & Seafood",
    "Biscuits & Snacks",
    "Breads & Bakery",
    "Breakfast & Dairy",
    "Frozen Foods",
    "Grocery & Staples",
    "Healthcare",
    "Household Needs",
];

export default function ShopFilters({ onChange }: ShopFiltersProps) {
    const [filters, setFilters] = useState<Filters>({
        minPrice: 0,
        maxPrice: 30,
        categories: [],
        inStock: false,
        onSale: false,
    });

    const updateFilters = (newFilters: Partial<Filters>) => {
        const updated = { ...filters, ...newFilters };
        setFilters(updated);
        onChange(updated);
    };

    const toggleCategory = (category: string) => {
        const exists = filters.categories.includes(category);

        if (exists) {
            updateFilters({
                categories: filters.categories.filter((c) => c !== category),
            });
        } else {
            updateFilters({
                categories: [...filters.categories, category],
            });
        }
    };

    return (
        <div className="flex justify-center gap-30 bg-white pl-20 space-y-6">
            <div>
                <div>
                    <h3 className="font-semibold mb-3">Widget price filter</h3>

                    <div className="flex gap-2 mb-3">
                        <input
                            type="number"
                            value={filters.minPrice}
                            onChange={(e) =>
                                updateFilters({ minPrice: Number(e.target.value) })
                            }
                            className="border rounded-md p-2 w-50"
                        />

                        <input
                            type="number"
                            value={filters.maxPrice}
                            onChange={(e) =>
                                updateFilters({ maxPrice: Number(e.target.value) })
                            }
                            className="border rounded-md p-2 w-50"
                        />
                    </div>
                    
                    <div className="flex gap-10 ">
                        <p className="text-sm text-gray-500 mb-3">
                        Price: ${filters.minPrice} — ${filters.maxPrice}
                    </p>

                    <button className="bg-gray-200 px-4 py-2 rounded-lg text-sm">
                        Filter
                    </button>
                    </div>
                    
                </div>
                <div className=" border-t-gray-200 border-t-2 ">
                    <h3 className="font-semibold mb-3">Product Categories</h3>

                    <div className="space-y-2">
                        {categoriesList.map((category) => (
                            <label
                                key={category}
                                className="flex items-center text gap-2 cursor-pointer"
                            >
                                <input
                                    type="checkbox"
                                    checked={filters.categories.includes(category)}
                                    onChange={() => toggleCategory(category)}
                                />

                                <span className="text-sm">{category}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold mb-3">Product Status</h3>

                    <div className="space-y-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={filters.inStock}
                                onChange={() => updateFilters({ inStock: !filters.inStock })}
                            />
                            <span className="text-sm">In Stock</span>
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={filters.onSale}
                                onChange={() => updateFilters({ onSale: !filters.onSale })}
                            />
                            <span className="text-sm">On Sale</span>
                        </label>
                    </div>
                </div>
            </div>

            <div>
                <div className="space-y-6">

                   <img className="w-full" src="./public/61.png" alt="" />

                   <div className="flex">
                    <ProductsList />
                   </div>
                </div>

            </div>
        </div>
    );
}
