import apiHttp from './apiHttp';

export async function fetch() {
  return apiHttp.get('tasks');
}

export default {};
