import AnimatedCounter from "../../multi-use/animatedcounter/animatedcounter";
import styles from "./numbers.module.css";

interface element {
  title: string;
  number: number;
  after?: "K" | "M" | "+";
}

interface numbersProps {
  globalTitle: string;
  element: Array<element>;
}

export default function Numbers({ globalTitle, element }: numbersProps) {
  return (
    <div className={styles.numbers}>
      <div className={styles.title}>{globalTitle}</div>
      <div className={styles.elements}>
        {element.map((el: element) => {
          return (
            <div className={styles.element} key={el.number}>
              <div className={styles.upper}>
                {!el.after ? (
                  <AnimatedCounter
                    from={1}
                    to={el.number}
                    roundTo={0}
                    duration={3}
                  ></AnimatedCounter>
                ) : (
                  <>
                    <AnimatedCounter
                      from={1}
                      to={el.number}
                      roundTo={0}
                      duration={3}
                    ></AnimatedCounter>
                    <div>{el.after}</div>
                  </>
                )}
              </div>
              <div className={styles.lower}>{el.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
