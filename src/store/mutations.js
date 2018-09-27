// 对状态的操作, mutation处理的都是 "同步事务"
import * as type from './mutation-types';
const mutations = {
  [type.SET_MPVUEINFO](state, mpvueInfo) { // eslint-disable-line
    state.mpvueInfo = mpvueInfo;
  }
}

export default mutations;
