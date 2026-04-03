export interface TodayItem {
  type: "recommended" | "skill" | "unfinished";
  label: string;
  title: string;
  detail: string;
}

interface TodayForYouProps {
  items: TodayItem[];
}

const ICON_CONFIG = {
  recommended: {
    icon: "task_alt",
    bg: "bg-blue-25",
    text: "text-blue-700",
  },
  skill: {
    icon: "trending_up",
    bg: "bg-green-25",
    text: "text-green-700",
  },
  unfinished: {
    icon: "history",
    bg: "bg-yellow-25",
    text: "text-yellow-700",
  },
} as const;

export function TodayForYou({ items }: TodayForYouProps) {
  return (
    <div className="flex flex-col gap-16">
      <h2 className="cds-subtitle-lg text-grey-975">Today for you</h2>

      <div className="border border-grey-100 rounded-16 p-24">
        <div className="flex flex-col">
          {items.map((item, i) => {
            const config = ICON_CONFIG[item.type];
            return (
              <div
                key={item.type}
                className={`flex items-center gap-16 py-16 ${
                  i < items.length - 1 ? "border-b border-grey-100" : ""
                } ${i === 0 ? "pt-0" : ""} ${i === items.length - 1 ? "pb-0" : ""}`}
              >
                <div
                  className={`flex-shrink-0 flex items-center justify-center size-40 rounded-8 ${config.bg}`}
                >
                  <span
                    className={`material-symbols-rounded ${config.text}`}
                    style={{ fontSize: 20 }}
                  >
                    {config.icon}
                  </span>
                </div>

                <div className="flex flex-col gap-2 flex-1 min-w-0">
                  <span className="cds-body-secondary text-grey-600">{item.label}</span>
                  <span className="cds-subtitle-sm text-grey-975">{item.title}</span>
                  <span className="cds-body-tertiary text-grey-600">{item.detail}</span>
                </div>

                <span
                  className="material-symbols-rounded text-grey-400 flex-shrink-0"
                  style={{ fontSize: 20 }}
                >
                  chevron_right
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
