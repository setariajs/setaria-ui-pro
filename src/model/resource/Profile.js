import apiHttp from './apiHttp';

export async function fetchBasic() {
  return apiHttp.get('profile/basic', null, {
    showLoading: false,
  });
}

export async function fetchAdvanced() {
  return apiHttp.get('profile/advanced', null, {
    showLoading: false,
  });
}

export default {
  fetchBasic,
  fetchAdvanced,
};
