import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar.jsx'
import AnimatedCursor from 'react-animated-cursor'
import ScrollToTop from '../components/scrollToTop.js'
export default function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <ScrollToTop/>
            <div className="cursor-wrapper">
                <AnimatedCursor color="0,0,0" />
            </div>
        </>
    )
}
