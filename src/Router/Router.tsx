import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { Layout } from "../pages"
import { Home } from "../pages/Home"
import { DetailsPage } from "../pages/DetailsPage"


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}></Route>
                <Route path="/country/:countryName" element={<DetailsPage />}></Route>
            </Route>
        </Route>
    ))

export const Router = () => {
    return <RouterProvider router={router}></RouterProvider>
}