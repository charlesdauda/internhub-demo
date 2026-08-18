import ExploreCategory from "./components/ExploreCategory";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Recommendation from "./components/Recommendation";
import DashboardAside from "./components/DashboardAside";

const Page = () => {
  return (
    <main>
      <div className="flex items-start gap-5">
        <div className="min-w-0 flex-1">
          <Home />
          <Recommendation />
          <ExploreCategory />
        </div>

        <aside className="hidden w-72 shrink-0 xl:block">
          <DashboardAside />
        </aside>
      </div>

      <Footer />
    </main>
  );
};

export default Page;