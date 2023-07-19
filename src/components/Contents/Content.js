import { useState } from "react";
import ContentsDetail from "../ContentsDetail/ContentsDetail";
import Header from "../Header/Header";
import LeftMenu from "../LeftMenu/LeftMenu";
import classes from "./Contents.module.css";
import Footer from "../Footer/Footer";


const Content = () => {
    
  const [displayText, setDisplayText] = useState("");

  const handleDeleteClick = () => {
    setDisplayText("Deleted");
  };
  

  const handleExportClick = () => {
    setDisplayText("Exported");
  };

  return (
    <div className={classes["grid-container"]}>
      <div className={classes.header}>
        <Header />
      </div>
      <div className={classes.sidebar}>
        <LeftMenu
          handleDeleteClick={handleDeleteClick}
          handleExportClick={handleExportClick}
        />
      </div>
      <div className={classes.content}>
        <p>Please export or delete from file section.</p>
        <ContentsDetail displayedText={displayText} />
      </div>
      <div className={classes.footer}>
        <Footer/>
      </div>
    </div>
  );
};

export default Content;
