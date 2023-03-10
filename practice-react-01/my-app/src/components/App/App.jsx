//import { PageTitle } from "../PageTitle/PageTitle";
//import { EventBoard } from "../EventBoard/EventBoard";
//import upcomingEvents from "../../upcomingEvents.json";
//import { Container } from "./App.styled";
//import Counter from "../Counter";
//import Dropdown from "../Dropdown/Dropdown";
import { Component } from "react";
import Form from "./Form";
import { LoginForm } from "../LoginForm/LoginForm";

/*export const App = () => {
  return (
    <Container>
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={upcomingEvents} />
      <Counter />
      <Dropdown />
    </Container>
  );
}; */

export class App extends Component {
  state = {
    inputValue: " ",
  };

  formSubmitHandler = (data) => {
    console.log(data);
  };

  render() {
    return (
      <>
        <Form onSubmit={this.formSubmitHandler} />
        <LoginForm />
      </>
    );
  }
}
