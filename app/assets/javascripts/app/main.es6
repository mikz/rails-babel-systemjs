'use strict';

import Welcome from 'app/welcome';
import jQ from 'jquery';

const welcome = new Welcome();

jQ(function() {
    console.log(welcome.greet('Michal'));
});
