import React from 'react';

const companies = [
  {
    name: "Faateh Group",
    // UPDATE THIS LINK: The domain faateh.com didn't have an icon. Paste your SVG or PNG URL here.
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd1Kwm9MvgGXbT1LYzRCiuStfkTIWKM1ZKKA&s"
  },
  {
    name: "UC Berkeley",
    logo: "https://collegeexpertmn.com/images/logo-ucberkeley.png"
  },
  {
    name: "Deloitte",
    logo: "https://www.google.com/s2/favicons?domain=deloitte.com&sz=128"
  },
  {
    name: "NUS Singapore",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWcTuDZUBLuOFVsZ-uz0jFGJrElCQWcVxGhg&s"
  },
  {
    name: "ZAK Venture",
    logo: "https://unlistedzone.com/storage/company-logo/535/zak_venture_ltd-logo-1743507202.png"
  },
  {
    name: "Humari Pahchan",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQH-pLwh-uFs4w/company-logo_200_200/company-logo_200_200/0/1686563326380/hamari_pahchan_ngo_logo?e=2147483647&v=beta&t=i2Dq4p7UP_Zkn7z4730ObzRZPorY82wZTUU654mN1i0"
  },
  {
    name: "ALSAY Gastech",
    // UPDATE THIS LINK:
    logo: "https://s3.ap-south-1.amazonaws.com/assets.ynos.in/startup-logos/YNOS409569.jpg"
  },
  {
    name: "GeeksforGeeks",
    logo: "https://repository-images.githubusercontent.com/389729275/371ba38b-8a03-4bff-916c-c3fa5396ceda"
  },
  {
    name: "INAmigos Foundation",
    // UPDATE THIS LINK:
    logo: "https://inamigosfoundation.org.in/public/storage/settings/174421468011.jpg"
  }
];

export const LogoTicker = () => {
  return (
    <div className="w-full py-12 md:py-16 border-y border-white/5 bg-black/60 overflow-hidden flex flex-col relative items-center">
      <h3 className="text-white/60 text-xl md:text-2xl font-display tracking-widest uppercase mb-8 z-20">
        Companies I have worked with
      </h3>

      <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-dark-bg to-transparent z-10" />
      <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-dark-bg to-transparent z-10" />

      <div className="flex w-full overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
        <div className="flex animate-marquee whitespace-nowrap items-center min-w-max pr-8">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={`block1-${i}`}>
              {companies.map((company, idx) => (
                <div key={`c1-${i}-${idx}`} className="flex items-center group/logo hover:-translate-y-1 transition-transform duration-300 px-4 md:px-8">
                  {company.logo && (
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="w-6 h-6 md:w-8 md:h-8 rounded-sm opacity-50 group-hover/logo:opacity-100 transition-opacity mr-3 md:mr-4"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.onerror = null; // Prevent infinite loop if somehow it fails again
                      }}
                    />
                  )}
                  <span className="text-xl md:text-2xl font-black bg-clip-text text-transparent bg-linear-to-r from-white via-brand-200 to-white opacity-90 group-hover/logo:opacity-100 group-hover/logo:from-brand-300 group-hover/logo:to-brand-500 transition-all duration-300 tracking-widest uppercase py-2">
                    {company.name}
                  </span>
                  <span className="text-white/20 text-xs md:text-sm ml-6 md:ml-10">•</span>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
        <div className="flex animate-marquee whitespace-nowrap items-center min-w-max pr-8" aria-hidden="true">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={`block2-${i}`}>
              {companies.map((company, idx) => (
                <div key={`c2-${i}-${idx}`} className="flex items-center group/logo hover:-translate-y-1 transition-transform duration-300 px-4 md:px-8">
                  {company.logo && (
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="w-6 h-6 md:w-8 md:h-8 rounded-sm opacity-50 group-hover/logo:opacity-100 transition-opacity mr-3 md:mr-4"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.onerror = null;
                      }}
                    />
                  )}
                  <span className="text-xl md:text-2xl font-black bg-clip-text text-transparent bg-linear-to-r from-white via-brand-200 to-white opacity-90 group-hover/logo:opacity-100 group-hover/logo:from-brand-300 group-hover/logo:to-brand-500 transition-all duration-300 tracking-widest uppercase py-2">
                    {company.name}
                  </span>
                  <span className="text-white/20 text-xs md:text-sm ml-6 md:ml-10">•</span>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
