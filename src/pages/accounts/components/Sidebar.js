import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-[236px] border-r-2">
      <ul className="border-r-1 w-full accounts-sidebar-ul">
          <li className="">
            <NavLink
              to={`/accounts/edit`}
              end={true}
              className={({ isActive }) =>
                classNames({
                  "": true,
                  "border-l-2": isActive,
                })
              }
            >
              Edit Profile
            </NavLink>
          </li>

          <li>
            <NavLink>Professional Account</NavLink>
          </li>
          <li>
            <NavLink>Change password</NavLink>
          </li>
          <li>
            <NavLink>Apps and websites</NavLink>
          </li>
          <li>
            <NavLink>Email notifications</NavLink>
          </li>
          <li>
            <NavLink>Push notifications</NavLink>
          </li>
          <li>
            <NavLink>Manage contacts</NavLink>
          </li>
          <li>
            <NavLink>Privacy and security</NavLink>
          </li>
          <li>
            <NavLink>Ads</NavLink>
          </li>
          <li>
            <NavLink>Supervision</NavLink>
          </li>
          <li>
            <NavLink>Login activity</NavLink>
          </li>
          <li>
            <NavLink>Emails from instagram</NavLink>
          </li>
          <li>
            <NavLink>Help</NavLink>
          </li>
      </ul>
      <Link>
        <span>Switch to personal account</span>
      </Link>
    </div>
  );
}
