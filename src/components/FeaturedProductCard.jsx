import StockBadge from './StockBadge'

const FeaturedProductCard = ({ product }) => {
  const { image, category, status, name, description, price } = product

  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-2 group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-[0_20px_40px_rgba(0,80,203,0.06)] transition-all hover:shadow-[0_30px_60px_rgba(0,80,203,0.1)] flex flex-col md:flex-row">
      {/* Image */}
      <div className="w-full md:w-1/2 h-72 md:h-auto overflow-hidden relative">
        <img
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          src={image}
        />
        <div className="absolute top-4 left-4">
          <span className="px-4 py-1.5 rounded-full bg-primary/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest">
            Best Seller
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col justify-between flex-1">
        <div>
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              {category}
            </span>
            <StockBadge status={status} />
          </div>
          <h3 className="text-3xl font-extrabold tracking-tight text-on-surface mb-2">{name}</h3>
          <p className="text-on-surface-variant text-sm line-clamp-2 mb-6">{description}</p>
          <span className="text-4xl font-black text-on-surface tracking-tighter">{price}</span>
        </div>

        <div className="mt-8 flex gap-3">
          <button className="flex-1 py-4 px-6 rounded-full bg-primary text-on-primary font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-primary/25">
            <span className="material-symbols-outlined text-lg">edit</span>
            Edit Details
          </button>
          <button className="flex-1 py-4 px-6 rounded-full bg-surface-container-low text-primary font-bold text-sm flex items-center justify-center gap-2 hover:bg-surface-container-high transition-all active:scale-95">
            <span className="material-symbols-outlined text-lg">analytics</span>
            View Insights
          </button>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProductCard
