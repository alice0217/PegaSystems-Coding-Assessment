import React, { useState } from "react";
import SearchBar from "../components/searchBar";
import Create from "../components/create";
import "./index.css";
import NavItem from "../components/navItem";
import { HomeIcon, GridIcon, StarFilledIcon, PaperPlaneIcon, PersonIcon, BellIcon, ClockIcon, CheckIcon, CircleIcon } from "@radix-ui/react-icons";

export default function Nav() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleCollapseNav = () => setIsNavCollapsed(false);
    const handleExpandNav = () => setIsNavCollapsed(true);

    return (
        <div className={`nav ${isNavCollapsed ? "" : "nav-expanded"}`} onMouseEnter={handleCollapseNav} onMouseLeave={handleExpandNav}>
            <div className="nav-logo-name">
                <div className="nav-logo">PEGA</div>
                {!isNavCollapsed && <div className="nav-name">Demo</div>}
            </div>
            <SearchBar isNavCollapsed={isNavCollapsed} />
            <Create isNavCollapsed={isNavCollapsed} />

            {/* Wrap the upper nav items in a scrollable container */}
            <div className="nav-top-container">
                <NavItem icon={HomeIcon} name="Home" isNavCollapsed={isNavCollapsed} path="/" />
                <NavItem icon={StarFilledIcon} name="My Dashboard" isNavCollapsed={isNavCollapsed} path="/my-dashboard" />
                <NavItem icon={GridIcon} name="Spaces" isNavCollapsed={isNavCollapsed} path="/spaces" />
                <NavItem icon={PaperPlaneIcon} name="Documents" isNavCollapsed={isNavCollapsed} path="/documents" />
                <NavItem icon={PersonIcon} name="Bugs" isNavCollapsed={isNavCollapsed} path="/bugs" />
                <NavItem icon={GridIcon} name="Epics" isNavCollapsed={isNavCollapsed} path="/epics" />
                <NavItem icon={HomeIcon} name="Goals" isNavCollapsed={isNavCollapsed} path="/goals" />
            </div>

            <div className="nav-bottom-container">
                <NavItem icon={BellIcon} name="Notifications" isNavCollapsed={isNavCollapsed} path="/notifications" />
                <NavItem icon={ClockIcon} name="Recents" isNavCollapsed={isNavCollapsed} path="/recents" />
                <NavItem icon={CheckIcon} name="My Applications" isNavCollapsed={isNavCollapsed} path="/my-applications" />
                <NavItem icon={CircleIcon} name="Cosmo Operator" isNavCollapsed={isNavCollapsed} path="/account" />
            </div>
        </div>
    )
}
