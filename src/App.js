import Navigation from './components/navigation/navigation.component';
import Hero from './components/hero/hero.component';
import CardPreview from './components/card-preview/card-preview.component';
import Frame from './components/frame/frame.component';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <div className='container'>
        <Hero />
        <main>
          <CardPreview />
          <Frame />
        </main>
      </div>
    </div>
  );
}

export default App;
