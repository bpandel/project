import { SearchForm } from "./components/SearchForm/SearchForm.component";
import { SearchResults } from "./components/SearchResults/SearchResults.component";
import { IUser } from "../../containers/Search/Search.types";
import { ChangeEvent } from "react";
import * as Styles from "./SearchPage.styles";
import { ReactComponent as Spinner } from "../../static/tail-spin.svg";

export interface ISearchPage {
  onSearchClick: () => void;
  users?: IUser[];
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onAccordionExpand: (dataItem: IUser) => void;
  searchQuery: string;
  isError: boolean;
  isLoadingUsers: boolean;
}

export const SearchPage = ({
  onSearchClick,
  users,
  onInputChange,
  searchQuery,
  onAccordionExpand,
  isError,
  isLoadingUsers,
}: ISearchPage) => {
  const getFeedback = () => {
    if (isLoadingUsers) {
      return (
        <div data-testid="spinner">
          <Spinner />
        </div>
      );
    }

    if (isError) {
      return <span data-testid="error-message">Error occurred</span>;
    }

    if (!users) {
      return;
    }

    if (users.length === 0) {
      return <span data-testid="no-results-message">No results</span>;
    }

    return (
      <>
        <span data-testid="search-results-for">
          Showing users for "{searchQuery}":{" "}
        </span>
        <SearchResults users={users} onAccordionExpand={onAccordionExpand} />
      </>
    );
  };

  return (
    <Styles.Container>
      <Styles.Wrapper>
        <SearchForm
          onSearchClick={onSearchClick}
          onInputChange={onInputChange}
          searchQuery={searchQuery}
        />
        {getFeedback()}
      </Styles.Wrapper>
    </Styles.Container>
  );
};
