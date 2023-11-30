import express from 'express';

import admin from './admin.api';
import auth from './auth.api'
import benevolent from './benevolent.api'
import action from './our_action.api'



const app = express();

app.use('/admin',admin)
app.use('/auth',auth)
app.use('/benevolents',benevolent)
app.use('/action',action)


export default app;
