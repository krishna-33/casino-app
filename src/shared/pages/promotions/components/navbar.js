import React from "react";
import { FaUserTie } from "react-icons/fa";
import { SlDiamond } from "react-icons/sl";
import { GiAmmoBox } from "react-icons/gi";

const Navbar = () => {
    return(
        <nav className="flex sm:justify-center space-x-4">
          {[
            ["CASINO", "/dashboard"],
            ["LIVE", "/team"],
            ["POKER", "/projects"],
            ["VIRTUAL SPORTS", "/reports"],
            ["PROMOTION", "/reports"],
            ["VISIT PALASINO", "/reports"],
          ].map(([title, url, icon], index) => (
            <a
              href={url}
              key={index}
              className="rounded-lg px-3 py-2 text-white-700 font-medium hover:bg-white-100 hover:text-white-900"
            >
              {title === "PROMOTION" ? (
                <SlDiamond size={20} className="inline-block align-middle" />
              ) : title === "VISIT PALASINO" ? (
                <GiAmmoBox size={20} className="inline-block align-middle" />
              ) : (
                <FaUserTie size={20} className="inline-block align-middle" />
              )}
              <span className="inline-block align-middle px-2">{title}</span>
            </a>
          ))}
        </nav>
    )

}

export default Navbar