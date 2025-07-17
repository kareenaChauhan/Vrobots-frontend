
import { useProducts } from "../../hooks/useProducts";
import { parseEditorJsToHtml } from "../../components/editor/rederEditoejs";


const ProductGrid = () => {
    const { products, loading, error } = useProducts();
    console.log("products data fetched here :", products)
    if (loading) return <p>Loading products...</p>;
    if (error) return <p>Error loading products. {error.message}</p>;

    return (
        <div className="grid grid-cols-3 gap-4">
            {products.map((product: any) => (
                <div key={product.slug} className="border p-4 rounded">
                    <img
                        src={product.images?.[0]?.url.replace("http://localhost:8000", "http://13.200.195.70:8000")}
                        alt={product.images?.[0]?.alt || product.name}
                        className="w-full h-auto"
                    />

                    <h2>Product Price :</h2>
                    <h3 className="mt-2 text-lg font-semibold">
                        {product.pricing?.priceRange?.start?.gross?.amount}{" "}
                        {product.pricing?.priceRange?.start?.gross?.currency}
                    </h3>

                    <h2>Product Description :</h2>
                    <div
                        className="mt-2 text-sm"
                        dangerouslySetInnerHTML={{
                            __html: parseEditorJsToHtml(JSON.parse(product.description)),
                        }}
                    />


                    <h2>Product Category :</h2>
                    <h3 className="mt-2 text-lg font-semibold">{product.category?.name}</h3>

                </div>
            ))}
        </div>
    );
};
export default ProductGrid;
