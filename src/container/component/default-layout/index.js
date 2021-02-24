import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "../../../routes";
import Header from "../header-component/header.component";




class DefaultLayout extends Component{
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  );
    render(){
        return (
            <div className="app">
              <div className="app-body">
                <Suspense>
                  {/* <AppSidebarNav navConfig={this.state.navData} {...this.props} /> */}
                  <Header style={{ position: "fixed" }}></Header>
                </Suspense>
                <main className="main">
                  <Suspense fallback={this.loading()}>
                    <Switch>
                      {routes.map((route, idx) => {
                        return route.component ? (
                          <Route
                            key={idx}
                            path={route.path}
                            exact={route.exact}
                            name={route.name}
                            render={(props) => <route.component {...props} />}
                          />
                        ) : null;
                      })}
                      {/* <Redirect from="/" to="/body" /> */}
                    </Switch>
                  </Suspense>
                </main>
              </div>
            </div>
          );
    };
}

export default DefaultLayout