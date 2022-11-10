import classNames from "classnames";
import Icon from "components/Icon";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-[236px] border-r-[1.4px]">
      <div className="sidebar-top relative">
        <ul className="border-r-1 w-full accounts-sidebar-ul ">
          <li>
            <NavLink
              to={`/accounts/edit`}
              end={true}
              className={({ isActive }) =>
                classNames({
                  activee: isActive,
                })
              }
            >
              Edit Profile
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/accounts/professional-account"}
              end={true}
              className={({ isActive }) =>
                classNames({
                  "": true,
                  activee: isActive,
                })
              }
            >
              Professional Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/accounts/change-password"}
              end={true}
              className={({ isActive }) =>
                classNames({
                  "": true,
                  activee: isActive,
                })
              }
            >
              Change password
            </NavLink>
          </li>
          <li>
            <NavLink to={"/accounts/apps-and-websites"}>
              Apps and websites
            </NavLink>
          </li>
          <li>
            <NavLink to={"/accounts/abc"}>Email notifications</NavLink>
          </li>
          <li>
            <NavLink to={"/accounts/abc"}>Push notifications</NavLink>
          </li>
          <li>
            <NavLink to={"/accounts/abc"}>Manage contacts</NavLink>
          </li>
          <li>
            <NavLink to={"/accounts/abc"}>Privacy and security</NavLink>
          </li>
          <li>
            <NavLink to={"/accounts/abc"}>Ads</NavLink>
          </li>
          <li>
            <NavLink to={"/accounts/abc"}>Supervision</NavLink>
          </li>
          <li>
            <NavLink to={"/accounts/abc"}>Login activity</NavLink>
          </li>
          <li>
            <NavLink to={"/accounts/abc"}>Emails from instagram</NavLink>
          </li>
          <li>
            <NavLink to={"/accounts/abc"}>Help</NavLink>
          </li>
          <li>
            <NavLink
              className="font-semibold text-sm text-brand"
              to={"/accounts/abc"}
            >
              <span>Switch to personal account</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="sidebar-bottom px-6 border-t-[1.4px] flex-1 mb-5">
        <div>
          <Icon size={60} name="meta" className=" h-[40px] mt-2" />
        </div>
        <div className="mb-2">
          <NavLink className="text-brand font-semibold text-sm">
            Accounts Center
          </NavLink>
        </div>
        <div>
          <p className="text-xs text-[#8e8e8e]">
            Control settings for connected experiences across Instagram, the
            Facebook app and Messenger, including story and post sharing and
            logging in
          </p>
        </div>
      </div>
    </div>
  );
}
