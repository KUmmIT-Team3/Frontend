import { useNavigate } from "react-router-dom";

type UpperNavBarProps = {
    isCanBack: boolean;
    text: string;
}

const UpperNavBar = ({ isCanBack, text }: UpperNavBarProps) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(-1);
    }
    return (
        <div className="flex flex-row justify-between items-center
        w-[412px] h-16 bg-[#ffffff] box-border">
            {isCanBack ? <div className="absolute"
                onClick={handleClick}>
                <img src="icons/button_back.svg" />
            </div> : <div><img src="icons/small_logo.svg" alt="로고" /></div>}
            <div>
                {text}
            </div>
        </div>
    )
}

export default UpperNavBar;