import Navigation from './components/navigation/navigation.component';
import Hero from './components/hero/hero.component';
import CardPreview from './components/card-preview/card-preview.component';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <div className='container'>
        <Hero />
        <main>
          <iframe
            video-url='currentVdo'
            player='bestPlayer'
            class='ng-isolate-scope'
            id='unique-youtube-embed-id-1'
            frameborder='0'
            allowfullscreen='1'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            title='LetzRent for Pepcorns | Making renting simple, affordable and rewarding.'
            width='640'
            height='390'
            src='https://www.youtube.com/embed/biGcDeB2PbQ?start=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fapp.pepcorns.com&amp;widgetid=1'
          ></iframe>
          <CardPreview />
        </main>
      </div>
    </div>
  );
}

export default App;
