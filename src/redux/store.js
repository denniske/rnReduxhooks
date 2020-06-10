import { createStore } from 'redux'
import notesReducer from './notesApp'
import {getcache, setcache} from "./statecache";

const store = createStore(notesReducer, getcache())

store.subscribe(() => setcache(store.getState()));

export default store
