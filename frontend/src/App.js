
import './App.css';
import Navbar from './Component/NavBar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselImage from './Component/Carousel/CarouselSlider';
import WebsiteViewer from './Component/WebsiteViewer/WebsiteViewer';
import Service from './Component/Services/Service';
import Review from './Component/Review/Review';
import Logo from './Component/Logo/Logo';



function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Logo />
      <CarouselImage />
      <WebsiteViewer />
      <Service />
      <Review />
     
    </div>
  );
}

export default App;
