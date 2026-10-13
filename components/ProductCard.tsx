import Image from 'next/image';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
}

export default function ProductCard({ image, title, description, price }: ProductCardProps) {
  return (
    <div className="bg-white rounded-3xl p-4 flex flex-col">
      <div className="bg-slate-100 rounded-2xl aspect-square flex items-center justify-center overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="w-full h-full object-contain"
        />
      </div>

      <h3 className="text-xl font-bold mt-4 lowercase">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
      <p className="text-sm text-gray-900 mt-2">{price} ₽</p>

      <button className="mt-4 self-start bg-blue-900 text-white rounded-full px-6 py-2 uppercase text-xs transition-colors hover:bg-blue-800">
        в корзину
      </button>
    </div>
  );
}