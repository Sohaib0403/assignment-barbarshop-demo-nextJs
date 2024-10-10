import React from 'react';

interface Link {
  icon: string;
  text: string;
  href: string;
}

interface FooterListProps {
  title: string;
  logoSrc: string;
  links: Link[];
}

const FooterList: React.FC<FooterListProps> = ({ title, logoSrc, links }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-4 md:gap-10 items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-[24px] md:text-[40px]">{title}</h1>
          <img src={logoSrc} alt="Logo" className="w-[100px] md:w-[200px]" />
        </div>

        <ul className="space-y-4 md:space-y-8">
          {links.map((link, index) => (
            <li key={index} className="flex gap-4 md:gap-8 text-[20px] md:text-[30px] items-center">
              <img src={link.icon} alt="Icon" className="h-[20px] md:h-[30px]" />
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FooterList;
