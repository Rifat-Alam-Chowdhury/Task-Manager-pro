import React from "react";
import { Link } from "react-router";

function Footer() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12   ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold">TaskPro</h3>
            <p className="mt-4 text-sm opacity-90">
              Making productivity simple and enjoyable for everyone.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:opacity-80">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:opacity-80">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:opacity-80">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Resources</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:opacity-80">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:opacity-80">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:opacity-80">
                  Status
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:opacity-80">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:opacity-80">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:opacity-80">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/20 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} TaskPro. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
