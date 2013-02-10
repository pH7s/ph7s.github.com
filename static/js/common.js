/**
 * Author:          Pierre-Henry Soria <ph7software@gmail.com>
 * Copyright:       (c) 2013, Pierre-Henry Soria. All Rights Reserved.
 * License:         CC-BY - http://creativecommons.org/licenses/by/3.0/
 * Link:            http://github.com/pH-7
 */

$('a[title],img[title]').tipsy({gravity:$.fn.tipsy.autoNS,fade:!0,html:!0}); // For tipsy

document.getElementById('copyrightYear').innerHTML=(new Date).getFullYear(); // For copyright

// GitHub API
jQuery(document).ready(function($)
{
    Git.Git().repos().gist().bio();
});

/**
 * For target_blank with window.open JavaScript method.
 */

$('a').click(function()
{
    var href = $(this).attr('href');
    if (-1==href.indexOf('github.com') && (-1!=href.indexOf('http://') || -1!=href.indexOf('https://')))
    {
        var host = href.substr(href.indexOf(':')+3);
        if (-1!=host.indexOf('/')) {
            host = host.substring(0, host.indexOf('/'));
        }
        if (host != window.location.host) {
            window.open(href);
            return false;
        }
    }
});
