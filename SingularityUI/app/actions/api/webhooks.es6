import { buildApiAction } from './base';

export const FetchAction = buildApiAction('FETCH_WEBHOOKS', {url: '/webhooks'});
