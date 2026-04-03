import React from 'react'
import Header from "@/components/Header";
import Hero from '@/components/Hero';
import Info from '@/components/Info';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experiences from "@/components/Experiences";
import Foundation from "@/components/Foundation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileFooter from "@/components/MobileFooter";



const Page = () => {
    return (
        <div className=''>
            <Header />
            <div className='overflow-hidden'>
                <Hero />
                <Info />
                <Skills />
                <Projects />
                <Experiences />
                <Foundation />
                <Contact />
                <Footer />
            </div>
                <MobileFooter />
        </div>
    )
}
export default Page
