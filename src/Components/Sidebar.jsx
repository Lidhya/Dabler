import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArticleIcon from '@mui/icons-material/Article';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [active, setActive] = useState(0)
  return (
    <div className=" flex flex-col w-full h-1/2 items-center justify-start">
      <div className="h-2/6 bg-light-blue w-full mb-3">
        <h5 className="font-semibold  text-2xl text-white flex justify-center items-center h-full">
          DABLER
        </h5>
      </div>
      <Link to={"/"} className={`cursor-pointer p-4 w-full text-white flex gap-3 flex-wrap ${active ===1 && 'bg-light-blue'}`} onClick={()=>setActive(1)}>
        <DashboardIcon />
        <span>Dashboard</span>
      </Link>
      <Link to={"/projects"} className={`cursor-pointer p-4 w-full text-white flex gap-3 flex-wrap ${active ===2 && 'bg-light-blue'}`} onClick={()=>setActive(2)}>
        <ArticleIcon />
        <span>Projects</span>
      </Link>
      <Link to={"/"} className={`cursor-pointer p-4 w-full text-white flex gap-3 flex-wrap ${active ===3 && 'bg-light-blue'}`} onClick={()=>setActive(3)}>
        <ImportContactsIcon />
        <span>Dictionary</span>
      </Link>
      <Link to={"/"} className={`cursor-pointer p-4 w-full text-white flex gap-3 flex-wrap ${active ===4 && 'bg-light-blue'}`} onClick={()=>setActive(4)}>
        <NotificationsIcon />
        <span>Incidents</span>
      </Link>  
      <Link to={"/"} className={`cursor-pointer p-4 w-full text-white flex gap-3 flex-wrap ${active ===5 && 'bg-light-blue'}`} onClick={()=>setActive(5)}>
        <SettingsIcon />
        <span>Manage</span>
      </Link>
    </div>
  );
};

export default Sidebar;
