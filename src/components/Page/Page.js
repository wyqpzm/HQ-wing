import React, { useRef, useEffect } from "react";
import styles from "./Page.module.scss";

type Props = {
  title?: string,
  children: React.Node,
};

const Page = ({ title, children }: Props) => {
  const pageRef = useRef();

  useEffect(() => {
    pageRef.current.scrollIntoView();
  });

  return (
    <div ref={pageRef} className={styles["page"]}>
      <div className={styles["page__inner"]}>
        {title && <h1 className={styles["page__title"]}>{title}</h1>}
        <div className={styles["page__body"]}>{children}</div>
        <div className={styles.footer}>
          <a href="http://beian.miit.gov.cn">蜀ICP备19033202号-1</a>
        </div>
      </div>
    </div>
  );
};

export default Page;
