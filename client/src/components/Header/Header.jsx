import {
  BarChart3,
  PieChart,
  TrendingUp,
  Lock,
  Users,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b-2">
      <Link className="flex items-center justify-center" to="#">
        <TrendingUp className="h-6 w-6 text-primary" />
        <span className="ml-2 text-2xl font-bold text-primary">
          YourPortfolio
        </span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          to="portfolio"
        >
          Portfolio
        </Link>
        {/* <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          to="#"
        >
          Pricing
        </Link> */}
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          to="#"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          to="#"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
