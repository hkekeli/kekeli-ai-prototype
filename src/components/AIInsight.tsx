interface AIInsightProps {
  message: string;
}

export function AIInsight({ message }: AIInsightProps) {
  return (
    <div className="flex gap-12 p-24 bg-grey-25 rounded-16">
      <span
        className="material-symbols-rounded text-blue-700 flex-shrink-0"
        style={{ fontSize: 24, fontVariationSettings: "'FILL' 1, 'wght' 400" }}
      >
        auto_awesome
      </span>
      <p className="cds-body-secondary text-grey-975">{message}</p>
    </div>
  );
}
