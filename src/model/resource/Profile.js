import apiHttp from './apiHttp';

export async function fetchBasic() {
  return apiHttp.get('profile/basic', null, {
    showLoading: false,
  });
}

export default {
  fetchBasic,
};
