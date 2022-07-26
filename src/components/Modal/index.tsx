import { X } from 'phosphor-react';
import { Button } from '../Button';
import * as C from './styles';

export function Modal() {
  return (
    <C.Modal>
      <C.ModalCenter>
        <C.Form>
          <C.CloseButton type='button'>
            <X />
          </C.CloseButton>
          <C.Label htmlFor='title'>Title</C.Label>
          <C.Input name='title' type='text' placeholder='E.g. read books' />
          <C.Label htmlFor='amount'>Amount</C.Label>
          <C.Input name='amount' type='number' placeholder='0' />
          <C.ButtonsWrapper>
            <Button type='button' title='Delete' bgColor='#C52b2b' />
            <Button type='button' title='Reset' bgColor='#38A3A5' />
            {/* <Button type='button' title='Create' bgColor='#38A3A5' /> */}
          </C.ButtonsWrapper>
        </C.Form>
      </C.ModalCenter>
    </C.Modal>
  );
}
