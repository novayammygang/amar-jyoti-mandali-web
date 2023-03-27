import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import lal from '../pics/amarlal.jpg';

function Home() {
  return (
    <div className="wrapper">
      <h1>This is the home page</h1>
      <img src={lal} alt="lal" />;
      <Link to="about"><Button variant="contained">Click to go to about page</Button></Link>
      <Link to="contact"><Button variant="contained">Click to go to contact page</Button></Link>
    </div>
  );
}

export default Home;
