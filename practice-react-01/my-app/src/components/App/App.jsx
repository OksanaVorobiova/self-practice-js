import { PageTitle } from "../PageTitle/PageTitle";
import { EventBoard } from "../EventBoard/EventBoard";
import upcomingEvents from "../../upcomingEvents.json";
import { Container } from "./App.styled";
import Counter from "../Counter";
import Dropdown from "../Dropdown/Dropdown";

export const App = () => {
  return (
    <Container>
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={upcomingEvents} />
      <Counter />
      <Dropdown />
    </Container>
  );
};
