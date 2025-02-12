import {
    Route,
    createBrowserRouter,
    createRoutesFromElements
} from 'react-router-dom'

import Layout from './layouts/layout.tsx'
import CursorlessLayout from './layouts/cursorlessLayout.tsx'
import IndexPage from './pages/index.tsx'
import InfoPage from './pages/info.tsx'
import OrganizationPage from './pages/organization.tsx'
import DonationPage from './pages/donation.tsx'
import ContactPage from './pages/contact.tsx'
import ClassesPage from './pages/classes.tsx'
import SignupPage from './pages/signup.tsx'

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<Layout />}>
                <Route index element={<IndexPage />} />
                <Route path="/info" element={<InfoPage />} />
                <Route path="/organization" element={<OrganizationPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/donate" element={<DonationPage />} />
                <Route path="/classes" element={<ClassesPage />} />
            </Route>
            <Route element={<CursorlessLayout />}>
                <Route path="/register" element={<SignupPage />} />
                <Route path="/signup" element={<SignupPage />} />
            </Route>
        </>
    )
)

export default router
