import { StatCard } from "@/components/StatCard";
import { EmployeeCard } from "@/components/EmployeeCard";
import { Announcement } from "@/components/Announcement";
import { ScheduleItem } from "@/components/ScheduleItem";

const Index = () => {
  return (
    <div className="p-6 pl-72 pt-24 animate-fadeIn">
      <h1 className="text-2xl font-semibold mb-6 dark:text-white transition-colors duration-200">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Available Position"
          value="24"
          subtitle="4 Urgently needed"
        />
        <StatCard
          title="Job Open"
          value="10"
          subtitle="4 Active hiring"
          color="bg-blue-50 dark:bg-navy-light"
        />
        <StatCard
          title="New Employees"
          value="24"
          subtitle="4 Department"
          color="bg-purple-50 dark:bg-navy-light"
        />
        <div className="bg-secondary dark:bg-navy p-6 rounded-xl text-white transition-colors duration-200 hover:shadow-lg">
          <h3 className="font-medium mb-4">Recently Activity</h3>
          <p className="text-sm text-gray-300 mb-2">10:40 AM, Fri 10 Sept 2021</p>
          <h4 className="font-medium mb-2">You Posted a New Job</h4>
          <p className="text-sm text-gray-300 mb-4">
            Kindly check the requirements and terms of work and make sure everything is right.
          </p>
          <div className="flex items-center justify-between">
            <p className="text-sm">Today you makes 12 Activity</p>
            <button className="px-4 py-2 bg-white/10 rounded-lg text-sm hover:bg-white/20 transition-colors duration-200">
              See All Activity
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <EmployeeCard
          title="Total Employees"
          count={216}
          menCount={120}
          womenCount={96}
          growth="+2% Past month"
        />
        <EmployeeCard
          title="Talent Request"
          count={16}
          menCount={6}
          womenCount={10}
          growth="+5% Past month"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-navy rounded-xl shadow-sm transition-colors duration-200">
          <div className="p-6 border-b border-gray-100 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold dark:text-white">Announcement</h3>
              <button className="text-sm text-gray-500 dark:text-gray-400">Today, 13 Sep 2021</button>
            </div>
          </div>
          <div className="divide-y divide-gray-100 dark:divide-gray-800">
            <Announcement
              title="Outing schedule for every departement"
              timestamp="5 Minutes ago"
            />
            <Announcement
              title="Meeting HR Department"
              timestamp="Yesterday, 12:30 PM"
            />
            <Announcement
              title="IT Department need two more talents for UX/UI Designer position"
              timestamp="Yesterday, 09:15 AM"
            />
          </div>
          <div className="p-4 text-center">
            <button className="text-primary hover:text-primary-dark transition-colors duration-200">
              See All Announcement
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Upcoming Schedule</h3>
              <button className="text-sm text-gray-500">Today, 13 Sep 2021</button>
            </div>
          </div>
          <div className="divide-y divide-gray-100">
            <ScheduleItem
              title="Review candidate applications"
              time="11:30 AM"
              priority="Priority"
            />
            <ScheduleItem
              title="Interview with candidates"
              time="10:30 AM"
            />
            <ScheduleItem
              title="Short meeting with product designer from IT Department"
              time="09:15 AM"
            />
          </div>
          <div className="p-4 text-center">
            <button className="text-primary hover:text-primary-dark">
              Create a New Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;