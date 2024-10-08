import { Progress } from "./ui/progress"

const Skill = ({ label, value }) => {
    return (
        <div>
            <h3 className="font-[600] text-[24px] leading-[36px] tracking-[0.03em]">{label}</h3>
            <div className="mt-[18px] relative">
                <Progress value={value} />
                <div
                    className="absolute top-1/2 transform -translate-y-1/2 rounded-full h-[32px] w-[32px] bg-primary border-[3px] border-p1 bg-s6"
                    style={{ left: `${Math.min(value - 3 || 0, 100)}%` }}
                />
            </div>
        </div>
    )
}

export default Skill