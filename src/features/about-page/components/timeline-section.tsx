import { Card } from "@/components/ui/card";

const milestones = [
  {
    year: "2020",
    title: "Foundation",
    description: "SCIT UIN Suka was founded by passionate CS students",
  },
  {
    year: "2021",
    title: "First Major Project",
    description: "Launched our first campus-wide digital solution",
  },
  {
    year: "2022",
    title: "Community Growth",
    description: "Reached 100+ active members and expanded programs",
  },
  {
    year: "2023",
    title: "Industry Recognition",
    description: "Won national competition and established industry partnerships",
  },
  {
    year: "2024",
    title: "Innovation Hub",
    description: "Became the leading tech community in UIN Suka",
  },
];

export const TimelineSection = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Journey</h2>
          <p className="text-lg text-slate-600">Perjalanan SCIT UIN Suka dari awal terbentuk hingga menjadi komunitas teknologi terdepan di kampus</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-blue-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-2xl font-bold text-blue-600">{milestone.year}</span>
                        <h3 className="text-xl font-semibold text-slate-900">{milestone.title}</h3>
                      </div>
                      <p className="text-slate-600">{milestone.description}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
