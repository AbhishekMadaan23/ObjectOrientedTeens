"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Menu, X, LogOut, Settings, User } from "lucide-react";
import NavLink from "@/components/Navbar/Navlink";
import MobileNavLink from "./MobileNavLink";
import AccountDropdown from "./AccountDropDown";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const accountDropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#", label: "About" },
    { href: "#", label: "Services" },
    { href: "#", label: "Contact" },
    { href: "#", label: "Blog" },
  ];

  const accountItems = [
    { href: "#", label: "Profile", icon: User },
    { href: "#", label: "Settings", icon: Settings },
    { href: "#", label: "Sign Out", icon: LogOut, isDestructive: true },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) setIsAccountDropdownOpen(false);
  };

  const toggleAccountDropdown = () => {
    setIsAccountDropdownOpen(!isAccountDropdownOpen);
    if (!isAccountDropdownOpen) setIsMobileMenuOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
      if (accountDropdownRef.current && !accountDropdownRef.current.contains(event.target as Node)) {
        setIsAccountDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="flex justify-between items-center px-4 sm:px-8 py-3  text-white shadow-lg border-b border-gray-900 sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="relative w-12 h-12 sm:w-16 sm:h-16 hover:scale-105 transition-transform duration-200">
          <Image
            src="/logo.png"
            alt="Logo"
            fill
            className="rounded-md object-contain"
            priority
          />
        </div>
        <span className="hidden sm:block text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Object Oriented Teens
        </span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex gap-6 items-center">
        {navLinks.map((link) => (
          <NavLink key={link.href} href={link.href}>
            {link.label}
          </NavLink>
        ))}
      </div>

      {/* Desktop Account Section */}
      <div className="hidden sm:flex items-center space-x-4">
        <button className="hidden md:block bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity shadow-lg">
          Get Started
        </button>
        
        <AccountDropdown 
          isOpen={isAccountDropdownOpen}
          toggle={toggleAccountDropdown}
          items={accountItems}
          ref={accountDropdownRef}
        />
      </div>

      {/* Mobile Menu Button */}
      <div className="sm:hidden flex items-center">
        <button 
          className="p-2 rounded-md hover:bg-gray-800 transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="sm:hidden absolute top-full left-0 right-0 bg-[#0a122a] border-t border-gray-800 shadow-lg z-40"
        >
          <div className="flex flex-col py-2">
            {navLinks.map((link) => (
              <MobileNavLink 
                key={link.href} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </MobileNavLink>
            ))}
            
            <div className="border-t border-gray-800 mt-2 pt-2">
              <AccountDropdown 
                isOpen={isAccountDropdownOpen}
                toggle={toggleAccountDropdown}
                items={accountItems}
                isMobile
              />
            </div>
            
            <button className="mx-4 my-2 bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

// Sub-components



export default Navbar;