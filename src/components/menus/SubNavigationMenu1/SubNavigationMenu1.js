import React from 'react';
import { Link } from 'gatsby';
import styles from '../../../scss/hover-drop-downs/subnavigationmenu1.module.scss';

const SubNavigationMenu1 = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.subnav}>
        <button className={styles.subnavbtn}>Shirts</button>
        <div className={styles.subnavContent}>
          <Link to="/">Polo</Link>
          <Link to="/">Sport</Link>
          <Link to="/">Casual</Link>
        </div>
      </div>

      <div className={styles.subnav}>
        <button className={styles.subnavbtn}>Shoes</button>
        <div className={styles.subnavContent}>
          <Link to="/">Stylish</Link>
          <Link to="/">Runners</Link>
          <Link to="/">Comfy</Link>
        </div>
      </div>

      <div className={styles.subnav}>
        <button className={styles.subnavbtn}>Pants</button>
        <div className={styles.subnavContent}>
          <Link to="/">Dressy</Link>
          <Link to="/">Sporty</Link>
          <Link to="/">Comfy</Link>
        </div>
      </div>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default SubNavigationMenu1;
