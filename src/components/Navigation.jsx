import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { FaHandHolding } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu"
import { GrResources } from "react-icons/gr";
import { CiCalendar } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='bg-white shadow-lg border border-2 flex justify-around items-center fixed bottom-0 p-2 w-full text-lg font-bold '>

            <Link to={'/'} className='text-center'>
                <IoHomeOutline />
                <span >Home</span>
            </Link>
            <div>
                <LuNotebookPen />
                <span>Complance</span>
            </div>
            <div>

                <FaHandHolding />
                <span>Eligibility</span>
            </div>

            <div><GrResources /><span>Resources</span></div>
            <div>
                <CiCalendar />
                <span>Reminder</span>
            </div>


        </div>
    )
}

export default Navigation
