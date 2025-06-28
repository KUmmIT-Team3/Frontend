import { useNavigate } from "react-router-dom";

type BottomBarItemProps = {
    imageOnSrc: string;
    imageOffSrc: string;
    isSelected: boolean;
    text: string;
}

const BottomBarItem = ({ imageOnSrc, imageOffSrc, isSelected, text }: BottomBarItemProps) => {

    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/${text}`);
    }
    return (
        <>
            {isSelected ?
                <div className="flex flex-col w-25 h-7 justify-center items-center 
                bg-[#C77EB5] rounded-[10px]"
                    onClick={handleClick}>
                    <img className="w-6 h-6" src={imageOnSrc} />
                </div>

                :
                <div className="flex flex-col w-25 h-7 justify-center items-center"
                    onClick={handleClick}>
                    <img className="w-6 h-6" src={imageOffSrc} />
                </div>
            }
        </>
    )
}

export default BottomBarItem;