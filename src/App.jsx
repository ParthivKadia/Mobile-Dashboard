import TopAppBar from './components/TopAppBar'
import BottomNavBar from './components/BottomNavBar'
import FAB from './components/FAB'
import ProductsPage from './pages/ProductsPage'

function App() {
  return (
    <div className="bg-surface text-on-surface min-h-screen pb-32">
      <TopAppBar />
      <ProductsPage />
      <FAB />
      <BottomNavBar />
    </div>
  )
}

export default App
