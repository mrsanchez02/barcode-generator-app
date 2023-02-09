import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('render input component', () => {
  test("would show label 'Type here:'", ()=> {
    render(<Input />);
    const labelElement = screen.getByLabelText('Type here:')
    expect(labelElement).toBeInTheDocument()
  })
})
