import React from 'react';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';

const ResultsTable = ({ data }) => {
  //let timesArray = data.map((el) => el);
  //timesArray.sort((a, b) => a.value - b.value);
  return !data.data ? (
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
        <tr style={{ backgroundColor: 'gold' }}>
          <td>1</td>
          <td>Mark</td>
          <td>01:55:22</td>
          <td>10km</td>
        </tr>
        <tr style={{ backgroundColor: 'silver' }}>
          <td>2</td>
          <td>Jarkko</td>
          <td>02:00:11</td>
          <td>10km</td>
        </tr>
        <tr style={{ backgroundColor: '#cd7f32' }}>
          <td>3</td>
          <td>Jooseppi</td>
          <td>02:03:53</td>
          <td>10km</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Kustaa</td>
          <td>03:03:53</td>
          <td>10km</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Pena</td>
          <td>03:33:11</td>
          <td>10km</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ResultsTable;
