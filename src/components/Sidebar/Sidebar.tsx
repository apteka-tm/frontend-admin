import React, {useState} from "react";
import s from "./sidebar.module.css"
import {Link} from "react-router-dom";
import {
    AiOutlineHeart,
    AiOutlineUser,
    FiFolder,
    FiMessageSquare, FiShoppingCart,
    HiMenuAlt3,
    MdOutlineDashboard, RiSettings4Line,
    TbReportAnalytics
} from "react-icons/all";

function Sidebar(): JSX.Element {
    const menus = [
        {name: "Dashboard", link: "/", icon: MdOutlineDashboard},
        {name: "User", link: "/", icon: AiOutlineUser},
        {name: "Messages", link: "/", icon: FiMessageSquare},
        {name: "Analytics", link: "/", icon: TbReportAnalytics, margin: true},
        {name: "File Manager", link: "/", icon: FiFolder},
        {name: "Cart", link: "/", icon: FiShoppingCart},
        {name: "Saved", link: "/", icon: AiOutlineHeart, margin: true},
        {name: "Settings", link: "/", icon: RiSettings4Line}
    ];
    const [open, setOpen] = useState(true)

    return (
        <div className={`min-h-screen bg-gray-800 text-gray-100 px-3.5
        ${open ? 'w-72' : 'w-16'} duration-500`}>
            <div className={s.dashboard}>
                <HiMenuAlt3 size={26} className="cursor-pointer"
                            onClick={()=>setOpen(!open)}
                />
            </div>
            <nav>
                {
                    menus.map((menu, i) => (
                        <Link to={menu.link} key={i} className={`flex items-center text-sm gap-3.5 
                            font-medium p-2 hover:bg-gray-700 rounded-md 
                            ${menu.margin && "mt-5"}`}>
                            <div>
                                {React.createElement(menu.icon, {size: "20"})}
                            </div>
                            <h2 className={`whitespace-pre duration-500
                            ${!open && 'opacity-0 translate-x-1 overflow-hidden'}`}>{menu.name}</h2>
                        </Link>
                    ))
                }
            </nav>
        </div>
    );
}

export default Sidebar;