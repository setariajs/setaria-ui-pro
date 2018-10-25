import AvatarItem from '../avatar-list/src/avatar-item.vue';

/* istanbul ignore next */
AvatarItem.install = (Vue) => {
  Vue.component(AvatarItem.name, AvatarItem);
};

export default AvatarItem;
