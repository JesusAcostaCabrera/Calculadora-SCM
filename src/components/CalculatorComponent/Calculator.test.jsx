import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from './Calculator';

describe('Calculator', () => {
  test('renders calculator', () => {
    render(<Calculator />);
    expect(screen.getByText(/Calculadora SCM/i)).toBeInTheDocument();
  });

  test('can perform addition', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getAllByRole('textbox')[1]).toHaveValue('3');
  });

  test('can perform subtraction', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getAllByRole('textbox')[1]).toHaveValue('2');
  });

  test('can perform multiplication', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('*'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getAllByRole('textbox')[1]).toHaveValue('12');
  });

  test('can perform division', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('8'));
    fireEvent.click(screen.getByText('/'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getAllByRole('textbox')[1]).toHaveValue('4');
  });

  test('handles division by zero', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('/'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getAllByRole('textbox')[1]).toHaveValue('Infinity');
  });
  
  test('can clear the input', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('Clear'));
    expect(screen.getAllByRole('textbox')[0]).toHaveValue('');
    expect(screen.getAllByRole('textbox')[1]).toHaveValue('');
  });

  test('handles invalid input', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('*'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getAllByRole('textbox')[1]).toHaveValue('Error');
  });
});
