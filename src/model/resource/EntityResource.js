import { store, util } from 'setaria';
import UmeHttp from '../UmeHttp';

const COL_NOT_NULL = 1;

function toJsonSchema(desc, constraints = []) {
  const schema = {
    title: desc.entCfg.entName,
    description: desc.entCfg.entName,
    type: 'object',
    required: [],
    properties: {},
  };
  const uiSchema = {};
  // 设置必须输入项目
  const primaryKeyColSet = desc.primaryKeyColSet || [];
  const disableColSet = desc.disableColSet || [];
  const hideColSet = desc.hideColSet || [];
  const { colCfgMap } = desc;
  // 主键
  primaryKeyColSet.forEach(primaryKey => schema.required.push(primaryKey));
  // 非空键
  Object.keys(colCfgMap).forEach((colKey) => {
    const { colId, notNull } = colCfgMap[colKey];
    if (notNull === COL_NOT_NULL) {
      const notNullKey = schema.required.find(r => r === colId);
      // 排除不可用项目
      const disabledKey = disableColSet.find(d => d === colId);
      // 排除隐藏项目
      const hideKey = hideColSet.find(h => h === colId);
      if (notNullKey === undefined && disabledKey === undefined &&
        hideKey === undefined) {
        schema.required.push(colId);
      }
    }
  });
  // 设置显示的项目
  Object.keys(colCfgMap).forEach((colKey) => {
    const {
      colId,
      colName,
      dataJdbcType,
      dataLength,
      dataLengthMin,
      dataLengthMax,
    } = colCfgMap[colKey];
    // 排除不可用项目
    const disabledKey = disableColSet.find(d => d === colId);
    // 排除隐藏项目
    const hideKey = hideColSet.find(h => h === colId);
    // 不显示不可用项目和隐藏项目
    if (disabledKey === undefined && hideKey === undefined) {
      // 数据类型
      let type = '';
      switch (dataJdbcType) {
        case -1:
        case 1:
        case 12:
          type = 'string';
          break;
        case -5:
        case 4:
          type = 'integer';
          break;
        case 2:
        case 3:
        case 6:
        case 7:
        case 8:
          type = 'number';
          break;
        default:
          type = 'string';
      }
      // 数据名称
      const title = colName;
      // 数据长度
      let minLength = null;
      let maxLength = null;
      if (typeof dataLengthMin === 'number') {
        minLength = dataLengthMin;
      }
      if (typeof dataLengthMax === 'number') {
        maxLength = dataLengthMax;
      } else {
        maxLength = dataLength;
      }
      schema.properties[colId] = {
        type,
        title,
        minLength,
        maxLength,
      };
    }
  });
  // 制约
  Object.keys(constraints).forEach((consKey) => {
    const schemaKeyObject = schema.properties[consKey];
    const oneOfArray = [];
    constraints[consKey].forEach((c) => {
      let value = null;
      // 取得当前字段的类型定义
      if (schemaKeyObject.type === 'number' || schemaKeyObject.type === 'integer') {
        value = parseFloat(c.storeValue);
      } else {
        value = `${c.storeValue}`;
      }
      oneOfArray.push({
        const: value,
        title: c.dispValue,
      });
    });
    schema.properties[consKey].oneOf = oneOfArray;
  });
  // uiSchema
  Object.keys(colCfgMap).forEach((colKey) => {
    const dispType = util.get(colCfgMap, `${colKey}.dispType`, '');
    let uiWidget = null;
    switch (dispType) {
      case 1:
        uiWidget = 'radio';
        break;
      case 2:
        uiWidget = 'select';
        break;
      case 3:
        uiWidget = 'checkbox';
        break;
      default:
        uiWidget = null;
    }
    if (uiWidget !== null) {
      uiSchema[colKey] = {
        'ui:widget': uiWidget,
      };
    }
  });
  return {
    schema,
    uiSchema,
  };
}

export default class EntityResource {
  /**
   * 取得指定Entity的定义和描述
   * @param  {String} entityId   Entity ID
   * @return {Object}
   */
  static getEmDesc(entityId) {
    return store.dispatch('entity/getDesc', entityId);
  }

  /**
   * 取得指定Entity的约束
   * @param  {String} entityId   Entity ID
   * @return {Object}
   */
  static getEmConstraint(entityId) {
    return store.dispatch('entity/getConstraint', entityId);
  }

  /**
   * 取得指定Entity的定义和描述
   * @param  {String} entityId   Entity ID
   * @return {Object}
   */
  static getEmDataList(entityId, condition) {
    const jsonInput = condition;
    if (util.isEmpty(jsonInput.theSQLCondition)) {
      delete jsonInput.theSQLCondition;
    }
    return UmeHttp.invoke('EMS20001', ['Retrieve', entityId, jsonInput]);
  }

  /**
   * 取得指定Entity的数据（与制约的值合并）
   * 如果Entity项目存在制约的场合，Entity的值变为对象{ label: '显示值', value: '存储值' }
   * @static
   * @param {any} entityId
   * @param {any} condition
   * @returns
   * @memberof EntityResource
   */
  static getEmDataWithConstraintsList(entityId, condition) {
    return new Promise((resolve) => {
      const getEmDataListPromise = this.getEmDataList(entityId, condition);
      const getEmConstraintPromise = this.getEmConstraint(entityId);
      Promise.all([getEmDataListPromise, getEmConstraintPromise])
        .then((res) => {
          const emDataList = res[0];
          const emConstraints = res[1];
          resolve(emDataList.map((entity) => {
            const ret = entity;
            Object.keys(entity).forEach((entityItemKey) => {
              const constraintsList = emConstraints[entityItemKey];
              if (!util.isEmpty(constraintsList)) {
                const obj = constraintsList.find(item => item.storeValue === `${entity[entityItemKey]}`);
                if (obj) {
                  ret[entityItemKey] = {
                    value: entity[entityItemKey],
                    label: obj.dispValue,
                  };
                }
              }
            });
            return ret;
          }));
        });
    });
  }

  /**
   * 根据搜索条件取得指定Entity数据的数量
   * @static
   * @param {any} entityId
   * @param {any} condition
   * @memberof EntityDescResource
   */
  static getEmDataCount(entityId, condition) {
    const jsonInput = condition;
    if (util.isEmpty(jsonInput.theSQLCondition)) {
      delete jsonInput.theSQLCondition;
    }
    return UmeHttp.invoke('EMS20001', ['Count', entityId, jsonInput]);
  }

  /**
   * 取得指定Entity的Json Schema定义
   * @static
   * @param {any} entityId
   * @memberof EntityDescResource
   */
  static getEmDescSchema(entityId) {
    const emDescPromise = this.getEmDesc(entityId);
    const emConstraintsPromise = this.getEmConstraint(entityId);
    return new Promise((resolve) => {
      Promise.all([emDescPromise, emConstraintsPromise])
        .then((res) => {
          const emDesc = res[0];
          const emConstraints = res[1];
          resolve(toJsonSchema(emDesc, emConstraints));
        });
    });
  }

  /**
   * 根据主键值取得对应的实体数据
   * @static
   * @param {any} entityId
   * @param {any} primaryObj
   * @memberof EntityResource
   */
  static getEmDataByPrimaryKey(entityId, primaryObj) {
    return UmeHttp.invoke('EMS20001', ['RetrieveByPrimaryKey', entityId, primaryObj]);
  }

  /**
   * 新增实体数据
   * @static
   * @param {any} entityId
   * @param {any} entityObj
   * @memberof EntityResource
   */
  static createEmData(entityId, entityObj) {
    return UmeHttp.invoke('EMS20002', ['Create', entityId, entityObj]);
  }

  /**
   * 修改实体数据
   * @static
   * @param {any} entityId
   * @param {any} entityObj
   * @memberof EntityResource
   */
  static updateEmData(entityId, entityObj) {
    return UmeHttp.invoke('EMS20002', ['Update', entityId, entityObj]);
  }

  /**
   * 删除实体数据
   * @static
   * @param {any} entityId
   * @param {any} entityObj
   * @memberof EntityResource
   */
  static deleteEmData(entityId, entityObj) {
    return new Promise((resolve) => {
      this.getEmPrimaryObj(entityId, entityObj)
        .then((primaryObj) => {
          UmeHttp.invoke('EMS20002', ['Delete', entityId, primaryObj])
            .then(() => {
              resolve();
            });
        });
    });
  }

  /**
   * 取得主键数据
   * @static
   * @param {any} entityId
   * @param {any} entityObj
   * @returns
   * @memberof EntityResource
   */
  static getEmPrimaryObj(entityId, entityObj) {
    return new Promise((resolve) => {
      this.getEmDesc(entityId)
        .then(({ primaryKeyColSet }) => {
          const ret = {};
          primaryKeyColSet.forEach((key) => {
            ret[key] = entityObj[key];
          });
          resolve(ret);
        });
    });
  }
}
