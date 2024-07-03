"use client";
import { Globe } from "@phosphor-icons/react";
import * as Select from "@radix-ui/react-select";
import brazil from "assets/brazil.svg";
import usa from "assets/usa.svg";
import { usePathname, useRouter } from "navigation";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export const SelectLanguage = () => {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const language = params?.locale?.toString();

  const onValueChange = (value: string) => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: value }
    );
  };

  const languagesAvaiable = [
    {
      value: "en",
      label: "english",
      icon: <Image alt="" src={usa} width={25} height={25} />,
    },
    {
      value: "pt",
      label: "português",
      icon: <Image alt="" src={brazil} width={25} height={25} />,
    },
  ];

  return (
    <Select.Root onValueChange={onValueChange} defaultValue={language}>
      <Select.Trigger className="p-4 outline-0 flex justify-center items-center bg-gray-200 text-gray-900 text-2xl rounded-full transition-all duration-300 hover:opacity-80">
        <Globe />
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="fixed z-50 right-[24.5%] top-[10%] hidden bg-zinc-900 rounded-lg">
          <Select.Viewport className="p-4">
            {languagesAvaiable.map((locale) => (
              <Select.Item
                className="cursor-pointer flex items-center gap-2 w-full h-10 text-md text-gray-100"
                key={locale.value}
                value={locale.value}
              >
                <Select.Icon>{locale.icon}</Select.Icon>

                <Select.ItemText>{locale.label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
