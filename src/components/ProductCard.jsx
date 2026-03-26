import StockBadge from './StockBadge'

const ProductCard = ({ product }) => {
  const { image, category, status, name, price } = product

  return (
    <div className="group bg-surface-container-lowest rounded-xl shadow-[0_20px_40px_rgba(0,80,203,0.06)] overflow-hidden transition-all hover:translate-y-[-4px]">
      <div className="h-56 overflow-hidden">
        <img
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={image}
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-outline">
            {category}
          </span>
          <StockBadge status={status} />
        </div>
        <h4 className="text-xl font-bold tracking-tight text-on-surface mb-1">{name}</h4>
        <p className="text-2xl font-black text-on-surface tracking-tighter mb-4">{price}</p>
        <div className="flex items-center gap-2 pt-4 border-t border-surface-container">
          <button className="p-2 rounded-full hover:bg-surface-container-low text-outline transition-colors">
            <span className="material-symbols-outlined">visibility</span>
          </button>
          <button className="p-2 rounded-full hover:bg-surface-container-low text-outline transition-colors">
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
