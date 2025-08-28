import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ExpenseForm } from './ExpenseForm';
import { ExpenseCategory } from '../types';
import { TextInput, View, Text } from 'react-native';

// Mock para verificar as props
const mockSubmit = jest.fn();

describe('ExpenseForm Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders all form elements correctly', () => {
    const { getByLabelText, getByText } = render(
      <ExpenseForm onSubmit={mockSubmit} />
    );

    expect(getByLabelText('Descrição')).toBeTruthy();
    expect(getByLabelText('Valor')).toBeTruthy();
    expect(getByText('Categoria:')).toBeTruthy();
    expect(getByText('Mercado')).toBeTruthy();
    expect(getByText('Combustível')).toBeTruthy();
    expect(getByText('Lazer')).toBeTruthy();
    expect(getByText('Alimentação')).toBeTruthy();
    expect(getByText('Outros')).toBeTruthy();
    expect(getByText('Adicionar Gasto')).toBeTruthy();
  });

  it('submits form data correctly', () => {
    const { getByLabelText, getByText } = render(
      <ExpenseForm onSubmit={mockSubmit} />
    );

    fireEvent.changeText(getByLabelText('Descrição'), 'Compras do mês');
    fireEvent.changeText(getByLabelText('Valor'), '150.75');
    fireEvent.press(getByText('Combustível'));
    fireEvent.press(getByText('Adicionar Gasto'));

    expect(mockSubmit).toHaveBeenCalledWith({
      description: 'Compras do mês',
      amount: '150.75',
      category: 'combustivel'
    });
  });

  it('does not submit when required fields are empty', () => {
    const { getByText, getByLabelText } = render(<ExpenseForm onSubmit={mockSubmit} />);

    fireEvent.press(getByText('Adicionar Gasto'));
    expect(mockSubmit).not.toHaveBeenCalled();

    fireEvent.changeText(getByLabelText('Descrição'), 'Teste');
    fireEvent.press(getByText('Adicionar Gasto'));
    expect(mockSubmit).not.toHaveBeenCalled();

    fireEvent.changeText(getByLabelText('Descrição'), '');
    fireEvent.changeText(getByLabelText('Valor'), '100');
    fireEvent.press(getByText('Adicionar Gasto'));
    expect(mockSubmit).not.toHaveBeenCalled();
  });

  it('changes category selection correctly', () => {
    const { getByText } = render(<ExpenseForm onSubmit={mockSubmit} />);

    // Verifica seleção inicial (Mercado)
    expect(getByText('Mercado').parent?.parent?.props.value).toBe('mercado');

    // Muda para Lazer
    fireEvent.press(getByText('Lazer'));
    expect(getByText('Lazer').parent?.parent?.props.value).toBe('lazer');

    // Muda para Alimentação
    fireEvent.press(getByText('Alimentação'));
    expect(getByText('Alimentação').parent?.parent?.props.value).toBe('alimentacao');
  });

  it('clears form after successful submission', () => {
    const { getByLabelText, getByText } = render(
      <ExpenseForm onSubmit={mockSubmit} />
    );

    fireEvent.changeText(getByLabelText('Descrição'), 'Teste');
    fireEvent.changeText(getByLabelText('Valor'), '100');
    fireEvent.press(getByText('Adicionar Gasto'));

    expect(getByLabelText('Descrição').props.value).toBe('');
    expect(getByLabelText('Valor').props.value).toBe('');
    // Categoria mantém a última seleção (não reseta)
  });

  it('applies correct styles', () => {
    const { getByTestId } = render(
      <ExpenseForm onSubmit={mockSubmit} />
    );

    // Adicione testID aos componentes no ExpenseForm.tsx para esses testes
    const container = getByTestId('form-container');
    expect(container).toHaveStyle({ padding: 16 });

    const inputs = container.findAllByType(TextInput);
    inputs.forEach((input: React.ReactElement) => {
      expect(input).toHaveStyle({ marginBottom: 16 });
    });

    const radioItems = container.findAllByType(View).filter(
      (view: React.ReactElement) => view.props.style?.flexDirection === 'row'
    );
    radioItems.forEach((item: React.ReactElement) => {
      expect(item).toHaveStyle({
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8
      });
    });

    const button = getByTestId('submit-button');
    expect(button).toHaveStyle({ marginTop: 16 });
  });
});