import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reduxToolkit/store";
import { fetchUser, UserState } from "../../reduxToolkit/reducers/user";
import { AppDispatch } from "../../reduxToolkit/store";
const UsersList = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data, loading, error } = useSelector<RootState, UserState>(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul>
      {data.map((user: any) => (
        <li key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
