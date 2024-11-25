import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useGlobalContext } from "./context";

// Update `Link` and `Social` interfaces
interface Link {
  id: number; // Changed from `string` to `number`
  url: string;
  text: string;
  icon: React.ReactNode;
}

interface Social {
  id: number; // Changed from `string` to `number`
  url: string;
  icon: React.ReactNode;
}

const Sidebar: React.FC = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext() as {
    isSidebarOpen: boolean;
    closeSidebar: () => void;
  };

  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-header">
        <img src={logo} className="logo" alt="coding addict" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link: Link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((link: Social) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
