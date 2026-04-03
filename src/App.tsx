import { NavBar } from "./components/NavBar";
import { ProgressBanner } from "./components/ProgressBanner";
import { TodaysGoals } from "./components/TodaysGoals";
import { WeeklyActivity } from "./components/WeeklyActivity";
import { TabBar } from "./components/TabBar";
import { SkillProgressGrid } from "./components/SkillProgressGrid";
import { AIInsight } from "./components/AIInsight";
import { RecentCertificates } from "./components/RecentCertificates";
import { LearningCalendar } from "./components/LearningCalendar";
import { DailyStats } from "./components/DailyStats";
import { TodayForYou } from "./components/TodayForYou";
import type { TodayItem } from "./components/TodayForYou";
import { ASSETS } from "./data/mockData";

const TABS = ["Overview", "Skills", "In progress", "Saved", "Certificates"];

const SKILLS = [
  { name: "Data Storytelling", completed: 13, total: 13 },
  { name: "Literacy & Integrity", completed: 1, total: 10 },
  { name: "Social Media Strategy", completed: 4, total: 9 },
  { name: "Email Marketing", completed: 3, total: 8 },
  { name: "Social Media Strategy", completed: 4, total: 9 },
  { name: "Email Marketing", completed: 3, total: 8 },
  { name: "Social Media Strategy", completed: 4, total: 9 },
];

const GOALS = [
  { text: "Complete any 5 learning items · 0/5", completed: false },
  { text: "Complete 1 practice item", completed: false },
  { text: "Use Coach", completed: false },
];

const WEEKLY_DAYS = [
  { label: "We", completed: true },
  { label: "Th", completed: true },
  { label: "Fr", completed: true },
  { label: "Sa", completed: true },
  { label: "Sa", completed: false },
  { label: "Su", completed: false },
  { label: "Mo", completed: false },
];

const CERTIFICATES = [
  {
    id: "c1",
    title: "Gen AI Foundations Learning Path",
    providerLogo: ASSETS.courseraLogo,
    providerName: "Coursera",
    actionLabel: "Add to LinkedIn",
    actionSecondaryLabel: "View badge",
  },
  {
    id: "c2",
    title: "Google Data Analyst Professional Certificate",
    providerLogo: ASSETS.googleLogo,
    providerName: "Google",
    actionLabel: "Add to LinkedIn",
    actionSecondaryLabel: "View certificate",
  },
];

function buildCalendarDays() {
  const days = [];
  const activityDays = [3, 11];
  const goalDays = [4, 5, 6, 17, 18, 19, 20];
  for (let d = 1; d <= 31; d++) {
    days.push({
      day: d,
      hasActivity: activityDays.includes(d),
      goalComplete: goalDays.includes(d),
      isToday: d === 23,
    });
  }
  return days;
}

const STATS = [
  { label: "Minutes learned", value: "50" },
  { label: "Items completed", value: "20" },
  { label: "Highest grade", value: "85.5%" },
];

const TODAY_ITEMS: TodayItem[] = [
  {
    type: "recommended",
    label: "Next step in your certificate",
    title: "Visualize Data in Looker",
    detail: "Google Data Analytics Certificate \u2014 Module 4 of 8",
  },
  {
    type: "skill",
    label: "You\u2019re close \u2014 4 of 9 done",
    title: "Social Media Strategy",
    detail: "5 items remaining",
  },
  {
    type: "unfinished",
    label: "You stopped here 3 days ago",
    title: "Crafting a Brand Voice for Social Channels",
    detail: "Email Marketing \u2014 Lesson 3",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      {/* Hero section — light-blue background */}
      <section style={{ backgroundColor: "#f0f6ff" }}>
        <div className="px-16 md:max-w-[1113px] md:mx-auto md:px-0 py-32">
          {/* Greeting */}
          <p className="cds-subtitle-md text-grey-975">
            Hi Alex, here's your progress in
          </p>

          {/* Path name + badge */}
          <div className="flex items-center gap-12 mt-8 mb-16">
            <h1 className="cds-title-sm text-grey-975">Digital Marketing</h1>
            <div
              className="flex items-center gap-6 h-32 px-12 rounded-32 flex-shrink-0"
              style={{ backgroundColor: "#2d3440" }}
            >
              <img src={ASSETS.rocketIcon} alt="" className="size-16 flex-shrink-0" />
              <span className="cds-action-secondary text-white whitespace-nowrap">
                +12% job demand
              </span>
            </div>
          </div>

          {/* Main content: hero card + sidebar */}
          <div className="flex flex-col md:flex-row gap-24">
            {/* Main progress card */}
            <div className="flex-1 min-w-0">
              <ProgressBanner
                progressPercent={46}
                courseTitle="Share Data Through the Art of Visualization"
                certificateName="Google Data Analytics & E-commerce Professional Certificate"
                videoSrc={ASSETS.coursePreview}
              />
            </div>

            {/* Sidebar: goals + activity */}
            <div className="flex flex-col gap-16 w-full md:w-[321px] flex-shrink-0">
              <TodaysGoals goals={GOALS} />
              <WeeklyActivity
                streakWeeks={1}
                message="Way to go! You've exceeded your learning target by x days this week."
                days={WEEKLY_DAYS}
                itemsCompleted={3}
                minutesLearned={10}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Today for you */}
      <section>
        <div className="px-16 md:max-w-[1113px] md:mx-auto md:px-0 py-32">
          <TodayForYou items={TODAY_ITEMS} />
        </div>
      </section>

      {/* Content section — white background */}
      <section>
        <div className="px-16 md:max-w-[1113px] md:mx-auto md:px-0 py-32">
          <TabBar tabs={TABS} activeTab={0} />

          <div className="flex flex-col md:flex-row gap-32 mt-24">
            {/* Left column */}
            <div className="flex flex-col gap-32 flex-1 min-w-0">
              <SkillProgressGrid skills={SKILLS} />

              <AIInsight message="Great pace! You're averaging 52 minutes per session this month. At this rate, you'll complete your specialization 2 weeks ahead of your February 15th goal." />

              <RecentCertificates certificates={CERTIFICATES} />
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-24 w-full md:w-[426px] flex-shrink-0">
              {/* Mobile: combined card */}
              <div className="md:hidden border border-grey-100 rounded-16">
                <div className="p-24 border-b border-grey-100">
                  <LearningCalendar
                    month="January"
                    year={2026}
                    days={buildCalendarDays()}
                    startDayOffset={4}
                  />
                </div>
                <div className="p-24">
                  <DailyStats dateLabel="January 23 stats" stats={STATS} />
                </div>
              </div>

              {/* Desktop: separate cards */}
              <div className="hidden md:block border border-grey-100 rounded-16 p-24">
                <LearningCalendar
                  month="January"
                  year={2026}
                  days={buildCalendarDays()}
                  startDayOffset={4}
                />
              </div>
              <div className="hidden md:block border border-grey-100 rounded-16 p-24">
                <DailyStats dateLabel="January 23 stats" stats={STATS} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
