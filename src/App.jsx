import { useState } from 'react'
import TopAppBar from './components/TopAppBar'
import BottomNavBar from './components/BottomNavBar'
import FAB from './components/FAB'
import ProductsPage from './pages/ProductsPage'
import HomePage from './pages/HomePage'
import OrdersPage from './pages/OrdersPage'
import InsightsPage from './pages/InsightsPage'
import MorePage from './pages/MorePage'
import StoreProfilePage from './pages/StoreProfilePage'

function App() {
  const [activePage, setActivePage] = useState('home')

  return (
    <div className="bg-[#f7f9fb] text-on-surface min-h-screen pb-32 overflow-x-hidden">
      <TopAppBar setActivePage={setActivePage} />

      {activePage === 'home' ? (
        <HomePage />
      ) : activePage === 'products' ? (
        <ProductsPage />
      ) : activePage === 'orders' ? (
        <OrdersPage />
      ) : activePage === 'insights' ? (
        <InsightsPage />
      ) : activePage === 'more' ? (
        <MorePage />
      ) : activePage === 'store-profile' ? (
        <StoreProfilePage />
      ) : (
        <HomePage />
      )}

      <FAB />
      <BottomNavBar activePage={activePage} setActivePage={setActivePage} />
    </div>
  )
}

export default App
