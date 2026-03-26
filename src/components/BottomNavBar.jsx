const navItems = [
  { icon: 'home', label: 'Home', active: false },
  { icon: 'inventory_2', label: 'Products', active: true },
  { icon: 'shopping_cart', label: 'Orders', active: false },
  { icon: 'analytics', label: 'Insights', active: false },
  { icon: 'more_horiz', label: 'More', active: false },
]

const BottomNavBar = () => {
  return (
    <nav className="fixed bottom-6 left-4 right-4 rounded-[3rem] z-50 h-20 bg-white/90 dark:bg-slate-800/90 backdrop-blur-2xl shadow-[0px_20px_40px_rgba(0,80,203,0.12)] flex items-center">
      <div className="flex justify-around items-center px-4 w-full">
        {navItems.map(({ icon, label, active }) => (
          <a
            key={label}
            href="#"
            className={`flex flex-col items-center justify-center px-4 active:scale-90 duration-300 ease-out transition-colors ${
              active
                ? 'bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full px-5 py-2'
                : 'text-slate-400 dark:text-slate-500 hover:text-blue-500'
            }`}
          >
            <span className="material-symbols-outlined">{icon}</span>
            <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">
              {label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  )
}

export default BottomNavBar
