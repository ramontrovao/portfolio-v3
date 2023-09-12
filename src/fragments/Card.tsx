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
    <article className="w-full flex flex-col gap-4 max-w-lg min-h-[8.5rem] p-4 border border-gray-500 rounded-md">
      <header>
        <strong className="font-bold text-md text-gray-200">{cardName}</strong>

        <span className="font-normal text-md text-gray-400">{rightText}</span>
      </header>

      <main className="font-normal text-md text-gray-400">
        <p>{cardDescription}</p>
      </main>
    </article>
  );
};
