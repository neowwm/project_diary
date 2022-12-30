import {useContext} from 'react';
import {DataContext, DataActionsContext} from './Store';

export function useDataContext() {
  const value = useContext(DataContext);
  if (value === undefined) {
    throw new Error('useDataContext should be used within DataProvider');
  }

  return value;
}

export function useDataActionsContext() {
  const value = useContext(DataActionsContext);
  if (value === undefined) {
    throw new Error('useDataActionsContext should be used within DataProvider');
  }

  return value;
}
