/**
 * Author:          Pierre-Henry Soria <ph7software@gmail.com>
 * Copyright:       (c) 2013-2015, Pierre-Henry Soria. All Rights Reserved.
 * License:         CC-BY - http://creativecommons.org/licenses/by/3.0/
 * Link:            http://github.com/pH-7
 */

var aFileList = [
    'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min',
    './static/js/Git',
    './static/js/jquery.tipsy',
    './static/js/common',
    'http://s7.addthis.com/js/250/addthis_widget'
];

for(i in aFileList)
    document.write('<script src="' + aFileList[i] + '.js"></script>\n');
