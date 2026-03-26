import { useMemo, useState } from 'react'

const topStats = [
  { label: 'Total Products', value: '12', note: '8 active listings', icon: 'inventory_2', bg: 'bg-blue-500' },
  { label: 'Low Stock', value: '3', note: 'Needs attention', icon: 'warning', bg: 'bg-amber-500' },
  { label: 'Out of Stock', value: '1', note: 'Restock quickly', icon: 'cancel', bg: 'bg-red-500' },
]

const sectionTabs = [
  'Overview',
  'Products',
  'Add Product',
  'Categories',
  'Inventory',
  'Alerts',
]

const categoryTabs = ['All', 'Electronics', 'Clothing', 'Home & Kitchen', 'Beauty', 'Sports']

const products = [
  {
    id: 1,
    name: 'Smart Watch Series 5',
    category: 'Electronics',
    price: '₹4,999',
    sku: 'SWS-005',
    stock: 34,
    sales: 178,
    status: 'In Stock',
    image:
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    description: 'Premium smartwatch with activity tracking, fast pairing, and clear AMOLED display.',
  },
  {
    id: 2,
    name: 'Cotton Polo Shirt',
    category: 'Clothing',
    price: '₹799',
    sku: 'CPS-112',
    stock: 7,
    sales: 89,
    status: 'Low Stock',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80',
    description: 'Soft cotton polo with everyday fit, easy returns, and strong repeat demand.',
  },
  {
    id: 3,
    name: 'Non-Stick Kadai 28cm',
    category: 'Home & Kitchen',
    price: '₹1,299',
    sku: 'NSK-028',
    stock: 58,
    sales: 210,
    status: 'In Stock',
    image:
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    description: 'Best-selling cookware item with durable coating and strong kitchen category performance.',
  },
  {
    id: 4,
    name: 'Laptop Backpack 30L',
    category: 'Clothing',
    price: '₹1,599',
    sku: 'LBP-030',
    stock: 3,
    sales: 67,
    status: 'Low Stock',
    image:
      'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=1200&q=80',
    description: 'Popular travel and office backpack with laptop sleeve and multiple compartments.',
  },
  {
    id: 5,
    name: 'Smart LED Bulb',
    category: 'Home & Kitchen',
    price: '₹399',
    sku: 'SLB-010',
    stock: 89,
    sales: 560,
    status: 'In Stock',
    image:
      'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=1200&q=80',
    description: 'Affordable smart bulb with app controls and very strong repeat monthly sales.',
  },
  {
    id: 6,
    name: 'Wireless Earbuds Pro',
    category: 'Electronics',
    price: '₹4,499',
    sku: 'WEP-001',
    stock: 0,
    sales: 302,
    status: 'Out of Stock',
    image:
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=1200&q=80',
    description: 'Top-performing audio product currently out of stock and needs urgent restock.',
  },
]

const categories = [
  { name: 'Electronics', count: 4, active: 3, revenue: '₹8.4L', icon: 'devices' },
  { name: 'Clothing', count: 3, active: 2, revenue: '₹3.2L', icon: 'checkroom' },
  { name: 'Home & Kitchen', count: 3, active: 3, revenue: '₹2.1L', icon: 'kitchen' },
  { name: 'Beauty', count: 1, active: 1, revenue: '₹1.1L', icon: 'spa' },
  { name: 'Sports', count: 1, active: 1, revenue: '₹0.9L', icon: 'sports_soccer' },
]

const inventoryItems = [
  { name: 'Smart Watch Series 5', sku: 'SWS-005', available: 26, reserved: 8, incoming: 20, warehouse: 'Delhi WH', status: 'In Stock' },
  { name: 'Cotton Polo Shirt', sku: 'CPS-112', available: 5, reserved: 2, incoming: 100, warehouse: 'Mumbai WH', status: 'Low Stock' },
  { name: 'Non-Stick Kadai 28cm', sku: 'NSK-028', available: 53, reserved: 5, incoming: 0, warehouse: 'Delhi WH', status: 'In Stock' },
  { name: 'Wireless Earbuds Pro', sku: 'WEP-001', available: 0, reserved: 0, incoming: 50, warehouse: 'Bangalore WH', status: 'Out of Stock' },
]

const alertItems = [
  { name: 'Wireless Earbuds Pro', sku: 'WEP-001', left: 0, min: 10, days: '0 days left', status: 'Out of Stock', qty: 'Restock 50 units' },
  { name: 'Laptop Backpack 30L', sku: 'LBP-030', left: 3, min: 10, days: '1 day left', status: 'Low Stock', qty: 'Restock 40 units' },
  { name: 'Cotton Polo Shirt', sku: 'CPS-112', left: 7, min: 15, days: '3 days left', status: 'Low Stock', qty: 'Restock 100 units' },
]

const stockBadgeStyles = {
  'In Stock': 'bg-emerald-50 text-emerald-600',
  'Low Stock': 'bg-amber-50 text-amber-600',
  'Out of Stock': 'bg-red-50 text-red-500',
}

const sectionIds = {
  Overview: 'overview',
  Products: 'products',
  'Add Product': 'add-product',
  Categories: 'categories',
  Inventory: 'inventory',
  Alerts: 'alerts',
}

function StatusBadge(props) {
  return (
    <span className={`rounded-full px-2.5 py-1 text-[10px] font-black ${stockBadgeStyles[props.status]}`}>
      {props.status}
    </span>
  )
}

function SectionHeader(props) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h3 className="text-base font-black text-slate-800">{props.title}</h3>
        <p className="mt-1 text-xs font-medium text-slate-400">{props.subtitle}</p>
      </div>
      {props.action ? (
        <button className="shrink-0 text-xs font-bold text-blue-500">{props.action}</button>
      ) : null}
    </div>
  )
}

export default function ProductsPage() {
  const [activeSection, setActiveSection] = useState('Overview')
  const [activeCategory, setActiveCategory] = useState('All')
  const [query, setQuery] = useState('')

  const featuredProduct = products.find((item) => item.featured) || products[0]

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

  const handleSectionChange = (tab) => {
    setActiveSection(tab)
    const id = sectionIds[tab]
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <main className="pt-24 pb-32 px-4 max-w-7xl mx-auto space-y-6">
      <section className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white shadow-lg shadow-blue-200">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="mb-1 text-sm font-medium text-blue-100">Product Center</p>
            <h2 className="mb-1 text-2xl font-black tracking-tight">Products</h2>
            <p className="text-sm text-blue-100">
              Everything sellers need in one place. Easy to browse, add, restock, and manage.
            </p>
          </div>
          <button className="rounded-xl bg-white/15 px-3 py-2 text-sm font-bold backdrop-blur">
            + Add
          </button>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {topStats.map((item) => (
            <div key={item.label} className="rounded-xl bg-white/15 p-3 backdrop-blur">
              <div className={`mb-3 flex h-9 w-9 items-center justify-center rounded-xl ${item.bg}`}>
                <span className="material-symbols-outlined text-[18px] text-white">
                  {item.icon}
                </span>
              </div>
              <p className="text-xl font-black leading-tight">{item.value}</p>
              <p className="mt-0.5 text-[10px] font-semibold text-blue-100">{item.label}</p>
              <p className="mt-1 text-[10px] text-blue-100/80">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sticky top-20 z-20 rounded-2xl border border-slate-100 bg-white/95 p-3 shadow-sm backdrop-blur">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {sectionTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleSectionChange(tab)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold transition-all ${
                activeSection === tab ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      <section id="overview" className="space-y-4">
        <SectionHeader
          title="Overview"
          subtitle="Quick summary of catalog health and top product performance."
        />

        <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
          <div className="grid md:grid-cols-[1.15fr_1fr]">
            <div
              className="min-h-[260px] bg-cover bg-center"
              style={{ backgroundImage: `url(${featuredProduct.image})` }}
            />
            <div className="flex flex-col justify-between p-5">
              <div>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-[10px] font-black text-blue-600">
                    Best Seller
                  </span>
                  <StatusBadge status={featuredProduct.status} />
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

              <div className="mt-5 grid grid-cols-3 gap-2">
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-[10px] text-slate-400">Price</p>
                  <p className="mt-1 text-sm font-black text-slate-800">{featuredProduct.price}</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-[10px] text-slate-400">Sales</p>
                  <p className="mt-1 text-sm font-black text-slate-800">{featuredProduct.sales}</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-[10px] text-slate-400">SKU</p>
                  <p className="mt-1 text-sm font-black text-slate-800">{featuredProduct.sku}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="space-y-4">
        <SectionHeader
          title="All Products"
          subtitle="Search products quickly and keep the list simple for sellers."
          action="View all →"
        />

        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm space-y-4">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              search
            </span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-2xl bg-slate-50 py-3 pl-12 pr-4 text-sm outline-none placeholder:text-slate-400 focus:bg-white"
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
                  activeCategory === tab ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
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
                  <StatusBadge status={product.status} />
                </div>

                <p className="text-sm leading-6 text-slate-500">{product.description}</p>

                <div className="grid grid-cols-3 gap-2">
                  <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-[10px] text-slate-400">Price</p>
                    <p className="mt-1 text-sm font-black text-slate-800">{product.price}</p>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-[10px] text-slate-400">Stock</p>
                    <p className="mt-1 text-sm font-black text-slate-800">{product.stock}</p>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-[10px] text-slate-400">SKU</p>
                    <p className="mt-1 text-sm font-black text-slate-800">{product.sku}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="add-product" className="space-y-4">
        <SectionHeader
          title="Add Product"
          subtitle="Simple form so sellers can add products without confusion."
        />

        <div className="grid gap-4 lg:grid-cols-[1.5fr_0.8fr]">
          <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm space-y-4">
            <div>
              <p className="mb-2 text-sm font-bold text-slate-700">Product Name</p>
              <input className="w-full rounded-2xl bg-slate-50 px-4 py-3 text-sm outline-none" placeholder="e.g. Wireless Bluetooth Earbuds Pro" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="mb-2 text-sm font-bold text-slate-700">Brand</p>
                <input className="w-full rounded-2xl bg-slate-50 px-4 py-3 text-sm outline-none" placeholder="e.g. Sony" />
              </div>
              <div>
                <p className="mb-2 text-sm font-bold text-slate-700">Category</p>
                <select className="w-full rounded-2xl bg-slate-50 px-4 py-3 text-sm outline-none">
                  <option>Select category</option>
                  {categoryTabs.slice(1).map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
            <p className="text-sm font-black text-slate-800">Product Image</p>
            <div className="mt-4 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-8 text-center">
              <span className="material-symbols-outlined text-4xl text-blue-500">imagesmode</span>
              <p className="mt-3 text-sm font-bold text-slate-700">Upload product photo</p>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="space-y-4">
        <SectionHeader title="Categories" subtitle="Show categories clearly so sellers understand performance fast." />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <div key={category.name} className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-500">
                  <span className="material-symbols-outlined">{category.icon}</span>
                </div>
                <div>
                  <h4 className="text-lg font-black text-slate-800">{category.name}</h4>
                  <p className="text-xs text-slate-400">{category.count} products</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="inventory" className="space-y-4">
        <SectionHeader title="Inventory" subtitle="Stock details made simple for quick seller actions." />

        <div className="space-y-4">
          {inventoryItems.map((item) => (
            <div key={item.sku} className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="text-lg font-black text-slate-800">{item.name}</h4>
                  <p className="mt-1 text-xs text-slate-400">
                    {item.sku} · {item.warehouse}
                  </p>
                </div>
                <StatusBadge status={item.status} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="alerts" className="space-y-4">
        <SectionHeader title="Low Stock Alerts" subtitle="Urgent products are separated clearly so sellers know what to do first." />

        <div className="space-y-4">
          {alertItems.map((item) => (
            <div key={item.sku} className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="text-lg font-black text-slate-800">{item.name}</h4>
                  <p className="mt-1 text-xs text-slate-400">{item.sku}</p>
                </div>
                <StatusBadge status={item.status} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
