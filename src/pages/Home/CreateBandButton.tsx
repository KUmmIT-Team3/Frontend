import { useNavigate } from "react-router-dom";

const CreateBandButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/create");
  };
  return (
    <div
      className="flex justify-center items-center
        w-90 h-12 mt-[27px] mb-10 text-4
        bg-gradient-to-r from-[#C77EB5] to-[#F9906F] hover:from-[#F9906F] hover:to-[#C77EB5] text-white  rounded-[10px] shadow-lg"
      onClick={handleClick}
    >
      <img src="/icons/add-on.svg" /> &nbsp; &nbsp;감정 밴드 만들기
    </div>
  );
};
export default CreateBandButton;
