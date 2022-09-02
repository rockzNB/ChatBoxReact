import React from 'react';
import styles from './styles.module.css';
import { combineLatest, timer, Observable, map, fromEvent } from 'rxjs';
import { $img } from 'react-rxjs-elements';
import { firstImg, secondImg, thirdImg } from './images';

export default function Header() {
  const src$: any = '';
  const imgOne = 'https://www.dating.com/i/index/logo.svg?2';
  const imgTwo =
    'https://help.twitter.com/content/dam/help-twitter/brand/logo.png';
  const imgThree =
    'https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png';

  combineLatest();

  // const src$: any = timer(0, 1000).pipe(
  //   map((x) => (x % 2 ? firstImg : secondImg))
  // );
  // src$.subscribe();
  return (
    <div>
      <$img className={styles.headerLogo} src={src$} alt="logo" />
    </div>
  );
}
