import React from 'react';

const FooterSec = () => {
  interface FooterSubItem {
    text: string;
    link: string;
  }

  interface FooterItem {
    title: string;
    subItems: FooterSubItem[];
  }

  const footerItems: FooterItem[] = [
    {
      title: "Quick Links",
      subItems: [
        { text: "Experience", link: "/experience" },
        { text: "Trypho Fishing", link: "/trypho-fishing" },
        { text: "Gallery", link: "/gallery" },
        { text: "Contact", link: "/contact" },
      ],
    },
    {
      title: "Resources",
      subItems: [
        { text: "Documentation", link: "/docs" },
        { text: "Blog", link: "/blog" },
        { text: "Tutorials", link: "/tutorials" },
        { text: "Support", link: "/support" },
      ],
    },
    {
      title: "Company",
      subItems: [
        { text: "About Us", link: "/about" },
        { text: "Careers", link: "/careers" },
        { text: "Press", link: "/press" },
        { text: "Terms of Service", link: "/terms" },
      ],
    },
  ];

  return (
    <footer className="bg-[#fff8ea] w-full px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">
        {/* Logo / Info */}
        <div className="flex-1 md:max-w-xs text-center md:text-left">
          <h6 className="text-lg font-semibold tracking-tight">
            Alaska Fin Chasers
          </h6>
          <p className="mt-4 leading-7 text-sm">
            Professional guided fishing trips on Alaska&apos;s world-famous Kenai River. Creating unforgettable fishing memories since 2003.
          </p>
        </div>

        {/* Footer links */}
        <div className="flex-1 flex flex-wrap justify-center md:justify-end gap-8">
          {footerItems.map((item, index) => (
            <div key={index} className="min-w-[120px]">
              <h6 className="text-lg font-semibold tracking-tight text-center md:text-left">
                {item.title}
              </h6>
              <ul className="mt-2 space-y-2 text-center md:text-left">
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <a
                      href={subItem.link}
                      className="text-sm text-muted-foreground hover:underline"
                    >
                      {subItem.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterSec;
