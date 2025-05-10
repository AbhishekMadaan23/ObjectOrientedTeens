const MobileNavLink = ({ 
  href, 
  children,
  onClick
}: { 
  href: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <a 
    href={href}
    className="px-6 py-3 hover:bg-gray-800 transition-colors border-b border-gray-800"
    onClick={onClick}
  >
    {children}
  </a>
);

export default MobileNavLink;