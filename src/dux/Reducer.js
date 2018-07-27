
const initialState = {
    first: "",
    last: "",
    email: "",
    bdayday: "",
    bdaymonth: "",
    bdayyear: "",
    vtype1: "",
    vtype2: "",
    vtype3: "",
    stype1: "",
    stype2: "",
    stype3: ""
}

const UPDATE_FIRST = 'UPDATE_FIRST';
const UPDATE_LAST = 'UPDATE_LAST';
const UPDATE_EMAIL = 'UPDATE_EMAIL';
const UPDATE_BDAYDAY = 'UPDATE_BDAYDAY';
const UPDATE_BDAYMONTH = 'UPDATE_BDAYMONTH';
const UPDATE_BDAYYEAR = 'UPDATE_BDAYYEAR';
const UPDATE_VTYPE1 = 'UPDATE_VTYPE1';
const UPDATE_VTYPE2 = 'UPDATE_VTYPE2';
const UPDATE_VTYPE3 = 'UPDATE_VTYPE3';
const UPDATE_STYPE1 = 'UPDATE_STYPE1';
const UPDATE_STYPE2 = 'UPDATE_STYPE1';
const UPDATE_STYPE3 = 'UPDATE_STYPE3';

function reducer(state = initialState, action) {
    console.log(": Action ->", action);
  
    switch (action.type) {
  
      case UPDATE_FIRST:
        return Object.assign({}, state, { first: action.payload });
  
      case UPDATE_LAST:
        return Object.assign({}, state, { last: action.payload });
  
      case UPDATE_EMAIL:
        return Object.assign({}, state, { email: action.payload });
  
      case UPDATE_BDAYDAY:
        return Object.assign({}, state, { bdayday: action.payload });
  
      case UPDATE_BDAYMONTH:
        return Object.assign({}, state, { bdaymonth: action.payload });
  
      case UPDATE_BDAYYEAR:
        return Object.assign({}, state, { bdayyear: action.payload });
  
      case UPDATE_VTYPE1:
        return Object.assign({}, state, { vtype1: action.payload });
  
      case UPDATE_VTYPE2:
        return Object.assign({}, state, { vtype2: action.payload });
  
      case UPDATE_VTYPE3:
        return Object.assign({}, state, { vtype3: action.payload });
  
      case UPDATE_STYPE1:
        return Object.assign({}, state, { stype1: action.payload });

     case UPDATE_STYPE2:
        return Object.assign({}, state, { stype2: action.payload });

      case UPDATE_STYPE3:
        return Object.assign({}, state, { stype3: action.payload });
  
  
      default:
        return state;
    }
  }
  
  
  export function updateFirstName(first) {
    return {
      type: UPDATE_FIRST,
      payload: first
    };
  }
  
  export function updateLastName(last) {
    return {
      type: UPDATE_LAST,
      payload: last
    };
  }
  
  export function updateEmail(email) {
    return {
      type: UPDATE_EMAIL,
      payload: email
    };
  }
  
  export function updateDay(bdayday) {
    return {
      type: UPDATE_BDAYDAY,
      payload: bdayday
    };
  }
  
  export function updateMonth(bdaymonth) {
    return {
      type: UPDATE_BDAYMONTH,
      payload: bdaymonth
    };
  }
  export function updateYear(bdayyear) {
    return {
      type: UPDATE_BDAYYEAR,
      payload: bdayyear
    };
  }
  export function updateVtype1(vtype1) {
    return {
      type: UPDATE_VTYPE1,
      payload: vtype1
    };
  }
  export function updateVtype2(vtype2) {
    return {
      type: UPDATE_VTYPE2,
      payload: vtype2
    };
  }
  export function updateVtype3(vtype3) {
    return {
      type: UPDATE_VTYPE3,
      payload: vtype3
    };
  }
  export function updateStype1(stype1) {
    return {
      type: UPDATE_STYPE1,
      payload: stype1
    };
  }
  export function updateStype2(stype2) {
    return {
      type: UPDATE_STYPE2,
      payload: stype2
    };
  }
  export function updateStype3(stype3) {
    return {
      type: UPDATE_STYPE3,
      payload: stype3
    };
  }
  
  export default reducer;