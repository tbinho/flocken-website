import Image from 'next/image';

interface PhoneMockupProps {
  screenshot: string;
  badge?: string;
  alt?: string;
}

export function PhoneMockup({ screenshot, badge, alt = 'Flocken app screenshot' }: PhoneMockupProps) {
  return (
    <div className="relative inline-block">
      {/* Phone frame */}
      <div className="relative bg-flocken-brown rounded-[3rem] p-3 shadow-elevated mx-auto" style={{ width: '320px' }}>
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-flocken-brown rounded-b-3xl z-10"></div>
        
        {/* Screen */}
        <div className="relative bg-white rounded-[2.5rem] overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
          <Image
            src={screenshot}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="320px"
          />
        </div>
        
        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-flocken-gray/30 rounded-full"></div>
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

