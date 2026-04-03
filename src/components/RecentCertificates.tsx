interface Certificate {
  id: string;
  title: string;
  providerLogo: string;
  providerName: string;
  actionLabel: string;
  actionSecondaryLabel: string;
}

interface RecentCertificatesProps {
  certificates: Certificate[];
}

export function RecentCertificates({ certificates }: RecentCertificatesProps) {
  return (
    <div className="flex flex-col gap-12">
      <h3 className="cds-subtitle-md text-grey-975">Recent certificates</h3>
      <div className="flex flex-col">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="flex items-start gap-16 py-12 border-b border-grey-100 last:border-b-0"
          >
            <div className="flex-shrink-0 size-48 rounded-8 overflow-hidden border border-grey-100 flex items-center justify-center bg-white p-4">
              <img
                src={cert.providerLogo}
                alt={cert.providerName}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-4 flex-1 min-w-0">
              <p className="cds-action-secondary text-grey-975">{cert.title}</p>
              <div className="flex items-center gap-12">
                <button className="cds-body-secondary text-blue-700 hover:underline">
                  {cert.actionLabel}
                </button>
                <button className="cds-body-secondary text-blue-700 hover:underline">
                  {cert.actionSecondaryLabel}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
