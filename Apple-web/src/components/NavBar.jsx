import React from "react";
import { navLink } from "../constants";

function NavBar() {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple logo" />
        <ul>
          {navLink.map((link)=>
         (
       <li key={link.label}>
        <a href={link.label}>
            {link.label}
        </a>
       </li>
          ))}
        </ul>
        <div className="flex-center gap-3">
            <button>
                <img src="/search.svg"/>
            </button>
                        <button>
                            <img src="/cart.svg"/>
                        </button>

        </div>
      </nav>
    </header>
  );
}

export default NavBar;
