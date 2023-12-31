import { Fragment } from "react";
import SettingSideNavBar from "@/pages/Dashboard/Setting/SettingSideNav";
export const metadata = {
  title: "AI Chat Bot",
  description: "Generated by create next app",
};

export default function SettingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <section>
        <div className="flex items-center justify-between mobileView:mt-10">
          <h1 className="text-black dark:text-white font-['Poppins'] text-3xl xs:text-3xl xss:text-xl">
            Setting
          </h1>
        </div>
        <div className="flex lg:flex md:flex-wrap xs:flex-wrap">
          <SettingSideNavBar />
          <div className="w-[calc(100%-325px)] lg:w-[calc(100%-325px)] md:w-full xs:w-full">
            {children}
          </div>
        </div>
      </section>
    </Fragment>
  );
}
