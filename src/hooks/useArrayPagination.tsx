import { useEffect, useState } from "react";

export const useArrayPagination = (
  elementsPerPage: number,
  array: unknown[]
) => {
  const [arrayUpdated, setArrayUpdated] = useState<unknown[]>([]);

  const nextPage = () => {
    let elementsToAdd: unknown[] = [];

    if (array.length - elementsPerPage <= 0) {
      elementsToAdd = array.slice(arrayUpdated.length - 1, array.length - 1);
    } else {
      elementsToAdd = array.slice(
        array.length - elementsPerPage,
        array.length - 1
      );
    }

    return setArrayUpdated((prev) => [...prev, elementsToAdd]);
  };

  return { arrayUpdated, nextPage };
};
