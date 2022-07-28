import { FormEvent, useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { v4 as uuidv4 } from 'uuid';

import { useAppStore } from '../../hooks/useAppStore';
import { actionCreators } from '../../store';

import { Button } from '../Button';
import { X } from 'phosphor-react';
import * as C from './styles';
import { CounterType } from '../../types';

interface ModalProps {
  counter?: CounterType;
}

export function Modal({ counter }: ModalProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(false);
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const { state, dispatch } = useAppStore();

  const { closeModal, createCounter } = bindActionCreators(actionCreators, dispatch);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (title.trim().length === 0 || value.trim().length === 0) {
      setError(true);
      return;
    }

    createCounter({ id: uuidv4(), title, value: parseInt(value) });
    closeModal();
    setError(false);
  }

  function handleCloseModal() {
    closeModal();
    setError(false);
  }

  useEffect(() => {
    if (counter) {
      setIsEditing(true);

      setTitle(counter.title);
      setValue(counter.value.toString());
    }
  }, []);

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && handleCloseModal();
    };

    window.addEventListener('keyup', handleKeyUp);

    return () => window.removeEventListener('keyup', handleKeyUp);
  }, []);

  return (
    <C.Modal aria-label='modal' aria-hidden={!state.isModalOpen}>
      <C.ModalCenter>
        <C.Form aria-label='counter form' role='form' onSubmit={handleSubmit}>
          <C.CloseButton type='button' data-testid='close' onClick={handleCloseModal}>
            <X />
          </C.CloseButton>
          {error && <span>Invalid fields</span>}
          <C.Label htmlFor='title' aria-label='title'>
            Title
          </C.Label>
          <C.Input
            name='title'
            type='text'
            placeholder='E.g. read books'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <C.Label htmlFor='value' aria-label='value'>
            Value
          </C.Label>
          <C.Input
            name='value'
            type='number'
            placeholder='0'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <C.ButtonsWrapper>
            {isEditing ? (
              <>
                <Button type='button' title='Delete' bgColor='#C52b2b' />
                <Button type='button' title='Reset' bgColor='#38A3A5' />
              </>
            ) : (
              <Button type='submit' title='Create' bgColor='#38A3A5' />
            )}
          </C.ButtonsWrapper>
        </C.Form>
      </C.ModalCenter>
    </C.Modal>
  );
}
