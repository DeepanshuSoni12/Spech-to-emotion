import React, {  useState } from 'react'
import styles from "./Home.module.css";
import { ArrowRight } from "react-feather";
import designIcon from "./designer.svg";
import Record from './Record';
export const Home = () => {
   
  const [clicked,setClicked] = useState(false);

  const handleClick = ()=>{
    setClicked(true)
  }

  return (

    clicked===false? ( <div className={styles.container}>
    {/* {showProjectModal && (
      <ProjectModal
        onClose={() => setShowProjectModal(false)}
        details={projectDetails}
      />
    )} */}
    <div className={styles.header}>
      <div className={styles.left}>
        <p className={styles.heading}>Speech To Emotion Detector</p>
        <p className={styles.subHeading}>
        Say Something and we will try to understand your mood
        </p>
        <button onClick={handleClick}>
       Get Started   <ArrowRight />{" "}
        </button>
      </div>
      <div className={styles.right}>
        <img src={designIcon} alt="Projects" />
      </div>
    </div>
    </div> ):
    <Record/>
    

  )
}
