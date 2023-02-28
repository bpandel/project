import { act, renderHook } from "@testing-library/react";
import { useUsers } from "./useUsers";
const fetchMock = require("fetch-mock-jest");

describe("useUsers", () => {
  test("users are fetched and put into state", async () => {
    const data = {
      items: [
        {
          id: "test",
        },
      ],
    };

    fetchMock.mock(
      {},
      {
        body: JSON.stringify(data),
      }
    );
    const { result } = renderHook(() => useUsers());
    const { handleFetchUsers } = result.current;
    await act(() => {
      handleFetchUsers();
    });
    expect(JSON.stringify(result.current.users)).toBe(
      JSON.stringify(data.items)
    );
    fetchMock.restore();
  });

  test("error state is set in case of error", async () => {
    fetchMock.mock({}, () => {
      throw new Error();
    });
    const { result } = renderHook(() => useUsers());
    const { handleFetchUsers } = result.current;
    await act(() => {
      handleFetchUsers();
    });
    expect(result.current.isError).toBe(true);
    fetchMock.restore();
  });
});
