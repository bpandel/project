import { SearchPage } from "../../components/SearchPage/SearchPage.component";
import { useUsers } from "./hooks/useUsers";

export const Search = () => {
  const {
    searchQuery,
    searchQueryForResults,
    handleInputChange,
    handleFetchRepos,
    handleFetchUsers,
    users,
    isError,
    isLoadingUsers,
  } = useUsers();

  return (
    <SearchPage
      onInputChange={handleInputChange}
      onSearchClick={handleFetchUsers}
      onAccordionExpand={handleFetchRepos}
      users={users}
      searchQuery={searchQuery}
      searchQueryForResults={searchQueryForResults}
      isError={isError}
      isLoadingUsers={isLoadingUsers}
    />
  );
};
