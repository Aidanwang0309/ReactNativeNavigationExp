/**
 * Created by shuaiwang on 3/15/18.
 */
import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

export default combineReducers({
    auth: AuthReducer
});