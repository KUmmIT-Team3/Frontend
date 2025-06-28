import { useLocation } from "react-router-dom";
import BottomBarItem from "./BottomBarItem";
import { useEffect, useState } from "react";

const BottomBar = () => {

    const [selectedMenu, setSelectedMenu] = useState('home')
    const location = useLocation();

    useEffect(() => {
        const selected = location.pathname;
        if (selected === '/home' || selected === '/create' || selected === '/my') {
            setSelectedMenu(selected);
        }

    }, [location.pathname]);

    return (
        <div className="flex justify-between
        max-w-[372px] h-10 pl-5 pr-5">

            <BottomBarItem
                imageOnSrc="/icons/Music-on.svg"
                imageOffSrc="/icons/Music-off.svg"
                isSelected={selectedMenu === '/home'} text="home" />

            <BottomBarItem
                imageOnSrc="/icons/add-on.svg"
                imageOffSrc="/icons/add-off.svg"
                isSelected={selectedMenu === '/create'} text="create" />

            <BottomBarItem
                imageOnSrc="/icons/person-on.svg"
                imageOffSrc="/icons/person-off.svg"
                isSelected={selectedMenu === '/my'} text="my" />

        </div>
    )
}

export default BottomBar;
