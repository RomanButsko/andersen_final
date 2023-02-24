import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom'

import { Layout } from './components/layout/Layout'
import { NotFound } from './components/pages/404/NotFound'
import { HomePage } from './components/pages/home/HomePage'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
)

export default router
