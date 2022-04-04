import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import NavigationComponent from './components/Navigation';
import chatReducer from './store/reducers/ChatReducer';
import userReducer from "./store/reducers/UserReducer";

const rootReducer = combineReducers({
  chat: chatReducer,
  user: userReducer,
  // events: eventReducer
})
export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {

  return (
    <Provider store={store}>
      <NavigationComponent navigation={undefined} />
    </Provider>
  )
}


