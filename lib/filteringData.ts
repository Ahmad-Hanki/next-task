type TypeProp = 'gender' | 'status';

const filteringData = (type: TypeProp) => {
  if (type == 'gender') {
    return ['male', 'female', 'unknown'];
  } else {
    return ['alive', 'dead', 'unknown'];
  }
};

export default filteringData;
