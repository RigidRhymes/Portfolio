import React from 'react'
import Header from "@/components/Header";
import ListedProjects from "@/components/ListedProjects";

const page = () => {
    return (
        <div>
            <Header />
            <div className='overflow-hidden'>
            <ListedProjects />
            </div>
        </div>
    )
}
export default page
