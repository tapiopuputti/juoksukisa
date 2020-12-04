import React from 'react';
import ResultsTable from './components/ResultsTable';
import Container from 'react-bootstrap/Container';

const App = () => {
  return (
    <Container>
      <h1
        style={{
          marginBottom: '30px',
          marginTop: '20px',
          textAlign: 'center',
        }}>
        Jukolanmäen juoksut 2020
      </h1>
      <ResultsTable />
    </Container>
  );
};

export default App;
