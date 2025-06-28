
type DoomsDayNotifierProps = {
    endTime: string | undefined;
}

const DoomsDayNotifier = ({ endTime }: DoomsDayNotifierProps) => {
    const doomFormat = (isoString: string) => {
        const date = new Date(isoString);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `${month}월 ${day}일 ${hours}시 ${minutes}분`;
    }

    return (
        <div className="w-96 h-14 px-3.5 py-[5px] relative bottom-23
         bg-orange-100 rounded-[20px] shadow-[2px_4px_15px_0px_rgba(0,0,0,0.10)] 
         outline-1 outline-offset-[-1px] outline-orange-100 flex flex-row justify-start items-center gap-2.5">

            <div>
                <img src="/icons/Big_Time_Circle.svg" alt="시계 아이콘" />
            </div>

            <div>
                <div className="justify-start text-stone-500 text-base font-normal font-['Inter'] leading-none"> {doomFormat(endTime || "")} 소멸 예정</div>
                <div className="w-60 justify-start text-red-400 text-[10px] font-normal font-['Roboto'] leading-none tracking-wide">소멸 후에는 개인 아카이브에서 확인할 수 있어요</div>
            </div>

        </div>
    )
}

export default DoomsDayNotifier;