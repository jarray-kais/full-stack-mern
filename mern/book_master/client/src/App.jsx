import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoadingSpinner from "./components/LoadingSpinner";
import routes from "./routes/Routes";





const Home = React.lazy(() => import("./views/Home"));
const DetailBook = React.lazy(() => import("./views/DetailBook"));
const Header = React.lazy(() => import("./components/Header"));
const Createbook = React.lazy(() => import("./views/CreateBook"));
const UpdateBook = React.lazy(() => import("./views/UpdateBook"));
const NotFound = React.lazy(() => import("./components/NotFound"));



function App() {
  return (
    <>
     <Suspense fallback={<LoadingSpinner />}>
        <Header />
      </Suspense>
      
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.Createbook} element={<Createbook />} />
            <Route path={routes.DetailBook} element={<DetailBook />} />
            <Route path={routes.UpdateBook} element={<UpdateBook />} />
            <Route path={routes.NotFound} element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
