const studentSteps = [
  { step: "01", title: "Register & build your profile", detail: "Programme, university, interests, CV Id." },
  { step: "02", title: "Get matched", detail: "Your feed fills with relevant roles from day one." },
  { step: "03", title: "Apply and track", detail: "Follow status from pending through to accepted." },
];

const companySteps = [
  { step: "01", title: "Register with your TIN", detail: "Verification runs before you can post." },
  { step: "02", title: "Post opportunities", detail: "Internship or National Service, your call." },
  { step: "03", title: "Manage applicants", detail: "Shortlist, accept, or reject from one dashboard." },
];

function StepColumn({
  label,
  steps,
}: {
  label: string;
  steps: { step: string; title: string; detail: string }[];
}) {
  return (
    <div className="rounded-xl border border-[#E4E7EC] bg-[#F5F6F8] p-6 md:p-8">
      <p className="text-xs font-medium uppercase tracking-widest text-[#0A66C2]">
        {label}
      </p>
      <div className="mt-6 flex flex-col gap-6">
        {steps.map((item) => (
          <div key={item.step} className="flex gap-4">
            <span className="text-sm font-medium text-[#111318]">
              {item.step}
            </span>
            <div>
              <p className="text-sm font-medium text-[#0B0F19]">{item.title}</p>
              <p className="mt-1 text-sm text-[#111318]">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-[#E4E7EC] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="text-xs font-medium uppercase tracking-widest text-[#0A66C2]">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Three steps, whichever side you on.
          </h2>
        </div>

        <div id="for-companies" className="mt-12 grid gap-6 md:grid-cols-2">
          <StepColumn label="For students" steps={studentSteps} />
          <StepColumn label="For companies" steps={companySteps} />
        </div>
      </div>
    </section>
  );
}