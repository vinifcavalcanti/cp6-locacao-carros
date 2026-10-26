import { NavLink } from "react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Início", to: "/" },
    { label: "Nossa Frota", to: "/carros" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/25 text-lg font-bold text-white">
            P
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold tracking-[0.16em] text-white">
              PRESTIGE
            </span>
            <span className="text-[10px] tracking-[0.32em] text-zinc-400">
              MOTORS
            </span>
          </div>
        </NavLink>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-sm transition-colors ${
                  isActive ? "text-white" : "text-zinc-400 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <NavLink
          to="/carros"
          className="hidden items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200 md:flex"
        >
          Explorar veículos
          <ArrowUpRight size={16} />
        </NavLink>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          className="text-white md:hidden"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-zinc-950 px-6 py-6 md:hidden">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-zinc-300 hover:text-white"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
