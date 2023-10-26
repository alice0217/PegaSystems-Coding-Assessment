import "./navItem.css";
import { useNavigate } from "react-router-dom";

interface NavItemProps {
    icon: React.ElementType;
    name: string;
    isNavCollapsed: boolean;
    path: string;
}

export default function NavItem(props: NavItemProps) {
    const navigate = useNavigate();

    const Icon = props.icon;
    return (
        <div className="nav-item-container" onClick={() => navigate(props.path)}>
            <div className="nav-item-content">
                <div><Icon className="nav-item-icon" /></div>
                <div className="nav-item-name">{props.name}</div>
            </div>
        </div>
    )
}