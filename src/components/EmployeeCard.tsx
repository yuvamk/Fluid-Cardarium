interface EmployeeCardProps {
  title: string;
  count: number;
  menCount: number;
  womenCount: number;
  growth: string;
}

export const EmployeeCard = ({ title, count, menCount, womenCount, growth }: EmployeeCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-xl font-semibold mb-6">{title}</h3>
      <div className="flex items-end justify-between mb-4">
        <p className="text-4xl font-bold">{count}</p>
        <div className="flex items-center gap-1 text-success-DEFAULT">
          <span className="text-sm">↑</span>
          <span className="text-sm">{growth}</span>
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-sm text-gray-600">{menCount} Men</p>
        <p className="text-sm text-gray-600">{womenCount} Women</p>
      </div>
    </div>
  );
};