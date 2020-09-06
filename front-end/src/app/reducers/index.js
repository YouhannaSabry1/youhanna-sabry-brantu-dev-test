import { combineReducers } from 'redux';
import ProductReducer from './product_reducer';

const rootReducer = combineReducers({
productsList: ProductReducer
});

export default rootReducer;
