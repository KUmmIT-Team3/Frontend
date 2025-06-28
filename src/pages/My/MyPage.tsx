import BottomBar from "../../components/BottomBar";
import MyCard from "./MyCard";
import MyCreatedBands from "./MyCreatedBands";
import MyLikedBands from "./MyLikedBands";
import BandsArchive from "./BandsArchive";
import UpperNavBar from "../../components/UpperNavBar";

const MyPage = () => {
  return (
    <div className="w-[412px] h-[917px]">
      <UpperNavBar isCanBack={false} text="마이페이지" isLogo={false} />
      <div className="w-[412px] h-[917px] bg-[#EDD1D8]/20 mx-auto overflow-y-scroll">
        <MyCard />
        <MyCreatedBands />
        <MyLikedBands />
        <BandsArchive />
      </div>
      <BottomBar />
    </div>
  );
};

export default MyPage;
