interface ICardProps {
  cardName: string;
  cardDescription: string;

  rightText?: string;
}

export const Card = ({
  cardName,
  cardDescription,
  rightText = "",
}: ICardProps) => {
  return (
    <article className="w-full flex flex-col gap-4 max-w-lg min-h-[9rem] p-4 border transition-all duration-300 hover:scale-95 bg-gradient-to-r from-zinc-950 to-zinc-900 border-gray-500 rounded-md">
      <header className="flex justify-between items-center">
        <strong className="font-bold text-md text-gray-200">{cardName}</strong>

        <span className="font-normal text-md text-gray-400">{rightText}</span>
      </header>

      <main>
        <p className="font-normal text-md text-gray-400">{cardDescription}</p>
      </main>
    </article>
  );
};
