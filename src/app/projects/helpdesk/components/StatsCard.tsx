interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: string;
  changeType?: 'increase' | 'decrease';
}

export const StatsCard = ({ title, value, icon, change, changeType }: StatsCardProps) => {
  const changeColor = changeType === 'increase' ? 'text-green-400' : 'text-red-400';
  return (
    <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-gray-400">{title}</p>
        <div className="text-gray-500">{icon}</div>
      </div>
      <h3 className="text-3xl font-bold text-white">{value}</h3>
      {change && (
        <p className={`text-sm ${changeColor}`}>
          {change} vs last month
        </p>
      )}
    </div>
  );
};