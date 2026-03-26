const navItems = [
  { icon: 'home', label: 'Home', page: 'home' },
  { icon: 'inventory_2', label: 'Products', page: 'products' },
  { icon: 'shopping_cart', label: 'Orders', page: 'orders' },
  { icon: 'analytics', label: 'Insights', page: 'insights' },
  { icon: 'more_horiz', label: 'More', page: 'more' },
]

const BottomNavBar = ({ activePage, setActivePage }) => {
  return (
    <nav className="fixed bottom-4 left-3 right-3 rounded-2xl z-50 h-16 bg-white dark:bg-slate-900 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-slate-100 flex items-center">
      <div className="flex justify-between items-center w-full px-2">
        {navItems.map(({ icon, label, page }) => {
          const active = activePage === page
          return (
            <button
              key={label}
              onClick={() => setActivePage(page)}
              className={`flex flex-col items-center justify-center flex-1 py-1 rounded-xl transition-all duration-200 active:scale-90 ${
                active ? 'text-primary' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <div className={`p-1 rounded-lg ${active ? 'bg-blue-50' : ''}`}>
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
                className={`text-[9px] font-bold uppercase tracking-wider mt-0.5 ${
                  active ? 'text-primary' : 'text-slate-400'
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

export default BottomNavBar