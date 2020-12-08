import React from 'react';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';

const ResultsTable = ({ data }) => {
  const awards = ['gold', 'silver', '#cd7f32'];
  const changeTextColor = (e) => {
    e.target.style.color === 'red'
      ? (e.target.style.color = 'black')
      : (e.target.style.color = 'red');
  };

  return !data ? (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Spinner animation='border' role='status'>
        <span className='sr-only'>Loading...</span>
      </Spinner>
    </div>
  ) : (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nimi</th>
          <th>Tulos</th>
          <th>Matka</th>
        </tr>
      </thead>
      <tbody>
        {data[0].map((el, index) => {
          if (index < 3) {
            return (
              <tr key={index} style={{ backgroundColor: awards[index] }}>
                <td>{index + 1}</td>
                <td>
                  <p
                    style={{ cursor: 'pointer', color: 'black', width: '30%' }}
                    onMouseEnter={changeTextColor}
                    onMouseLeave={changeTextColor}
                    onClick={() => {
                      return console.log('Hello world!');
                    }}>
                    {el.name}
                  </p>
                </td>
                <td>{el.result}</td>
                <td>{el.distance}</td>
              </tr>
            );
          }
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <p
                  style={{ cursor: 'pointer', color: 'black', width: '30%' }}
                  onMouseEnter={changeTextColor}
                  onMouseLeave={changeTextColor}
                  onClick={() => {
                    return console.log('Hello world!');
                  }}>
                  {el.name}
                </p>
              </td>
              <td>{el.result}</td>
              <td>{el.distance}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ResultsTable;
