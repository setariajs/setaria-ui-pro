/* eslint no-bitwise: ["error", { "allow": ["&"] }] */
import { util } from 'setaria';
import UserResource from './UserResource';

// 只读
const ACC_LEVEL_SEARCH = 1;
// 更新
const ACC_LEVEL_UPDATE = 2;
// 写入
const ACC_LEVEL_INSERT = 4;
// 删除
const ACC_LEVEL_DELETE = 8;

function getEntityObject(entityId) {
  const user = UserResource.getUser();
  return user.accResList.find(item => item.resId === entityId);
}

export default class AuthResource {
  static isCanCreate(entityId) {
    const entity = getEntityObject(entityId);
    // 不存在对应的实体信息
    if (util.isEmpty(entity)) {
      return false;
    }
    return entity.accLevel & ACC_LEVEL_INSERT;
  }

  static isCanSearch(entityId) {
    const entity = getEntityObject(entityId);
    // 不存在对应的实体信息
    if (util.isEmpty(entity)) {
      return false;
    }
    return entity.accLevel & ACC_LEVEL_SEARCH;
  }

  static isCanUpdate(entityId) {
    const entity = getEntityObject(entityId);
    // 不存在对应的实体信息
    if (util.isEmpty(entity)) {
      return false;
    }
    return entity.accLevel & ACC_LEVEL_UPDATE;
  }

  static isCanDelete(entityId) {
    const entity = getEntityObject(entityId);
    // 不存在对应的实体信息
    if (util.isEmpty(entity)) {
      return false;
    }
    return entity.accLevel & ACC_LEVEL_DELETE;
  }
}
