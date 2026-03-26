import FilterBar from '../components/FilterBar'
import FeaturedProductCard from '../components/FeaturedProductCard'
import ProductCard from '../components/ProductCard'
import { featuredProduct, products } from '../data/products'

const ProductsPage = () => {
  return (
    <main className="pt-24 px-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <section className="mb-8">
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-on-surface">Products</h2>
            <p className="text-on-surface-variant mt-1 font-medium">
              Manage your catalog and stock levels.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full max-w-2xl">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
              search
            </span>
            <input
              className="w-full pl-12 pr-6 py-4 bg-surface-container-lowest border-none rounded-2xl shadow-sm focus:ring-2 focus:ring-primary/20 transition-all text-sm outline-none"
              placeholder="Search products, SKUs, or categories..."
              type="text"
            />
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <FilterBar />

      {/* Products Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeaturedProductCard product={featuredProduct} />
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  )
}

export default ProductsPage
