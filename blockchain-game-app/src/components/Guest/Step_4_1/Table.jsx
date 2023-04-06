import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';

const MyTable = () => {
  const [lastValue, setLastValue] = useState("");
  const [values, setValues] = useState([1, 80, 65, 70, 12, 204]); 
  const titles = ['Nonce (1-3)', 'a', 'b', 'c', 'Value of the last 2 digits of the previous hash', 'Hash!'];
  const [pin, setPin] = useState("");

  const setValue = (value) => {
    // Cambiar los valores cada 10 segundos
    setValues([1, 80, 65, 70, 12, value]);
;
  }; 


  const setValidValue = (value) => {
    if (value >= 1 && value <= 3) {
      setValues((prevValues) => {
        const newValues = [...prevValues];
        const index = newValues.indexOf(203);
        if (index !== -1) {
          newValues[index] = value === 3 ? 204 : 203;
        }
        return newValues;
      });
    }
  };

  const validValue = (value) => {
    const intValue = parseInt(value);
  
  return Number.isInteger(intValue) && intValue >= 1 && intValue <= 3;
  }

  const handleLastValueChange = (event) => {
    setLastValue(event.target.value);
    const value = parseInt(event.target.value);
    if (value >= 1 && value <= 3) {
      setValidValue(value);
      setPin(value);
      setValue(value+values[1]+values[2]+values[3]-values[4]);
      setValidValue(null);
    }
    setLastValue(event.target.value);
  }

  return (
    <TableContainer component={Paper} style={{ backgroundColor: '#e0ecfc' }}>
      <Table>
        <TableHead>
          <TableRow style={{ backgroundColor: '#e0ecfc' }}>
            {titles.map((title) => (
              <TableCell key={title} align="center" style={{ fontWeight: 'bold', border: '1px solid #000', maxWidth: '30px' }}>
                {title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
            {values.map(value => (
              <TableCell key={value} align="center" style={{ border: '1px solid #000' }}>{value}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyTable;
