type EmotionNameProps = {
    emotion: string;
}

const EmotionName = ({ emotion }: EmotionNameProps) => {
    const colorSet = ['#91ADC6',
        '#97C0C0',
        '#F3A9B0',
        '#FBBD4C',
        '#ED6956'
    ]

    const selectRandColor = () => {
        const randIndex = Math.floor(Math.random() * 5);
        return colorSet[randIndex];
    }

    return (
        <div style={{ backgroundColor: selectRandColor() }} className="flex justify-center items-center w-12 h-7 rounded-[20px] text-white text-xs font-normal font-['SF_Pro'] leading-none">
            {emotion}
        </div>
    )

}

export default EmotionName