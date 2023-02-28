import { render, screen } from "@testing-library/react";
import React from "react";
import { SearchPage } from "./SearchPage.component";

const commonProps = {
  onSearchClick: () => {},
  searchQuery: "",
  searchQueryForResults: "",
  onAccordionExpand: () => {},
  onInputChange: () => {},
};

describe("SearchPage", () => {
  test("shows loader when loading users", () => {
    render(<SearchPage {...commonProps} isError={false} isLoadingUsers />);
    const spinner = screen.getByTestId("spinner");

    expect(spinner).toBeVisible();
  });

  test("shows error message when error occurred", () => {
    render(<SearchPage {...commonProps} isError isLoadingUsers={false} />);
    const errorMessage = screen.getByTestId("error-message");

    expect(errorMessage).toBeVisible();
  });

  test("shows no result message when there are no results", () => {
    render(
      <SearchPage
        {...commonProps}
        isError={false}
        isLoadingUsers={false}
        users={[]}
      />
    );
    const noResultsMessage = screen.getByTestId("no-results-message");

    expect(noResultsMessage).toBeVisible();
  });

  test("shows result when there are results", () => {
    render(
      <SearchPage
        {...commonProps}
        isError={false}
        isLoadingUsers={false}
        users={[
          {
            login: "login",
            id: 1,
          },
        ]}
      />
    );
    const searchResultFor = screen.getByTestId("search-results-for");

    expect(searchResultFor).toBeVisible();
  });
});
