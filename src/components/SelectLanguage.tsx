"use client";
import * as Select from "@radix-ui/react-select";
import { Globe } from "@phosphor-icons/react";
import { RadixSelectViewportMotion } from "components/RadixSelectViewportMotion";
import { usePathname, useRouter } from "navigation";
import Image from "next/image";
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
    router.refresh();
  };

  const languagesAvaiable = [
    {
      value: "en",
      label: "english",
      icon: (
        <Image
          alt=""
          aria-hidden
          src="/images/usa.svg"
          width={25}
          height={25}
        />
      ),
    },
    {
      value: "pt",
      label: "português",
      icon: (
        <Image
          alt=""
          aria-hidden
          src="/images/brazil.svg"
          width={25}
          height={25}
        />
      ),
    },
  ];

  return (
    <Select.Root onValueChange={onValueChange} defaultValue={language}>
      <div className="flex flex-col">
        <Select.Trigger className="p-4 outline-0 flex justify-center items-center bg-gray-200 text-gray-900 text-2xl rounded-full transition-all duration-300 hover:opacity-80">
          <Globe />
        </Select.Trigger>

        <Select.Content className="mt-16 rounded-md bg-zinc-900 p-4 flex flex-col gap-2">
          <RadixSelectViewportMotion
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            {languagesAvaiable.map((locale) => (
              <Select.Item
                className={`border-[1px] p-2 rounded-md cursor-pointer flex items-center gap-2 w-full h-10 hover:outline-none text-md 
                ${
                  locale.value === language
                    ? "border-white"
                    : "border-transparent"
                }
                ${
                  locale.value === language ? "text-gray-100" : "text-gray-300"
                }`}
                key={locale.value}
                value={locale.value}
              >
                <Select.Icon>{locale.icon}</Select.Icon>

                <Select.ItemText>{locale.label}</Select.ItemText>
              </Select.Item>
            ))}
          </RadixSelectViewportMotion>
        </Select.Content>
      </div>
    </Select.Root>
  );
};
