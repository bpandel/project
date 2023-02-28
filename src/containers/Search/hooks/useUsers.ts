import { ChangeEvent, useState } from "react";
import { IUser } from "../Search.types";

const USERS_LIMIT = 5;

export const useUsers = () => {
  const [users, setUsers] = useState<IUser[]>();
  const [isError, setIsError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);

  const handleFetchUsers = async () => {
    setIsError(false);
    setIsLoadingUsers(true);
    try {
      const results = await fetch(
        `https://api.github.com/search/users?q=${searchQuery}&per_page=${USERS_LIMIT}`
      );

      if (!results.ok) {
        throw new Error();
      }

      const data = await results.json();
      setUsers(data.items);
    } catch {
      setIsError(true);
    } finally {
      setIsLoadingUsers(false);
    }
  };

  const handleFetchRepos = async (user: IUser) => {
    setIsError(false);
    try {
      const results = await fetch(
        `https://api.github.com/users/${user.login}/repos`
      );

      if (!results.ok) {
        throw new Error();
      }

      const data = await results.json();
      if (!users) {
        return;
      }
      const newUsers = users.map((mappedUser) => {
        if (mappedUser.id === user.id) {
          return {
            ...mappedUser,
            repos: data,
          };
        }
        return mappedUser;
      });
      setUsers(newUsers);
    } catch {
      setIsError(true);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return {
    users,
    searchQuery,
    handleInputChange,
    handleFetchRepos,
    handleFetchUsers,
    isError,
    isLoadingUsers,
  };
};
