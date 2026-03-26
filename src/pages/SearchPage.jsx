import { useMemo, useState } from 'react'

const quickActions = [
  {
    title: 'Go to Products',
    subtitle: 'Manage catalog and stock',
    icon: 'inventory_2',
    page: 'products',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Go to Orders',
    subtitle: 'Track and update orders',
    icon: 'shopping_cart',
    page: 'orders',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'Open Insights',
    subtitle: 'View sales and analytics',
    icon: 'analytics',
    page: 'insights',
    color: 'bg-violet-50 text-violet-600',
  },
  {
    title: 'Store Profile',
    subtitle: 'Edit business information',
    icon: 'storefront',
    page: 'store-profile',
    color: 'bg-amber-50 text-amber-600',
  },
]

const searchableItems = [
  {
    id: 1,
    title: 'Wireless Earbuds Pro',
    subtitle: 'Product · Electronics',
    meta: 'SKU WEP-001',
    page: 'products',
    icon: 'inventory_2',
  },
  {
    id: 2,
    title: 'Smart Watch Series 5',
    subtitle: 'Product · Electronics',
    meta: 'SKU SWS-005',
    page: 'products',
    icon: 'inventory_2',
  },
  {
    id: 3,
    title: 'Cotton Polo Shirt',
    subtitle: 'Product · Clothing',
    meta: 'SKU CPS-112',
    page: 'products',
    icon: 'inventory_2',
  },
  {
    id: 4,
    title: 'ORD-1001',
    subtitle: 'Order · Aarav Sharma',
    meta: 'Pending · ₹2,499',
    page: 'orders',
    icon: 'shopping_cart',
  },
  {
    id: 5,
    title: 'ORD-1004',
    subtitle: 'Order · Sneha Kapoor',
    meta: 'Shipped · ₹4,999',
    page: 'orders',
    icon: 'shopping_cart',
  },
  {
    id: 6,
    title: 'Revenue Trend',
    subtitle: 'Insight · Monthly performance',
    meta: 'Analytics page',
    page: 'insights',
    icon: 'analytics',
  },
  {
    id: 7,
    title: 'Store Profile',
    subtitle: 'Business details and branding',
    meta: 'Profile settings',
    page: 'store-profile',
    icon: 'storefront',
  },
  {
    id: 8,
    title: 'Coupons',
    subtitle: 'More · Marketing',
    meta: 'Create offers and discounts',
    page: 'more',
    icon: 'sell',
  },
]

function QuickActionCard({ title, subtitle, icon, page, color, setActivePage }) {
  return (
    <button
      onClick={() => setActivePage(page)}
      className="w-full rounded-2xl border border-slate-100 bg-white p-4 text-left shadow-sm"
    >
      <div className="flex items-start gap-3">
        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${color}`}>
          <span className="material-symbols-outlined text-[20px]">{icon}</span>
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="text-sm font-black text-slate-800">{title}</h4>
          <p className="mt-1 text-xs leading-5 text-slate-400">{subtitle}</p>
        </div>
        <span className="material-symbols-outlined text-slate-300">chevron_right</span>
      </div>
    </button>
  )
}

export default function SearchPage({ setActivePage }) {
  const [query, setQuery] = useState('')

  const filteredItems = useMemo(() => {
    const term = query.toLowerCase().trim()

    if (!term) return []

    return searchableItems.filter((item) => {
      return (
        item.title.toLowerCase().includes(term) ||
        item.subtitle.toLowerCase().includes(term) ||
        item.meta.toLowerCase().includes(term)
      )
    })
  }, [query])

  return (
    <main className="w-full overflow-x-hidden pt-24 pb-32 px-4 max-w-7xl mx-auto space-y-6">
      <section className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-6 text-white shadow-lg shadow-slate-200 overflow-hidden">
        <p className="mb-1 text-sm font-medium text-slate-300">Global Search</p>
        <h2 className="mb-1 text-2xl font-black tracking-tight">Search</h2>
        <p className="text-sm text-slate-300">
          Search products, orders, insights, and quick actions from one place.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            search
          </span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-2xl border border-slate-100 bg-slate-50 py-3 pl-12 pr-4 text-sm outline-none placeholder:text-slate-400"
            placeholder="Search products, orders, pages..."
            type="text"
            autoFocus
          />
        </div>
      </section>

      <section className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
        <div className="mb-4">
          <h3 className="text-base font-black text-slate-800">Quick Actions</h3>
          <p className="mt-1 text-xs text-slate-400">Jump quickly to important pages</p>
        </div>

        <div className="space-y-3">
          {quickActions.map((item) => (
            <QuickActionCard
              key={item.title}
              {...item}
              setActivePage={setActivePage}
            />
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
        <div className="mb-4">
          <h3 className="text-base font-black text-slate-800">Search Results</h3>
          <p className="mt-1 text-xs text-slate-400">
            {query ? `${filteredItems.length} results found` : 'Start typing to search'}
          </p>
        </div>

        {!query ? (
          <div className="rounded-2xl bg-slate-50 px-4 py-10 text-center">
            <span className="material-symbols-outlined text-4xl text-slate-300">manage_search</span>
            <p className="mt-3 text-sm font-bold text-slate-700">Search anything</p>
            <p className="mt-1 text-xs text-slate-400">
              Try product names, order IDs, or page names.
            </p>
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="rounded-2xl bg-slate-50 px-4 py-10 text-center">
            <span className="material-symbols-outlined text-4xl text-slate-300">search_off</span>
            <p className="mt-3 text-sm font-bold text-slate-700">No results found</p>
            <p className="mt-1 text-xs text-slate-400">
              Try a different keyword.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.page)}
                className="flex w-full items-start gap-3 rounded-2xl bg-slate-50 p-4 text-left"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-blue-600">
                  <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-black text-slate-800">{item.title}</h4>
                  <p className="mt-1 text-xs text-slate-500">{item.subtitle}</p>
                  <p className="mt-1 text-[11px] text-slate-400">{item.meta}</p>
                </div>

                <span className="material-symbols-outlined text-slate-300">chevron_right</span>
              </button>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
