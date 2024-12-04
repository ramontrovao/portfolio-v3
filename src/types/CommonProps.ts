import { TLocale } from "./TLocale";

export interface CommonProps {
  params: Promise<{
    locale: TLocale;
  }>;
}
