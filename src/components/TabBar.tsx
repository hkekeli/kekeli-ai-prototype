interface TabBarProps {
  tabs: string[];
  activeTab: number;
}

export function TabBar({ tabs, activeTab }: TabBarProps) {
  return (
    <div className="flex gap-4 border-b border-grey-100 overflow-x-auto">
      {tabs.map((tab, i) => (
        <button
          key={tab}
          className={`px-16 py-12 cds-action-secondary transition-colors duration-fast whitespace-nowrap flex-shrink-0 ${
            i === activeTab
              ? "text-blue-700 border-b-2 border-blue-700 -mb-px"
              : "text-grey-600 hover:text-grey-975 hover:bg-grey-25"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
