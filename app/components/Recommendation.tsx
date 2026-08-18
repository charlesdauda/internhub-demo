import Image from "next/image"
import { ArrowRight, Bookmark, BriefcaseBusiness, Dot, MapPin } from "lucide-react"

const Recommendation = () => {
    return(
        <section className="">
            {/* Recommendation Header */}
            <div className="flex mb-5 pb-4 items-center gap-100">
                <div>
                    <h1 className="flex gap-4 font-bold text-black tracking-tight items-center">
                        <span className="h-5 w-5 text-black">
                        <BriefcaseBusiness />
                        </span>
                        Recommendations for you</h1>
                    <p className="mt-1 text-sm font-medium text-gray-600">Opportunities based on your profile and interest</p>
                </div>
                <a href="#" className="inline-flex text-sm text-blue-800 shrink-0 gap-2">View more<span><ArrowRight size={18} /></span></a>
            </div>
           {/* Internship Cards */}
               <div className="flex flex-wrap gap-3">
                    {/*Card 1*/}
                <div className="relative flex h-60 w-70 flex-col rounded-lg border border-gray-300 bg-white p-4">
                    <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center bg-white">
                        <Image
                        src="/telecel.png"
                        alt="Telecel"
                        width={40}
                        height={40}
                        className="object-contain rounded-sm"
                        />
                    </div>
             <button
                 type="button"
                 className="rounded-lg p-2 text-black"
                 aria-label="Save internship"
                    >
                <Bookmark className="h-5 w-5" />
                    </button>
                </div>
                    <div className="mt-4">
                    <h3 className="text-base font-bold text-black">
                        Software Developer Intern
                 </h3>
                    <p className="mt-1 text-sm font-medium text-black/50">
                        Telecel Ghana
                    </p>
                </div>
            <div className="mt-4 flex items-center gap-3 text-xs font-medium text-black/50">
                <span className="inline-flex gap-2"><MapPin size={15} />Accra, Ghana</span>
                    <span className="inline-flex gap-1"><Dot size={15}/>Hybrid</span>
                      </div>
                    <div className="mt-3 flex items-center gap-2">
                    <span className="rounded-full px-3 py-1 text-xs font-semibold text-emerald-800">
                        Paid
                    </span>
                <span className="rounded-full px-3 py-1 text-xs font-semibold text-gray-600">
                        3 months
                    </span>
                      </div>
                    <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-3">
                    <span className="text-xs font-medium text-black/40">
                        Posted 2 days ago
                    </span>
              <a href="button"
                    className="text-sm font-semibold text-brand-navy transition hover:opacity-70">
                     View details 
                     </a>
                      </div>
                  </div>
                  {/* Card 2*/}
                   <div className="relative flex h-60 w-70 flex-col rounded-lg border border-gray-300 bg-white p-4">
                    <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center bg-white">
                        <Image
                        src="/newmtn.png"
                        alt="MTN"
                        width={40}
                        height={40}
                        className="object-contain rounded-sm"
                        />
                    </div>
             <button
                 type="button"
                 className="rounded-lg p-2 text-black"
                 aria-label="Save internship"
                    >
                <Bookmark className="h-5 w-5" />
                    </button>
                </div>
                    <div className="mt-4">
                    <h3 className="text-base font-bold text-black">
                        Data Analyst Intern
                 </h3>
                    <p className="mt-1 text-sm font-medium text-black/50">
                        MTN Ghana
                    </p>
                </div>
            <div className="mt-4 flex items-center gap-3 text-xs font-medium text-black/50">
                <span className="inline-flex gap-2"><MapPin size={15} />Accra, Ghana</span>
                    <span className="inline-flex gap-1"><Dot size={15}/>Remote</span>
                      </div>
                    <div className="mt-3 flex items-center gap-2">
                    <span className="rounded-full px-3 py-1 text-xs font-semibold text-emerald-800">
                        Paid
                    </span>
                <span className="rounded-full px-3 py-1 text-xs font-semibold text-gray-600">
                        3 months
                    </span>
                      </div>
                    <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-3">
                    <span className="text-xs font-medium text-black/40">
                        Posted 2 days ago
                    </span>
              <a href="button"
                    className="text-sm font-semibold text-brand-navy transition hover:opacity-70">
                     View details 
                     </a>
                      </div>
                  </div>
                   <div className="relative flex h-60 w-70 flex-col rounded-lg border border-gray-300 bg-white p-4">
                    <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center bg-white">
                        <Image
                        src="/nerasol.png"
                        alt="Telecel"
                        width={40}
                        height={40}
                        className="object-contain rounded-sm"
                        />
                    </div>
             <button
                 type="button"
                 className="rounded-lg p-2 text-black"
                 aria-label="Save internship"
                    >
                <Bookmark className="h-5 w-5" />
                    </button>
                </div>
                    <div className="mt-4">
                    <h3 className="text-base font-bold text-black">
                        Software Engineering Intern
                 </h3>
                    <p className="mt-1 text-sm font-medium text-black/50">
                        Nerasol Ghana
                    </p>
                </div>
            <div className="mt-4 flex items-center gap-3 text-xs font-medium text-black/50">
                <span className="inline-flex gap-2"><MapPin size={15} />Accra, Ghana</span>
                    <span className="inline-flex gap-1"><Dot size={15}/>Hybrid</span>
                      </div>
                    <div className="mt-3 flex items-center gap-2">
                    <span className="rounded-full px-3 py-1 text-xs font-semibold text-emerald-800">
                        Not Paid
                    </span>
                <span className="rounded-ful px-3 py-1 text-xs font-semibold text-gray-600">
                        1 month
                    </span>
                      </div>
                    <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-3">
                    <span className="text-xs font-medium text-black/40">
                        Posted 1 month ago
                    </span>
              <a href="button"
                    className="text-sm font-semibold text-brand-navy transition hover:opacity-70">
                     View details 
                     </a>
                      </div>
                  </div>
                 </div>
        </section>
    )
}
export default Recommendation