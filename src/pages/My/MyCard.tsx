import { useEffect } from "react";
import { useUserSummaryStore } from "../../stores/store";

const MyCard = () => {
  const { userSummary, fetchUserSummary } = useUserSummaryStore();

  useEffect(() => {
    fetchUserSummary();
  }, []);

  console.log("userSummary", userSummary); // 이 줄 추가!

  return (
    <div className="mt-[33px] ml-[23px] mb-[30px] w-[365px] h-[160px] bg-gradient-to-r from-[#C77EB5] to-[#F9906F] rounded-[10px]">
      <div className="relative p-0">
        <div className="absolute flex mb-[33px] top-[23px] left-[24px]">
          <div className="pr-[10px]">
            <div className="w-10 h-10 px-3 py-2 bg-zinc-300/20 rounded-[20px] inline-flex flex-col justify-center items-center gap-2.5">
              <div className="justify-start text-white text-base font-normal font-['Roboto'] leading-normal tracking-wide">
                <span className=" text-white ">
                  {" "}
                  {userSummary?.name?.[0] ?? ""}{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute w-[100px] h-[24px] mb-0">
              <span className="text-white font-normal w-[46px] h-[24px] text-lg">
                {userSummary?.name ?? ""}
              </span>
            </div>
            <div className="absolute w-[200px] h-[15px] bottom-0">
              <span className="text-white w-[120px] h-[15px] text-[10px]">
                {userSummary
                  ? `${new Date(userSummary.signUpDate).getFullYear()}년 ${new Date(userSummary.signUpDate).getMonth() + 1
                  }월 ${new Date(
                    userSummary.signUpDate
                  ).getDate()}일부터 함께`
                  : ""}
              </span>
            </div>
          </div>
        </div>
        <div className="relative flex justify-evenly top-[98px] left-[24px] w-[315px] h-[39px]">
          <div className="w-[42px] h-[39px]">
            <span className="flex justify-center text-white">
              {userSummary?.bandCreateCount ?? "-"}
            </span>
            <span className="flex justify-center text-[10px] text-white">
              만든 밴드
            </span>
          </div>
          <div className="w-[51px] h-[39px]">
            <span className="flex justify-center text-white">
              {userSummary?.bandJoinCount ?? "-"}
            </span>
            <span className="flex justify-center text-[10px] text-white">
              참여한 밴드
            </span>
          </div>
          <div className="w-[42px] h-[39px]]">
            <span className="flex justify-center text-white">
              {userSummary?.likeCount ?? "-"}
            </span>
            <span className="flex justify-center text-[10px] text-white">
              받은 공감
            </span>
          </div>
          <div className="w-[42px] h-[39px]">
            <span className="flex justify-center text-white">
              {userSummary?.songAddCount ?? "-"}
            </span>
            <span className="flex justify-center text-[10px] text-white">
              추가한 곡
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
