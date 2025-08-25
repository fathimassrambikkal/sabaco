import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.webp";
import { MdOutlinePhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-full rounded-3xl border border-gray-200 shadow-xl shadow-gray-300/50 bg-white text-slate-900 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Logo + Description */}
        <div className="space-y-5">
          <img src={logo} alt="logo" className="lg:h-16 h-12 w-auto" />
          <p className="text-sm leading-relaxed text-gray-500">
            We are a premier landscape and hardscape company dedicated to transforming outdoor spaces into functional, beautiful, and sustainable environments.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-brandGreen">Home</Link></li>
            <li><Link to="/about" className="hover:text-brandGreen">About Us</Link></li>
            <li><Link to="/services" className="hover:text-brandGreen">Services</Link></li>
            <li><Link to="/technical" className="hover:text-brandGreen">Our Technical Services</Link></li>
            <li><Link to="/gallery" className="hover:text-brandGreen">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-brandGreen">Contact Us</Link></li>
          </ul>
        </div>

        {/* Technical Services */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Technical Services</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-brandGreen">HVAC Installation</Link></li>
            <li><Link to="/" className="hover:text-brandGreen">Electrical</Link></li>
            <li><Link to="/" className="hover:text-brandGreen">Painting & Gypsum</Link></li>
            <li><Link to="/" className="hover:text-brandGreen">Handyman Services</Link></li>
            <li><Link to="/" className="hover:text-brandGreen">Carpentry Works</Link></li>
            <li><Link to="/" className="hover:text-brandGreen">Plumbing</Link></li>
          </ul>
        </div>

        {/* Address + Contacts */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Contact Us</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <FaLocationArrow className="mt-1" />
              <span>Al Satwa, Dubai, UAE</span>
            </li>
            <li className="flex items-center gap-2">
              <CiMail />
              <a href="mailto:Contacts@sabacots.ae" className="hover:text-brandGreen">Contacts@sabacots.ae</a>
            </li>
            <li className="flex items-center gap-2">
              <MdOutlinePhone />
              <a href="tel:+97143300180" className="hover:text-brandGreen">+971 4 33 00 180</a>
            </li>
            <li className="flex items-center gap-2">
              <MdOutlinePhone />
              <a href="tel:+971581891130" className="hover:text-brandGreen">+971 58 189 1130</a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5 text-xl">
            <a href="#" className="hover:text-blue-500"><IoLogoFacebook /></a>
            <a href="#" className="hover:text-gray-400"><FaXTwitter /></a>
            <a href="#" className="hover:text-red-500"><FaYoutube /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sabaco Technical Services. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
