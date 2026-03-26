const variants = {
  'In Stock': 'bg-blue-50 text-primary',
  'Low Stock': 'bg-amber-50 text-amber-700',
  'Out of Stock': 'bg-red-50 text-error',
}

const StockBadge = ({ status }) => (
  <span
    className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${variants[status] ?? 'bg-blue-50 text-primary'}`}
  >
    {status === 'In Stock' && (
      <span className="inline-flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block" />
        {status}
      </span>
    )}
    {status !== 'In Stock' && status}
  </span>
)

export default StockBadge
