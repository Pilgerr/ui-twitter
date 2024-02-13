import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

import '../assets/css/Default.css'


export function Default() {
<link rel="shortcut icon" href="./assets/logo-twitter.svg" type="image/x-icon" />
  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}