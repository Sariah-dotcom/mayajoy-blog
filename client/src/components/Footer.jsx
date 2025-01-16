import React from "react"
import { Link } from "react-router-dom"
import { FaPinterest, FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <div>
            <footer className="border-t border-black pb-5">

                    <div className="flex flex-col justify-between items-center pt-5 lg:flex-row">
                        <div className="">
                            <h2 className="font-libre text-4xl py-5">The Maya <br /> Joy Blog</h2>
                        </div>

                        <div className="flex gap-10 font-semibold uppercase font-dm">
                            <Link to='/' className="hover:text-dark-green">Home</Link>
                            <Link to='/about' className="hover:text-dark-green">About</Link>
                            <Link to='/posts' className="hover:text-dark-green">Blog Posts</Link>
                        </div>

                        <img src="/barcode.png" alt="barcode" />
                    </div>

                    <div className="flex items-center justify-between py-2 text-xs">
                        <div className="flex gap-1">
                            <p>Site by <a className="italic hover:underline" href="https://www.sariahjackson.com/" target="_blank">Sariah Jackson</a></p>
                        </div>

                        <div className="flex gap-1">
                            <p>©</p>
                            {year}
                            <p>Maya Joy Blog</p>
                        </div>

                        {/* <div className="flex gap-5">
                            <FaPinterest />
                            <FaInstagramSquare />
                            <MdEmail />
                        </div> */}
                    </div>


            </footer>
        </div>
    )
}
