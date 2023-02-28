import { Accordion } from "../../../Accordion/Accordion.component";
import { Item } from "./components/ResultItem/ResultItem.component";
import { IUser } from "../../../../containers/Search/Search.types";
import { ISearchPage } from "../../SearchPage.component";
import { ReactComponent as Spinner } from "../../../../static/tail-spin.svg";
import * as Styles from "./SearchResults.styles";
import { ReposContainer } from "./SearchResults.styles";

interface ISearchResultsProps {
  users: IUser[];
  onAccordionExpand: ISearchPage["onAccordionExpand"];
}

export const SearchResults = ({
  users,
  onAccordionExpand,
}: ISearchResultsProps) => {
  const getAccordionContent = (user: IUser) => {
    if (!user.repos) {
      return (
        <Styles.SpinnerWrapper>
          <Spinner />
        </Styles.SpinnerWrapper>
      );
    }

    if (user.repos?.length === 0) {
      return <ReposContainer>No data</ReposContainer>;
    }

    return (
      <Styles.ReposContainer>
        {user.repos.map((repo) => (
          <Item
            title={repo.name}
            content={repo.description}
            stars={repo.stargazers_count}
            key={repo.id}
          />
        ))}
      </Styles.ReposContainer>
    );
  };
  return (
    <>
      {users?.map((user) => {
        return (
          <Accordion<IUser>
            title={user.login}
            dataItem={user}
            onExpand={(user) => onAccordionExpand(user)}
            key={user.id}
          >
            {getAccordionContent(user)}
          </Accordion>
        );
      })}
    </>
  );
};
