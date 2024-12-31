import { StatCard } from "@/components/StatCard";
import { EmployeeCard } from "@/components/EmployeeCard";

const Employee = () => {
  return (
    <div className="p-6 pl-72 pt-24 animate-fadeIn">
      <h1 className="text-2xl font-semibold mb-6 dark:text-white transition-colors duration-200">Employee Management</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Total Employees"
          value="216"
          subtitle="12 New this month"
        />
        <StatCard
          title="Departments"
          value="8"
          subtitle="Tech, HR, Sales..."
          color="bg-blue-50 dark:bg-navy-light"
        />
        <StatCard
          title="On Leave"
          value="12"
          subtitle="4 Pending requests"
          color="bg-orange-50 dark:bg-navy-light"
        />
        <StatCard
          title="Active Projects"
          value="32"
          subtitle="8 Completed this month"
          color="bg-green-50 dark:bg-navy-light"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <EmployeeCard
          title="Department Distribution"
          count={216}
          menCount={120}
          womenCount={96}
          growth="+2% Past month"
        />
        <EmployeeCard
          title="Employment Type"
          count={216}
          menCount={180}
          womenCount={36}
          growth="+5% Past month"
        />
      </div>

      <div className="bg-white dark:bg-navy rounded-xl shadow-sm p-6 transition-all duration-200">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">Employee Directory</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="p-4 bg-gray-50 dark:bg-navy-light rounded-lg hover:shadow-md transition-all duration-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-medium">JD</span>
                </div>
                <div>
                  <h3 className="font-medium dark:text-white">John Doe</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</p>
                  <p className="text-xs text-primary">Engineering Department</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Employee;