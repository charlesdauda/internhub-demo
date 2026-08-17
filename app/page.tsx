const Home = () => {
  return (
    <>
      <div className="animate-fade-in-up mb-8 flex flex-col justify-between gap-6 rounded-2xl bg-linear-to-r from-brand-navy to-brand-navy-soft p-7 text-white sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-extrabold sm:text-[26px]">
            Good morning, Charles 
          </h1>
          <p className="mt-1.5 text-[14.5px] font-medium text-white/70">
            Ready to find your next opportunity?
          </p>
        </div>
        <button
          type="button"
          className="w-fit rounded-xl bg-white px-5 py-2.5 text-[13.5px] font-bold text-brand-navy transition hover:bg-white/90"
        >
          Browse internships
        </button>
      </div>
    </>
  );
};

export default Home;
