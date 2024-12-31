import { StatCard } from "@/components/StatCard";
import { Calendar } from "@/components/ui/calendar";

const Schedule = () => {
  return (
    <div className="p-6 pl-72 pt-24 animate-fadeIn">
      <h1 className="text-2xl font-semibold mb-6 dark:text-white transition-colors duration-200">Schedule</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Today's Meetings"
          value="8"
          subtitle="2 High Priority"
        />
        <StatCard
          title="Interviews"
          value="5"
          subtitle="3 Technical rounds"
          color="bg-blue-50 dark:bg-navy-light"
        />
        <StatCard
          title="Team Events"
          value="2"
          subtitle="Team lunch & Training"
          color="bg-purple-50 dark:bg-navy-light"
        />
        <StatCard
          title="Pending Tasks"
          value="12"
          subtitle="4 Due today"
          color="bg-red-50 dark:bg-navy-light"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-navy rounded-xl shadow-sm p-6 transition-all duration-200">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Calendar</h2>
          <Calendar
            mode="single"
            className="rounded-md border"
          />
        </div>

        <div className="bg-white dark:bg-navy rounded-xl shadow-sm p-6 transition-all duration-200">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Today's Schedule</h2>
          <div className="space-y-4">
            {[
              { time: "09:00 AM", title: "Team Stand-up", type: "Meeting" },
              { time: "11:00 AM", title: "Interview: Senior Developer", type: "Interview" },
              { time: "02:00 PM", title: "Project Review", type: "Meeting" },
              { time: "04:00 PM", title: "Team Training Session", type: "Training" }
            ].map((event, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-navy-light rounded-lg">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{event.time}</p>
                  <h3 className="font-medium dark:text-white">{event.title}</h3>
                  <span className="text-xs text-primary bg-primary-light px-2 py-1 rounded-full">
                    {event.type}
                  </span>
                </div>
                <button className="text-gray-500 hover:text-primary transition-colors duration-200">
                  •••
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;