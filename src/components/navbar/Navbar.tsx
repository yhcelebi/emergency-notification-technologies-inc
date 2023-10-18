import "./Navbar.css";

export function Navbar() {


  return (
    <>
      <div className="">
        <div className="navbar bg-base-300">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a href="/emergency-notification-technologies-inc/emergency">Emergency</a>
                </li>
                <li>
                  <a href="/emergency-notification-technologies-inc/commercial">Commercial</a>
                </li>
                <li>
                  <a href="/emergency-notification-technologies-inc/pricing">Pricing</a>
                </li>
                <li>
                  <a href="/emergency-notification-technologies-inc/about-us">About Us</a>
                </li>
              </ul>
            </div>
            <a href="/emergency-notification-technologies-inc/" className="btn btn-ghost normal-case text-xl">
              ENT Inc.
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a href="/emergency-notification-technologies-inc/emergency">Emergency</a>
              </li>
              <li>
                <a href="/emergency-notification-technologies-inc/commercial">Commercial</a>
              </li>
              <li>
                <a href="/emergency-notification-technologies-inc/pricing">Pricing</a>
              </li>
              <li>
                <a href="/emergency-notification-technologies-inc/about-us">About Us</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end mr-3">
            <div className="mr-3">        
            </div>
            <a href="/emergency-notification-technologies-inc/request-a-demo" className="btn">Request a Demo</a>
          </div>
        </div>
      </div>
    </>
  );
}
