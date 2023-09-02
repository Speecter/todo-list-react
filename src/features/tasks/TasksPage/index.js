import Buttons from "./Buttons";
import Form from "./Form";
import TaskList from "./TaskList";
import Section from "../../../common/Section";
import TitleHeader from "../../../common/Header";
import Container from "../../../common/Container";
import Search from "./Search";
import ExampleButton from "./ExampleButton";


function TasksPage() {


  return (
    <Container>
      <TitleHeader title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={<ExampleButton />}
        body={<Form />}
      />

      <Section
        title="Wyszukiwarka"
        body={<Search />}
      />

      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
