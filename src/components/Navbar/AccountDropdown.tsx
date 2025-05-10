import { ChevronDown, UserCircle } from "lucide-react";
import React from "react";


interface AccountDropdownProps {
    isOpen: boolean;
    toggle: () => void;
    items: unknown;
    isMobile?: boolean;
    ref?: React.RefObject<HTMLDivElement>;
  }
  
  const AccountDropdown = React.forwardRef<HTMLDivElement, AccountDropdownProps>(
    ({ isOpen, toggle, items, isMobile = false }, ref) => {
      return (
        <div 
          ref={ref}
          className={`relative ${isMobile ? 'w-full' : ''}`}
        >
          <button 
            onClick={toggle}
            className={`flex items-center ${isMobile ? 'w-full px-6 py-3 justify-between hover:bg-gray-800' : 'space-x-1 group'}`}
            aria-label="Account menu"
            aria-expanded={isOpen}
          >
            <div className="flex items-center">
              <UserCircle size={isMobile ? 20 : 32} className={`${isMobile ? 'mr-2' : 'text-gray-300 group-hover:text-blue-400'} transition-colors`} />
              {isMobile && <span>Account</span>}
            </div>
            <ChevronDown 
              size={16} 
              className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} ${isMobile ? 'ml-2' : ''}`}
            />
          </button>
          
          {isOpen && (
            <div className={`
              ${isMobile ? 'ml-4 bg-[#060c1f] rounded-md my-1' : 'absolute right-0 mt-2 w-48 bg-[#0a122a] rounded-md shadow-lg border border-gray-700 py-1 z-50'}
            `}>
              {
                //@ts-expect-error can ignore
              items.map((item) => {
                const Icon = item.icon;
                return (
                  <a 
                    key={item.label}
                    href={item.href}
                    className={`
                      flex items-center px-4 py-2 text-sm 
                      ${item.isDestructive ? 'text-red-400 hover:text-red-300' : 'text-gray-300 hover:text-white'}
                      hover:bg-gray-800 transition-colors
                    `}
                  >
                    <Icon size={16} className="mr-2" />
                    {item.label}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      );
    }
  );
  
  AccountDropdown.displayName = "AccountDropdown";

    export default AccountDropdown;