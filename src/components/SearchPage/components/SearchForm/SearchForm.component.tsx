import { ISearchPage } from "../../SearchPage.component";
import * as Styles from "./SearchForm.styles";

interface ISearchForm {
  onSearchClick: ISearchPage["onSearchClick"];
  onInputChange: ISearchPage["onInputChange"];
  searchQuery: ISearchPage["searchQuery"];
}

export const SearchForm = ({
  onSearchClick,
  onInputChange,
  searchQuery,
}: ISearchForm) => {
  return (
    <Styles.Container>
      <Styles.Input
        value={searchQuery}
        onChange={onInputChange}
        placeholder={"Enter username"}
      />
      <Styles.Button onClick={onSearchClick}>Search</Styles.Button>
    </Styles.Container>
  );
};
