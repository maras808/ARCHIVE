import styles from "./recomendations.module.css";
import globals from "../../app/globals.module.css";
import RecomendationsSwipe from "../recomendationsswipe/recomendationsswipe";
import RecomendedItems from "../recomendeditems/recomendeditems";

export default function Recomendations() {
  return (
    <div className={styles.recomendations}>
      <div className={globals.widthwrapper}>
        <div className={styles.recomendationswrap}>
          {/* <RecomendationsSwipe></RecomendationsSwipe> */}
          <RecomendedItems></RecomendedItems>
        </div>
      </div>
    </div>
  );
}
