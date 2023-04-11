import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';

const MyTable = () => {
  const [lastValue, setLastValue] = useState("");
  const [values, setValues] = useState(["?", "?", "?", 2, 4, 4]); 
  const titles = ['Nonce (1-3)', 'a', 'b', 'c', 'Value of the last 2 digits of the previous hash', 'Hash!'];
  const [pin, setPin] = useState("");
  const firstRow = [1, 80, 65, 70, 12, 204];
  const setValue = (values) => {
    // Cambiar los valores cada 10 segundos
    setValues(...values);
;
  }; 

  const handleValuesChange = (event, index) => {
    const value = event.target.value;
    const newValues = [...values];
    if (index < 3) {
      newValues[index] = value;
    } else if (index === 5) {
      newValues[index - 1] = value;
    }
    setValues(newValues);
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

  return Number.isInteger(intValue) && intValue >= 1 && intValue <= 3;
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
            {firstRow.map(value => (
              <TableCell key={value} align="center" style={{ border: '1px solid #000' }}>{value}</TableCell>
            ))}
          </TableRow>
        <TableRow>
        {values.map((value, index) => (
              <TableCell
              key={index}
              align="center"
              style={{ border: '1px solid #000',  maxWidth: '30px'}}
            >
              {index < 4 || index === 5 ? (
                <TextField 
              
                inputProps={{ min: 1, max: 3 }}
                  sx = {{ 
                    width: "100px",
                    marginLeft: "0px",
                    marginRight: "0px",
                  
                  }}
                  value={lastValue} 
                  onChange={(event) => handleValuesChange(event, index)} 
                  type="number"
                />
              ) : (
                value
              )} 
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyTable;
