import PocketBase from 'pocketbase';
import { PUBLIC_BACKEND_URL } from '$env/static/public';

const pb = new PocketBase(PUBLIC_BACKEND_URL);

export default pb;
