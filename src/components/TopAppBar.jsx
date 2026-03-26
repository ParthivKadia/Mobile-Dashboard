const TopAppBar = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#f7f9fb]/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-[0px_20px_40px_rgba(0,80,203,0.06)] px-6 py-4">
      <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-surface-container overflow-hidden active:scale-95 duration-200 transition-all">
            <img
              alt="Merchant Profile Avatar"
              className="h-full w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5IxNs3T09erTKxrkTbdkrOCq_aX9LikNUpDz-UBKCxY5hMcC9BuV410C_CbK62k-vFwmIUfmLcZTMAFKJlCKwtQAOrgRWQySA0XFbCH7JMSFILTh6KTD25J57i0w3hSGXPzGjsWZV5ICCCh-5cPZrkPwaQAlqtJk_ofhFLyK8v_hYZIoFsyNLOCYuWcXMlPJBErR7kFz3aneMlfJe9X-IYAmWFAQKpXE0dV43B-DmiCrm6OPO5lFtxX4EaIyLNuq_znddSXU1BGc"
            />
          </div>
          <h1 className="text-2xl font-black text-blue-600 dark:text-blue-500 tracking-tighter">
            Sellerly
          </h1>
        </div>
        <button className="p-2 rounded-full hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all active:scale-95 duration-200">
          <span className="material-symbols-outlined text-slate-900 dark:text-slate-50">
            search
          </span>
        </button>
      </div>
    </header>
  )
}

export default TopAppBar
