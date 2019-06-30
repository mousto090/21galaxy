// import './commons';
import '../scss/policies.scss';

require.ensure(["./shared"], function(require) {
    
    var shared = require("./shared").default;
    // shared.share("This is page B");
});