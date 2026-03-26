const navItems = [
  { icon: 'home', label: 'Home', page: 'home' },
  { icon: 'inventory_2', label: 'Products', page: 'products' },
  { icon: 'shopping_cart', label: 'Orders', page: 'orders' },
  { icon: 'analytics', label: 'Insights', page: 'insights' },
  { icon: 'more_horiz', label: 'More', page: 'more' },
]

export default function BottomNavBar({ activePage, setActivePage }) {
  return (
    <nav className="fixed bottom-4 left-3 right-3 z-50">
      <div className="mx-auto flex h-16 w-full max-w-3xl items-center rounded-2xl border border-slate-100 bg-white px-2 shadow-[0_8px_32px_rgba(0,0,0,0.12)] overflow-hidden">
        {navItems.map(({ icon, label, page }) => {
          const active = activePage === page

          return (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              className={`flex flex-1 flex-col items-center justify-center rounded-xl py-1 transition-all duration-200 active:scale-90 ${
                active ? 'text-blue-600' : 'text-slate-400'
              }`}
            >
              <div className={`rounded-lg p-1.5 ${active ? 'bg-blue-50' : 'bg-transparent'}`}>
                <span
                  className="material-symbols-outlined text-[22px]"
                  style={{
                    fontVariationSettings: active
                      ? "'FILL' 1, 'wght' 500"
                      : "'FILL' 0, 'wght' 400",
                  }}
                >
                  {icon}
                </span>
              </div>

              <span
                className={`mt-0.5 text-[9px] font-bold uppercase tracking-wider ${
                  active ? 'text-blue-600' : 'text-slate-400'
                }`}
              >
                {label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
