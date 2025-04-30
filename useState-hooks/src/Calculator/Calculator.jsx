import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input)); // Note: eval() is used here for simplicity
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div style={styles.container}>
      <h2>React Calculator</h2>
      <input type="text" value={input} readOnly style={styles.input} />
      <div style={styles.result}>{result}</div>

      <div style={styles.buttonContainer}>
        {['7', '8', '9', '/'].map((val) => (
          <button key={val} onClick={() => handleClick(val)}>{val}</button>
        ))}
        {['4', '5', '6', '*'].map((val) => (
          <button key={val} onClick={() => handleClick(val)}>{val}</button>
        ))}
        {['1', '2', '3', '-'].map((val) => (
          <button key={val} onClick={() => handleClick(val)}>{val}</button>
        ))}
        {['0', '.', '=', '+'].map((val) =>
          val === '='
            ? <button key={val} onClick={handleCalculate}>=</button>
            : <button key={val} onClick={() => handleClick(val)}>{val}</button>
        )}
        <button onClick={handleClear} style={{ gridColumn: 'span 4' }}>Clear</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '250px',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '1.2rem',
    marginBottom: '10px',
  },
  result: {
    minHeight: '30px',
    fontSize: '1.2rem',
    marginBottom: '10px',
  },
  buttonContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
  },
};

export default Calculator;
