interface GoalItem {
  text: string;
  completed: boolean;
}

interface TodaysGoalsProps {
  goals: GoalItem[];
}

export function TodaysGoals({ goals }: TodaysGoalsProps) {
  return (
    <div className="bg-white border border-grey-100 rounded-16 p-12 pb-16">
      <div className="flex items-center gap-8 mb-12">
        <span className="cds-action-secondary text-grey-975">Today's goals</span>
        <span className="cds-body-tertiary text-blue-700 bg-blue-25 px-8 py-2 rounded-32">
          Personalized
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {goals.map((goal, i) => (
          <div key={i} className="flex items-start gap-8">
            <span
              className="material-symbols-rounded text-yellow-700 flex-shrink-0"
              style={{ fontSize: 20, fontVariationSettings: "'FILL' 1, 'wght' 400" }}
            >
              {goal.completed ? "check_circle" : "star"}
            </span>
            <span className="cds-body-secondary text-grey-975">{goal.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
