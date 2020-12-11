import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import ModalComponent from './ModalComponent';

const ResultsTable = ({ data }) => {
  const [participant, setParticipant] = useState({});
  const [modalShow, setModalShow] = useState(false);

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
    <div>
      <ModalComponent
        participant={participant}
        show={modalShow}
        setShow={setModalShow}
      />
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
                      style={{
                        cursor: 'pointer',
                        color: 'black',
                        width: '30%',
                      }}
                      onMouseEnter={changeTextColor}
                      onMouseLeave={changeTextColor}
                      onClick={() => {
                        setParticipant(el);
                        setModalShow(true);
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
                      setParticipant(el);
                      setModalShow(true);
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
    </div>
  );
};

export default ResultsTable;
