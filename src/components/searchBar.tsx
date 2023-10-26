import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import "./searchBar.css";

export default function SearchBar({ isNavCollapsed }: { isNavCollapsed: boolean }) {
    return (
        <div className="search-bar-container">
            <MagnifyingGlassIcon className="magnifying-glass"/>
            <input
                type="text"
                placeholder="Search"
                className={`search-bar ${isNavCollapsed ? "" : "search-bar-expanded"}`}/>
        </div>
    );
}
