const navItems = [
  { icon: 'home', label: 'Home', active: false },
  { icon: 'inventory_2', label: 'Products', active: true },
  { icon: 'shopping_cart', label: 'Orders', active: false },
  { icon: 'analytics', label: 'Insights', active: false },
  { icon: 'more_horiz', label: 'More', active: false },
]

const BottomNavBar = () => {
  return (
    <nav className="fixed bottom-4 left-3 right-3 rounded-2xl z-50 h-16 bg-white dark:bg-slate-900 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-slate-100 flex items-center">
      <div className="flex justify-between items-center w-full px-2">
        {navItems.map(({ icon, label, active }) => (
          <a
            key={label}
            href="#"
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
          </a>
        ))}
      </div>
    </nav>
  )
}

export default BottomNavBar

// const navItems = [
//   { icon: 'home', label: 'Home', active: false },
//   { icon: 'inventory_2', label: 'Products', active: true },
//   { icon: 'shopping_cart', label: 'Orders', active: false },
//   { icon: 'analytics', label: 'Insights', active: false },
//   { icon: 'more_horiz', label: 'More', active: false },
// ]

// const BottomNavBar = () => {
//   return (
//     <nav className="fixed bottom-6 left-4 right-4 rounded-[3rem] z-50 h-20 bg-white/90 dark:bg-slate-800/90 backdrop-blur-2xl shadow-[0px_20px_40px_rgba(0,80,203,0.12)] flex items-center">
//       <div className="flex justify-around items-center px-4 w-full">
//         {navItems.map(({ icon, label, active }) => (
//           <a
//             key={label}
//             href="#"
//             className={`flex flex-col items-center justify-center px-4 active:scale-90 duration-300 ease-out transition-colors ${
//               active
//                 ? 'bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full px-5 py-2'
//                 : 'text-slate-400 dark:text-slate-500 hover:text-blue-500'
//             }`}
//           >
//             <span className="material-symbols-outlined">{icon}</span>
//             <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">
//               {label}
//             </span>
//           </a>
//         ))}
//       </div>
//     </nav>
//   )
// }

// export default BottomNavBar
