interface Stat {
  label: string;
  value: string;
}

interface DailyStatsProps {
  dateLabel: string;
  stats: Stat[];
}

export function DailyStats({ dateLabel, stats }: DailyStatsProps) {
  return (
    <div className="flex flex-col gap-12">
      <span className="cds-action-secondary text-grey-975">{dateLabel}</span>
      <div className="grid grid-cols-2 gap-y-12 gap-x-16">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-2">
            <span className="cds-body-secondary text-grey-600">{stat.label}</span>
            <span className="cds-subtitle-md text-grey-975">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
