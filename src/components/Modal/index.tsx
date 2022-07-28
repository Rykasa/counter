import { FormEvent, useCallback, useEffect, useState } from 'react';
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

  const { closeModal, createCounter, deleteCounter, resetAmount, updateCounter } =
    bindActionCreators(actionCreators, dispatch);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (title.trim().length === 0) {
      setError(true);
      return;
    }

    if (!isEditing) {
      createCounter({ id: uuidv4(), title, value: value ? parseInt(value) : 0 });
      closeModal();
      setError(false);
    }
  }

  function handleDeleteCounter() {
    if (counter) {
      deleteCounter(counter.id);
      handleCloseModal();
    }
  }

  function handleResetCounter() {
    if (counter) {
      resetAmount(counter.id);
      setValue('0');
    }
  }

  function handleUpdateCounter() {
    if (counter) {
      updateCounter({ id: counter.id, title, value: parseInt(value) });
      handleCloseModal();
    }
  }

  const handleCloseModal = useCallback(() => {
    closeModal();
    setError(false);
  }, [closeModal]);

  useEffect(() => {
    if (counter) {
      setIsEditing(true);

      setTitle(counter.title);
      if (counter.value) {
        setValue(counter.value.toString());
      }
    } else {
      setIsEditing(false);
    }
  }, [counter]);

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && handleCloseModal();
    };

    window.addEventListener('keyup', handleKeyUp);

    return () => window.removeEventListener('keyup', handleKeyUp);
  }, [handleCloseModal]);

  return (
    <C.Modal aria-label='modal' aria-hidden={!state.isModalOpen}>
      <C.ModalCenter>
        <C.Form aria-label='counter form' role='form' onSubmit={handleSubmit}>
          <C.CloseButton type='button' data-testid='close' onClick={handleCloseModal}>
            <X />
          </C.CloseButton>
          {error && <C.Error>Invalid fields</C.Error>}
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
                <Button
                  type='button'
                  title='Delete'
                  bgColor='#C52b2b'
                  onClick={handleDeleteCounter}
                />
                <Button
                  type='button'
                  title='Reset'
                  bgColor='#38A3A5'
                  onClick={handleResetCounter}
                />
                <Button
                  type='button'
                  title='Update'
                  bgColor='#57CC99'
                  onClick={handleUpdateCounter}
                />
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
//202040
//80ED99
//57CC99
//C7F9CC
//38A3A5
