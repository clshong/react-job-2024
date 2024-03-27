import Hero from "../components/Hero";
import HomeCards from "../components/HomeCard";
import JobListings from "../components/JobListings";
import ViewAllJob from "../components/ViewAllJob";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAllJob />
    </>
  );
};
export default HomePage;
