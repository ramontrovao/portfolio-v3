import { useState } from "react";

export const useArrayPagination = <TElement,>(
  elementsPerPage: number,
  array: TElement[]
) => {
  const firstPageElements = array.slice(0, elementsPerPage);
  const [arrayUpdated, setArrayUpdated] =
    useState<TElement[]>(firstPageElements);

  const willRenderLastPage = array.length - elementsPerPage <= 0;
  const lastPageElements = array.slice(arrayUpdated.length, array.length);
  const currentPageElements = array.slice(
    arrayUpdated.length,
    arrayUpdated.length + elementsPerPage
  );
  const isOnLastPage = array.length === arrayUpdated.length;

  const nextPage = () => {
    if (array.length === arrayUpdated.length) return;

    const nextPageElements: TElement[] = willRenderLastPage
      ? lastPageElements
      : currentPageElements;

    return setArrayUpdated((prev) => [...prev, ...nextPageElements]);
  };

  return { arrayUpdated, nextPage, isOnLastPage };
};
