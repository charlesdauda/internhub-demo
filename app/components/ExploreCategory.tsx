import {
  BriefcaseBusiness,
  Code2,
  Megaphone,
  Palette,
} from "lucide-react";

const categories = [
  {
    name: "Software & IT",
    count: "42 internships",
    icon: Code2,
  },
  {
    name: "Business & Finance",
    count: "28 internships",
    icon: BriefcaseBusiness,
  },
  {
    name: "Marketing",
    count: "19 internships",
    icon: Megaphone,
  },
  {
    name: "Design & Creative",
    count: "16 internships",
    icon: Palette,
  }
];

const ExploreCategory = () => {
  return (
    <section className="mt-8">
      {/* Header */}
      <div className="mb-5">
        <h2 className="flex items-center gap-3 text-xl font-bold tracking-tight text-black">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg text-black">
            <BriefcaseBusiness size={18} />
          </span>

          Explore by category
        </h2>

        <p className="mt-1 text-sm font-medium text-gray-500">
          Find opportunities based on your area of interest.
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <button
              key={category.name}
              type="button"
              className="group flex w-52 items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 text-left"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-blue-800 transition group-hover:bg-blue-50">
                <Icon size={20} />
              </span>

              <div>
                <h3 className="text-sm font-bold text-black">
                  {category.name}
                </h3>

                <p className="mt-0.5 text-xs font-medium text-gray-500">
                  {category.count}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default ExploreCategory;