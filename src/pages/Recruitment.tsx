import { StatCard } from "@/components/StatCard";

const Recruitment = () => {
  return (
    <div className="p-6 pl-72 pt-24 animate-fadeIn">
      <h1 className="text-2xl font-semibold mb-6 dark:text-white transition-colors duration-200">Recruitment</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Total Candidates"
          value="845"
          subtitle="120 New this month"
        />
        <StatCard
          title="Shortlisted"
          value="235"
          subtitle="45 Pending review"
          color="bg-blue-50 dark:bg-navy-light"
        />
        <StatCard
          title="Rejected"
          value="192"
          subtitle="32 This week"
          color="bg-red-50 dark:bg-navy-light"
        />
        <StatCard
          title="Interviews"
          value="67"
          subtitle="15 Scheduled today"
          color="bg-green-50 dark:bg-navy-light"
        />
      </div>

      <div className="bg-white dark:bg-navy rounded-xl shadow-sm p-6 transition-all duration-200">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">Recent Applications</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-navy-light rounded-lg hover:bg-gray-100 dark:hover:bg-navy-dark transition-colors duration-200">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-medium">JD</span>
                </div>
                <div>
                  <h3 className="font-medium dark:text-white">John Doe</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">UI/UX Designer</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-primary-light text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-200">
                Review
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recruitment;