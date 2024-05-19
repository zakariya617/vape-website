
import './App.css';
import { Box } from '@mui/material';
import NaveBar from './pages/navebar';
import Image from './pages/image';
import Photossetup from './pages/photossetup';
import About from './pages/about';
import Servicessetup from './pages/servicessetup';
import NewArrivalsSetup from './pages/newarrivalssetup';
import Delivery from './pages/delivery';
import Reviews from './pages/reviews';
import Articlessetup from './pages/articlessetup';
import Bottom from './pages/bottom';


function App() {
  return (
    <Box sx={{height:'100%',width:'100%',overflow:'hidden'}}>
    <NaveBar/>
    <Image/>
    <Photossetup/>
    <About/>
    <Servicessetup/>
    <NewArrivalsSetup/>
    <Delivery/>
    <Reviews/>
    <Articlessetup/>
    <Bottom/>
    </Box>
  );
}

export default App;
