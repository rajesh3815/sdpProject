import { createContext, useEffect, useState } from "react";
import { getbookmarks } from "./api/story";

export const myContext = createContext();

export const ContexProvider = ({ children }) => {
  let [editData, setEditData] = useState([]);
  let [isEdit, setIsEdit] = useState(false);
  let [storyid, setStoryid] = useState();
  let [storyCreated, setStoryCreated] = useState();
 let [ids,setIds]=useState(localStorage.getItem("token"))
 let [loginPopup, setLoginPopup] = useState(false);
 let [isBookmark, setIsBookmark] = useState();

  //setting up the bookmarks data

  let [bookmarkData, setBookmarkData] = useState([]);
  let [loginStatus, setLoginstatus] = useState();
  useEffect(()=>{
    setLoginstatus(true)
  },[ids])
  // console.log(loginStatus);
  const setupBookmark = async () => {
    if (!localStorage.getItem("token")) return;
    const res = await getbookmarks();
    setBookmarkData(res);
  };

  return (
    <>
      <myContext.Provider
        value={{
          editData,
          setEditData,
          isEdit,
          setIsEdit,
          storyid,
          setStoryid,
          bookmarkData,
          setupBookmark,
          loginStatus,
          setLoginstatus,
          storyCreated,
          setStoryCreated,
          loginPopup,
          setLoginPopup,
          isBookmark,
          setIsBookmark,
          ids,
          setIds
        }}
      >
        {children}
      </myContext.Provider>
    </>
  );
};
