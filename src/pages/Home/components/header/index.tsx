import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { combineLatest, Observable } from 'rxjs';

function loadImage(url: string): Observable<string> {
  return new Observable(function subscriber(subscriber) {
    let img = new Image();
    img.onload = function onload() {
      subscriber.next(url);
      subscriber.complete();
    };
    img.onerror = function onerror(err) {
      subscriber.error(err);
    };
    img.src = url;
    img.remove();
  });
}

export default function Header() {
  const [images, setImages] = useState<string[]>([]);
  const imgOne = 'https://www.dating.com/i/index/logo.svg?2';
  const imgTwo =
    'https://help.twitter.com/content/dam/help-twitter/brand/logo.png';

  const imgThree =
    'https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png';

  const imageOneLoad = loadImage(imgOne);
  const imageTwoLoad = loadImage(imgTwo);
  const imageThreeLoad = loadImage(imgThree);

  useEffect(() => {
    combineLatest([imageOneLoad, imageTwoLoad, imageThreeLoad]).subscribe(
      (arr) => {
        setImages(arr);
      }
    );
  }, []);

  return (
    <div>
      {images.map((src) => (
        <img src={src} key={src} alt={src} className={styles.headerLogo} />
      ))}
    </div>
  );
}
