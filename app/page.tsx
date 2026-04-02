import React from 'react'
import Header from "@/components/Header";
import Hero from '@/components/Hero';
import Info from '@/components/Info';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experiences from "@/components/Experiences";
import Foundation from "@/components/Foundation";



const Page = () => {
    return (
        <div className=''>
            <Header />
            <Hero />
            <Info />
            <Skills />
            <Projects />
            <Experiences />
            <Foundation />
        </div>
    )
}
export default Page
