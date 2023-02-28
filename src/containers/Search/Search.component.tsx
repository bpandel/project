import { SearchPage } from "../../components/SearchPage/SearchPage.component";
import { useUsers } from "./hooks/useUsers";

export const Search = () => {
  const {
    searchQuery,
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
      isError={isError}
      isLoadingUsers={isLoadingUsers}
    />
  );
};
