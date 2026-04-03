interface SkillProgress {
  name: string;
  completed: number;
  total: number;
}

interface SkillProgressGridProps {
  skills: SkillProgress[];
}

function SkillBar({ skill }: { skill: SkillProgress }) {
  const percent = (skill.completed / skill.total) * 100;
  const isComplete = skill.completed >= skill.total;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="cds-body-secondary text-grey-975">{skill.name}</span>
        <div className="flex items-center gap-4">
          <span className="cds-body-secondary text-grey-600">
            {skill.completed}/{skill.total}
          </span>
          <span
            className={`material-symbols-rounded ${isComplete ? "text-green-700" : "text-grey-400"}`}
            style={{
              fontSize: 16,
              fontVariationSettings: `'FILL' ${isComplete ? 1 : 0}, 'wght' 400`,
            }}
          >
            {isComplete ? "check_circle" : "star"}
          </span>
        </div>
      </div>
      <div className="h-8 w-full bg-grey-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-slow ${
            isComplete ? "bg-blue-700" : "bg-blue-700"
          }`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

export function SkillProgressGrid({ skills }: SkillProgressGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      {skills.map((skill, i) => (
        <SkillBar key={`${skill.name}-${i}`} skill={skill} />
      ))}
    </div>
  );
}
