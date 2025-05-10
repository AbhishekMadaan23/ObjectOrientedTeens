const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href}
    className="px-3 py-2 text-sm font-medium hover:text-blue-400 transition-colors duration-200 relative group"
  >
    {children}
    <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 w-0 bg-blue-400 group-hover:w-4/5 transition-all duration-300"></span>
  </a>
);
export default NavLink;