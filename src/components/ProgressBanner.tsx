import { CircularProgress } from "./CircularProgress";

interface ProgressBannerProps {
  progressPercent: number;
  courseTitle: string;
  certificateName: string;
  videoSrc: string;
}

function PreviewImage({ src }: { src: string }) {
  return (
    <div className="w-full rounded-8 overflow-hidden" style={{ height: 206 }}>
      <img src={src} alt="Course preview" className="w-full h-full object-cover" />
    </div>
  );
}

export function ProgressBanner({
  progressPercent,
  courseTitle,
  certificateName,
  videoSrc,
}: ProgressBannerProps) {
  return (
    <div className="bg-white border border-grey-100 rounded-16 p-24 flex flex-col md:flex-row md:items-center gap-16 md:gap-24">
      <div className="flex flex-col gap-16 flex-1 min-w-0">
        <CircularProgress percent={progressPercent} />
        <div className="flex flex-col gap-4">
          <p className="cds-subtitle-md text-grey-975">{courseTitle}</p>
          <div className="flex items-center gap-8">
            <p className="cds-body-secondary text-grey-600 flex-1 min-w-0">
              {certificateName}
            </p>
            <button className="flex-shrink-0 text-grey-600 hover:text-grey-975">
              <span className="material-symbols-rounded" style={{ fontSize: 16 }}>
                more_horiz
              </span>
            </button>
          </div>
        </div>

        {/* Mobile: video between text and button */}
        <div className="md:hidden">
          <PreviewImage src={videoSrc} />
        </div>

        <button className="self-start flex items-center justify-center px-16 py-8 bg-blue-700 text-white rounded-8 cds-action-secondary hover:bg-blue-800 transition-colors duration-fast">
          Resume learning
        </button>
      </div>

      {/* Desktop: video on the right */}
      <div className="hidden md:block md:w-[360px] flex-shrink-0">
        <PreviewImage src={videoSrc} />
      </div>
    </div>
  );
}
