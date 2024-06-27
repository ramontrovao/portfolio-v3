"use client";

import { motion } from "framer-motion";

interface ICardProps {
  cardName: string;
  cardDescription: string;

  rightText?: string;
  rightTextSize?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  hasHoverAnimation?: boolean;
}

export const Card = ({
  cardName,
  cardDescription,
  rightText = "",
  rightTextSize = "2xl",
  hasHoverAnimation = false,
}: ICardProps) => {
  return (
    <motion.article
      className={`w-full flex flex-col gap-4 min-h-[7.5rem] p-4 border transition-all duration-300 ${
        hasHoverAnimation && "hover:scale-95"
      } bg-gradient-to-r from-zinc-950 to-zinc-900 border-gray-500 rounded-md`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <header className="flex justify-between items-center">
        <strong className="font-bold text-md text-gray-200">{cardName}</strong>

        <span
          className={`font-normal text-${rightTextSize} text-gray-400`}
          dangerouslySetInnerHTML={{ __html: rightText }}
        />
      </header>

      <main>
        <p className="font-normal text-md text-gray-400">{cardDescription}</p>
      </main>
    </motion.article>
  );
};
