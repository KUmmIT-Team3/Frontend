import BottomBar from "../../components/BottomBar";
import MyCard from "./MyCard";
import MyCreatedBands from "./MyCreatedBands";
import MyLikedBands from "./MyLikedBands";
import BandsArchive from "./BandsArchive";
import UpperNavBar from "../../components/UpperNavBar";

const MyPage = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[412px] h-[917px] bg-[#F8F3F4] ">
        <UpperNavBar isCanBack={false} text="마이페이지" isLogo={false} />
        <div className=" bg-[#F8F3F4] mx-auto pb-[50px] overflow-y-scroll">
          <MyCard />
          <MyCreatedBands />
          <MyLikedBands />
          <BandsArchive />
        </div>
        <BottomBar />
      </div>
    </div>
  );
};

export default MyPage;
