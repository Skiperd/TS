import _ from 'lodash'
_.mul = function(array:number[]):number {
  return array.reduce((ac,item) => ac * item)
}

global.MINHAGLOBAL = 'wow';

export default _;
