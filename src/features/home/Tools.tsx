import { SidebarLinksData } from "@/data/static";
import Tool from "./Tool";
import Link from "next/link";

function Tools() {
  return (
    <ul className="space-y-4 px-4 md:px-20 lg:px-32">
      {SidebarLinksData.map((link, index) => {
        if (link.bgColor === undefined) return null;
        return (
          <li key={index}>
            {link.isComingSoon ? (
              <Tool
                bgColor={link.bgColor}
                icon={link.icon}
                label={link.label}
                isComingSoon
              />
            ) : (
              <Link href={link.href}>
                <Tool
                  bgColor={link.bgColor}
                  icon={link.icon}
                  label={link.label}
                  isComingSoon={false}
                />
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
export default Tools;
