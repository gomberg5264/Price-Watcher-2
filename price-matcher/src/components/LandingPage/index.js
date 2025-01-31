import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.css';

export default function LandingPage() {
  return (
    <div className={style.landingPageWrapper}>
      <div className={style.contentDiv}>
        <h1>Price Watcher</h1>
        <p>
          A tool to help you buy items in your wishlist at the price that you are comfortable with.
        </p>
        <div className={style.landingButtonsDiv}>
          <button className={`${style.landingBtn} btn`}>
            <Link to="/login">Login/Signup</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
