import Banner from "./components/Banner";
import Explanation from "./components/Explanation";
import Layout from "./components/Layout";
import Presentation from "./components/Presentation";
import StickyFooter from "./components/StickyFooter";

function App() {
  return (
    <div>
      <Layout>
        <Banner />
        <Explanation />
        <Presentation />
        <StickyFooter/>
      </Layout>
    </div>
  );
}

export default App;
