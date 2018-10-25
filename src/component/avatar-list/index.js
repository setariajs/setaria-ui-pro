import AvatarList from './src/avatar-list.vue';

/* istanbul ignore next */
AvatarList.install = (Vue) => {
  Vue.component(AvatarList.name, AvatarList);
};

export default AvatarList;
