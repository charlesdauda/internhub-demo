import { ArrowRight, BriefcaseBusiness } from "lucide-react"

const Recommendation = () => {
    return(
        <section className="m-auto">
            {/* Recommendation Header */}
            <div className="flex mb-5 pb-4 items-center gap-100">
                <div className="ml-10">
                    <h1 className="flex gap-4 font-bold text-black tracking-tight items-center">
                        <span className="h-5 w-5 text-blue-600">
                        <BriefcaseBusiness />
                        </span>
                        Recommendations for you</h1>
                    <p className="mt-1 text-sm font-medium text-gray-600">Opportunities based on your profile and interest</p>
                </div>
                <a href="#" className="inline-flex text-sm text-blue-600 shrink-0 gap-2">View more<span><ArrowRight size={18} /></span></a>
            </div>
        </section>
    )
}
export default Recommendation