import Header from "./components/Header";
import BodyContainer from "./components/BodyContainer";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Header />
        <BodyContainer />
      </div>
    </Provider>
  );
}

export default App;

{
  /*
machine coding round
Header
  hamburgermenu
  logo
  searchbar
  profileIcon

sidebar:
  home 
  subcription

body container
  few button filters
  videoCard container
    videoCards

*/
}
