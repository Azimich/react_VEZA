export interface IPagination {
  currentPage: number;
  totalPageCount: number;
  pageSize: number;
  pageStart?: number;
  onPageChange?: (page: number | string) => void;
  siblingCount?: number;
  className?: string;
  disabled?: boolean;
}
