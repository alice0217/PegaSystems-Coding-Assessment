import { PlusIcon, ChevronRightIcon, ChevronDownIcon, Cross2Icon } from "@radix-ui/react-icons";
import { useState, useEffect } from "react";
import "./create.css";
import { useNavigate } from "react-router-dom";

export default function Create({ isNavCollapsed }: { isNavCollapsed: boolean }) {
    const [isDropDownVisible, setIsDropDownVisible] = useState(false);
    const navigate = useNavigate();

    const toggleDropDown = () => setIsDropDownVisible(!isDropDownVisible);

    useEffect(() => {
        if (isNavCollapsed) {
            setIsDropDownVisible(false);
        }
    }, [isNavCollapsed]);

    return (
        <div className="create-container" onClick={toggleDropDown}>
            <div className={`dropdown-top ${isDropDownVisible && !isNavCollapsed && "dropdown-top-open"}`}
                tabIndex={0}>
                <div>
                    {isDropDownVisible ?
                        <Cross2Icon className="cross-icon" />
                        :
                        <PlusIcon className="plus-icon" />}
                </div>
                <div className="create-name">Create</div>
                {!isDropDownVisible ?
                    <ChevronRightIcon className="chevron" />
                    :
                    <ChevronDownIcon className="chevron" />}
            </div>
            <div className={`create-dropdown ${isDropDownVisible && 'open'}`}>
                <ul className="dropdown-block">
                    <li className="dropdown-item" onClick={() => navigate('/create-bug')}>Bug</li>
                    <li className="dropdown-item" onClick={() => navigate('/create-epic')}>Epic</li>
                    <li className="dropdown-item" onClick={() => navigate('/create-user-story')}>User Story</li>
                </ul>
            </div>
        </div>
    )
}
