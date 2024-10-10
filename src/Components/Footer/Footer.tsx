import React from 'react'
import FooterList from './FooterList'

function Footer() {

  const quickLinks = {
    title: "QUICK LINKS",
    logoSrc: "/images/logo3.png",
    links: [
      { icon: "/images/2.png", text: "HOME", href: "/" },
      { icon: "/images/2.png", text: "ABOUT US", href: "/about" },
      { icon: "/images/2.png", text: "GALLERY", href: "/gallery" },
      { icon: "/images/2.png", text: "CONTACT US", href: "/contact" },
    ]
  };

  const servicesLinks = {
    title: "SERVICES",
    logoSrc: "/images/logo3.png",
    links: [
      { icon: "/images/2.png", text: "HAIRS", href: "/hairs" },
      { icon: "/images/2.png", text: "BEAUTY", href: "/beauty" },
      { icon: "/images/2.png", text: "SPA", href: "/spa" },
      { icon: "/images/2.png", text: "MASSAGE", href: "/massage" },
    ]
  }

  const contactLinks = {
    title: "CONTACTS",
    logoSrc: "/images/logo3.png",
    links: [
      { icon: "/images/call.png", text: "+4125987645", href: "/" },
      { icon: "/images/msg2.png", text: "barberz.123@info.com", href: "/" },
      { icon: "/images/location2.png", text: "golden street, chinatown san francisco", href: "/" },
    ]
  }

  return (
    <div
      className="h-[800px] md:h-[550px] w-full flex flex-col justify-evenly gap-4 md:gap-8"
      style={{ 
        backgroundImage: 'url("/images/footerBg.png")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      <div className="h-[650px] md:h-[500px] w-full flex flex-col md:flex-row justify-evenly gap-4 md:gap-8">
        
        {/* Logo and subscribe section */}
        <div className="w-full md:w-[300px] h-full flex flex-col justify-center items-center text-center gap-6 p-4 md:p-0">
          <img src="/images/logo0.png" alt="" className="w-[150px] md:w-[200px]" />
          <p className="w-full md:w-[300px]">There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form.</p>
          <input type="text" placeholder="Email*" className="h-[40px] w-full md:w-[300px] rounded" />
          <button className="border-2 bg-yellow-600 rounded-3xl w-[150px] hover:bg-transparent">SUBSCRIBE</button>
        </div>

        {/* Links section (hidden on small screens) */}
        <div className="hidden md:flex gap-6 md:gap-20 mt-10 md:mt-20 p-4 md:p-0">
          <FooterList {...quickLinks} />
          <FooterList {...servicesLinks} />
        </div>

        {/* Contacts and social media section */}
        <div className="flex flex-col items-center w-full md:w-[400px] gap-5 mt-10 md:mt-20 p-4 md:p-0">
          <FooterList {...contactLinks} />
          <div className="flex justify-evenly w-full">
            <img src="/images/fb2.png" alt="Facebook" className="w-[30px]" />
            <img src="/images/twitter2.png" alt="Twitter" className="w-[30px]" />
            <img src="/images/youtube2.png" alt="YouTube" className="w-[30px]" />
            <img src="/images/insta.png" alt="Instagram" className="w-[30px]" />
          </div>
        </div>

      </div>

      {/* Footer bottom text */}
      <div className="w-full h flex justify-center ">
        <p>All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer;
