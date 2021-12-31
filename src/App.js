import React from "react";
import Dashboard from "./routes/Dashboard/Dashboard";
import HandleTables from "./routes/HandleTables/HandleTables";
import Home from "./routes/Home/Home";
import Container from "./components/FoodMenu/Container";
import ProtectedRouter from "./helpers/ProtectedRouter/ProtectedRouter";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import CreateRestaurant from "./routes/CreateRestaurant/CreateRestaurant";
import HeaderNavBar from "./components/headerNavBar/HeaderNavBar";
import PayService from "./routes/PayService/PayService";

import { useAuth } from "./contexts/AuthContext";
import { useApi } from "./contexts/ApiContext";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  const { currentUser } = useAuth();
  const { currentRestaurant } = useApi();

  console.log(currentRestaurant);

  return (
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
          isAuth={currentUser && !currentRestaurant.service}
          routeRedirect="/create-restaurant"
        />
        <ProtectedRouter
          path="/create-restaurant"
          Component={CreateRestaurant}
          isAuth={
            currentUser &&
            currentRestaurant.service &&
            !currentRestaurant.restaurant
          }
          routeRedirect={
            currentUser && currentRestaurant.service && "/create-restaurant"
          }
        />
      </Switch>
    </Router>
  );
}
