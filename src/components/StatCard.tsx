interface StatCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  color?: string;
}

export const StatCard = ({ title, value, subtitle, color = "bg-primary-light" }: StatCardProps) => {
  return (
    <div className={`stat-card ${color}`}>
      <h3 className="text-gray-600 font-medium mb-4">{title}</h3>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-3xl font-bold text-secondary mb-1">{value}</p>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};