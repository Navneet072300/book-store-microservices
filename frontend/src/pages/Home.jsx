import Hero from "../components/Hero";
import NewArrivals from "../components/NewArrivals";
import About from "../components/About";
import PopularBooks from "../components/PopularBooks";
import Features from "../components/Features";

const Home = () => {
  return (
    <div>
      <Hero />
      <NewArrivals />
      <About />
      <PopularBooks />
      <Features />
      <div className="max-padd-container bg-white"></div>
    </div>
  );
};

export default Home;
