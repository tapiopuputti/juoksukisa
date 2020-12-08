import React, { useEffect, useState } from 'react';
import ResultsTable from './components/ResultsTable';
import Container from 'react-bootstrap/Container';
import getAll from './services/resultsService';

const App = () => {
  const [results, setResults] = useState(null);

  useEffect(() => {
    const res = async () => {
      const data = await getAll();
      return data;
    };
    setResults(res);
  }, []);

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
      <ResultsTable data={results} />
    </Container>
  );
};

export default App;
