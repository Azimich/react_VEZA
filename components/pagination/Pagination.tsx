import React from "react";
import { usePagination } from "store/hooks/usePagination";
import { DOTS } from "store/hooks/usePagination";
import Styles from "./Pagination.module.scss";
import { IPagination } from "./Pagination.d";

const Pagination = (props: IPagination) => {
  const {
    onPageChange,
    totalPageCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className = "",
    disabled = false,
  } = props;
  const paginationRange = usePagination({
    currentPage,
    totalPageCount,
    siblingCount,
    pageSize,
  });

  const disabledStyle = disabled ? Styles.inactive : "";
  const mainStyle = `${Styles.pagination_container} ${disabledStyle} ${className}`;

  if (paginationRange) {
    if (currentPage === 0 || paginationRange.length < 2) {
      return null;
    }
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange
    ? paginationRange[paginationRange.length - 1]
    : 0;

  return (
    <ul className={mainStyle}>
      <li
        className={`${Styles.pagination_item} ${Styles.width} ${
          currentPage === 1 ? Styles.disabled : ""
        }`}
        onClick={onPrevious}
      >
        <div className={`${Styles.arrow} ${Styles.left}`}>Назад</div>
      </li>
      {paginationRange &&
        paginationRange.map((pageNumber, i) => {
          if (pageNumber === DOTS) {
            return (
              <li
                className={`${Styles.pagination_item} ${Styles.dots}`}
                key={i}
              >
                &#8230;
              </li>
            );
          }

          return (
            <li
              key={i}
              className={`${Styles.pagination_item} ${
                pageNumber === currentPage ? Styles.active : ""
              }`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
      <li
        className={`${Styles.pagination_item} ${Styles.width} ${
          currentPage === lastPage ? Styles.disabled : ""
        }`}
        onClick={onNext}
      >
        <div className={`${Styles.arrow} ${Styles.right}`}>Вперед</div>
      </li>
    </ul>
  );
};

export { Pagination };
