import { Hero, Form, Testimentiels, Explore, More,Footer } from "../components/index"


const Home = () => {
  return (
    <div className="flex flex-col items-center ">
      <Hero />
      <Form />
      <Testimentiels />
      <Explore />
      <More />
      <Footer/>
    </div>
  )
    ;
};

export default Home;