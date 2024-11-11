import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Separator } from "../ui/separator";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto text-center">
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/yourusername"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/yourusername"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaTwitter size={24} />
          </a>
        </div>

        {/* Links */}
        <div className="space-x-5 text-sm mb-4">
          <a href="/about" className="hover:text-white">
            About
          </a>
          <a href="/projects" className="hover:text-white">
            Latest Jobs
          </a>
          <a href="/contact" className="hover:text-white">
            Contact
          </a>
          <a href="/contact" className="hover:text-white">
            FAQ&apos;s
          </a>
          <a href="/contact" className="hover:text-white">
            Terms & Conditions
          </a>
          <a href="/contact" className="hover:text-white">
            Privacy & Policy
          </a>
        </div>

        <Separator className="w-[90%] mx-auto my-5" />
        {/* Copyright */}
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
