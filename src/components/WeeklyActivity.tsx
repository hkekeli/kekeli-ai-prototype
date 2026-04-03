interface DayStatus {
  label: string;
  completed: boolean;
}

interface WeeklyActivityProps {
  streakWeeks: number;
  message: string;
  days: DayStatus[];
  itemsCompleted: number;
  minutesLearned: number;
}

export function WeeklyActivity({
  streakWeeks,
  message,
  days,
  itemsCompleted,
  minutesLearned,
}: WeeklyActivityProps) {
  return (
    <div className="bg-white border border-grey-100 rounded-16 p-12 pb-16">
      <div className="flex items-center gap-8 mb-8">
        <span className="cds-action-secondary text-grey-975">Weekly activity</span>
        <span className="cds-body-tertiary text-blue-700 bg-blue-25 px-8 py-2 rounded-32">
          {streakWeeks} week streak
        </span>
      </div>

      <p className="cds-body-secondary text-grey-600 mb-12">{message}</p>

      <div className="flex gap-8 mb-8">
        {days.map((day, i) => (
          <div
            key={i}
            className={`flex items-center justify-center size-32 rounded-full cds-body-secondary ${
              day.completed
                ? "bg-blue-700 text-white"
                : "border border-grey-400 text-grey-600"
            }`}
          >
            {day.completed ? (
              <span className="material-symbols-rounded" style={{ fontSize: 16 }}>
                check
              </span>
            ) : (
              day.label
            )}
          </div>
        ))}
      </div>

      <p className="cds-body-tertiary text-grey-600">
        {itemsCompleted} items completed · {minutesLearned} minutes learned
      </p>
    </div>
  );
}
