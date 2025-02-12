import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar.jsx'
import ScrollToTop from '../components/scrollToTop.js'
export default function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <ScrollToTop />
        </>
    )
}
