interface AnnouncementProps {
  title: string;
  timestamp: string;
}

export const Announcement = ({ title, timestamp }: AnnouncementProps) => {
  return (
    <div className="announcement-item">
      <div>
        <h4 className="font-medium mb-1">{title}</h4>
        <p className="text-sm text-gray-500">{timestamp}</p>
      </div>
      <button className="text-gray-400 hover:text-gray-600">•••</button>
    </div>
  );
};