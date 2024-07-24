import { NavLink } from "react-router-dom";
import img from "../assets/Asset 20@4x.png";

function Footer() {
  return (
    <footer className="shadow-inner">
      <div className="mx-auto w-full max-w-7xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <NavLink to="/" className="flex items-center">
              <img src={img} className="h-40" alt="FlowBite Logo" />
            </NavLink>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">
                Important Links
              </h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <NavLink
                    to="/reservations"
                    className="hover:underline underline-offset-8"
                  >
                    Reservations
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink
                    to="/menu"
                    className="hover:underline underline-offset-8"
                  >
                    Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className="hover:underline underline-offset-8"
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">
                Follow us
              </h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.facebook.com/"
                    className="hover:underline underline-offset-8"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    className="hover:underline underline-offset-8"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <a
                    href="https://en.wikipedia.org/wiki/Privacy_policy"
                    className="hover:underline underline-offset-8"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://en.wikipedia.org/wiki/Terms_of_service"
                    className="hover:underline underline-offset-8"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="mt-3 font-medium text-sm">
            Copyright © 2024 Little Lemon™ . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
