import { Route, Routes } from 'react-router-dom';
import Footer from './Layouts/Footer';
import NavBar from './Layouts/NavBar';
import PrivateRoute from './Routes/Authentication/PrivateRoute';
import { privateRoutes } from './Routes/privateRoutes';
import { publicRoutes } from './Routes/publicRoutes';

function App() {
  return (
    <div className="">


      <NavBar>

        <Routes>









          {/* Render all the public routes  */}

          {
            publicRoutes.map(({ path, Component }, idx) => <Route

              key={idx}
              path={path}
              element={<Component />}

            />)
          }







          {/* Render all the private routes  */}



          <Route element={<PrivateRoute />}>
            {
              privateRoutes.map(({ path, Component }, idx) => <Route

                key={idx}
                path={path}
                element={<Component />}

              />)
            }
          </Route>














        </Routes>

        <Footer />
      </NavBar>





    </div>
  );
}

export default App;
