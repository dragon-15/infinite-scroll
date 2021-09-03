import React, { useEffect, useState, useCallback, useRef } from "react";
import Loader from "../../molecules/Loader";
import GlobalHeader from "../../molecules/GlobalHeader";
import UserList from "../../molecules/UserList";

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [userList, updateUserList] = useState([]);
  const [dataLoading, updateDataLoading] = useState(false);
  const [error, setError] = useState(false);
  const observer = useRef();

  const lastUserRef = useCallback(
    elem => {
      if (dataLoading) return;
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          const newPageNumber = pageNumber + 1;
          setPageNumber(newPageNumber);
        }
      });
      if (elem) {
        observer.current.observe(elem);
      }
    },
    [dataLoading]
  );

  const getUserList = async () => {
    updateDataLoading(true);
    setError(false);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums/1/photos"
      );
      const data = await response.json();
      const newUserList = [...userList, ...data];
      setTimeout(() => {
        updateUserList(newUserList);
        updateDataLoading(false);
      }, 1000);
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    getUserList();
  }, [pageNumber]);

  return (
    <main className="home">
      <GlobalHeader />
      <UserList list={userList} lastRef={lastUserRef}/>
      {dataLoading && <Loader />}
      {error && <Error />}
    </main>
  );
};

export default Home;
