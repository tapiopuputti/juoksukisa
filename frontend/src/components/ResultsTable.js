import React from 'react';
import Table from 'react-bootstrap/Table';

const ResultsTable = () => {
  return (
    <div>
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
    </div>
  );
};

export default ResultsTable;
