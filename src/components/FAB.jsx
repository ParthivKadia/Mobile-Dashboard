const FAB = ({ onClick }) => (
  <button
    onClick={onClick}
    className="fixed bottom-24 right-8 w-16 h-16 rounded-full bg-primary text-on-primary shadow-[0_20px_40px_rgba(0,80,203,0.3)] hover:scale-110 active:scale-90 transition-all z-[60] flex items-center justify-center"
    aria-label="Add product"
  >
    <span
      className="material-symbols-outlined text-3xl"
      style={{ fontVariationSettings: "'wght' 600" }}
    >
      add
    </span>
  </button>
)

export default FAB
