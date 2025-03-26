import './index.css';
import AppRoutes from './routes/AppRoutes';
import { Header } from './components/www/site/Header';
import { Footer } from './components/www/site/Footer';

function App() {
  return (
    <div className="container-full">
      <Header />
      <main className='container'>
      <AppRoutes />
      </main>
      <Footer/>
    </div>
  );
}

export default App;

