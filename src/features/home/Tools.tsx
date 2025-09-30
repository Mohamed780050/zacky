import { SidebarLinksData } from "@/data/static";
import Tool from "./Tool";
import Link from "next/link";

function Tools({
  isINProModal,
  isChecked,
}: {
  isINProModal?: boolean;
  isChecked?: boolean;
}) {
  return (
    <ul className={`${isINProModal ? "" : "px-4 md:px-20 lg:px-32"} space-y-4`}>
      {SidebarLinksData.map((link, index) => {
        if (link.bgColor === undefined) return null;
        return (
          <li key={index}>
            {isChecked ? (
              <>
                {
                  <Tool
                    bgColor={link.bgColor}
                    icon={link.icon}
                    label={link.label}
                    isChecked={isChecked}
                  />
                }
              </>
            ) : (
              <>
                {link.isComingSoon ? (
                  <Tool
                    bgColor={link.bgColor}
                    icon={link.icon}
                    label={link.label}
                    isComingSoon
                    isChecked={isChecked}
                  />
                ) : (
                  <>
                    <Link href={link.href}>
                      <Tool
                        bgColor={link.bgColor}
                        icon={link.icon}
                        label={link.label}
                        isComingSoon={false}
                        isChecked={isChecked}
                      />
                    </Link>
                  </>
                )}
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
}
export default Tools;
