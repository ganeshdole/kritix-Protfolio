import React from "react";
import { Link } from "react-router-dom";
import { TrendingUp, Menu } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b-2 bg-white shadow-sm">
      <Link className="flex items-center justify-center" to="/">
        <TrendingUp className="h-6 w-6 text-primary" />
        <span className="ml-2 text-2xl font-bold text-primary">
          YourPortfolio
        </span>
      </Link>

      <nav className="hidden md:flex gap-6">
        {navItems.map((item) => (
          <Link
            key={item.name}
            className="text-sm font-medium text-gray-600 hover:text-primary transition-colors duration-200 hover:underline underline-offset-4"
            to={item.path}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <button onClick={toggleMenu} className="md:hidden">
        <Menu className="h-6 w-6 text-gray-600" />
      </button>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b-2 shadow-md md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.name}
              className="block py-2 px-4 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-primary transition-colors duration-200"
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
