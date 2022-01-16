import React, { useEffect } from "react";
import { useAuth } from "./contexts/AuthContext";
import { useApi } from "./contexts/ApiContext";
import ProtectedRouter from "./helpers/ProtectedRouter/ProtectedRouter";
import Container from "./components/FoodMenu/Container";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoadingPage from "./components/Loading/LoadingPage";

const QrRoute = React.lazy(() => import("./routes/QrTable/QrRoute"));
const Dashboard = React.lazy(() => import("./routes/Dashboard/Dashboard"));

const HandleTables = React.lazy(() =>
  import("./routes/HandleTables/HandleTables")
);
const Home = React.lazy(() => import("./routes/Home/Home"));
const Login = React.lazy(() => import("./components/Login/Login"));
const Signup = React.lazy(() => import("./components/Signup/Signup"));
const ForgotPassword = React.lazy(() =>
  import("./components/ForgotPassword/ForgotPassword")
);
const CreateRestaurant = React.lazy(() =>
  import("./routes/CreateRestaurant/CreateRestaurant")
);
const HeaderNavBar = React.lazy(() =>
  import("./components/headerNavBar/HeaderNavBar")
);
const PayService = React.lazy(() => import("./routes/PayService/PayService"));
const ContainerAccounting = React.lazy(() =>
  import("./routes/Accounting/ContainerAccounting")
);

export default function App() {
  const { currentUser } = useAuth();
  const { currentRestaurant } = useApi();

  return (
    <React.Suspense fallback={<LoadingPage />}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home isAuth={currentUser} />
          </Route>
          <Route path="/signup">
            <HeaderNavBar></HeaderNavBar>
            <Signup></Signup>
          </Route>
          <Route path="/login">
            <HeaderNavBar></HeaderNavBar>
            <Login></Login>
          </Route>
          <Route path="/forgot-password">
            <HeaderNavBar></HeaderNavBar>
            <ForgotPassword></ForgotPassword>
          </Route>
          <Route path="/table">
            <Container></Container>
          </Route>
          <Route path="/table?number=numberTable&restaurant=restaurantName">
            <Container></Container>
          </Route>
          <Route path="/QrRoute?number=numberTable">
            <QrRoute></QrRoute>
          </Route>
          <Route path="/QrRoute">
            <QrRoute></QrRoute>
          </Route>
          <Route path="/update-restaurant/">
            <CreateRestaurant></CreateRestaurant>
          </Route>
          <ProtectedRouter
            path="/dashboard"
            Component={Dashboard}
            isAuth={
              currentUser &&
              currentRestaurant.restaurant &&
              currentRestaurant.service
            }
            routeRedirect="/pay-service"
          />
          <ProtectedRouter
            path="/handle-tables"
            Component={HandleTables}
            isAuth={
              currentUser &&
              currentRestaurant.restaurant &&
              currentRestaurant.service
            }
            routeRedirect="/dashboard"
          />
          <ProtectedRouter
            path="/pay-service"
            Component={PayService}
            isAuth={currentUser && !currentRestaurant.service.verified}
            routeRedirect="/create-restaurant"
          />
          <ProtectedRouter
            path="/create-restaurant"
            Component={CreateRestaurant}
            isAuth={
              currentUser &&
              currentRestaurant.service.verified &&
              !currentRestaurant.restaurant
            }
            routeRedirect={
              currentUser && currentRestaurant.service && "/pay-service"
            }
          />
          <ProtectedRouter
            path="/accounting"
            Component={ContainerAccounting}
            isAuth={
              currentUser &&
              currentRestaurant.service &&
              currentRestaurant.restaurant
            }
            routeRedirect={"/"}
          />
        </Switch>
      </Router>
    </React.Suspense>
  );
}
