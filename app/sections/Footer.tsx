import logo from "@/app/assets/logosaas.png";
import Image from "next/image";
import SocialX from "@/app/assets/social-x.svg";
import SocialLinkedin from "@/app/assets/social-linkedin.svg";
import SocialInsta from "@/app/assets/social-insta.svg";
import SocialPin from "@/app/assets/social-pin.svg";
import SocialYoutube from "@/app/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:h-full before:blur before:w-full
        before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={logo} height={40} alt="SaaS logo"  className="relative"/>
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Carrers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialLinkedin />
          <SocialInsta />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className="mt-6">&Copy; 2024 Your Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
