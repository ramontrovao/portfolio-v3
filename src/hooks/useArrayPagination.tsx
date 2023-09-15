import { useState } from "react";

export const useArrayPagination = (
  elementsPerPage: number,
  array: unknown[]
) => {
  const [arrayUpdated, setArrayUpdated] = useState<unknown[]>(
    array.slice(0, elementsPerPage)
  );

  const nextPage = () => {
    let nextPageElements: unknown[] = [];

    if (array.length === arrayUpdated.length) {
      return;
    }

    if (array.length - elementsPerPage <= 0) {
      const lastArrayElements = array.slice(arrayUpdated.length, array.length);

      nextPageElements = lastArrayElements;
    } else {
      nextPageElements = array.slice(
        arrayUpdated.length,
        arrayUpdated.length + elementsPerPage
      );
    }

    return setArrayUpdated((prev) => [...prev, ...nextPageElements]);
  };

  return { arrayUpdated, nextPage };
};
