import Image from "next/image";
import Logo from "@components/Logo";

export default function TheTeam() {
  return (
    <>
    <Logo />
    <div className="p-8 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold mb-8 text-center">Meet the Team</h1>
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <Image
            src="/profile_picture_daniel.jpg"
            alt="Daniel Herrero"
            width={150}
            height={150}
            className="rounded-full object-cover w-40 h-40"
          />
          <div>
            <h2 className="text-2xl font-bold">Daniel Herrero</h2>
            <p className="text-lg">Co-founder and Developer</p>
            <div className="flex gap-4 mt-2">
              <a href="https://github.com/HerreroRocher" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/github_icon.svg"
                  alt="GitHub"
                  width={24}
                  height={24}
                />
              </a>
              <a href="https://linkedin.com/in/herrero-daniel" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/linkedIn_icon.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <Image
            src="/profile_picture_placeholder.webp"
            alt="Leo Makhnosvkiy"
            width={150}
            height={150}
            className="rounded-full object-cover w-40 h-40"
          />
          <div>
            <h2 className="text-2xl font-bold">Leo Makhnovskiy</h2>
            <p className="text-lg">Co-founder and Developer</p>
            <div className="flex gap-4 mt-2">
              <a href="https://github.com/leomakhnovskiy" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/github_icon.svg"
                  alt="GitHub"
                  width={24}
                  height={24}
                />
              </a>
              <a href="https://www.linkedin.com/in/leo-makhnovskiy-7318aa34b/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/linkedIn_icon.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}