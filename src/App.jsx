import { Form } from './components/Form';
import { Form as FormClass } from './class-components/Form';
import { Count as CountClass } from './class-components/Count';
import { Count as Count } from './components/Count';

export const App = () => {
  return (
    <div className="App">
      {/* <CountClass />
      <hr />
      <FormClass /> */}
      <Count />
    </div>
  );
}

