import { useMemo, useState } from 'react'

const categoryTabs = ['All', 'Electronics', 'Clothing', 'Home & Kitchen', 'Beauty', 'Sports']

const quickStats = [
  { label: 'Total Products', value: '12', sub: 'Across all categories', icon: 'inventory_2', bg: 'bg-blue-500' },
  { label: 'Active', value: '8', sub: 'Ready for sale', icon: 'check_circle', bg: 'bg-emerald-500' },
  { label: 'Low Stock', value: '2', sub: 'Need attention', icon: 'warning', bg: 'bg-amber-500' },
]

const featuredProduct = {
  id: 1,
  name: 'Running Shoes X2',
  category: 'Clothing',
  price: '₹3,299',
  stock: 'In Stock',
  sku: 'RSX-002',
  sales: 155,
  image:
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
  description: 'High-performance running shoes with breathable mesh and all-day comfort.',
  badge: 'Best Seller',
}

const products = [
  {
    id: 2,
    name: 'Smart Watch Series 5',
    category: 'Electronics',
    price: '₹4,999',
    stock: 'In Stock',
    sku: 'SWS-005',
    sales: 178,
    image:
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    name: 'Cotton Polo Shirt',
    category: 'Clothing',
    price: '₹799',
    stock: 'Low Stock',
    sku: 'CPS-112',
    sales: 89,
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    name: 'Non-Stick Kadai 28cm',
    category: 'Home & Kitchen',
    price: '₹1,299',
    stock: 'In Stock',
    sku: 'NSK-028',
    sales: 210,
    image:
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 5,
    name: 'Laptop Backpack 30L',
    category: 'Clothing',
    price: '₹1,599',
    stock: 'Low Stock',
    sku: 'LBP-030',
    sales: 67,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 6,
    name: 'Smart LED Bulb',
    category: 'Home & Kitchen',
    price: '₹399',
    stock: 'In Stock',
    sku: 'SLB-010',
    sales: 560,
    image:
      'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=900&q=80',
  },
]

const stockStyles = {
  'In Stock': 'bg-emerald-50 text-emerald-600',
  'Low Stock': 'bg-amber-50 text-amber-600',
  'Out of Stock': 'bg-red-50 text-red-500',
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [query, setQuery] = useState('')

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === 'All' || product.category === activeCategory

      const search = query.toLowerCase()
      const matchesQuery =
        product.name.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search) ||
        product.sku.toLowerCase().includes(search)

      return matchesCategory && matchesQuery
    })
  }, [activeCategory, query])

  return (
    <main className="pt-24 pb-32 px-4 max-w-7xl mx-auto space-y-6">
      <section className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white shadow-lg shadow-blue-200">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-blue-100 text-sm font-medium mb-1">Catalog Overview</p>
            <h2 className="text-2xl font-black tracking-tight mb-1">Products</h2>
            <p className="text-blue-100 text-sm">
              Manage products, stock alerts, and category performance in one place.
            </p>
          </div>
          <button className="shrink-0 rounded-xl bg-white/15 px-3 py-2 text-sm font-bold backdrop-blur">
            + Add
          </button>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {quickStats.map((item) => (
            <div key={item.label} className="rounded-xl bg-white/15 p-3 backdrop-blur">
              <div className={`mb-3 flex h-9 w-9 items-center justify-center rounded-xl ${item.bg}`}>
                <span className="material-symbols-outlined text-[18px] text-white">
                  {item.icon}
                </span>
              </div>
              <p className="text-xl font-black leading-tight">{item.value}</p>
              <p className="mt-0.5 text-[10px] font-semibold text-blue-100">{item.label}</p>
              <p className="mt-1 text-[10px] text-blue-100/80">{item.sub}</p>
            </div>
          ))}
        </div>

        <button className="mt-4 w-full rounded-xl bg-white py-3 text-sm font-bold text-blue-600 transition-all active:scale-95">
          Add New Product →
        </button>
      </section>

      <section className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
        <div className="relative mb-4">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            search
          </span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-2xl bg-slate-50 py-3 pl-12 pr-4 text-sm outline-none ring-0 placeholder:text-slate-400 focus:bg-white focus:shadow-sm"
            placeholder="Search product, SKU or category..."
            type="text"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {categoryTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveCategory(tab)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold transition-all ${
                activeCategory === tab
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-100 text-slate-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      <section className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
        <div className="grid md:grid-cols-[1.2fr_1fr]">
          <div
            className="min-h-[280px] bg-cover bg-center"
            style={{ backgroundImage: `url(${featuredProduct.image})` }}
          />
          <div className="flex flex-col justify-between p-5">
            <div>
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-[10px] font-black text-blue-600">
                  {featuredProduct.badge}
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-[10px] font-black ${stockStyles[featuredProduct.stock]}`}
                >
                  {featuredProduct.stock}
                </span>
              </div>

              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-500">
                {featuredProduct.category}
              </p>
              <h3 className="mt-2 text-3xl font-black leading-tight text-slate-800">
                {featuredProduct.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                {featuredProduct.description}
              </p>
            </div>

            <div className="mt-5 space-y-4">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-3xl font-black text-slate-900">{featuredProduct.price}</p>
                  <p className="text-xs font-medium text-slate-400">
                    SKU {featuredProduct.sku} · {featuredProduct.sales} sales
                  </p>
                </div>
                <button className="rounded-xl bg-blue-500 px-4 py-2 text-sm font-bold text-white">
                  Edit
                </button>
              </div>

              <button className="w-full rounded-xl bg-slate-100 py-3 text-sm font-bold text-slate-700">
                View Full Details →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-black text-slate-800">All Products</h3>
            <p className="text-xs font-medium text-slate-400">
              Cleaner mobile cards for large product lists
            </p>
          </div>
          <button className="text-xs font-bold text-blue-500">Sort: Name</button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
            >
              <div
                className="h-44 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${product.image})` }}
              />
              <div className="space-y-4 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">
                      {product.category}
                    </p>
                    <h4 className="mt-1 text-lg font-black leading-tight text-slate-800">
                      {product.name}
                    </h4>
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-black ${stockStyles[product.stock]}`}
                  >
                    {product.stock}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-[10px] text-slate-400">Price</p>
                    <p className="mt-1 text-sm font-black text-slate-800">{product.price}</p>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-[10px] text-slate-400">Sales</p>
                    <p className="mt-1 text-sm font-black text-slate-800">{product.sales}</p>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-[10px] text-slate-400">SKU</p>
                    <p className="mt-1 text-sm font-black text-slate-800">{product.sku}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 rounded-xl bg-blue-500 py-3 text-sm font-bold text-white">
                    Edit
                  </button>
                  <button className="flex-1 rounded-xl bg-slate-100 py-3 text-sm font-bold text-slate-700">
                    View
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
