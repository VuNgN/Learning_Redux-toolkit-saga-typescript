import {delay, put, takeEvery} from '@redux-saga/core/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {incrementSaga, incrementSagaSuccess} from './counterSlice';

//export function* log(action: PayloadAction) {
//console.log('Log', action);
//}

function* handleIncrementSaga(action: PayloadAction<number>) {
  // wait 2s
  console.log('Waiting 2s');
  yield delay(2000);

  // Dispath action succeeded
  console.log('Dispath action succeeded');
  yield put(incrementSagaSuccess(action.payload));

}

export default function* counterSaga() {
  //console.log('counter saga');

  yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
}
