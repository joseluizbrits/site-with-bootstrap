import React from "react"

import { Footer } from "../../components/Footer"
import { Album } from "../../components/Album"
import { Navbar } from "../../components/Navbar"

export const Home = () => {
    return (
        <>
            <Navbar />
            <Album />
            <Footer />
        </>
    )
}