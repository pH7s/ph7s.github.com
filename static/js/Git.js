/**
 * Title:           GitHub API
 * Description:     GitHub API | jQuery plugin
 *
 * Author:          Pierre-Henry Soria <ph7software@gmail.com>
 * Copyright:       (c) 2013, Pierre-Henry Soria. All Rights Reserved.
 * License:         MIT License (http://opensource.org/licenses/mit-license.php)
 * Link:            http://github.com/pH-7
 */

var Git = {

    // Properties
    sApiUrl: 'https://api.github.com/users/',
    sUsername: '',
    sHtmlGit: $('#git'),
    sHtmlRepos: $('#repos'),
    sHtmlGists: $('#gists'),
    sErrMsg: '<div class="warning_block"><p>Oops! An error occurred. Please try again later!</p></div>',

    // Constructor
    Git: function ()
    {
        oMe = this; // Self Object
        this.sUsername = this.sHtmlGit.data('gituser'); // Get the GitHub Username

        return this;
    },

    repos: function ()
    {
        var sQueryUrl = oMe.sHtmlRepos.data('queryurl');

        $.getJSON(this.sApiUrl + this.sUsername + '/repos' + sQueryUrl + '&callback=?', function (oData)
        {
            if (oData.data.length  <1) return false;

            oMe.sHtmlRepos.append('<h3>Latest Public Repositories</h3>');

            $.each(oData.data, function (i, sVal)
            {
                if (this.private == false)
                {

                    var sFork = this.fork ? ('<span class="forked">Forked</span>') : '';
                    var sOpenIssues = this.open_issues ? ('<span title="Open Issues" aria-hidden="true">' + this.open_issues + '</span>') : '';
                    var sHtml = $('<li>\
                            <h3><a href="' + this.html_url + '">' + this.name + '</a></h3>\
                            ' + sFork + '\
                            <span id="date" title="Pushed At" aria-hidden="true">' + this.pushed_at.slice(0, 10) + '</span>\
                            <div>\
                                <span title="Language" aria-hidden="true">' + (this.language == null ? '...' : this.language) + '</span>\
                                <span title="Watchers" aria-hidden="true">' + this.watchers + '</span>\
                                <span title="Forks" aria-hidden="true">' + this.forks + '</span>\
                                ' + sOpenIssues + '\
                            </div>\
                            <p>\
                                ' + this.description + '\
                            </p>\
                        </li>').hide();

                    oMe.sHtmlRepos.append(sHtml);
                    $(sHtml).fadeIn(450);
                }
            })
        }).error(function () {
            oMe.sHtmlGit.append(oMe.sErrMsg);
        });

        return this;
    },

    gist: function ()
    {
        var sQueryUrl = oMe.sHtmlGists.data('queryurl');

        $.getJSON(this.sApiUrl + this.sUsername + '/gists' + sQueryUrl + '&callback=?', function (oData)
        {
            if (oData.data.length  <1) return false;

            oMe.sHtmlGists.append('<h3>Latest Public Gists</h3>');

            $.each(oData.data, function (i, sVal)
            {
                if (this.public == true)
                {
                    var sDesc = (this.description !== '') ? this.description : '<em>Empty description</em>';
                    var sComments = (this.comments !== 0) ? '<a href="' + this.html_url + '#comments"><span title="Comments"></span></a>' : '';
                    var sHtml = $('<li>\
                            <h3><a href="' + this.html_url + '">gist: ' + this.id + '</a></h3>\
                            <span id="date" title="Created at">' + this.created_at.slice(0, 10) + '</span>\
                            <p>' + sDesc + '</p>\
                            <div>' + sComments + '</div>\
                        </li>').hide();

                    oMe.sHtmlGists.append(sHtml);
                    $(sHtml).fadeIn(450);
                }
            })
        }).error(function () {
            oMe.sHtmlGit.append(oMe.sErrMsg);
        });

        return this;
    }

};
