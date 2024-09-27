import React from "react"
import { Link } from "react-router-dom"
import { FaPinterest, FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    const year = new Date().getFullYear();
    
    return (
        <div>
            <footer>
                <div className="py-5 px-8 border-t-1 border-dark-green">

                    <div className="flex justify-between items-center">
                        <div className="">
                            <img src="/mj-logo.png" alt="logo" className='h-36'/>
                        </div>

                        <div className="flex gap-10 font-semibold">
                            <Link to='/' className="text-dark-green hover:text-med-green">Home</Link>
                            <Link to='/about' className="text-dark-green hover:text-med-green">About</Link>
                            <Link to='/posts' className="text-dark-green hover:text-med-green">Blog Posts</Link>
                        </div>
                    </div>

                    <hr className="border-med-green" />

                    <div className="flex items-center justify-end gap-10 py-5 text-med-green">
                        <div className="flex gap-1">
                            <p>©</p>
                            {year}
                        </div>

                        <div className="flex gap-5">
                            <FaPinterest />
                            <FaInstagramSquare />
                            <MdEmail />
                        </div>
                    </div>

                </div>

            </footer>
        </div>
    )
}
