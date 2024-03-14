"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import globals from "../../app/globals.module.css";
import { Fcookie } from "../functions/fcookie";
import styles from "./cookies.module.css";

export default function Cookies() {
  const [renderCookies, setRenderCookies] = useState<any>("true");
  const handleCookie = (isEnabled) => {
    Fcookie("set", "enableCookies", isEnabled);
    Fcookie("set", "renderCookies", "false");
    Fcookie("get", "renderCookies").then((p) => {
      setRenderCookies(p);
    });
  };

  return renderCookies === "false" ? (
    ""
  ) : (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key={"cookies"}
        className={styles.cookies}
      >
        <div className={globals.widthwrapper}>
          <div className={styles.cookiescontent}>
            <div className={styles.text}>
              To provide you with the best possible experience and ensure the
              proper functioning of our site, we use cookies. It is greatly
              advised to keep them enabled, however you can chose to disable
              them.
            </div>
            <div className={styles.buttons}>
              <button
                className={styles.agree}
                onClick={() => handleCookie(true)}
              >
                Enable
              </button>
              <button
                className={styles.disagree}
                onClick={() => handleCookie(false)}
              >
                Disable
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
