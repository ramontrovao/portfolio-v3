import { useState } from "react";

export const useArrayPagination = <TElement,>(
  elementsPerPage: number,
  array: TElement[]
) => {
  const [arrayUpdated, setArrayUpdated] = useState<TElement[]>(
    array.slice(0, elementsPerPage)
  );

  const isOnLastPage = array.length === arrayUpdated.length;

  const nextPage = () => {
    let nextPageElements: TElement[] = [];

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

  return { arrayUpdated, nextPage, isOnLastPage };
};
