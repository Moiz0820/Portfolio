import * as React from "react";
import { PiCaretDownDuotone as ChevronDown } from "react-icons/pi";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  // Adding custom props so it's dynamic for the Timeline component!
  title?: string;
  subtitle?: string;
  company?: string;
  location?: string;
  date?: string;
  isEven?: boolean;
  onDetailsClick?: () => void;
  icon?: React.ElementType;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, title, subtitle, company, location, date, isEven, onDetailsClick, icon: Icon, ...props }, ref) => {
    const hoverRotationClass = isEven === false
      ? "md:group-hover:[transform:rotate3d(-1,1,0,15deg)]"
      : "md:group-hover:[transform:rotate3d(1,1,0,15deg)]";

    return (
      <div
        ref={ref}
        className={`group h-[320px] md:h-[400px] w-full max-w-full md:max-w-[400px] [perspective:1000px] ${className}`}
        {...props}
      >
        <div className={`relative h-full rounded-[30px] md:rounded-[50px] bg-gradient-to-br from-zinc-900 to-black shadow-2xl transition-all duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[box-shadow:rgba(0,0,0,0.3)_30px_50px_25px_-40px,rgba(0,0,0,0.1)_0px_25px_30px_0px] ${hoverRotationClass}`}>
          <div className="absolute inset-2 rounded-[25px] md:rounded-[45px] border-b border-l border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm [transform-style:preserve-3d] [transform:translate3d(0,0,25px)]"></div>
          
          <div className="absolute inset-0 [transform:translate3d(0,0,26px)]">
            {/* Custom timeline content */}
            <div className="px-5 md:px-8 pt-6 md:pt-8 pb-16 md:pb-20 flex flex-col h-full">
              {date && (
                <span className="text-[#f59e0b] text-xs font-semibold tracking-widest uppercase block mb-3">
                  {date}
                </span>
              )}
              <span className="block text-xl md:text-2xl font-black text-white leading-tight">
                {title || 'Monochrome'}
              </span>
              {(company || location) && (
                <div className="mt-2 border-b border-white/10 pb-4 mb-4">
                  {company && <h4 className="text-sm md:text-base text-white/80 font-medium">{company}</h4>}
                  {location && <span className="text-[10px] md:text-xs text-[#f59e0b]/80 uppercase tracking-wider">{location}</span>}
                </div>
              )}
              <span className="mt-2 block text-xs md:text-[14px] text-zinc-400 font-light leading-relaxed line-clamp-4">
                {subtitle || 'Create, share, and use beautiful custom elements made with CSS.'}
              </span>
            </div>
          </div>

          <div className="absolute bottom-4 md:bottom-5 left-5 md:left-8 right-5 md:right-8 flex items-center justify-between [transform-style:preserve-3d] [transform:translate3d(0,0,26px)]">
            <div className="flex gap-2.5 [transform-style:preserve-3d]">
              {Icon && (
                <button
                  className="group/social grid h-[35px] w-[35px] place-content-center rounded-full border-none bg-[#f59e0b] shadow-[rgba(0,0,0,0.5)_0px_7px_5px_-5px] transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:[box-shadow:rgba(245,158,11,0.4)_-5px_20px_10px_0px] group-hover:[transform:translate3d(0,0,60px)]"
                >
                  <Icon className="h-5 w-5 text-black" />
                </button>
              )}
            </div>
            <div 
              className="flex w-2/5 cursor-pointer items-center justify-end transition-all duration-200 ease-in-out hover:[transform:translate3d(0,0,10px)]"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (onDetailsClick) onDetailsClick();
              }}
            >
              <button className="border-none bg-none text-xs font-bold text-white cursor-pointer">
                Details
              </button>
              <ChevronDown className="h-4 w-4 stroke-white ml-1" strokeWidth={3} />
            </div>
          </div>
          
          <div className="absolute top-0 right-0 [transform-style:preserve-3d] pointer-events-none opacity-40">
            {[
              { size: "150px", pos: "8px", z: "20px", delay: "0s" },
              { size: "120px", pos: "10px", z: "40px", delay: "0.2s" },
              { size: "90px", pos: "17px", z: "60px", delay: "0.4s" },
            ].map((circle, index) => (
              <div
                key={index}
                className="absolute aspect-square rounded-full bg-white/5 shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] transition-all duration-500 ease-in-out"
                style={{
                  width: circle.size,
                  top: circle.pos,
                  right: circle.pos,
                  transform: `translate3d(0, 0, ${circle.z})`,
                  transitionDelay: circle.delay,
                }}
              ></div>
            ))}
          </div>
          
        </div>
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export default GlassCard;
