import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <section className="footer flex flex-col align-middle justify-center text-text w-screen relative overflow-hidden py-10 bg-header">
            <div className="flex w-screen align-middle justify-center">
                <p className="copyright mb-6 text-sm footer-div">
                    &copy; Copyright 2023. All Rights Reserved by DevUI.
                </p>
            </div>
            <div className='flex justify-around align-middle'>
                <div className="footer-div h-full">
                    <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                        Company
                    </h3>
                    <ul>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                to="/"
                            >
                                Features
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                to="/"
                            >
                                Pricing
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                to="/"
                            >
                                Affiliate Program
                            </Link>
                        </li>
                        <li>
                            <Link
                                className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                to="/"
                            >
                                Press Kit
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-div h-full">
                    <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                        Support
                    </h3>
                    <ul>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                to="/"
                            >
                                Account
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                to="/"
                            >
                                Help
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                to="/"
                            >
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                to="/"
                            >
                                Customer Support
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-div h-full">
                    <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                        Legals
                    </h3>
                    <ul>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                to="/"
                            >
                                Terms &amp; Conditions
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                to="/"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                to="/"
                            >
                                Licensing
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Footer