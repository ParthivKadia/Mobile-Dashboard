const topStats = [
  {
    label: 'Active Campaigns',
    value: '4',
    subtext: 'Running now',
    icon: 'campaign',
    bg: 'bg-blue-500',
  },
  {
    label: 'Coupons Used',
    value: '128',
    subtext: 'This month',
    icon: 'sell',
    bg: 'bg-emerald-500',
  },
  {
    label: 'Email Reach',
    value: '2.4K',
    subtext: 'Customers reached',
    icon: 'mail',
    bg: 'bg-violet-500',
  },
  {
    label: 'Notifications',
    value: '12',
    subtext: 'Need review',
    icon: 'notifications',
    bg: 'bg-amber-500',
  },
]

const marketingItems = [
  {
    title: 'Coupons',
    subtitle: 'Create offers and discount codes',
    icon: 'sell',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Campaigns',
    subtitle: 'Manage promotions and launches',
    icon: 'campaign',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'Discounts',
    subtitle: 'Set store-wide sale pricing',
    icon: 'percent',
    color: 'bg-violet-50 text-violet-600',
  },
  {
    title: 'Email Marketing',
    subtitle: 'Send offers to customers',
    icon: 'mail',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    title: 'Cart Recovery',
    subtitle: 'Recover abandoned carts',
    icon: 'shopping_cart',
    color: 'bg-cyan-50 text-cyan-600',
  },
]

const settingsItems = [
  {
    title: 'Account Settings',
    subtitle: 'Profile, business info, and preferences',
    icon: 'settings',
  },
  {
    title: 'Notifications',
    subtitle: 'Order alerts and reminder settings',
    icon: 'notifications',
  },
  {
    title: 'Roles & Permissions',
    subtitle: 'Control staff access',
    icon: 'shield_person',
  },
  {
    title: 'Security',
    subtitle: 'Password and account protection',
    icon: 'lock',
  },
  {
    title: 'Logout',
    subtitle: 'Sign out from this device',
    icon: 'logout',
  },
]

function StatCard({ icon, label, value, subtext, bg }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm min-w-0">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-medium text-slate-400">{label}</p>
          <p className="mt-2 text-2xl font-black text-slate-800 break-words">{value}</p>
          <p className="mt-1 text-[11px] text-slate-400">{subtext}</p>
        </div>
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${bg}`}>
          <span className="material-symbols-outlined text-[18px] text-white">{icon}</span>
        </div>
      </div>
    </div>
  )
}

function MenuCard({ icon, title, subtitle, color }) {
  return (
    <button className="w-full rounded-2xl border border-slate-100 bg-white p-4 text-left shadow-sm">
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

function SettingRow({ icon, title, subtitle }) {
  return (
    <button className="flex w-full items-start gap-3 rounded-2xl bg-slate-50 p-4 text-left">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-slate-600">
        <span className="material-symbols-outlined text-[20px]">{icon}</span>
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="text-sm font-black text-slate-800">{title}</h4>
        <p className="mt-1 text-xs leading-5 text-slate-400">{subtitle}</p>
      </div>
      <span className="material-symbols-outlined text-slate-300">chevron_right</span>
    </button>
  )
}

export default function MorePage() {
  return (
    <main className="w-full overflow-x-hidden pt-24 pb-32 px-4 max-w-7xl mx-auto space-y-6">
      <section className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-6 text-white shadow-lg shadow-slate-200 overflow-hidden">
        <p className="mb-1 text-sm font-medium text-slate-300">More Tools</p>
        <h2 className="mb-1 text-2xl font-black tracking-tight">More</h2>
        <p className="text-sm text-slate-300">
          Marketing tools and settings in one clean place.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {topStats.map((item) => (
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

      <section className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
        <div className="mb-4">
          <h3 className="text-base font-black text-slate-800">Marketing</h3>
          <p className="mt-1 text-xs text-slate-400">
            Tools to promote products and improve sales
          </p>
        </div>

        <div className="space-y-3">
          {marketingItems.map((item) => (
            <MenuCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
              color={item.color}
            />
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
        <div className="mb-4">
          <h3 className="text-base font-black text-slate-800">Settings</h3>
          <p className="mt-1 text-xs text-slate-400">
            Account, alerts, access and security settings
          </p>
        </div>

        <div className="space-y-3">
          {settingsItems.map((item) => (
            <SettingRow
              key={item.title}
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
