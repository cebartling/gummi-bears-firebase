import 'dotenv/config';
import {https} from 'firebase-functions';
// @ts-ignore
import gqlServer from './graphql/server';

const server = gqlServer();

// Graphql api
// https://us-central1-<project-name>.cloudfunctions.net/graphql/
const graphql = https.onRequest(server);

export {graphql};
