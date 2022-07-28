import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState, AppDispatch } from '../store';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();

export function useAppStore() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.counter);

  return { dispatch, state };
}
