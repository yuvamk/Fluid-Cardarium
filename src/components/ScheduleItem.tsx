interface ScheduleItemProps {
  title: string;
  time: string;
  priority?: string;
}

export const ScheduleItem = ({ title, time, priority }: ScheduleItemProps) => {
  return (
    <div className="schedule-item">
      <div>
        <h4 className="font-medium mb-1">{title}</h4>
        <p className="text-sm text-gray-500">Today - {time}</p>
      </div>
      {priority && (
        <span className="px-2 py-1 text-xs font-medium bg-primary-light text-primary rounded">
          {priority}
        </span>
      )}
    </div>
  );
};