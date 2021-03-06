//import base component
import { Header, Main, Footer } from './components';

//import styles
import './assets/Base.scss';
import './assets/Layout.scss';
import './assets/Module.scss';


function App() {
  return (
    <div id='l-container'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
