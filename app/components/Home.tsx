"use client";
//import Image from "next/image";

const Home = () => {
  return (
    <section className="animate-fade-in-up my-1 overflow-hidden rounded-2xl text-black">
      <div className="flex min-h-55 -translate-y-2 items-center px-7 py-7 sm:px-9">

        {/* Greeting */}
        <div className="relative z-10 max-w-lg shrink-0">
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-[28px]">
            Good morning, Charles,
          </h1>

          <p className="mt-2 text-[15px] font-medium text-gray-600">
            Ready to find your next opportunity?
          </p>

          <div className="mt-5 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-medium text-black">
              128 internships available for you
            </span>
          </div>
        </div>

          {/* Illustration */}
      { /*<div className="relative ml-14 hidden h-52 w-72 shrink-0 sm:block lg:ml-24 lg:w-80">
       <Image
          src="/undraw.png"
          alt="Student searching for internship opportunities"
          fill
          priority
          sizes="(max-width: 640px) 0px, 320px"
          className="object-contain object-left"
        />
      </div>  */}

      </div>
    </section>
  );
};

export default Home;