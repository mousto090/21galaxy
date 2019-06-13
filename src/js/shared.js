/**
 * @see https://github.com/webpack/webpack/tree/master/examples/multiple-entry-points
 */
import './commons';
var shared = {
    share: function(msg) {
        console.log('in share');
        
        console.log(msg);
    }
};
// module.exports.shared = shared;
// export  var shared1 = shared;
// export  {shared};
export default shared;