import { Header } from '../components/header/Header'
import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
