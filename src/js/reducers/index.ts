import { combineReducers } from 'redux'
import * as navigation from './navigation/Navigation'
import user from './user'
import client from './client'
import campaign from './campaign'
import schedule from './schedule'
import emailServer from './emailServer'
import phishingDomain from './phishingDomain'
import landingPages from './landingPages'
import redirectPages from './redirectPages'
import * as login from './identity/Login'
import * as profile from './identity/Profile'
import { AppState } from '../model/state/AppState'
import engagement from './engagement';
const reduxForm = require('redux-form');

const app = combineReducers<AppState>({
    navigation: navigation.reducer,    
    user: user,
    client: client,
    campaign: campaign,
    schedule: schedule,
    emailServer: emailServer,
    phishingDomain: phishingDomain,
    login: login.reducer,
    profile: profile.reducer,
    landingPages: landingPages,
    redirectPages: redirectPages,
    engagement: engagement,
    form: reduxForm.reducer
});

export default app;