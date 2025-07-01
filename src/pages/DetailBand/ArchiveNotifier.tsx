const ArchiveNotifer = () => {
    return (
        <div className="w-[360px] h-20 px-2.5 py-4 mb-6 bg-white rounded-[20px] shadow-[2px_4px_15px_0px_rgba(0,0,0,0.10)] inline-flex flex-col justify-center items-center gap-2.5">
            <div className="inline-flex justify-start items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg flex justify-center items-center gap-2.5">
                    <div data-size="20" className="w-5 h-5 relative overflow-hidden">
                        <img src="/icons/Archive-blue.svg" alt="보관함" />
                    </div>
                </div>
                <div className="w-72 px-2 py-2.5 rounded-lg inline-flex flex-col justify-center items-start gap-2.5">
                    <div className="justify-start text-cyan-800 text-sm font-medium font-['Roboto'] leading-tight tracking-tight">개인 아카이브에 저정되었습니다</div>
                    <div className="justify-start text-cyan-700 text-[10px] font-normal font-['Roboto'] leading-none tracking-wide">프로필 페이지에서 언제든지 확인할 수 있어요</div>
                </div>
            </div>
        </div>
    )
}

export default ArchiveNotifer