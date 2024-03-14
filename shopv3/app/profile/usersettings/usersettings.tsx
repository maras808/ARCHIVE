"use client";

import styles from "./usersettings.module.css";
import Setting from "./setting/setting";
import { Fcookie } from "@/components/functions/fcookie";
import { useEffect, useState } from "react";

export default function UserSettings() {
  const [cookiesEnabled, setCookiesEnabled] = useState<any>("false");

  useEffect(() => {
    Fcookie("get", "enableCookies").then((p) => {
      setCookiesEnabled(p);
    });
  }, []);
  return (
    <div className={styles.usersettings}>
      {cookiesEnabled === "true" ? (
        <>
          <Setting text="Enable cookies" set={"cookies"}></Setting>
          <Setting text="Enable dark mode" set={"darkmode"}></Setting>
          <Setting text="setting3" set={"Setting2"}></Setting>
          <Setting text="setting4" set={"Setting2"}></Setting>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
