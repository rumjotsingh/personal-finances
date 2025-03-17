import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/Sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-green-500">FinancePro</h1>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-6">
          <NavItem to="/" label="Home" />
          <NavItem to="/dashboard" label="Dashboard" />
          <NavItem to="/transactions" label="Transactions" />
        
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-gray-900 text-white w-64">
            <div className="flex flex-col gap-4 mt-6">
              <NavItem to="/" label="Home" setOpen={setOpen} />
              <NavItem to="/dashboard" label="Dashboard" setOpen={setOpen} />
              <NavItem to="/transactions" label="Transactions" setOpen={setOpen} />
             
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

// NavItem Component for Reusability
function NavItem({ to, label, setOpen }) {
  return (
    <Link
      to={to}
      onClick={() => setOpen && setOpen(false)}
      className="hover:text-green-400 transition-all text-lg font-medium"
    >
      {label}
    </Link>
  );
}
