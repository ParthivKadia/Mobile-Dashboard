import { useState } from 'react'

const categories = ['All', 'Electronics', 'Clothing', 'Home & Kitchen', 'Beauty', 'Sports']

const FilterBar = () => {
  const [active, setActive] = useState('All')

  return (
    <section className="mb-10 overflow-x-auto no-scrollbar -mx-6 px-6">
      <div className="flex items-center gap-3 min-w-max">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
              active === cat
                ? 'bg-primary text-on-primary shadow-lg shadow-primary/20'
                : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  )
}

export default FilterBar
