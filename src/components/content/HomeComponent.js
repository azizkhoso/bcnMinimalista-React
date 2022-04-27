import React from "react";
import { Loading } from "../ui/Loading";
import { Fade, Stagger } from "react-animation-components";
import { NavLink } from "react-router-dom";
import "../../styles/components/HomeComponent.css";

const Home = (props) => {
  if (props.homeLoading) {
    return (
      <div className="container-isLoading">
        <Loading />
      </div>
    );
  }
  if (props.homeErrMess) {
    return <div className="container=errMess">{props.errMess}</div>;
  }
  return (
    <div className="container-home">
      <Stagger in>
        {props.homeList.map((card) => {
          return (
            <Fade in key={card.id}>
              <NavLink to={card.link}>
                <div className="home_card-row">
                  <img src={card.src} alt="" className="home_card-img" />
                  <div className="home_card-text-body">
                    <p className="home_card-text">{card.name}</p>
                  </div>
                </div>
              </NavLink>
            </Fade>
          );
        })}
      </Stagger>
    </div>
  );
};

export default Home;
