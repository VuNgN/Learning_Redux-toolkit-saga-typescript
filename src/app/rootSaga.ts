import {all} from 'redux-saga/effects';
import counterSaga from '../features/counter/counterSaga'

function* HelloSaga() {
  console.log("Hello Saga!");
}

export default function* rootSaga() {
  console.log("Root saga");
  yield all([HelloSaga(), counterSaga()]);
}
