import Image from 'next/image';

interface PhoneMockupProps {
  screenshot: string;
  badge?: string;
  alt?: string;
}

export function PhoneMockup({ screenshot, badge, alt = 'Flocken app screenshot' }: PhoneMockupProps) {
  return (
    <div className="relative inline-block">
      {/* Screenshot med inbyggd iPhone mockup */}
      <div className="relative mx-auto" style={{ width: '320px' }}>
        <Image
          src={screenshot}
          alt={alt}
          width={320}
          height={693}
          className="w-full h-auto"
        />
      </div>
      
      {/* Optional badge */}
      {badge && (
        <div className="absolute -top-4 -right-4 bg-flocken-olive text-white px-4 py-2 rounded-full text-sm font-semibold shadow-card z-20">
          {badge}
        </div>
      )}
    </div>
  );
}

