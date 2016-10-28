import { combineReducers } from 'redux'
import * as add from './PhishingDomainAdd';
import * as root from './PhishingDomainRoot';

const phishingDomain = combineReducers<any>({
    add: add.reducer,
    root: root.reducer
});

export default phishingDomain;