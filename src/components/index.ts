//ベースコンポーネント
export { default as Header } from './Header';
export { default as Main} from './Main';
export { default as Footer} from './Footer';

//<Main />内のページ
export { default as Home } from './pages/Home';
export { default as About } from './pages/About';
export { default as Contact } from './pages/Contact';
export { default as Service } from './pages/Service';

//データセット
export {
  navItem,
  aboutSection,
  business
} from './dataset/dataset';
