import apiHttp from './apiHttp';

export async function queryFakeList(params) {
  return apiHttp.get('fake_list', params, {
    showLoading: false,
  });
}

export default {
  queryFakeList,
};
