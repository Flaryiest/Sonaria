import {
    Route,
    createBrowserRouter,
    createRoutesFromElements
} from 'react-router-dom'

import Layout from './layouts/layout.tsx'
import OnboardLayout from './layouts/onboardLayout.tsx'
import DashboardLayout from './layouts/dashboardLayout.tsx'

import IndexPage from './pages/index.tsx'
import InfoPage from './pages/info.tsx'

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<Layout />}>
                <Route index element={<IndexPage />} />
                <Route path="/info" element={<InfoPage />} />
            </Route>
            <Route element={<OnboardLayout />}>
            </Route>
            <Route element={<DashboardLayout />}></Route>
        </>
    )
)

export default router
