import fbIcon from '../assets/images/icon-facebook.svg';
import instaIcon from '../assets/images/icon-instagram.svg';
import twitterIcon from '../assets/images/icon-twitter.svg';
import ytIcon from '../assets/images/icon-youtube.svg';

export const icons = {
  facebook: fbIcon,
  instagram: instaIcon,
  twitter: twitterIcon,
  youtube: ytIcon,
};

export const parseArr = (arr) => {
  return arr.map((plat) => plat.totalFollowers);
};
export const reduceArr = (arr) => {
  return arr.reduce((acc, curr) => acc + curr);
};

export const parseAndReduce = (arr) => {
  return reduceArr(parseArr(arr));
};

export const numberFormatter = (inputNum) => {
  const num = String(inputNum).split('');
  console.log(num[0], num[1]);
  return num.length > 4 ? `${num[0]}${num[1]}k` : `${num.join('')}`;
};
