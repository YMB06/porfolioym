import './index.css';
import AppRoutes from './routes/AppRoutes';
import { Header } from './components/www/site/Header';
import { Footer } from './components/www/site/Footer';

function App() {
  return (
    <div className="container-full flex flex-col min-h-screen">
      <Header />
      <main className='container flex-1 mt-16'>
      <AppRoutes />
      </main>
      <Footer/>
    </div>
  );
}

export default App;

