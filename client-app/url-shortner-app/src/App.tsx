import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';

function App() {
  return (

    <div className="min-h-screen flex flex-col bg-[url('/bg.jpg')] bg-cover bg-center bg-fixed">

      <div className="min-h-screen bg-black/50 flex flex-col">

        <Header />

        <main className="flex-grow">
          <Container />
        </main>

        <Footer />

      </div>

    </div>
  );
}

export default App;