import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faTimes,
    faCogs,
    faTable,
    faList,
    faUser
} from "@fortawesome/free-solid-svg-icons";

import Link from 'next/link'


const sidebarItems = [
    {
        name: "Home",
        href: "/",
        icon: faUser,
    },
    {
        name: "About",
        href: "/about",
        icon: faCogs,
    },
    {
        name: "Mails",
        href: "/mails",
        icon: faTable,
    },
    {
        name: "Contact",
        href: "/contact",
        icon: faList,
    },
];

export default function sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleTrigger = () => setIsOpen(!isOpen);

    return (
        <>
            <div className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
                <div className="trigger" onClick={handleTrigger}>
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                </div>

                {sidebarItems.map(({ name, href, icon }) => {
                    return (
                        <div className="sidebar-position" key={name}>
                            <Link className="sidebar--link" href={href}>
                                <FontAwesomeIcon icon={icon} />
                                <span>{name}</span>
                            </Link>
                        </div>
                    );
                })}

            </div>
        </>
    );
}

