export interface Props {
  disabled: boolean;
  onSearch: (searchParam: string) => void;
}

export interface State {
  searchParam: string;
}
