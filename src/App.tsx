import { TbBrandTypescript } from 'react-icons/tb';
import { FiMenu } from 'react-icons/fi';
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
        Projeto criado exclusivamente para fim de estudo e testes com React + Typescript, assim como criação de 
        componentes para uso em outros projetos.
      </p>   
      <div className='menu-align'>       
        < FiMenu />
      </div>       
      <div className="align-btn">
        <BtnComponent text="Botões" />
        <BtnComponent text="Formulários" />
        <BtnComponent text="Grids" />
        <BtnComponent text="Headers" />
        <BtnComponent text="Footers" />
        <BtnComponent text="Teste 06" />
        <BtnComponent text="Teste 07" />
        <BtnComponent text="Teste 08" />
      </div>
       
    </div>
  );
}

export default App;
