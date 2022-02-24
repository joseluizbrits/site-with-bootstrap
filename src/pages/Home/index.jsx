import React from "react"

import { Navbar } from "../../components/Navbar"
import { Carousel } from "../../components/Carousel"
import { Album } from "../../components/Album"
import { Footer } from "../../components/Footer"

export const Home = () => {
    return (
        <>
            <Navbar />
            <Carousel />
            <Album />
            <Footer />
        </>
    )
}