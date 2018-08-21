import apiHttp from './apiHttp';

export async function fetch() {
  return apiHttp.get('users');
}

export default {};
