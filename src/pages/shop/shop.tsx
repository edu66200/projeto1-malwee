import { Footer } from "../../components/footer/footer";


const products = [
  { id: 1, name: "Syltherine", price: 2500000, image: "src/assets/img/syltherine.png", discount: 30 },
  { id: 2, name: "Leviosa", price: 2500000, image: "src/assets/img/leviosa.png" },
  { id: 3, name: "Lolito", price: 7000000, image: "src/assets/img/lolito.png" },
  { id: 4, name: "Respira", price: 500000, image: "src/assets/img/respira.jpg", tag: "NEW" },
];

export function Shop() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Banner */}
      <div className="bg-gray-100 text-center py-12">
        <h1 className="text-3xl font-semibold">Shop</h1>
        <p className="text-sm text-gray-500">Home &gt; Shop</p>
      </div>

      {/* Filtros e Ordenação */}
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <button className="flex items-center gap-2 border px-4 py-2 rounded-md">
          <span>🔍</span> Filter
        </button>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">Sort by:</span>
          <select className="border px-3 py-1 rounded-md">
            <option value="default">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Grid de Produtos */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 shadow-sm relative">
              {product.discount && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  -{product.discount}%
                </span>
              )}
              {product.tag && (
                <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  {product.tag}
                </span>
              )}
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
              <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
              <p className="text-gray-600">Rp {product.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Paginação */}
      <div className="flex justify-center space-x-2 py-6">
        <button className="px-4 py-2 border rounded-md bg-yellow-500 text-white">1</button>
        <button className="px-4 py-2 border rounded-md">2</button>
        <button className="px-4 py-2 border rounded-md">3</button>
        <button className="px-4 py-2 border rounded-md">Next</button>
      </div>

      <Footer />
    </div>
  );
}
