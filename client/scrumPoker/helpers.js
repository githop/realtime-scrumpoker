/**
 * Created by githop on 11/6/15.
 */


export function existy(x) {
  return x != null;
}

export function truthy(x) {
  return x !== false && existy(x);
}
