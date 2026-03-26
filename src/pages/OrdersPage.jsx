import { useMemo, useState } from 'react'

const orderTabs = ['All', 'Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled', 'Returned']
const paymentTabs = ['All', 'Paid', 'Pending', 'Refunded', 'Failed']

const orders = [
  {
    id: 1,
    orderId: 'ORD-1001',
    customer: 'Aarav Sharma',
    email: 'aarav@gmail.com',
    items: 3,
    total: 2499,
    paymentStatus: 'Paid',
    status: 'Pending',
    date: '26 Mar 2026',
    city: 'Delhi',
  },
  {
    id: 2,
    orderId: 'ORD-1002',
    customer: 'Priya Mehta',
    email: 'priya@gmail.com',
    items: 2,
    total: 1599,
    paymentStatus: 'Paid',
    status: 'Processing',
    date: '25 Mar 2026',
    city: 'Mumbai',
  },
  {
    id: 3,
    orderId: 'ORD-1003',
    customer: 'Rohan Verma',
    email: 'rohan@gmail.com',
    items: 1,
    total: 899,
    paymentStatus: 'Pending',
    status: 'Pending',
    date: '25 Mar 2026',
    city: 'Pune',
  },
  {
    id: 4,
    orderId: 'ORD-1004',
    customer: 'Sneha Kapoor',
    email: 'sneha@gmail.com',
    items: 4,
    total: 4999,
    paymentStatus: 'Paid',
    status: 'Shipped',
    date: '24 Mar 2026',
    city: 'Bengaluru',
  },
  {
    id: 5,
    orderId: 'ORD-1005',
    customer: 'Kabir Singh',
    email: 'kabir@gmail.com',
    items: 2,
    total: 3299,
    paymentStatus: 'Paid',
    status: 'Delivered',
    date: '23 Mar 2026',
    city: 'Jaipur',
  },
  {
    id: 6,
    orderId: 'ORD-1006',
    customer: 'Ananya Rao',
    email: 'ananya@gmail.com',
    items: 1,
    total: 549,
    paymentStatus: 'Refunded',
    status: 'Returned',
    date: '22 Mar 2026',
    city: 'Hyderabad',
  },
  {
    id: 7,
    orderId: 'ORD-1007',
    customer: 'Vikram Das',
    email: 'vikram@gmail.com',
    items: 5,
    total: 7199,
    paymentStatus: 'Failed',
    status: 'Cancelled',
    date: '21 Mar 2026',
    city: 'Kolkata',
  },
  {
    id: 8,
    orderId: 'ORD-1008',
    customer: 'Isha Patel',
    email: 'isha@gmail.com',
    items: 2,
    total: 1899,
    paymentStatus: 'Paid',
    status: 'Shipped',
    date: '20 Mar 2026',
    city: 'Ahmedabad',
  },
  {
    id: 9,
    orderId: 'ORD-1009',
    customer: 'Neel Joshi',
    email: 'neel@gmail.com',
    items: 3,
    total: 2799,
    paymentStatus: 'Paid',
    status: 'Delivered',
    date: '19 Mar 2026',
    city: 'Surat',
  },
  {
    id: 10,
    orderId: 'ORD-1010',
    customer: 'Diya Nair',
    email: 'diya@gmail.com',
    items: 1,
    total: 1299,
    paymentStatus: 'Pending',
    status: 'Processing',
    date: '18 Mar 2026',
    city: 'Chennai',
  },
]

const statusStyles = {
  Pending: 'bg-orange-50 text-orange-600',
  Processing: 'bg-blue-50 text-blue-600',
  Shipped: 'bg-cyan-50 text-cyan-600',
  Delivered: 'bg-emerald-50 text-emerald-600',
  Cancelled: 'bg-red-50 text-red-500',
  Returned: 'bg-violet-50 text-violet-600',
}

const paymentStyles = {
  Paid: 'bg-emerald-50 text-emerald-600',
  Pending: 'bg-amber-50 text-amber-600',
  Refunded: 'bg-blue-50 text-blue-600',
  Failed: 'bg-red-50 text-red-500',
}

function Badge({ children, className }) {
  return (
    <span className={`rounded-full px-2.5 py-1 text-[10px] font-black ${className}`}>
      {children}
    </span>
  )
}

function StatCard({ icon, label, value, sub, bg }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium text-slate-400">{label}</p>
          <p className="mt-2 text-2xl font-black text-slate-800">{value}</p>
          <p className="mt-1 text-[11px] text-slate-400">{sub}</p>
        </div>
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${bg}`}>
          <span className="material-symbols-outlined text-[18px] text-white">{icon}</span>
        </div>
      </div>
    </div>
  )
}

export default function OrdersPage() {
  const [search, setSearch] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('All')
  const [selectedPayment, setSelectedPayment] = useState('All')

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const term = search.toLowerCase()

      const matchesSearch =
        order.orderId.toLowerCase().includes(term) ||
        order.customer.toLowerCase().includes(term) ||
        order.email.toLowerCase().includes(term) ||
        order.city.toLowerCase().includes(term)

      const matchesStatus =
        selectedStatus === 'All' || order.status === selectedStatus

      const matchesPayment =
        selectedPayment === 'All' || order.paymentStatus === selectedPayment

      return matchesSearch && matchesStatus && matchesPayment
    })
  }, [search, selectedStatus, selectedPayment])

  const totalRevenue = filteredOrders.reduce((sum, order) => sum + order.total, 0)
  const paidOrders = filteredOrders.filter((order) => order.paymentStatus === 'Paid').length
  const openOrders = filteredOrders.filter(
    (order) => order.status === 'Pending' || order.status === 'Processing' || order.status === 'Shipped'
  ).length
  const issueOrders = filteredOrders.filter(
    (order) => order.status === 'Cancelled' || order.status === 'Returned'
  ).length

  return (
    <main className="pt-24 pb-32 px-4 max-w-7xl mx-auto space-y-6">
      <section className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white shadow-lg shadow-blue-200">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-blue-100 mb-1">Order Center</p>
            <h2 className="text-2xl font-black tracking-tight mb-1">Orders</h2>
            <p className="text-sm text-blue-100">
              Track orders, update delivery progress, and quickly spot payment issues.
            </p>
          </div>
          <button className="rounded-xl bg-white/15 px-3 py-2 text-sm font-bold backdrop-blur">
            + New
          </button>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon="shopping_bag"
            label="Total Orders"
            value={filteredOrders.length}
            sub="Orders in current view"
            bg="bg-blue-500"
          />
          <StatCard
            icon="currency_rupee"
            label="Revenue"
            value={`₹${totalRevenue.toLocaleString()}`}
            sub="Total from filtered orders"
            bg="bg-emerald-500"
          />
          <StatCard
            icon="payments"
            label="Paid Orders"
            value={paidOrders}
            sub="Payments received"
            bg="bg-cyan-500"
          />
          <StatCard
            icon="error"
            label="Issues"
            value={issueOrders}
            sub="Cancelled or returned"
            bg="bg-red-500"
          />
        </div>
      </section>

      <section className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm space-y-4">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            search
          </span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl bg-slate-50 py-3 pl-12 pr-4 text-sm outline-none placeholder:text-slate-400 focus:bg-white"
            placeholder="Search order ID, customer, email or city..."
            type="text"
          />
        </div>

        <div>
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">
            Order Status
          </p>
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {orderTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedStatus(tab)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold transition-all ${
                  selectedStatus === tab
                    ? 'bg-blue-500 text-white'
                    : 'bg-slate-100 text-slate-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">
            Payment
          </p>
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {paymentTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedPayment(tab)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold transition-all ${
                  selectedPayment === tab
                    ? 'bg-slate-800 text-white'
                    : 'bg-slate-100 text-slate-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-black text-slate-800">Orders List</h3>
            <p className="mt-1 text-xs font-medium text-slate-400">
              {filteredOrders.length} orders found
            </p>
          </div>
          <div className="rounded-xl bg-blue-50 px-3 py-2 text-xs font-bold text-blue-600">
            {openOrders} active
          </div>
        </div>

        {filteredOrders.length === 0 ? (
          <div className="rounded-2xl bg-slate-50 px-4 py-10 text-center">
            <span className="material-symbols-outlined text-4xl text-slate-300">inbox</span>
            <p className="mt-3 text-sm font-bold text-slate-700">No orders found</p>
            <p className="mt-1 text-xs text-slate-400">Try changing your search or filters.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredOrders.map((order) => (
              <article
                key={order.id}
                className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-500">
                      {order.orderId}
                    </p>
                    <h4 className="mt-1 text-lg font-black leading-tight text-slate-800">
                      {order.customer}
                    </h4>
                    <p className="mt-1 text-xs text-slate-400">{order.email}</p>
                  </div>

                  <div className="text-right">
                    <p className="text-lg font-black text-slate-900">
                      ₹{order.total.toLocaleString()}
                    </p>
                    <p className="text-[11px] text-slate-400">{order.items} items</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge className={statusStyles[order.status]}>{order.status}</Badge>
                  <Badge className={paymentStyles[order.paymentStatus]}>
                    {order.paymentStatus}
                  </Badge>
                  <Badge className="bg-slate-100 text-slate-600">{order.city}</Badge>
                  <Badge className="bg-slate-100 text-slate-600">{order.date}</Badge>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white p-3">
                    <p className="text-[10px] text-slate-400">Delivery Stage</p>
                    <p className="mt-1 text-sm font-black text-slate-800">{order.status}</p>
                  </div>
                  <div className="rounded-xl bg-white p-3">
                    <p className="text-[10px] text-slate-400">Payment</p>
                    <p className="mt-1 text-sm font-black text-slate-800">
                      {order.paymentStatus}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <button className="flex-1 rounded-xl bg-blue-500 py-3 text-sm font-bold text-white">
                    View Order
                  </button>
                  <button className="flex-1 rounded-xl bg-slate-200 py-3 text-sm font-bold text-slate-700">
                    Update Status
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
