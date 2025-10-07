import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Layout() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("HASAN");

  // 🔹 Aktiv sahifa nomini aniqlash
  useEffect(() => {
    const path = location.pathname;
    if (path === "/" || path.includes("Hasan")) setActiveLink("HASAN");
    else if (path.includes("Mirumar")) setActiveLink("MIRUMAR");
    else if (path.includes("Akbar")) setActiveLink("AKBAR");
  }, [location.pathname]);

  return (
    <>
      {/* 🔹 Navbar */}
      <header className="header">
        <div className="header-container">
          {/* 🔹 Logo */}
          <div className="logo">
            <svg
              width="160"
              height="50"
              viewBox="0 0 160 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="160" height="50" rx="10" fill="#0EA5E9" />
              <text
                x="50%"
                y="55%"
                textAnchor="middle"
                fontSize="20"
                fill="white"
                fontFamily="Poppins, Arial"
                dy=".3em"
              >
                Hasan Legenda
              </text>
            </svg>
          </div>

          {/* 🔹 Navigatsiya menyu */}
          <nav className="navbar">
            <ul className="nav-list">
              <li>
                <NavLink
                  to="/Hasan"
                  className={`nav-link ${
                    activeLink === "HASAN" ? "active-link" : ""
                  }`}
                >
                  Hasan
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Mirumar"
                  className={`nav-link ${
                    activeLink === "MIRUMAR" ? "active-link" : ""
                  }`}
                >
                  Mirumar
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Akbar"
                  className={`nav-link ${
                    activeLink === "AKBAR" ? "active-link" : ""
                  }`}
                >
                  Akbar
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* 🔹 Sahifa joyi */}
      <main className="page">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
