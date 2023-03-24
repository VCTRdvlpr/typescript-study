import { TbBrandTypescript } from 'react-icons/tb';
import BtnComponent from './components/BtnComponent';

function App() {
  return (
    <div className="App">
      <div className='title-align'>
        <h1>
          My TypeScript Playground
        </h1>           
        <TbBrandTypescript />
      </div>
      <p>
        Projeto criado exclusivamente para fim de estudo e testes com React + Typescript
      </p>
      <div className="align-btn">
        <BtnComponent text="Teste 01" />
        <BtnComponent text="Teste 02" />
        <BtnComponent text="Teste 03" />
        <BtnComponent text="Teste 04" />
        <BtnComponent text="Teste 05" />
        <BtnComponent text="Teste 06" />
        <BtnComponent text="Teste 07" />
        <BtnComponent text="Teste 08" />
      </div>
    </div>
  );
}

export default App;
