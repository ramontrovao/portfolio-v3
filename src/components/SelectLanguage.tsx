"use client";
import { Globe } from "@phosphor-icons/react";
import * as Select from "@radix-ui/react-select";
import { useParams, useRouter } from "next/navigation";
import { locales } from "constants/locale";

export const SelectLanguage = () => {
  const router = useRouter();
  const params = useParams();
  const language =
    localStorage.getItem("lang") ?? params?.locale.toString() ?? "en";

  const onValueChange = (value: string) => {
    localStorage.setItem("lang", value);
    router.push(value);
  };

  return (
    <Select.Root onValueChange={onValueChange} defaultValue={language}>
      <Select.Trigger className="p-4 outline-0 flex justify-center items-center bg-gray-200 text-gray-900 text-2xl rounded-full transition-all duration-300 hover:opacity-80">
        <Globe />
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="fixed z-50 right-[24.5%] top-[10%] hidden bg-white rounded-lg">
          <Select.Viewport className="p-4">
            {locales.map((locale) => (
              <Select.Item
                className="flex justify-center items-center w-full h-10"
                key={locale}
                value={locale}
              >
                <Select.ItemIndicator className="text-md text-white">
                  {locale}
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
