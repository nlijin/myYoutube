import Header from "./components/Header";
import BodyContainer from "./components/BodyContainer";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <BodyContainer />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;

/*
  machine coding round
    Header:
      hamburgermenu
      logo
      searchbar
      profileIcon
      
    BodyContainer
      Sidebar:
        home
        shorts 
        subcription

      ButtonList
      VideoCard container
        VideoCard
*/
