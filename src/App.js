import Banner from "./components/Banner";
import Explanation from "./components/Explanation";
import Layout from "./components/Layout";
import Presentation from "./components/Presentation";
import StickyFooter from "./components/StickyFooter";
import {ThemeProvider, createMuiTheme} from "@material-ui/core"

function App() {
  // Ya no es soportada, hay que buscar la manera de hacerlo en la v5 de material ui
  const theme = createMuiTheme({
    breakpoints:{
      values:{
        xxs:320,
        xs:480,
        sm: 640,
        md:768,
        lg:1024,
        xl:1220,
        xxl:1366,
        xxxl:1620
      }
    }
  })


  return (
    <div>
      <ThemeProvider theme={theme}>
      <Layout>
        <Banner />
        <Explanation />
        <Presentation />
        <StickyFooter/>
      </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
