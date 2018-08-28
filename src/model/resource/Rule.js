import apiHttp from './apiHttp';

export async function fetch(condition) {
  return apiHttp.get('rule', condition, {
    showLoading: false,
  });
}

export async function create(desc) {
  return apiHttp.post('rule', {
    desc,
    method: 'post',
  }, {
    showLoading: false,
  });
}

export async function update(key, name, desc) {
  return apiHttp.post('rule', {
    key,
    name,
    desc,
    method: 'update',
  }, {
    showLoading: false,
  });
}

export async function remove(keyArray) {
  return apiHttp.post('rule', {
    key: keyArray,
    method: 'delete',
  }, {
    showLoading: false,
  });
}

export default {};
