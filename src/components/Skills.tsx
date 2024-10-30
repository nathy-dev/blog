import {
  type IconType,
  SiAstro,
  SiCss3,
  SiDocker,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiVite,
  SiWebpack,
  SiTailwindcss,
  SiTypescript,
  SiAmazonwebservices,
  SiOpenjdk,
  SiSpring,
  SiBlender,
  SiAseprite,
  SiAmazongames,
  SiAdobecreativecloud,
  SiExpo,
  SiUnrealengine,
  SiCplusplus,
  SiExpress,
} from "@icons-pack/react-simple-icons";

import { TooltipProvider } from "@/components/ui/tooltip";
import {
  SmartTooltip,
  SmartTooltipContent,
  SmartTooltipTrigger,
  TouchProvider,
} from "./ui/smart-tooltip";

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: "Frontend",
      skills: [
        { skill: "html", icon: SiHtml5 },
        { skill: "css", icon: SiCss3 },
        { skill: "javascript", icon: SiJavascript },
        { skill: "typescript", icon: SiTypescript },
        { skill: "react", icon: SiReact },
        { skill: "tailwind", icon: SiTailwindcss },
        { skill: "webpack", icon: SiWebpack },
        { skill: "astro", icon: SiAstro },
        { skill: "vite", icon: SiVite },
        { skill: "expo", icon: SiExpo },
      ],
    },
    {
      field: "Backend",
      skills: [
        {
          skill: "nodejs",
          icon: SiNodedotjs,
        },
        {
          skill: "java",
          icon: SiOpenjdk,
        },
        {
          skill: "aws",
          icon: SiAmazonwebservices,
        },
        {
          skill: "express.js",
          icon: SiExpress,
        },
        {
          skill: "spring",
          icon: SiSpring,
        },
        {
          skill: "postgresql",
          icon: SiPostgresql,
        },
        {
          skill: "mongodb",
          icon: SiMongodb,
        },
        {
          skill: "docker",
          icon: SiDocker,
        },
      ],
    },
    {
      field: "Games",
      skills: [
        {
          skill: "unreal engine",
          icon: SiUnrealengine,
        },
        {
          skill: "c++",
          icon: SiCplusplus,
        },
        {
          skill: "blender",
          icon: SiBlender,
        },
        {
          skill: "asesprite",
          icon: SiAseprite,
        },
        {
          skill: "amazon gamelift",
          icon: SiAmazongames,
        },
        {
          skill: "adobe creative cloud",
          icon: SiAdobecreativecloud,
        },
      ],
    },
  ];

export const Skills = () => {
  return (
    <TouchProvider>
      <div className="mb-16">
        <h2 className="mb-8 text-xl font-heading sm:text-2xl">Skills</h2>

        {SKILLS.map((item, id) => {
          return (
            <div key={id}>
              <h3 className="mb-4 text-lg font-heading sm:text-xl">
                {item.field}
              </h3>

              <div className="mb-10 flex flex-wrap gap-5">
                {item.skills.map((skill, id) => {
                  return (
                    <TooltipProvider key={id}>
                      <SmartTooltip>
                        <SmartTooltipTrigger asChild>
                          <skill.icon className="h-8 w-8" title="" />
                        </SmartTooltipTrigger>
                        <SmartTooltipContent>{skill.skill}</SmartTooltipContent>
                      </SmartTooltip>
                    </TooltipProvider>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </TouchProvider>
  );
};
