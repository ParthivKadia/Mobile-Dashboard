import { useState } from 'react'

const stats = [
  { label: 'Orders Today', value: '24', icon: 'receipt_long', color: 'text-blue-500', bg: 'bg-blue-50' },
  { label: 'Revenue Today', value: '₹18,240', icon: 'currency_rupee', color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { label: 'Avg. Order Value', value: '₹760', icon: 'trending_up', color: 'text-violet-500', bg: 'bg-violet-50' },
]

const metricCards = [
  {
    label: 'Total Revenue',
    value: '₹4.2L',
    sub: 'This month',
    change: '+18%',
    positive: true,
    icon: 'currency_rupee',
    bg: 'bg-emerald-500',
  },
  {
    label: 'Total Orders',
    value: '1,284',
    sub: 'This month',
    change: '+11%',
    positive: true,
    icon: 'shopping_cart',
    bg: 'bg-blue-500',
  },
  {
    label: 'Low Stock',
    value: '9',
    sub: 'Needs restock',
    change: '-3 SKUs',
    positive: false,
    icon: 'warning',
    bg: 'bg-amber-500',
  },
]

const orderHistory = [
  { id: '#ORD-8831', name: 'Wireless Earbuds Pro', amount: '₹4,999', status: 'Delivered' },
  { id: '#ORD-8829', name: 'Cotton Kurta Set x 2', amount: '₹2,598', status: 'Shipped' },
  { id: '#ORD-8827', name: 'Bamboo Cutting Board', amount: '₹899', status: 'Delivered' },
  { id: '#ORD-8824', name: 'Steel Water Bottle 1L x 3', amount: '₹1,947', status: 'Processing' },
  { id: '#ORD-8821', name: 'Yoga Mat Premium', amount: '₹2,199', status: 'Cancelled' },
]

const topProducts = [
  { rank: 1, name: 'Wireless Earbuds Pro', category: 'Electronics', price: '₹4,999', units: 143, revenue: '₹7.15L', margin: '60%', growth: '+34%', stock: 'In Stock', positive: true },
  { rank: 2, name: 'Cotton Kurta Set', category: 'Clothing', price: '₹1,299', units: 298, revenue: '₹3.87L', margin: '60%', growth: '+12%', stock: 'Low Stock', positive: true },
  { rank: 3, name: 'Steel Water Bottle 1L', category: 'Home & Kitchen', price: '₹649', units: 512, revenue: '₹3.32L', margin: '70%', growth: '+28%', stock: 'In Stock', positive: true },
  { rank: 4, name: 'Yoga Mat Premium', category: 'Sports', price: '₹2,199', units: 89, revenue: '₹1.96L', margin: '60%', growth: '-8%', stock: 'Out of Stock', positive: false },
]

const lowStockItems = [
  { name: 'Wireless Earbuds Pro', category: 'Electronics', left: 3, min: 10, pct: 30, critical: false },
  { name: 'Cotton Kurta — Blue XL', category: 'Clothing', left: 0, min: 15, pct: 0, critical: true },
  { name: 'Steel Bottle 1L', category: 'Home & Kitchen', left: 7, min: 20, pct: 35, critical: false },
]

const statusColors = {
  Delivered: 'text-emerald-600 bg-emerald-50',
  Shipped: 'text-blue-600 bg-blue-50',
  Processing: 'text-amber-600 bg-amber-50',
  Cancelled: 'text-red-500 bg-red-50',
}

const statusDot = {
  Delivered: 'bg-emerald-500',
  Shipped: 'bg-blue-500',
  Processing: 'bg-amber-500',
  Cancelled: 'bg-red-500',
}

const stockColors = {
  'In Stock': 'text-emerald-600 bg-emerald-50',
  'Low Stock': 'text-amber-600 bg-amber-50',
  'Out of Stock': 'text-red-500 bg-red-50',
}

const orderTabs = ['All', 'Delivered', 'Shipped', 'Cancelled']

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('All')

  const filtered = activeTab === 'All'
    ? orderHistory
    : orderHistory.filter(o => o.status === activeTab)

  return (
    <main className="pt-24 pb-32 px-4 max-w-7xl mx-auto space-y-6">

      {/* Welcome Banner */}
      <section className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white shadow-lg shadow-blue-200">
        <p className="text-blue-100 text-sm font-medium mb-1">Good Morning ☀️</p>
        <h2 className="text-2xl font-black tracking-tight mb-1">Seller</h2>
        <p className="text-blue-100 text-sm mb-5">Here's what's happening in your store today.</p>
        <div className="grid grid-cols-3 gap-3">
          {stats.map(s => (
            <div key={s.label} className="bg-white/15 backdrop-blur rounded-xl p-3">
              <p className="text-white font-black text-lg leading-tight">{s.value}</p>
              <p className="text-blue-100 text-[10px] font-semibold mt-0.5 leading-tight">{s.label}</p>
            </div>
          ))}
        </div>
        <button className="mt-4 w-full py-2.5 rounded-xl bg-white text-blue-600 font-bold text-sm hover:bg-blue-50 transition-all active:scale-95">
          Manage Inventory →
        </button>
      </section>

      {/* Metric Cards */}
      <section className="grid grid-cols-3 gap-3">
        {metricCards.map(card => (
          <div key={card.label} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col gap-2">
            <div className={`w-9 h-9 rounded-xl ${card.bg} flex items-center justify-center`}>
              <span className="material-symbols-outlined text-white text-[18px]">{card.icon}</span>
            </div>
            <p className="text-xl font-black text-slate-800 leading-tight">{card.value}</p>
            <div>
              <p className="text-[10px] text-slate-400 font-medium">{card.sub}</p>
              <span className={`text-[10px] font-bold ${card.positive ? 'text-emerald-500' : 'text-red-500'}`}>
                {card.change}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Monthly Target */}
      <section className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-black text-slate-800 text-base">Monthly Target</h3>
          <span className="text-xs text-slate-400 font-medium">March 2026</span>
        </div>
        <div className="flex items-center gap-5">
          {/* Circle */}
          <div className="relative w-24 h-24 shrink-0">
            <svg className="w-24 h-24 -rotate-90" viewBox="0 0 96 96">
              <circle cx="48" cy="48" r="38" fill="none" stroke="#f1f5f9" strokeWidth="10" />
              <circle cx="48" cy="48" r="38" fill="none" stroke="#3b82f6" strokeWidth="10"
                strokeDasharray={`${2 * Math.PI * 38}`}
                strokeDashoffset={`${2 * Math.PI * 38 * (1 - 0.84)}`}
                strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xl font-black text-slate-800">84%</span>
              <span className="text-[9px] text-slate-400 font-semibold">achieved</span>
            </div>
          </div>
          <div className="flex-1 space-y-3">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-500 font-medium">Achieved</span>
                <span className="font-black text-blue-600">₹4,18,240</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '84%' }} />
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-[10px] text-slate-400">Target</p>
                <p className="font-black text-slate-700 text-sm">₹5,00,000</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-slate-400">Remaining</p>
                <p className="font-black text-red-400 text-sm">₹81.8K</p>
              </div>
            </div>
            <div className="bg-emerald-50 rounded-xl px-3 py-2">
              <p className="text-[10px] text-emerald-600 font-bold">🏆 Best Seller · March</p>
              <p className="text-xs font-black text-slate-700">Wireless Earbuds Pro</p>
              <p className="text-[10px] text-slate-400">143 units · ₹71,357 revenue</p>
            </div>
          </div>
        </div>
      </section>

      {/* Order History */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="flex items-center justify-between px-5 pt-5 pb-3">
          <h3 className="font-black text-slate-800 text-base">Order History</h3>
          <button className="text-xs text-blue-500 font-bold hover:underline">View all →</button>
        </div>
        {/* Tabs */}
        <div className="flex gap-2 px-5 pb-3 overflow-x-auto no-scrollbar">
          {orderTabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                activeTab === tab
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {tab} {tab === 'All' ? orderHistory.length : orderHistory.filter(o => o.status === tab).length}
            </button>
          ))}
        </div>
        {/* List */}
        <div className="divide-y divide-slate-50">
          {filtered.map(order => (
            <div key={order.id} className="flex items-center justify-between px-5 py-3 hover:bg-slate-50 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full shrink-0 ${statusDot[order.status]}`} />
                <div>
                  <p className="text-sm font-bold text-slate-700 leading-tight">{order.name}</p>
                  <p className="text-[10px] text-slate-400 font-medium">{order.id}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <p className="text-sm font-black text-slate-800">{order.amount}</p>
                <span className={`text-[9px] font-black px-2 py-0.5 rounded-full ${statusColors[order.status]}`}>
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 divide-x divide-slate-100 border-t border-slate-100 text-center py-3">
          <div>
            <p className="text-xs font-black text-emerald-500">3 delivered</p>
          </div>
          <div>
            <p className="text-xs font-black text-blue-500">1 in transit</p>
          </div>
          <div>
            <p className="text-xs font-black text-red-400">2 cancelled</p>
          </div>
        </div>
      </section>

      {/* Low Stock Alerts */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="flex items-center justify-between px-5 pt-5 pb-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-amber-500 text-xl">warning</span>
            <h3 className="font-black text-slate-800 text-base">Low Stock Alerts</h3>
            <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-500 text-[10px] font-black">2 out</span>
            <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-500 text-[10px] font-black">3 low</span>
          </div>
          <button className="text-xs text-blue-500 font-bold">Manage →</button>
        </div>
        <div className="px-5 pb-4 space-y-4">
          {lowStockItems.map(item => (
            <div key={item.name}>
              <div className="flex justify-between items-start mb-1.5">
                <div>
                  <p className="text-sm font-bold text-slate-700">{item.name}</p>
                  <p className="text-[10px] text-slate-400">{item.category}</p>
                </div>
                {item.critical ? (
                  <span className="text-[9px] font-black px-2 py-0.5 rounded-full bg-red-100 text-red-500">Out of stock</span>
                ) : (
                  <span className="text-[9px] font-black px-2 py-0.5 rounded-full bg-amber-100 text-amber-600">{item.left} left</span>
                )}
              </div>
              <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${item.critical ? 'bg-red-400' : 'bg-amber-400'}`}
                  style={{ width: `${item.pct}%` }}
                />
              </div>
              <p className="text-[10px] text-slate-400 mt-0.5">min {item.min}</p>
            </div>
          ))}
        </div>
        <div className="px-5 pb-5">
          <button className="w-full py-3 rounded-xl bg-amber-500 text-white font-bold text-sm hover:bg-amber-600 transition-all active:scale-95">
            Restock All Low Items →
          </button>
        </div>
      </section>

      {/* Top Selling Products */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="flex items-center justify-between px-5 pt-5 pb-1">
          <div>
            <h3 className="font-black text-slate-800 text-base">Top Selling Products</h3>
            <p className="text-[10px] text-slate-400 mt-0.5">March 2026 · 1,630 units sold · ₹19.48L revenue</p>
          </div>
          <button className="text-xs text-blue-500 font-bold">View all →</button>
        </div>
        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full min-w-[600px] text-sm">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">#</th>
                <th className="text-left px-3 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Product</th>
                <th className="text-left px-3 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Price</th>
                <th className="text-left px-3 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Units</th>
                <th className="text-left px-3 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Revenue</th>
                <th className="text-left px-3 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Growth</th>
                <th className="text-left px-3 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Stock</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {topProducts.map(p => (
                <tr key={p.rank} className="hover:bg-slate-50 transition-colors cursor-pointer">
                  <td className="px-5 py-3 font-black text-slate-300 text-base">#{p.rank}</td>
                  <td className="px-3 py-3">
                    <p className="font-bold text-slate-700 text-xs">{p.name}</p>
                    <p className="text-[10px] text-slate-400">{p.category}</p>
                  </td>
                  <td className="px-3 py-3 font-bold text-slate-700 text-xs">{p.price}</td>
                  <td className="px-3 py-3 font-bold text-slate-700 text-xs">{p.units}</td>
                  <td className="px-3 py-3 font-black text-slate-800 text-xs">{p.revenue}</td>
                  <td className="px-3 py-3">
                    <span className={`text-xs font-black ${p.positive ? 'text-emerald-500' : 'text-red-500'}`}>
                      {p.growth}
                    </span>
                  </td>
                  <td className="px-3 py-3">
                    <span className={`text-[9px] font-black px-2 py-0.5 rounded-full ${stockColors[p.stock]}`}>
                      {p.stock}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-slate-100 bg-slate-50">
                <td colSpan={4} className="px-5 py-3 text-xs font-black text-slate-500">Totals</td>
                <td className="px-3 py-3 font-black text-slate-800 text-xs">₹19.48L</td>
                <td colSpan={2} className="px-3 py-3 text-[10px] text-slate-400 font-medium">Avg margin: 63.3%</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

    </main>
  )
}