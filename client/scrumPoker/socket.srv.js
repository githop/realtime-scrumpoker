/**
 * Created by githop on 10/29/15.
 */

 function socket(socketFactory) {
  "use strict";
  return socketFactory({});
}

socket.$inject = ['socketFactory'];

export default socket;