import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const buttons = [
  ['C','/' ],
  ['7', '8', '9', '*'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', 'DEL', '='],
];

const CalculatorScreen: React.FC = () => {
  const [currentInput, setCurrentInput] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleButtonPress = (button: string) => {
    if (button === 'C') {
      setCurrentInput('');
      setResult('');
      return;
    }
    if (button === 'DEL') {
      setCurrentInput(currentInput.slice(0, -1));
      return;
    }
    if (button === '=') {
      calculateResult();
      return;
    }
    // Prevent multiple operators in a row
    const operators = ['+', '-', '*', '/'];
    const lastChar = currentInput.slice(-1);
    if (operators.includes(button)) {
      if (currentInput === '' || operators.includes(lastChar)) {
        // Do not allow operator at start or two operators in a row
        return;
      }
    }
    setCurrentInput(currentInput + button);
  };

  const calculateResult = () => {
    try {
      // eslint-disable-next-line no-eval
      const evalResult = eval(currentInput);
      setResult(evalResult.toString());
    } catch (error) {
      Alert.alert('Error', 'Expresión inválida');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.inputText}>{currentInput || '0'}</Text>
        <Text style={styles.resultText}>{result ? `= ${result}` : ''}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.buttonRow}>
            {row.map((button) => (
              <TouchableOpacity
                key={button}
                style={[
                  styles.button,
                  button === '=' ? styles.equalsButton : null,
                  button === 'C' ? styles.clearButton : null,
                  button === 'DEL' ? styles.deleteButton : null,
                ]}
                onPress={() => handleButtonPress(button)}
              >
                <Text style={[
                  styles.buttonText,
                  (button === '=' || button === 'C' || button === 'DEL') ? styles.whiteText : styles.blackText
                ]}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      backgroundColor: '##d3d3d3',
      padding: 0,
      paddingRight: 100,
      paddingLeft: 100,
    justifyContent: 'flex-start',
  },
  displayContainer: {
    backgroundColor: '##d3d3d3',
    borderRadius: 10,
    paddingRight: 20,
    minHeight: 100,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  inputText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
  },
  resultText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#000',
    marginTop: 5,
  },
  buttonsContainer: {
    flexDirection: 'column',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#fff',
    flex: 1,
    marginHorizontal: 5,
    height: 70,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  whiteText: {
    color: '#ffffff',
  },
  blackText: {
    color: '#000000',
  },
  equalsButton: {
    backgroundColor: '#0000ff',
  },
  clearButton: {
    backgroundColor: '#ff5722',
  },
  deleteButton: {
    backgroundColor: '#f44336',
  },
});

export default CalculatorScreen;
