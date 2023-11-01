export interface Props {
  currentPage: number;
  pagesAmount: number;
  switchPage: (pageNumber: number) => void;
}
