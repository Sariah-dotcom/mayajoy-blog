import React from "react"
import { Link } from "react-router-dom"
import { FaPinterest, FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <div>
            <footer className="border-t border-black mt-10">
                <div className="flex flex-col justify-between items-center pt-5 lg:flex-row">
                        <div className="flex flex-col items-center lg:items-baseline pt-5 pb-12 lg:pb-5">
                            <Link to='/'>
                                <h2 className="font-libre text-4xl text-center lg:text-left">The Maya <br /> Joy Blog</h2>
                            </Link>
                            <div className="flex gap-5 mt-2">
                                <Link to='https://www.pinterest.com/themayajoy/'>
                                    <FaPinterest />
                                </Link>
                            </div>
                        </div>

                        <div className="flex gap-10 font-semibold uppercase font-dm">
                            <Link to='/' className="hover:text-dark-green">Home</Link>
                            <Link to='/about' className="hover:text-dark-green">About</Link>
                            <Link to='/all-posts' className="hover:text-dark-green">Blog Posts</Link>
                        </div>

                        <img src="/barcode.png" alt="barcode" />
                    </div>

                    <div className="flex items-center justify-between py-2 text-xs">
                        <div className="flex gap-1">
                            <p>Site by <a className="italic hover:underline" href="https://www.sariahjackson.com/" target="_blank">Sariah Jackson</a></p>
                        </div>

                        <div className="flex gap-1 items-center">
                            <p>©</p>
                            {year}
                            <p>Maya Joy Blog</p>
                        </div>

                    </div>


            </footer>
        </div>
    )
}
