import { useParams } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { getProductsByCategory } from '@/data/products';

const ProductList = () => {
  const { category } = useParams<{ category: string }>();
  const products = getProductsByCategory(category || '');

  const categoryTitles: Record<string, string> = {
    cosmetics: 'Cosmetics Collection',
    toys: 'Toys Collection',
    jewels: 'Jewelry Collection',
  };

  return (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
          {categoryTitles[category || ''] || 'Products'}
        </h1>
        <p className="text-xl text-muted-foreground mb-12">
          Discover our curated collection of premium products
        </p>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
