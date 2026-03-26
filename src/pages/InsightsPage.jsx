const stats = [
  {
    label: 'Revenue',
    value: '₹4.8L',
    subtext: 'This month',
    icon: 'currency_rupee',
    bg: 'bg-emerald-500',
  },
  {
    label: 'Orders',
    value: '1,284',
    subtext: 'Completed this month',
    icon: 'shopping_bag',
    bg: 'bg-blue-500',
  },
  {
    label: 'Avg Order',
    value: '₹760',
    subtext: 'Per order',
    icon: 'monitoring',
    bg: 'bg-violet-500',
  },
  {
    label: 'Growth',
    value: '+18%',
    subtext: 'Compared to last month',
    icon: 'trending_up',
    bg: 'bg-amber-500',
  },
]

const chartData = [
  { label: 'Oct', value: 38 },
  { label: 'Nov', value: 52 },
  { label: 'Dec', value: 47 },
  { label: 'Jan', value: 64 },
  { label: 'Feb', value: 58 },
  { label: 'Mar', value: 76 },
]

const sideItems = [
  { label: 'Conversion Rate', value: '4.8%', color: 'text-blue-600' },
  { label: 'Repeat Customers', value: '29%', color: 'text-emerald-600' },
  { label: 'Refund Rate', value: '2.1%', color: 'text-red-500' },
  { label: 'Top Category', value: 'Electronics', color: 'text-violet-600' },
]

const topRows = [
  {
    name: 'Wireless Earbuds Pro',
    meta: 'Electronics',
    value: '₹71,357',
    extra: '143 units sold',
  },
  {
    name: 'Smart Watch Series 5',
    meta: 'Electronics',
    value: '₹58,990',
    extra: '98 units sold',
  },
  {
    name: 'Cotton Polo Shirt',
    meta: 'Clothing',
    value: '₹39,950',
    extra: '50 units sold',
  },
  {
    name: 'Non-Stick Kadai 28cm',
    meta: 'Home & Kitchen',
    value: '₹27,990',
    extra: '43 units sold',
  },
]

function StatCard({ icon, label, value, subtext, bg }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium text-slate-400">{label}</p>
          <p className="mt-2 text-2xl font-black text-slate-800">{value}</p>
          <p className="mt-1 text-[11px] text-slate-400">{subtext}</p>
        </div>
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${bg}`}>
          <span className="material-symbols-outlined text-[18px] text-white">{icon}</span>
        </div>
      </div>
    </div>
  )
}

export default function InsightsPage() {
  const maxBarValue = Math.max(...chartData.map((item) => item.value), 1)

  return (
    <main className="pt-24 pb-32 px-4 max-w-7xl mx-auto space-y-6">
      <section className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white shadow-lg shadow-blue-200">
        <p className="text-sm font-medium text-blue-100 mb-1">Store Analytics</p>
        <h2 className="text-2xl font-black tracking-tight mb-1">Insights</h2>
        <p className="text-sm text-blue-100">
          Track performance, revenue trends, and top-selling products in a simple way.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <StatCard
            key={item.label}
            icon={item.icon}
            label={item.label}
            value={item.value}
            subtext={item.subtext}
            bg={item.bg}
          />
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-black text-slate-800">Revenue Trend</h3>
              <p className="mt-1 text-xs text-slate-400">Last 6 months performance</p>
            </div>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-black text-blue-600">
              6 Months
            </span>
          </div>

          <div className="flex h-64 items-end gap-3 overflow-x-auto no-scrollbar pt-3">
            {chartData.map((item) => {
              const height = Math.max((item.value / maxBarValue) * 100, 14)
              return (
                <div key={item.label} className="min-w-[52px] flex-1 text-center">
                  <p className="mb-2 text-xs font-bold text-blue-600">{item.value}</p>
                  <div className="flex h-44 items-end justify-center">
                    <div
                      className="w-full max-w-[56px] rounded-t-2xl rounded-b-lg bg-gradient-to-b from-blue-400 via-blue-500 to-blue-700 shadow-md"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                  <p className="mt-3 text-xs text-slate-400">{item.label}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <div className="mb-4">
            <h3 className="text-base font-black text-slate-800">Quick Insights</h3>
            <p className="mt-1 text-xs text-slate-400">Important store numbers</p>
          </div>

          <div className="space-y-4">
            {sideItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3 last:border-b-0 last:pb-0"
              >
                <span className="text-sm font-medium text-slate-600">{item.label}</span>
                <span className={`text-sm font-black ${item.color}`}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
        <div className="mb-4">
          <h3 className="text-base font-black text-slate-800">Top Products</h3>
          <p className="mt-1 text-xs text-slate-400">Best sellers this month</p>
        </div>

        <div className="space-y-3">
          {topRows.map((row) => (
            <div
              key={row.name}
              className="rounded-2xl bg-slate-50 p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="text-sm font-black text-slate-800">{row.name}</h4>
                  <p className="mt-1 text-xs text-slate-400">{row.meta}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-black text-blue-600">{row.value}</p>
                  <p className="mt-1 text-[11px] text-slate-400">{row.extra}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
