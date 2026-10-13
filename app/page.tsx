import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function Home() {
  return (
    <main className="min-h-screen bg-rose-50">
      <div className="max-w-md sm:max-w-2xl lg:max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="bg-blue-900 text-white rounded-full px-12 py-4 uppercase text-sm transition-colors hover:bg-blue-800">
            смотреть всю коллекцию
          </button>
        </div>
      </div>
    </main>
  );
}