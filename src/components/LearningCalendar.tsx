interface CalendarDay {
  day: number;
  hasActivity: boolean;
  goalComplete: boolean;
  isToday: boolean;
}

interface LearningCalendarProps {
  month: string;
  year: number;
  days: CalendarDay[];
  startDayOffset: number;
}

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export function LearningCalendar({ month, year, days, startDayOffset }: LearningCalendarProps) {
  const cells: (CalendarDay | null)[] = [];
  for (let i = 0; i < startDayOffset; i++) cells.push(null);
  for (const d of days) cells.push(d);

  const rows: (CalendarDay | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) {
    rows.push(cells.slice(i, i + 7));
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <span className="cds-action-secondary text-grey-975">
          {month} {year}
        </span>
        <div className="flex items-center gap-16">
          <button className="flex items-center justify-center size-24 text-grey-600 hover:text-grey-975">
            <span className="material-symbols-rounded" style={{ fontSize: 20 }}>
              chevron_left
            </span>
          </button>
          <button className="flex items-center justify-center size-24 text-grey-600 hover:text-grey-975">
            <span className="material-symbols-rounded" style={{ fontSize: 20 }}>
              chevron_right
            </span>
          </button>
        </div>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr>
            {WEEKDAYS.map((d) => (
              <th key={d} className="cds-body-tertiary text-grey-600 py-4 text-center w-[14.28%]">
                {d}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td key={ci} className="text-center py-2">
                  {cell ? (
                    <div className="relative inline-flex flex-col items-center">
                      <span
                        className={`inline-flex items-center justify-center size-28 cds-body-secondary ${
                          cell.isToday
                            ? "rounded-full border-2 border-blue-700 text-blue-700"
                            : cell.goalComplete
                              ? "text-blue-700"
                              : "text-grey-975"
                        }`}
                      >
                        {cell.day}
                      </span>
                      {cell.hasActivity && !cell.goalComplete && (
                        <span className="absolute -bottom-1 w-4 h-4 rounded-full bg-blue-700" />
                      )}
                      {cell.goalComplete && (
                        <span className="absolute -bottom-1 w-16 h-2 rounded-full bg-blue-700" />
                      )}
                    </div>
                  ) : null}
                </td>
              ))}
              {row.length < 7 &&
                Array.from({ length: 7 - row.length }).map((_, i) => (
                  <td key={`empty-${i}`} />
                ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center gap-16 mt-4">
        <div className="flex items-center gap-4">
          <span className="w-4 h-4 rounded-full bg-blue-700" />
          <span className="cds-body-tertiary text-grey-600">1+ items completed</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="w-16 h-2 rounded-full bg-blue-700" />
          <span className="cds-body-tertiary text-grey-600">All daily goals completed</span>
        </div>
      </div>
    </div>
  );
}
