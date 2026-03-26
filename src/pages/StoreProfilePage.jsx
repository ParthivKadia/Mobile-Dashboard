const profileStats = [
  {
    label: 'Store Rating',
    value: '4.8',
    subtext: 'Average customer rating',
    icon: 'star',
    bg: 'bg-blue-500',
  },
  {
    label: 'Products Live',
    value: '126',
    subtext: 'Active listings',
    icon: 'inventory_2',
    bg: 'bg-emerald-500',
  },
  {
    label: 'Profile Views',
    value: '18.4K',
    subtext: 'Monthly visitors',
    icon: 'visibility',
    bg: 'bg-amber-500',
  },
  {
    label: 'Store Age',
    value: '3 yrs',
    subtext: 'Started in 2023',
    icon: 'calendar_month',
    bg: 'bg-violet-500',
  },
]

const brandSummary = [
  { label: 'Public Store Name', value: 'Storly' },
  { label: 'Primary Category', value: 'Lifestyle & Electronics' },
  { label: 'Support Contact', value: 'support@storly.com' },
  { label: 'Business Phone', value: '+91 98765 43210' },
  { label: 'Website', value: 'www.storly.com' },
  { label: 'Store Age', value: '3 years' },
]

const storeHealth = [
  { label: 'Verification Status', value: 'Verified', color: 'text-emerald-600' },
  { label: 'Catalog Status', value: 'Healthy', color: 'text-blue-600' },
  { label: 'Customer Trust Score', value: 'High', color: 'text-amber-600' },
  { label: 'Seller Tier', value: 'Gold', color: 'text-violet-600' },
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

function InputField({ label, value, large }) {
  return (
    <div>
      <p className="mb-2 text-sm font-bold text-slate-700">{label}</p>
      {large ? (
        <textarea
          defaultValue={value}
          rows={4}
          className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none"
        />
      ) : (
        <input
          defaultValue={value}
          className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none"
        />
      )}
    </div>
  )
}

export default function StoreProfilePage() {
  return (
    <main className="w-full overflow-x-hidden pt-24 pb-32 px-4 max-w-7xl mx-auto space-y-6">
      <section className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white shadow-lg shadow-blue-200 overflow-hidden">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="mb-1 text-sm font-medium text-blue-100">Store Profile</p>
            <h2 className="mb-1 text-2xl font-black tracking-tight">Storly</h2>
            <p className="text-sm text-blue-100">
              Manage your storefront identity, business information, and brand details.
            </p>
          </div>

          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5IxNs3T09erTKxrkTbdkrOCq_aX9LikNUpDz-UBKCxY5hMcC9BuV410C_CbK62k-vFwmIUfmLcZTMAFKJlCKwtQAOrgRWQySA0XFbCH7JMSFILTh6KTD25J57i0w3hSGXPzGjsWZV5ICCCh-5cPZrkPwaQAlqtJk_ofhFLyK8v_hYZIoFsyNLOCYuWcXMlPJBErR7kFz3aneMlfJe9X-IYAmWFAQKpXE0dV43B-DmiCrm6OPO5lFtxX4EaIyLNuq_znddSXU1BGc"
            alt="Seller"
            className="h-16 w-16 shrink-0 rounded-2xl border-2 border-white/30 object-cover"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {profileStats.map((item) => (
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
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-black text-slate-800">Business Information</h3>
            <p className="mt-1 text-xs text-slate-400">Profile overview</p>
          </div>

          <button className="shrink-0 rounded-xl bg-blue-500 px-4 py-2 text-sm font-bold text-white">
            Edit Profile
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <InputField label="Store Name" value="Storly" />
          <InputField label="Business Category" value="Lifestyle & Electronics" />
          <InputField label="Support Email" value="support@storly.com" />
          <InputField label="Phone" value="+91 98765 43210" />
          <InputField label="Website" value="www.storly.com" />
          <InputField label="GST Number" value="27ABCDE1234F1Z5" />
          <InputField label="Start Year" value="2023" />
          <div className="hidden sm:block" />
        </div>

        <div className="mt-4">
          <InputField label="Business Address" value="Mumbai, Maharashtra, India" />
        </div>

        <div className="mt-4">
          <InputField
            label="Store Description"
            value="Storly is a modern ecommerce seller brand focused on electronics, fashion, and everyday lifestyle essentials."
            large
          />
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <h3 className="mb-4 text-base font-black text-slate-800">Brand Summary</h3>

          <div className="space-y-4">
            {brandSummary.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3 last:border-b-0 last:pb-0"
              >
                <span className="text-sm text-slate-500">{item.label}</span>
                <span className="text-right text-sm font-black text-slate-800">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <h3 className="mb-4 text-base font-black text-slate-800">Store Health</h3>

          <div className="space-y-4">
            {storeHealth.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3 last:border-b-0 last:pb-0"
              >
                <span className="text-sm text-slate-500">{item.label}</span>
                <span className={`text-sm font-black ${item.color}`}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
