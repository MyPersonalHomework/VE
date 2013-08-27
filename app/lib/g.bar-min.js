


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>angular-barchart/js/g.bar-min.js at master · mmoats/angular-barchart</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="fe3.rs.github.com">
    <meta name="ruby" content="ruby 2.0.0p247-github4 (2013-06-27) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="xhr-socket" href="/_sockets" />
    
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="5174271" name="octolytics-actor-id" /><meta content="MyPersonalHomework" name="octolytics-actor-login" /><meta content="366c6d6a621f2ec1ce9b739bc14778c0b273499673d4b5194ebda5b9e9542240" name="octolytics-actor-hash" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="iulTZM/xHZQEqQapxEdg4uDkaog3+KMGmquSDgx8VvQ=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-e4602892df924f8f230b44ddccd223303a30c009.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-8230ebbc9c20ca36d6a93a15aa009fef0d31b37f.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://github.global.ssl.fastly.net/assets/frameworks-f86a2975a82dceee28e5afe598d1ebbfd7109d79.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-3f540da8525ed11e19496375dffc214b5576abbb.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="810830414f452c54022be8542f270cca">

        <link data-pjax-transient rel='permalink' href='/mmoats/angular-barchart/blob/962cd64520a8d0321fa62a2a183acf6f9f6eca14/js/g.bar-min.js'>
  <meta property="og:title" content="angular-barchart"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/mmoats/angular-barchart"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="angular-barchart - angular.js / g.raphael.barchart"/>

  <meta name="description" content="angular-barchart - angular.js / g.raphael.barchart" />

  <meta content="1703750" name="octolytics-dimension-user_id" /><meta content="mmoats" name="octolytics-dimension-user_login" /><meta content="8616952" name="octolytics-dimension-repository_id" /><meta content="mmoats/angular-barchart" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="8616952" name="octolytics-dimension-repository_network_root_id" /><meta content="mmoats/angular-barchart" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/mmoats/angular-barchart/commits/master.atom" rel="alternate" title="Recent Commits to angular-barchart:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob windows vis-public env-production ">

    <div class="wrapper">
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    <div class="divider-vertical"></div>

    
    <a href="/notifications" class="notification-indicator tooltipped downwards" data-gotokey="n" title="You have no unread notifications">
        <span class="mail-status all-read"></span>
</a>    <div class="divider-vertical"></div>


      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="MyPersonalHomework"
      data-repo="mmoats/angular-barchart"
      data-branch="master"
      data-sha="8517d886c30443279b70e971e95b7784b3f4ff0e"
  >

    <input type="hidden" name="nwo" value="mmoats/angular-barchart" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
            <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/MyPersonalHomework" class="name">
        <img height="20" src="https://1.gravatar.com/avatar/0842473d57060a158e470581cf8f110d?d=https%3A%2F%2Fidenticons.github.com%2F1ed902d92d1501c18e3745bf95d07ce4.png&amp;s=140" width="20" /> MyPersonalHomework
      </a>
    </li>

      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo" aria-label="Create a new repo">
          <span class="octicon octicon-repo-create"></span>
        </a>
      </li>

      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          aria-label="Account settings (You have no verified emails)"
          title="Account settings (You have no verified emails)">
          <span class="octicon octicon-tools"></span>
        </a>
          <span class="settings-warning">!</span>
      </li>
      <li>
        <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out" aria-label="Sign out">
          <span class="octicon octicon-log-out"></span>
        </a>
      </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>



    <li class="section-title">
      <span title="mmoats/angular-barchart">This repository</span>
    </li>
    <li>
      <a href="/mmoats/angular-barchart/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>
</ul>

</div>


    
  </div>
</div>

      

      

<div class="flash-global flash-warn">
<div class="container">

    <h2>
      You don't have any verified emails.  We recommend <a href="https://github.com/settings/emails">verifying</a> at least one email.
    </h2>
    <p>
      Email verification helps our support team help you in case you have any email issues or lose your password.
    </p>












</div>
</div>



          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="iulTZM/xHZQEqQapxEdg4uDkaog3+KMGmquSDgx8VvQ=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="8616952" />

    <div class="select-menu js-menu-container js-select-menu">
        <a class="social-count js-social-count" href="/mmoats/angular-barchart/watchers">
          1
        </a>
      <span class="minibutton select-menu-button with-count js-menu-target">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container">

            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  
<div class="js-toggler-container js-social-container starring-container ">
  <a href="/mmoats/angular-barchart/unstar" class="minibutton with-count js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
  </a>
  <a href="/mmoats/angular-barchart/star" class="minibutton with-count js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star"></span><span class="text">Star</span>
  </a>
  <a class="social-count js-social-count" href="/mmoats/angular-barchart/stargazers">0</a>
</div>

  </li>


        <li>
          <a href="/mmoats/angular-barchart/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/mmoats/angular-barchart/network" class="social-count">0</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/mmoats" class="url fn" itemprop="url" rel="author"><span itemprop="title">mmoats</span></a></span
          ><span class="repohead-name-divider">/</span><strong
          ><a href="/mmoats/angular-barchart" class="js-current-repository js-repo-home-link">angular-barchart</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container ">

        <div class="repository-sidebar">
            

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/mmoats/angular-barchart" aria-label="Code" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /mmoats/angular-barchart">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/mmoats/angular-barchart/issues" aria-label="Issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /mmoats/angular-barchart/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/mmoats/angular-barchart/pulls" aria-label="Pull Requests" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /mmoats/angular-barchart/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" title="Wiki">
          <a href="/mmoats/angular-barchart/wiki" aria-label="Wiki" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_wiki /mmoats/angular-barchart/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/mmoats/angular-barchart/pulse" aria-label="Pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /mmoats/angular-barchart/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/mmoats/angular-barchart/graphs" aria-label="Graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /mmoats/angular-barchart/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/mmoats/angular-barchart/network" aria-label="Network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /mmoats/angular-barchart/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    </ul>

  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/mmoats/angular-barchart.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/mmoats/angular-barchart.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="git@github.com:mmoats/angular-barchart.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:mmoats/angular-barchart.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/mmoats/angular-barchart" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/mmoats/angular-barchart" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>



<p class="clone-options">You can clone with
    <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
    <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
    <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>,
  and <a href="https://help.github.com/articles/which-remote-url-should-i-use">other methods.</a>
</p>


  <a href="github-windows://openRepo/https://github.com/mmoats/angular-barchart" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/mmoats/angular-barchart/archive/master.zip"
                   class="minibutton sidebar-button"
                   title="Download this repository as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:7e703c74632395397ff8a9e9a02f0ab8 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:7e703c74632395397ff8a9e9a02f0ab8 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/mmoats/angular-barchart/find/master" data-pjax data-hotkey="t" style="display:none">Show File Finder</a>

<div class="file-navigation">
  


<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mmoats/angular-barchart/blob/master/js/g.bar-min.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" data-skip-pjax="true" rel="nofollow" title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mmoats/angular-barchart" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">angular-barchart</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mmoats/angular-barchart/tree/master/js" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator"> / </span><strong class="final-path">g.bar-min.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="js/g.bar-min.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://1.gravatar.com/avatar/e6a153b453458776aee2d4ff05fd6c74?d=https%3A%2F%2Fidenticons.github.com%2F12d23a76703e44d7e2505606083be8d9.png&amp;s=140" width="24" />
    <span class="author"><a href="/mmoats" rel="author">mmoats</a></span>
    <time class="js-relative-date" datetime="2013-03-06T16:53:42-08:00" title="2013-03-06 16:53:42">March 06, 2013</time>
    <div class="commit-title">
        <a href="/mmoats/angular-barchart/commit/962cd64520a8d0321fa62a2a183acf6f9f6eca14" class="message" data-pjax="true" title="base functionality">base functionality</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li class="facebox-user-list-item">
          <img height="24" src="https://1.gravatar.com/avatar/e6a153b453458776aee2d4ff05fd6c74?d=https%3A%2F%2Fidenticons.github.com%2F12d23a76703e44d7e2505606083be8d9.png&amp;s=140" width="24" />
          <a href="/mmoats">mmoats</a>
        </li>
      </ul>
    </div>
  </div>


<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>19 lines (19 sloc)</span>
        <span>6.74 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
                <a class="minibutton tooltipped leftwards"
                   title="Clicking this button will automatically fork this project so you can edit the file"
                   href="/mmoats/angular-barchart/edit/master/js/g.bar-min.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/mmoats/angular-barchart/raw/master/js/g.bar-min.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/mmoats/angular-barchart/blame/master/js/g.bar-min.js" class="button minibutton ">Blame</a>
          <a href="/mmoats/angular-barchart/commits/master/js/g.bar-min.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
            <a class="minibutton danger empty-icon tooltipped downwards"
               href="/mmoats/angular-barchart/delete/master/js/g.bar-min.js"
               title="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
            Delete
          </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>

            </td>
            <td class="blob-line-code">
                    <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*!</span></div><div class='line' id='LC2'><span class="cm"> * g.Raphael 0.51 - Charting library, based on Raphaël</span></div><div class='line' id='LC3'><span class="cm"> *</span></div><div class='line' id='LC4'><span class="cm"> * Copyright (c) 2009-2012 Dmitry Baranovskiy (http://g.raphaeljs.com)</span></div><div class='line' id='LC5'><span class="cm"> * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.</span></div><div class='line' id='LC6'><span class="cm"> */</span></div><div class='line' id='LC7'><span class="p">(</span><span class="kd">function</span><span class="p">(){</span><span class="kd">function</span> <span class="nx">B</span><span class="p">(</span><span class="nx">f</span><span class="p">,</span><span class="nx">m</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="nx">h</span><span class="p">,</span><span class="nx">n</span><span class="p">,</span><span class="nx">A</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">a</span><span class="o">&amp;&amp;!</span><span class="nx">b</span><span class="o">||!</span><span class="nx">a</span><span class="o">&amp;&amp;!</span><span class="nx">i</span><span class="p">)</span><span class="k">return</span> <span class="nx">n</span><span class="o">?</span><span class="s2">&quot;&quot;</span><span class="o">:</span><span class="nx">A</span><span class="p">.</span><span class="nx">path</span><span class="p">();</span><span class="nx">h</span><span class="o">=</span><span class="p">{</span><span class="nx">round</span><span class="o">:</span><span class="s2">&quot;round&quot;</span><span class="p">,</span><span class="nx">sharp</span><span class="o">:</span><span class="s2">&quot;sharp&quot;</span><span class="p">,</span><span class="nx">soft</span><span class="o">:</span><span class="s2">&quot;soft&quot;</span><span class="p">,</span><span class="nx">square</span><span class="o">:</span><span class="s2">&quot;square&quot;</span><span class="p">}[</span><span class="nx">h</span><span class="p">]</span><span class="o">||</span><span class="s2">&quot;square&quot;</span><span class="p">;</span><span class="nx">b</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">b</span><span class="p">);</span><span class="nx">i</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">i</span><span class="p">);</span><span class="nx">f</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">f</span><span class="p">);</span><span class="nx">m</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">m</span><span class="p">);</span><span class="k">switch</span><span class="p">(</span><span class="nx">h</span><span class="p">){</span><span class="k">case</span> <span class="s2">&quot;round&quot;</span><span class="o">:</span><span class="nx">a</span><span class="o">?</span><span class="p">(</span><span class="nx">a</span><span class="o">=~~</span><span class="p">(</span><span class="nx">i</span><span class="o">/</span><span class="mi">2</span><span class="p">),</span><span class="nx">c</span><span class="o">=</span><span class="nx">b</span><span class="o">&lt;</span><span class="nx">a</span><span class="o">?</span><span class="p">[</span><span class="s2">&quot;M&quot;</span><span class="p">,</span><span class="nx">f</span><span class="o">-~~</span><span class="p">(</span><span class="nx">i</span><span class="o">/</span><span class="mi">2</span><span class="p">),</span><span class="nx">m</span><span class="p">,</span><span class="s2">&quot;l&quot;</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="s2">&quot;a&quot;</span><span class="p">,</span><span class="o">~~</span><span class="p">(</span><span class="nx">i</span><span class="o">/</span><span class="mi">2</span><span class="p">),</span><span class="nx">b</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">1</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="s2">&quot;l&quot;</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="s2">&quot;z&quot;</span><span class="p">]</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;M&quot;</span><span class="p">,</span><span class="nx">f</span><span class="o">-</span><span class="nx">a</span><span class="p">,</span><span class="nx">m</span><span class="p">,</span><span class="s2">&quot;l&quot;</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="nx">a</span><span class="o">-</span><span class="nx">b</span><span class="p">,</span><span class="s2">&quot;a&quot;</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">1</span><span class="p">,</span><span class="mi">1</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="s2">&quot;l&quot;</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="nx">b</span><span class="o">-</span><span class="nx">a</span><span class="p">,</span><span class="s2">&quot;z&quot;</span><span class="p">])</span><span class="o">:</span><span class="p">(</span><span class="nx">a</span><span class="o">=~~</span><span class="p">(</span><span class="nx">b</span><span class="o">/</span><span class="mi">2</span><span class="p">),</span><span class="nx">c</span><span class="o">=</span><span class="nx">i</span><span class="o">&lt;</span><span class="nx">a</span><span class="o">?</span><span class="p">[</span><span class="s2">&quot;M&quot;</span><span class="p">,</span><span class="nx">f</span><span class="o">+</span><span class="mf">0.5</span><span class="p">,</span><span class="nx">m</span><span class="o">+</span><span class="mf">0.5</span><span class="o">-~~</span><span class="p">(</span><span class="nx">b</span><span class="o">/</span><span class="mi">2</span><span class="p">),</span><span class="s2">&quot;l&quot;</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="s2">&quot;a&quot;</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="o">~~</span><span class="p">(</span><span class="nx">b</span><span class="o">/</span><span class="mi">2</span><span class="p">),</span><span class="mi">0</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">1</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="s2">&quot;l&quot;</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="s2">&quot;z&quot;</span><span class="p">]</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;M&quot;</span><span class="p">,</span><span class="nx">f</span><span class="o">+</span><span class="mf">0.5</span><span class="p">,</span><span class="nx">m</span><span class="o">+</span><span class="mf">0.5</span><span class="o">-</span><span class="nx">a</span><span class="p">,</span><span class="s2">&quot;l&quot;</span><span class="p">,</span><span class="nx">i</span><span class="o">-</span><span class="nx">a</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="s2">&quot;a&quot;</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span></div><div class='line' id='LC8'><span class="nx">a</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">1</span><span class="p">,</span><span class="mi">1</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="s2">&quot;l&quot;</span><span class="p">,</span><span class="nx">a</span><span class="o">-</span><span class="nx">i</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="s2">&quot;z&quot;</span><span class="p">]);</span><span class="k">break</span><span class="p">;</span><span class="k">case</span> <span class="s2">&quot;sharp&quot;</span><span class="o">:</span><span class="nx">a</span><span class="o">?</span><span class="p">(</span><span class="nx">a</span><span class="o">=~~</span><span class="p">(</span><span class="nx">i</span><span class="o">/</span><span class="mi">2</span><span class="p">),</span><span class="nx">c</span><span class="o">=</span><span class="p">[</span><span class="s2">&quot;M&quot;</span><span class="p">,</span><span class="nx">f</span><span class="o">+</span><span class="nx">a</span><span class="p">,</span><span class="nx">m</span><span class="p">,</span><span class="s2">&quot;l&quot;</span><span class="p">,</span><span class="o">-</span><span class="nx">i</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="o">-</span><span class="nx">C</span><span class="p">(</span><span class="nx">b</span><span class="o">-</span><span class="nx">a</span><span class="p">,</span><span class="mi">0</span><span class="p">),</span><span class="nx">a</span><span class="p">,</span><span class="o">-</span><span class="nx">y</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">),</span><span class="nx">a</span><span class="p">,</span><span class="nx">y</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">),</span><span class="nx">a</span><span class="p">,</span><span class="s2">&quot;z&quot;</span><span class="p">])</span><span class="o">:</span><span class="p">(</span><span class="nx">a</span><span class="o">=~~</span><span class="p">(</span><span class="nx">b</span><span class="o">/</span><span class="mi">2</span><span class="p">),</span><span class="nx">c</span><span class="o">=</span><span class="p">[</span><span class="s2">&quot;M&quot;</span><span class="p">,</span><span class="nx">f</span><span class="p">,</span><span class="nx">m</span><span class="o">+</span><span class="nx">a</span><span class="p">,</span><span class="s2">&quot;l&quot;</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="o">-</span><span class="nx">b</span><span class="p">,</span><span class="nx">C</span><span class="p">(</span><span class="nx">i</span><span class="o">-</span><span class="nx">a</span><span class="p">,</span><span class="mi">0</span><span class="p">),</span><span class="mi">0</span><span class="p">,</span><span class="nx">y</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">i</span><span class="p">),</span><span class="nx">a</span><span class="p">,</span><span class="o">-</span><span class="nx">y</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">i</span><span class="p">),</span><span class="nx">a</span><span class="o">+</span><span class="p">(</span><span class="mi">2</span><span class="o">*</span><span class="nx">a</span><span class="o">&lt;</span><span class="nx">b</span><span class="p">),</span><span class="s2">&quot;z&quot;</span><span class="p">]);</span><span class="k">break</span><span class="p">;</span><span class="k">case</span> <span class="s2">&quot;square&quot;</span><span class="o">:</span><span class="nx">c</span><span class="o">=</span><span class="nx">a</span><span class="o">?</span><span class="p">[</span><span class="s2">&quot;M&quot;</span><span class="p">,</span><span class="nx">f</span><span class="o">+~~</span><span class="p">(</span><span class="nx">i</span><span class="o">/</span><span class="mi">2</span><span class="p">),</span><span class="nx">m</span><span class="p">,</span><span class="s2">&quot;l&quot;</span><span class="p">,</span><span class="mi">1</span><span class="o">-</span><span class="nx">i</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="o">-</span><span class="nx">b</span><span class="p">,</span><span class="nx">i</span><span class="o">-</span><span class="mi">1</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="s2">&quot;z&quot;</span><span class="p">]</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;M&quot;</span><span class="p">,</span><span class="nx">f</span><span class="p">,</span><span class="nx">m</span><span class="o">+~~</span><span class="p">(</span><span class="nx">b</span><span class="o">/</span><span class="mi">2</span><span class="p">),</span><span class="s2">&quot;l&quot;</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="o">-</span><span class="nx">b</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="s2">&quot;z&quot;</span><span class="p">];</span><span class="k">break</span><span class="p">;</span><span class="k">case</span> <span class="s2">&quot;soft&quot;</span><span class="o">:</span><span class="nx">a</span><span class="o">?</span><span class="p">(</span><span class="nx">a</span><span class="o">=</span><span class="nx">y</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">i</span><span class="o">/</span><span class="mi">5</span><span class="p">),</span><span class="nx">b</span><span class="p">),</span><span class="nx">c</span><span class="o">=</span><span class="p">[</span><span class="s2">&quot;M&quot;</span><span class="p">,</span><span class="nx">f</span><span class="o">-~~</span><span class="p">(</span><span class="nx">i</span><span class="o">/</span><span class="mi">2</span><span class="p">),</span><span class="nx">m</span><span class="p">,</span><span class="s2">&quot;l&quot;</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="nx">a</span><span class="o">-</span><span class="nx">b</span><span class="p">,</span><span class="s2">&quot;a&quot;</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">1</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="o">-</span><span class="nx">a</span><span class="p">,</span><span class="s2">&quot;l&quot;</span><span class="p">,</span><span class="nx">i</span><span class="o">-</span><span class="mi">2</span><span class="o">*</span><span class="nx">a</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="s2">&quot;a&quot;</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">1</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="s2">&quot;l&quot;</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="nx">b</span><span class="o">-</span><span class="nx">a</span><span class="p">,</span><span class="s2">&quot;z&quot;</span><span class="p">])</span><span class="o">:</span><span class="p">(</span><span class="nx">a</span><span class="o">=</span><span class="nx">y</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span><span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">b</span><span class="o">/</span><span class="mi">5</span><span class="p">)),</span><span class="nx">c</span><span class="o">=</span><span class="p">[</span><span class="s2">&quot;M&quot;</span><span class="p">,</span><span class="nx">f</span><span class="o">+</span><span class="mf">0.5</span><span class="p">,</span><span class="nx">m</span><span class="o">+</span><span class="mf">0.5</span><span class="o">-~~</span><span class="p">(</span><span class="nx">b</span><span class="o">/</span><span class="mi">2</span><span class="p">),</span><span class="s2">&quot;l&quot;</span><span class="p">,</span><span class="nx">i</span><span class="o">-</span><span class="nx">a</span><span class="p">,</span></div><div class='line' id='LC9'><span class="mi">0</span><span class="p">,</span><span class="s2">&quot;a&quot;</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">1</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="s2">&quot;l&quot;</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="nx">b</span><span class="o">-</span><span class="mi">2</span><span class="o">*</span><span class="nx">a</span><span class="p">,</span><span class="s2">&quot;a&quot;</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">1</span><span class="p">,</span><span class="o">-</span><span class="nx">a</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="s2">&quot;l&quot;</span><span class="p">,</span><span class="nx">a</span><span class="o">-</span><span class="nx">i</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="s2">&quot;z&quot;</span><span class="p">])}</span><span class="k">return</span> <span class="nx">n</span><span class="o">?</span><span class="nx">c</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;,&quot;</span><span class="p">)</span><span class="o">:</span><span class="nx">A</span><span class="p">.</span><span class="nx">path</span><span class="p">(</span><span class="nx">c</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">E</span><span class="p">(</span><span class="nx">f</span><span class="p">,</span><span class="nx">m</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="nx">h</span><span class="p">,</span><span class="nx">n</span><span class="p">){</span><span class="kd">var</span> <span class="nx">n</span><span class="o">=</span><span class="nx">n</span><span class="o">||</span><span class="p">{},</span><span class="nx">A</span><span class="o">=</span><span class="nx">n</span><span class="p">.</span><span class="nx">type</span><span class="o">||</span><span class="s2">&quot;square&quot;</span><span class="p">,</span><span class="nx">c</span><span class="o">=</span><span class="nb">parseFloat</span><span class="p">(</span><span class="nx">n</span><span class="p">.</span><span class="nx">gutter</span><span class="o">||</span><span class="s2">&quot;20%&quot;</span><span class="p">),</span><span class="nx">s</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">set</span><span class="p">(),</span><span class="nx">u</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">set</span><span class="p">(),</span><span class="nx">p</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">set</span><span class="p">(),</span><span class="nx">t</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">set</span><span class="p">(),</span><span class="nx">w</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nb">Math</span><span class="p">,</span><span class="nx">h</span><span class="p">),</span><span class="nx">g</span><span class="o">=</span><span class="p">[],</span><span class="nx">l</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">y</span><span class="o">=</span><span class="nx">n</span><span class="p">.</span><span class="nx">colors</span><span class="o">||</span><span class="k">this</span><span class="p">.</span><span class="nx">colors</span><span class="p">,</span><span class="nx">q</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">Raphael</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="nx">h</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span><span class="s2">&quot;array&quot;</span><span class="p">)){</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">w</span><span class="o">=</span><span class="p">[],</span><span class="nx">l</span><span class="o">=</span><span class="nx">q</span><span class="p">,</span><span class="nx">q</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">e</span><span class="o">--</span><span class="p">;)</span><span class="nx">u</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">set</span><span class="p">()),</span><span class="nx">w</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nb">Math</span><span class="p">,</span><span class="nx">h</span><span class="p">[</span><span class="nx">e</span><span class="p">])),</span><span class="nx">q</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nx">q</span><span class="p">,</span><span class="nx">h</span><span class="p">[</span><span class="nx">e</span><span class="p">].</span><span class="nx">length</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">n</span><span class="p">.</span><span class="nx">stacked</span><span class="p">)</span><span class="k">for</span><span class="p">(</span><span class="nx">e</span><span class="o">=</span><span class="nx">q</span><span class="p">;</span><span class="nx">e</span><span class="o">--</span><span class="p">;){</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">k</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">d</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">d</span><span class="o">--</span><span class="p">;)</span><span class="nx">k</span><span class="o">+=+</span><span class="nx">h</span><span class="p">[</span><span class="nx">d</span><span class="p">][</span><span class="nx">e</span><span class="p">]</span><span class="o">||</span></div><div class='line' id='LC10'><span class="mi">0</span><span class="p">;</span><span class="nx">g</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">k</span><span class="p">)}</span><span class="k">for</span><span class="p">(</span><span class="nx">e</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">e</span><span class="o">--</span><span class="p">;)</span><span class="k">if</span><span class="p">(</span><span class="nx">h</span><span class="p">[</span><span class="nx">e</span><span class="p">].</span><span class="nx">length</span><span class="o">&lt;</span><span class="nx">q</span><span class="p">)</span><span class="k">for</span><span class="p">(</span><span class="nx">d</span><span class="o">=</span><span class="nx">q</span><span class="p">;</span><span class="nx">d</span><span class="o">--</span><span class="p">;)</span><span class="nx">h</span><span class="p">[</span><span class="nx">e</span><span class="p">].</span><span class="nx">push</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span><span class="nx">w</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nb">Math</span><span class="p">,</span><span class="nx">n</span><span class="p">.</span><span class="nx">stacked</span><span class="o">?</span><span class="nx">g</span><span class="o">:</span><span class="nx">w</span><span class="p">)}</span><span class="kd">var</span> <span class="nx">w</span><span class="o">=</span><span class="nx">n</span><span class="p">.</span><span class="nx">to</span><span class="o">||</span><span class="nx">w</span><span class="p">,</span><span class="nx">b</span><span class="o">=</span><span class="mi">100</span><span class="o">*</span><span class="p">(</span><span class="nx">b</span><span class="o">/</span><span class="p">(</span><span class="nx">q</span><span class="o">*</span><span class="p">(</span><span class="mi">100</span><span class="o">+</span><span class="nx">c</span><span class="p">)</span><span class="o">+</span><span class="nx">c</span><span class="p">)),</span><span class="nx">c</span><span class="o">=</span><span class="nx">b</span><span class="o">*</span><span class="nx">c</span><span class="o">/</span><span class="mi">100</span><span class="p">,</span><span class="nx">r</span><span class="o">=</span><span class="kc">null</span><span class="o">==</span><span class="nx">n</span><span class="p">.</span><span class="nx">vgutter</span><span class="o">?</span><span class="mi">20</span><span class="o">:</span><span class="nx">n</span><span class="p">.</span><span class="nx">vgutter</span><span class="p">,</span><span class="nx">g</span><span class="o">=</span><span class="p">[],</span><span class="nx">k</span><span class="o">=</span><span class="nx">m</span><span class="o">+</span><span class="nx">c</span><span class="p">,</span><span class="nx">v</span><span class="o">=</span><span class="p">(</span><span class="nx">a</span><span class="o">-</span><span class="mi">2</span><span class="o">*</span><span class="nx">r</span><span class="p">)</span><span class="o">/</span><span class="nx">w</span><span class="p">;</span><span class="nx">n</span><span class="p">.</span><span class="nx">stretch</span><span class="o">||</span><span class="p">(</span><span class="nx">c</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">c</span><span class="p">),</span><span class="nx">b</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">b</span><span class="p">));</span><span class="o">!</span><span class="nx">n</span><span class="p">.</span><span class="nx">stacked</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">b</span><span class="o">/=</span><span class="nx">l</span><span class="o">||</span><span class="mi">1</span><span class="p">);</span><span class="k">for</span><span class="p">(</span><span class="nx">e</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">e</span><span class="o">&lt;</span><span class="nx">q</span><span class="p">;</span><span class="nx">e</span><span class="o">++</span><span class="p">){</span><span class="nx">g</span><span class="o">=</span><span class="p">[];</span><span class="k">for</span><span class="p">(</span><span class="nx">d</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">d</span><span class="o">&lt;</span><span class="p">(</span><span class="nx">l</span><span class="o">||</span><span class="mi">1</span><span class="p">);</span><span class="nx">d</span><span class="o">++</span><span class="p">){</span><span class="kd">var</span> <span class="nx">j</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">((</span><span class="nx">l</span><span class="o">?</span><span class="nx">h</span><span class="p">[</span><span class="nx">d</span><span class="p">][</span><span class="nx">e</span><span class="p">]</span><span class="o">:</span><span class="nx">h</span><span class="p">[</span><span class="nx">e</span><span class="p">])</span><span class="o">*</span><span class="nx">v</span><span class="p">),</span><span class="nx">x</span><span class="o">=</span><span class="nx">i</span><span class="o">+</span><span class="nx">a</span><span class="o">-</span><span class="nx">r</span><span class="o">-</span><span class="nx">j</span><span class="p">,</span><span class="nx">o</span><span class="o">=</span><span class="nx">B</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">k</span><span class="o">+</span><span class="nx">b</span><span class="o">/</span><span class="mi">2</span><span class="p">),</span><span class="nx">x</span><span class="o">+</span><span class="nx">j</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">j</span><span class="p">,</span><span class="o">!</span><span class="mi">0</span><span class="p">,</span><span class="nx">A</span><span class="p">,</span><span class="kc">null</span><span class="p">,</span><span class="nx">f</span><span class="p">).</span><span class="nx">attr</span><span class="p">({</span><span class="nx">stroke</span><span class="o">:</span><span class="s2">&quot;none&quot;</span><span class="p">,</span><span class="nx">fill</span><span class="o">:</span><span class="nx">y</span><span class="p">[</span><span class="nx">l</span><span class="o">?</span><span class="nx">d</span><span class="o">:</span><span class="nx">e</span><span class="p">]});</span><span class="nx">l</span><span class="o">?</span><span class="nx">u</span><span class="p">[</span><span class="nx">d</span><span class="p">].</span><span class="nx">push</span><span class="p">(</span><span class="nx">o</span><span class="p">)</span><span class="o">:</span><span class="nx">u</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">o</span><span class="p">);</span><span class="nx">o</span><span class="p">.</span><span class="nx">y</span><span class="o">=</span><span class="nx">x</span><span class="p">;</span><span class="nx">o</span><span class="p">.</span><span class="nx">x</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">k</span><span class="o">+</span><span class="nx">b</span><span class="o">/</span></div><div class='line' id='LC11'><span class="mi">2</span><span class="p">);</span><span class="nx">o</span><span class="p">.</span><span class="nx">w</span><span class="o">=</span><span class="nx">b</span><span class="p">;</span><span class="nx">o</span><span class="p">.</span><span class="nx">h</span><span class="o">=</span><span class="nx">j</span><span class="p">;</span><span class="nx">o</span><span class="p">.</span><span class="nx">value</span><span class="o">=</span><span class="nx">l</span><span class="o">?</span><span class="nx">h</span><span class="p">[</span><span class="nx">d</span><span class="p">][</span><span class="nx">e</span><span class="p">]</span><span class="o">:</span><span class="nx">h</span><span class="p">[</span><span class="nx">e</span><span class="p">];</span><span class="nx">n</span><span class="p">.</span><span class="nx">stacked</span><span class="o">?</span><span class="nx">g</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">o</span><span class="p">)</span><span class="o">:</span><span class="nx">k</span><span class="o">+=</span><span class="nx">b</span><span class="p">}</span><span class="k">if</span><span class="p">(</span><span class="nx">n</span><span class="p">.</span><span class="nx">stacked</span><span class="p">){</span><span class="nx">t</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">d</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">rect</span><span class="p">(</span><span class="nx">g</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">x</span><span class="o">-</span><span class="nx">g</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">w</span><span class="o">/</span><span class="mi">2</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">a</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">shim</span><span class="p">));</span><span class="nx">d</span><span class="p">.</span><span class="nx">bars</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">set</span><span class="p">();</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">x</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">z</span><span class="o">=</span><span class="nx">g</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">z</span><span class="o">--</span><span class="p">;)</span><span class="nx">g</span><span class="p">[</span><span class="nx">z</span><span class="p">].</span><span class="nx">toFront</span><span class="p">();</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">z</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">D</span><span class="o">=</span><span class="nx">g</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">z</span><span class="o">&lt;</span><span class="nx">D</span><span class="p">;</span><span class="nx">z</span><span class="o">++</span><span class="p">){</span><span class="kd">var</span> <span class="nx">o</span><span class="o">=</span><span class="nx">g</span><span class="p">[</span><span class="nx">z</span><span class="p">],</span><span class="nx">j</span><span class="o">=</span><span class="p">(</span><span class="nx">x</span><span class="o">+</span><span class="nx">o</span><span class="p">.</span><span class="nx">value</span><span class="p">)</span><span class="o">*</span><span class="nx">v</span><span class="p">,</span><span class="nx">H</span><span class="o">=</span><span class="nx">B</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span><span class="nx">i</span><span class="o">+</span><span class="nx">a</span><span class="o">-</span><span class="nx">r</span><span class="o">-</span><span class="mf">0.5</span><span class="o">*!!</span><span class="nx">x</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">j</span><span class="p">,</span><span class="o">!</span><span class="mi">0</span><span class="p">,</span><span class="nx">A</span><span class="p">,</span><span class="mi">1</span><span class="p">,</span><span class="nx">f</span><span class="p">);</span><span class="nx">d</span><span class="p">.</span><span class="nx">bars</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">o</span><span class="p">);</span><span class="nx">x</span><span class="o">&amp;&amp;</span><span class="nx">o</span><span class="p">.</span><span class="nx">attr</span><span class="p">({</span><span class="nx">path</span><span class="o">:</span><span class="nx">H</span><span class="p">});</span><span class="nx">o</span><span class="p">.</span><span class="nx">h</span><span class="o">=</span><span class="nx">j</span><span class="p">;</span><span class="nx">o</span><span class="p">.</span><span class="nx">y</span><span class="o">=</span><span class="nx">i</span><span class="o">+</span><span class="nx">a</span><span class="o">-</span><span class="nx">r</span><span class="o">-</span><span class="mf">0.5</span><span class="o">*!!</span><span class="nx">x</span><span class="o">-</span><span class="nx">j</span><span class="p">;</span><span class="nx">p</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">j</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">rect</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">x</span><span class="o">-</span><span class="nx">o</span><span class="p">.</span><span class="nx">w</span><span class="o">/</span><span class="mi">2</span><span class="p">,</span><span class="nx">o</span><span class="p">.</span><span class="nx">y</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">o</span><span class="p">.</span><span class="nx">value</span><span class="o">*</span><span class="nx">v</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">shim</span><span class="p">));</span><span class="nx">j</span><span class="p">.</span><span class="nx">bar</span><span class="o">=</span><span class="nx">o</span><span class="p">;</span><span class="nx">j</span><span class="p">.</span><span class="nx">value</span><span class="o">=</span><span class="nx">o</span><span class="p">.</span><span class="nx">value</span><span class="p">;</span><span class="nx">x</span><span class="o">+=</span><span class="nx">o</span><span class="p">.</span><span class="nx">value</span><span class="p">}</span><span class="nx">k</span><span class="o">+=</span><span class="nx">b</span><span class="p">}</span><span class="nx">k</span><span class="o">+=</span><span class="nx">c</span><span class="p">}</span><span class="nx">t</span><span class="p">.</span><span class="nx">toFront</span><span class="p">();</span><span class="nx">k</span><span class="o">=</span><span class="nx">m</span><span class="o">+</span><span class="nx">c</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">n</span><span class="p">.</span><span class="nx">stacked</span><span class="p">)</span><span class="k">for</span><span class="p">(</span><span class="nx">e</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">e</span><span class="o">&lt;</span><span class="nx">q</span><span class="p">;</span><span class="nx">e</span><span class="o">++</span><span class="p">){</span><span class="k">for</span><span class="p">(</span><span class="nx">d</span><span class="o">=</span></div><div class='line' id='LC12'><span class="mi">0</span><span class="p">;</span><span class="nx">d</span><span class="o">&lt;</span><span class="p">(</span><span class="nx">l</span><span class="o">||</span><span class="mi">1</span><span class="p">);</span><span class="nx">d</span><span class="o">++</span><span class="p">)</span><span class="nx">p</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">j</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">rect</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">k</span><span class="p">),</span><span class="nx">i</span><span class="o">+</span><span class="nx">r</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">a</span><span class="o">-</span><span class="nx">r</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">shim</span><span class="p">)),</span><span class="nx">j</span><span class="p">.</span><span class="nx">bar</span><span class="o">=</span><span class="nx">l</span><span class="o">?</span><span class="nx">u</span><span class="p">[</span><span class="nx">d</span><span class="p">][</span><span class="nx">e</span><span class="p">]</span><span class="o">:</span><span class="nx">u</span><span class="p">[</span><span class="nx">e</span><span class="p">],</span><span class="nx">j</span><span class="p">.</span><span class="nx">value</span><span class="o">=</span><span class="nx">j</span><span class="p">.</span><span class="nx">bar</span><span class="p">.</span><span class="nx">value</span><span class="p">,</span><span class="nx">k</span><span class="o">+=</span><span class="nx">b</span><span class="p">;</span><span class="nx">k</span><span class="o">+=</span><span class="nx">c</span><span class="p">}</span><span class="nx">s</span><span class="p">.</span><span class="nx">label</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">e</span><span class="p">){</span><span class="nx">b</span><span class="o">=</span><span class="nx">b</span><span class="o">||</span><span class="p">[];</span><span class="k">this</span><span class="p">.</span><span class="nx">labels</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">set</span><span class="p">();</span><span class="kd">var</span> <span class="nx">d</span><span class="p">,</span><span class="nx">j</span><span class="o">=-</span><span class="kc">Infinity</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">n</span><span class="p">.</span><span class="nx">stacked</span><span class="p">)</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">c</span><span class="o">&lt;</span><span class="nx">q</span><span class="p">;</span><span class="nx">c</span><span class="o">++</span><span class="p">)</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">m</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">g</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">g</span><span class="o">&lt;</span><span class="p">(</span><span class="nx">l</span><span class="o">||</span><span class="mi">1</span><span class="p">);</span><span class="nx">g</span><span class="o">++</span><span class="p">){</span><span class="nx">m</span><span class="o">=</span><span class="nx">m</span><span class="o">+</span><span class="p">(</span><span class="nx">l</span><span class="o">?</span><span class="nx">h</span><span class="p">[</span><span class="nx">g</span><span class="p">][</span><span class="nx">c</span><span class="p">]</span><span class="o">:</span><span class="nx">h</span><span class="p">[</span><span class="nx">c</span><span class="p">]);</span><span class="k">if</span><span class="p">(</span><span class="nx">g</span><span class="o">==</span><span class="nx">l</span><span class="o">-</span><span class="mi">1</span><span class="p">){</span><span class="nx">d</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">labelise</span><span class="p">(</span><span class="nx">b</span><span class="p">[</span><span class="nx">c</span><span class="p">],</span><span class="nx">m</span><span class="p">,</span><span class="nx">w</span><span class="p">);</span><span class="nx">d</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">text</span><span class="p">(</span><span class="nx">u</span><span class="p">[</span><span class="nx">c</span><span class="o">*</span><span class="p">(</span><span class="nx">l</span><span class="o">||</span><span class="mi">1</span><span class="p">)</span><span class="o">+</span><span class="nx">g</span><span class="p">].</span><span class="nx">x</span><span class="p">,</span><span class="nx">i</span><span class="o">+</span><span class="nx">a</span><span class="o">-</span><span class="nx">r</span><span class="o">/</span><span class="mi">2</span><span class="p">,</span><span class="nx">d</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="nx">txtattr</span><span class="p">).</span><span class="nx">insertBefore</span><span class="p">(</span><span class="nx">p</span><span class="p">[</span><span class="nx">c</span><span class="o">*</span><span class="p">(</span><span class="nx">l</span><span class="o">||</span><span class="mi">1</span><span class="p">)</span><span class="o">+</span><span class="nx">g</span><span class="p">]);</span><span class="kd">var</span> <span class="nx">k</span><span class="o">=</span><span class="nx">d</span><span class="p">.</span><span class="nx">getBBox</span><span class="p">();</span><span class="k">if</span><span class="p">(</span><span class="nx">k</span><span class="p">.</span><span class="nx">x</span><span class="o">-</span><span class="mi">7</span><span class="o">&lt;</span><span class="nx">j</span><span class="p">)</span><span class="nx">d</span><span class="p">.</span><span class="nx">remove</span><span class="p">();</span><span class="k">else</span><span class="p">{</span><span class="k">this</span><span class="p">.</span><span class="nx">labels</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">d</span><span class="p">);</span><span class="nx">j</span><span class="o">=</span><span class="nx">k</span><span class="p">.</span><span class="nx">x</span><span class="o">+</span><span class="nx">k</span><span class="p">.</span><span class="nx">width</span><span class="p">}}}</span><span class="k">else</span> <span class="k">for</span><span class="p">(</span><span class="nx">c</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">c</span><span class="o">&lt;</span><span class="nx">q</span><span class="p">;</span><span class="nx">c</span><span class="o">++</span><span class="p">)</span><span class="k">for</span><span class="p">(</span><span class="nx">g</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">g</span><span class="o">&lt;</span><span class="p">(</span><span class="nx">l</span><span class="o">||</span></div><div class='line' id='LC13'><span class="mi">1</span><span class="p">);</span><span class="nx">g</span><span class="o">++</span><span class="p">){</span><span class="nx">d</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">labelise</span><span class="p">(</span><span class="nx">l</span><span class="o">?</span><span class="nx">b</span><span class="p">[</span><span class="nx">g</span><span class="p">]</span><span class="o">&amp;&amp;</span><span class="nx">b</span><span class="p">[</span><span class="nx">g</span><span class="p">][</span><span class="nx">c</span><span class="p">]</span><span class="o">:</span><span class="nx">b</span><span class="p">[</span><span class="nx">c</span><span class="p">],</span><span class="nx">l</span><span class="o">?</span><span class="nx">h</span><span class="p">[</span><span class="nx">g</span><span class="p">][</span><span class="nx">c</span><span class="p">]</span><span class="o">:</span><span class="nx">h</span><span class="p">[</span><span class="nx">c</span><span class="p">],</span><span class="nx">w</span><span class="p">);</span><span class="nx">d</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">text</span><span class="p">(</span><span class="nx">u</span><span class="p">[</span><span class="nx">c</span><span class="o">*</span><span class="p">(</span><span class="nx">l</span><span class="o">||</span><span class="mi">1</span><span class="p">)</span><span class="o">+</span><span class="nx">g</span><span class="p">].</span><span class="nx">x</span><span class="p">,</span><span class="nx">e</span><span class="o">?</span><span class="nx">i</span><span class="o">+</span><span class="nx">a</span><span class="o">-</span><span class="nx">r</span><span class="o">/</span><span class="mi">2</span><span class="o">:</span><span class="nx">u</span><span class="p">[</span><span class="nx">c</span><span class="o">*</span><span class="p">(</span><span class="nx">l</span><span class="o">||</span><span class="mi">1</span><span class="p">)</span><span class="o">+</span><span class="nx">g</span><span class="p">].</span><span class="nx">y</span><span class="o">-</span><span class="mi">10</span><span class="p">,</span><span class="nx">d</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="nx">txtattr</span><span class="p">).</span><span class="nx">insertBefore</span><span class="p">(</span><span class="nx">p</span><span class="p">[</span><span class="nx">c</span><span class="o">*</span><span class="p">(</span><span class="nx">l</span><span class="o">||</span><span class="mi">1</span><span class="p">)</span><span class="o">+</span><span class="nx">g</span><span class="p">]);</span><span class="nx">k</span><span class="o">=</span><span class="nx">d</span><span class="p">.</span><span class="nx">getBBox</span><span class="p">();</span><span class="k">if</span><span class="p">(</span><span class="nx">k</span><span class="p">.</span><span class="nx">x</span><span class="o">-</span><span class="mi">7</span><span class="o">&lt;</span><span class="nx">j</span><span class="p">)</span><span class="nx">d</span><span class="p">.</span><span class="nx">remove</span><span class="p">();</span><span class="k">else</span><span class="p">{</span><span class="k">this</span><span class="p">.</span><span class="nx">labels</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">d</span><span class="p">);</span><span class="nx">j</span><span class="o">=</span><span class="nx">k</span><span class="p">.</span><span class="nx">x</span><span class="o">+</span><span class="nx">k</span><span class="p">.</span><span class="nx">width</span><span class="p">}}</span><span class="k">return</span> <span class="k">this</span><span class="p">};</span><span class="nx">s</span><span class="p">.</span><span class="nx">hover</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="nx">t</span><span class="p">.</span><span class="nx">hide</span><span class="p">();</span><span class="nx">p</span><span class="p">.</span><span class="nx">show</span><span class="p">();</span><span class="nx">p</span><span class="p">.</span><span class="nx">mouseover</span><span class="p">(</span><span class="nx">a</span><span class="p">).</span><span class="nx">mouseout</span><span class="p">(</span><span class="nx">b</span><span class="p">);</span><span class="k">return</span> <span class="k">this</span><span class="p">};</span><span class="nx">s</span><span class="p">.</span><span class="nx">hoverColumn</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="nx">p</span><span class="p">.</span><span class="nx">hide</span><span class="p">();</span><span class="nx">t</span><span class="p">.</span><span class="nx">show</span><span class="p">();</span><span class="nx">t</span><span class="p">.</span><span class="nx">mouseover</span><span class="p">(</span><span class="nx">a</span><span class="p">).</span><span class="nx">mouseout</span><span class="p">(</span><span class="nx">b</span><span class="o">||</span><span class="kd">function</span><span class="p">(){});</span><span class="k">return</span> <span class="k">this</span><span class="p">};</span><span class="nx">s</span><span class="p">.</span><span class="nx">click</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">t</span><span class="p">.</span><span class="nx">hide</span><span class="p">();</span><span class="nx">p</span><span class="p">.</span><span class="nx">show</span><span class="p">();</span><span class="nx">p</span><span class="p">.</span><span class="nx">click</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span><span class="k">return</span> <span class="k">this</span><span class="p">};</span><span class="nx">s</span><span class="p">.</span><span class="nx">each</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">Raphael</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span></div><div class='line' id='LC14'><span class="s2">&quot;function&quot;</span><span class="p">))</span><span class="k">return</span> <span class="k">this</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="nx">p</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">b</span><span class="o">--</span><span class="p">;)</span><span class="nx">a</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">p</span><span class="p">[</span><span class="nx">b</span><span class="p">]);</span><span class="k">return</span> <span class="k">this</span><span class="p">};</span><span class="nx">s</span><span class="p">.</span><span class="nx">eachColumn</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">Raphael</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="s2">&quot;function&quot;</span><span class="p">))</span><span class="k">return</span> <span class="k">this</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">b</span><span class="o">--</span><span class="p">;)</span><span class="nx">a</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">t</span><span class="p">[</span><span class="nx">b</span><span class="p">]);</span><span class="k">return</span> <span class="k">this</span><span class="p">};</span><span class="nx">s</span><span class="p">.</span><span class="nx">clickColumn</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">p</span><span class="p">.</span><span class="nx">hide</span><span class="p">();</span><span class="nx">t</span><span class="p">.</span><span class="nx">show</span><span class="p">();</span><span class="nx">t</span><span class="p">.</span><span class="nx">click</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span><span class="k">return</span> <span class="k">this</span><span class="p">};</span><span class="nx">s</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">u</span><span class="p">,</span><span class="nx">p</span><span class="p">,</span><span class="nx">t</span><span class="p">);</span><span class="nx">s</span><span class="p">.</span><span class="nx">bars</span><span class="o">=</span><span class="nx">u</span><span class="p">;</span><span class="nx">s</span><span class="p">.</span><span class="nx">covers</span><span class="o">=</span><span class="nx">p</span><span class="p">;</span><span class="k">return</span> <span class="nx">s</span><span class="p">}</span><span class="kd">function</span> <span class="nx">F</span><span class="p">(</span><span class="nx">f</span><span class="p">,</span><span class="nx">m</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="nx">h</span><span class="p">,</span><span class="nx">n</span><span class="p">){</span><span class="kd">var</span> <span class="nx">n</span><span class="o">=</span><span class="nx">n</span><span class="o">||</span><span class="p">{},</span><span class="nx">y</span><span class="o">=</span><span class="nx">n</span><span class="p">.</span><span class="nx">type</span><span class="o">||</span><span class="s2">&quot;square&quot;</span><span class="p">,</span><span class="nx">c</span><span class="o">=</span><span class="nb">parseFloat</span><span class="p">(</span><span class="nx">n</span><span class="p">.</span><span class="nx">gutter</span><span class="o">||</span><span class="s2">&quot;20%&quot;</span><span class="p">),</span><span class="nx">s</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">set</span><span class="p">(),</span><span class="nx">u</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">set</span><span class="p">(),</span><span class="nx">p</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">set</span><span class="p">(),</span><span class="nx">t</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">set</span><span class="p">(),</span><span class="nx">w</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nb">Math</span><span class="p">,</span><span class="nx">h</span><span class="p">),</span><span class="nx">g</span><span class="o">=</span><span class="p">[],</span><span class="nx">l</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">C</span><span class="o">=</span><span class="nx">n</span><span class="p">.</span><span class="nx">colors</span><span class="o">||</span><span class="k">this</span><span class="p">.</span><span class="nx">colors</span><span class="p">,</span><span class="nx">q</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">Raphael</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="nx">h</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span></div><div class='line' id='LC15'><span class="s2">&quot;array&quot;</span><span class="p">)){</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">w</span><span class="o">=</span><span class="p">[],</span><span class="nx">l</span><span class="o">=</span><span class="nx">q</span><span class="p">,</span><span class="nx">q</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">e</span><span class="o">--</span><span class="p">;)</span><span class="nx">u</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">set</span><span class="p">()),</span><span class="nx">w</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nb">Math</span><span class="p">,</span><span class="nx">h</span><span class="p">[</span><span class="nx">e</span><span class="p">])),</span><span class="nx">q</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nx">q</span><span class="p">,</span><span class="nx">h</span><span class="p">[</span><span class="nx">e</span><span class="p">].</span><span class="nx">length</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">n</span><span class="p">.</span><span class="nx">stacked</span><span class="p">)</span><span class="k">for</span><span class="p">(</span><span class="nx">e</span><span class="o">=</span><span class="nx">q</span><span class="p">;</span><span class="nx">e</span><span class="o">--</span><span class="p">;){</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">k</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">d</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">d</span><span class="o">--</span><span class="p">;)</span><span class="nx">k</span><span class="o">+=+</span><span class="nx">h</span><span class="p">[</span><span class="nx">d</span><span class="p">][</span><span class="nx">e</span><span class="p">]</span><span class="o">||</span><span class="mi">0</span><span class="p">;</span><span class="nx">g</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">k</span><span class="p">)}</span><span class="k">for</span><span class="p">(</span><span class="nx">e</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">e</span><span class="o">--</span><span class="p">;)</span><span class="k">if</span><span class="p">(</span><span class="nx">h</span><span class="p">[</span><span class="nx">e</span><span class="p">].</span><span class="nx">length</span><span class="o">&lt;</span><span class="nx">q</span><span class="p">)</span><span class="k">for</span><span class="p">(</span><span class="nx">d</span><span class="o">=</span><span class="nx">q</span><span class="p">;</span><span class="nx">d</span><span class="o">--</span><span class="p">;)</span><span class="nx">h</span><span class="p">[</span><span class="nx">e</span><span class="p">].</span><span class="nx">push</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span><span class="nx">w</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nb">Math</span><span class="p">,</span><span class="nx">n</span><span class="p">.</span><span class="nx">stacked</span><span class="o">?</span><span class="nx">g</span><span class="o">:</span><span class="nx">w</span><span class="p">)}</span><span class="kd">var</span> <span class="nx">w</span><span class="o">=</span><span class="nx">n</span><span class="p">.</span><span class="nx">to</span><span class="o">||</span><span class="nx">w</span><span class="p">,</span><span class="nx">r</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="mi">100</span><span class="o">*</span><span class="p">(</span><span class="nx">a</span><span class="o">/</span><span class="p">(</span><span class="nx">q</span><span class="o">*</span><span class="p">(</span><span class="mi">100</span><span class="o">+</span><span class="nx">c</span><span class="p">)</span><span class="o">+</span><span class="nx">c</span><span class="p">))),</span><span class="nx">a</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">r</span><span class="o">*</span><span class="nx">c</span><span class="o">/</span><span class="mi">100</span><span class="p">),</span><span class="nx">c</span><span class="o">=</span><span class="p">[],</span><span class="nx">g</span><span class="o">=</span><span class="nx">i</span><span class="o">+</span><span class="nx">a</span><span class="p">,</span><span class="nx">k</span><span class="o">=</span><span class="p">(</span><span class="nx">b</span><span class="o">-</span><span class="mi">1</span><span class="p">)</span><span class="o">/</span><span class="nx">w</span><span class="p">;</span><span class="o">!</span><span class="nx">n</span><span class="p">.</span><span class="nx">stacked</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">r</span><span class="o">/=</span><span class="nx">l</span><span class="o">||</span><span class="mi">1</span><span class="p">);</span><span class="k">for</span><span class="p">(</span><span class="nx">e</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">e</span><span class="o">&lt;</span><span class="nx">q</span><span class="p">;</span><span class="nx">e</span><span class="o">++</span><span class="p">){</span><span class="nx">c</span><span class="o">=</span><span class="p">[];</span><span class="k">for</span><span class="p">(</span><span class="nx">d</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">d</span><span class="o">&lt;</span><span class="p">(</span><span class="nx">l</span><span class="o">||</span><span class="mi">1</span><span class="p">);</span><span class="nx">d</span><span class="o">++</span><span class="p">){</span><span class="kd">var</span> <span class="nx">v</span><span class="o">=</span><span class="nx">l</span><span class="o">?</span><span class="nx">h</span><span class="p">[</span><span class="nx">d</span><span class="p">][</span><span class="nx">e</span><span class="p">]</span><span class="o">:</span><span class="nx">h</span><span class="p">[</span><span class="nx">e</span><span class="p">],</span><span class="nx">j</span><span class="o">=</span><span class="nx">B</span><span class="p">(</span><span class="nx">m</span><span class="p">,</span><span class="nx">g</span><span class="o">+</span><span class="nx">r</span><span class="o">/</span><span class="mi">2</span><span class="p">,</span><span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">v</span><span class="o">*</span></div><div class='line' id='LC16'><span class="nx">k</span><span class="p">),</span><span class="nx">r</span><span class="o">-</span><span class="mi">1</span><span class="p">,</span><span class="o">!</span><span class="mi">1</span><span class="p">,</span><span class="nx">y</span><span class="p">,</span><span class="kc">null</span><span class="p">,</span><span class="nx">f</span><span class="p">).</span><span class="nx">attr</span><span class="p">({</span><span class="nx">stroke</span><span class="o">:</span><span class="s2">&quot;none&quot;</span><span class="p">,</span><span class="nx">fill</span><span class="o">:</span><span class="nx">C</span><span class="p">[</span><span class="nx">l</span><span class="o">?</span><span class="nx">d</span><span class="o">:</span><span class="nx">e</span><span class="p">]});</span><span class="nx">l</span><span class="o">?</span><span class="nx">u</span><span class="p">[</span><span class="nx">d</span><span class="p">].</span><span class="nx">push</span><span class="p">(</span><span class="nx">j</span><span class="p">)</span><span class="o">:</span><span class="nx">u</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">j</span><span class="p">);</span><span class="nx">j</span><span class="p">.</span><span class="nx">x</span><span class="o">=</span><span class="nx">m</span><span class="o">+</span><span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">v</span><span class="o">*</span><span class="nx">k</span><span class="p">);</span><span class="nx">j</span><span class="p">.</span><span class="nx">y</span><span class="o">=</span><span class="nx">g</span><span class="o">+</span><span class="nx">r</span><span class="o">/</span><span class="mi">2</span><span class="p">;</span><span class="nx">j</span><span class="p">.</span><span class="nx">w</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">v</span><span class="o">*</span><span class="nx">k</span><span class="p">);</span><span class="nx">j</span><span class="p">.</span><span class="nx">h</span><span class="o">=</span><span class="nx">r</span><span class="p">;</span><span class="nx">j</span><span class="p">.</span><span class="nx">value</span><span class="o">=+</span><span class="nx">v</span><span class="p">;</span><span class="nx">n</span><span class="p">.</span><span class="nx">stacked</span><span class="o">?</span><span class="nx">c</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">j</span><span class="p">)</span><span class="o">:</span><span class="nx">g</span><span class="o">+=</span><span class="nx">r</span><span class="p">}</span><span class="k">if</span><span class="p">(</span><span class="nx">n</span><span class="p">.</span><span class="nx">stacked</span><span class="p">){</span><span class="nx">d</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">rect</span><span class="p">(</span><span class="nx">m</span><span class="p">,</span><span class="nx">c</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">y</span><span class="o">-</span><span class="nx">c</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">h</span><span class="o">/</span><span class="mi">2</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">r</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">shim</span><span class="p">);</span><span class="nx">t</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">d</span><span class="p">);</span><span class="nx">d</span><span class="p">.</span><span class="nx">bars</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">set</span><span class="p">();</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">x</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">o</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">o</span><span class="o">--</span><span class="p">;)</span><span class="nx">c</span><span class="p">[</span><span class="nx">o</span><span class="p">].</span><span class="nx">toFront</span><span class="p">();</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">o</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">z</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">o</span><span class="o">&lt;</span><span class="nx">z</span><span class="p">;</span><span class="nx">o</span><span class="o">++</span><span class="p">){</span><span class="kd">var</span> <span class="nx">j</span><span class="o">=</span><span class="nx">c</span><span class="p">[</span><span class="nx">o</span><span class="p">],</span><span class="nx">v</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">((</span><span class="nx">x</span><span class="o">+</span><span class="nx">j</span><span class="p">.</span><span class="nx">value</span><span class="p">)</span><span class="o">*</span><span class="nx">k</span><span class="p">),</span><span class="nx">D</span><span class="o">=</span><span class="nx">B</span><span class="p">(</span><span class="nx">m</span><span class="p">,</span><span class="nx">j</span><span class="p">.</span><span class="nx">y</span><span class="p">,</span><span class="nx">v</span><span class="p">,</span><span class="nx">r</span><span class="o">-</span><span class="mi">1</span><span class="p">,</span><span class="o">!</span><span class="mi">1</span><span class="p">,</span><span class="nx">y</span><span class="p">,</span><span class="mi">1</span><span class="p">,</span><span class="nx">f</span><span class="p">);</span><span class="nx">d</span><span class="p">.</span><span class="nx">bars</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">j</span><span class="p">);</span><span class="nx">x</span><span class="o">&amp;&amp;</span><span class="nx">j</span><span class="p">.</span><span class="nx">attr</span><span class="p">({</span><span class="nx">path</span><span class="o">:</span><span class="nx">D</span><span class="p">});</span><span class="nx">j</span><span class="p">.</span><span class="nx">w</span><span class="o">=</span><span class="nx">v</span><span class="p">;</span><span class="nx">j</span><span class="p">.</span><span class="nx">x</span><span class="o">=</span><span class="nx">m</span><span class="o">+</span><span class="nx">v</span><span class="p">;</span><span class="nx">p</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">v</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">rect</span><span class="p">(</span><span class="nx">m</span><span class="o">+</span><span class="nx">x</span><span class="o">*</span><span class="nx">k</span><span class="p">,</span><span class="nx">j</span><span class="p">.</span><span class="nx">y</span><span class="o">-</span><span class="nx">j</span><span class="p">.</span><span class="nx">h</span><span class="o">/</span><span class="mi">2</span><span class="p">,</span><span class="nx">j</span><span class="p">.</span><span class="nx">value</span><span class="o">*</span><span class="nx">k</span><span class="p">,</span><span class="nx">r</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">shim</span><span class="p">));</span></div><div class='line' id='LC17'><span class="nx">v</span><span class="p">.</span><span class="nx">bar</span><span class="o">=</span><span class="nx">j</span><span class="p">;</span><span class="nx">x</span><span class="o">+=</span><span class="nx">j</span><span class="p">.</span><span class="nx">value</span><span class="p">}</span><span class="nx">g</span><span class="o">+=</span><span class="nx">r</span><span class="p">}</span><span class="nx">g</span><span class="o">+=</span><span class="nx">a</span><span class="p">}</span><span class="nx">t</span><span class="p">.</span><span class="nx">toFront</span><span class="p">();</span><span class="nx">g</span><span class="o">=</span><span class="nx">i</span><span class="o">+</span><span class="nx">a</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">n</span><span class="p">.</span><span class="nx">stacked</span><span class="p">)</span><span class="k">for</span><span class="p">(</span><span class="nx">e</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">e</span><span class="o">&lt;</span><span class="nx">q</span><span class="p">;</span><span class="nx">e</span><span class="o">++</span><span class="p">){</span><span class="k">for</span><span class="p">(</span><span class="nx">d</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">d</span><span class="o">&lt;</span><span class="p">(</span><span class="nx">l</span><span class="o">||</span><span class="mi">1</span><span class="p">);</span><span class="nx">d</span><span class="o">++</span><span class="p">)</span><span class="nx">v</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">rect</span><span class="p">(</span><span class="nx">m</span><span class="p">,</span><span class="nx">g</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">r</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">shim</span><span class="p">),</span><span class="nx">p</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">v</span><span class="p">),</span><span class="nx">v</span><span class="p">.</span><span class="nx">bar</span><span class="o">=</span><span class="nx">l</span><span class="o">?</span><span class="nx">u</span><span class="p">[</span><span class="nx">d</span><span class="p">][</span><span class="nx">e</span><span class="p">]</span><span class="o">:</span><span class="nx">u</span><span class="p">[</span><span class="nx">e</span><span class="p">],</span><span class="nx">v</span><span class="p">.</span><span class="nx">value</span><span class="o">=</span><span class="nx">v</span><span class="p">.</span><span class="nx">bar</span><span class="p">.</span><span class="nx">value</span><span class="p">,</span><span class="nx">g</span><span class="o">+=</span><span class="nx">r</span><span class="p">;</span><span class="nx">g</span><span class="o">+=</span><span class="nx">a</span><span class="p">}</span><span class="nx">s</span><span class="p">.</span><span class="nx">label</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="o">||</span><span class="p">[];</span><span class="k">this</span><span class="p">.</span><span class="nx">labels</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">set</span><span class="p">();</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">c</span><span class="o">&lt;</span><span class="nx">q</span><span class="p">;</span><span class="nx">c</span><span class="o">++</span><span class="p">)</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">d</span><span class="o">&lt;</span><span class="nx">l</span><span class="p">;</span><span class="nx">d</span><span class="o">++</span><span class="p">){</span><span class="kd">var</span> <span class="nx">e</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">labelise</span><span class="p">(</span><span class="nx">l</span><span class="o">?</span><span class="nx">a</span><span class="p">[</span><span class="nx">d</span><span class="p">]</span><span class="o">&amp;&amp;</span><span class="nx">a</span><span class="p">[</span><span class="nx">d</span><span class="p">][</span><span class="nx">c</span><span class="p">]</span><span class="o">:</span><span class="nx">a</span><span class="p">[</span><span class="nx">c</span><span class="p">],</span><span class="nx">l</span><span class="o">?</span><span class="nx">h</span><span class="p">[</span><span class="nx">d</span><span class="p">][</span><span class="nx">c</span><span class="p">]</span><span class="o">:</span><span class="nx">h</span><span class="p">[</span><span class="nx">c</span><span class="p">],</span><span class="nx">w</span><span class="p">),</span><span class="nx">g</span><span class="o">=</span><span class="nx">b</span><span class="o">?</span><span class="s2">&quot;end&quot;</span><span class="o">:</span><span class="s2">&quot;start&quot;</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">labels</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">e</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">text</span><span class="p">(</span><span class="nx">b</span><span class="o">?</span><span class="nx">u</span><span class="p">[</span><span class="nx">c</span><span class="o">*</span><span class="p">(</span><span class="nx">l</span><span class="o">||</span><span class="mi">1</span><span class="p">)</span><span class="o">+</span><span class="nx">d</span><span class="p">].</span><span class="nx">x</span><span class="o">-</span><span class="nx">r</span><span class="o">/</span><span class="mi">2</span><span class="o">+</span><span class="mi">3</span><span class="o">:</span><span class="nx">m</span><span class="o">+</span><span class="mi">5</span><span class="p">,</span><span class="nx">u</span><span class="p">[</span><span class="nx">c</span><span class="o">*</span><span class="p">(</span><span class="nx">l</span><span class="o">||</span><span class="mi">1</span><span class="p">)</span><span class="o">+</span><span class="nx">d</span><span class="p">].</span><span class="nx">y</span><span class="p">,</span><span class="nx">e</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="nx">txtattr</span><span class="p">).</span><span class="nx">attr</span><span class="p">({</span><span class="s2">&quot;text-anchor&quot;</span><span class="o">:</span><span class="nx">g</span><span class="p">}).</span><span class="nx">insertBefore</span><span class="p">(</span><span class="nx">p</span><span class="p">[</span><span class="mi">0</span><span class="p">]));</span><span class="nx">e</span><span class="p">.</span><span class="nx">getBBox</span><span class="p">().</span><span class="nx">x</span><span class="o">&lt;</span></div><div class='line' id='LC18'><span class="nx">m</span><span class="o">+</span><span class="mi">5</span><span class="o">?</span><span class="nx">e</span><span class="p">.</span><span class="nx">attr</span><span class="p">({</span><span class="nx">x</span><span class="o">:</span><span class="nx">m</span><span class="o">+</span><span class="mi">5</span><span class="p">,</span><span class="s2">&quot;text-anchor&quot;</span><span class="o">:</span><span class="s2">&quot;start&quot;</span><span class="p">})</span><span class="o">:</span><span class="nx">u</span><span class="p">[</span><span class="nx">c</span><span class="o">*</span><span class="p">(</span><span class="nx">l</span><span class="o">||</span><span class="mi">1</span><span class="p">)</span><span class="o">+</span><span class="nx">d</span><span class="p">].</span><span class="nx">label</span><span class="o">=</span><span class="nx">e</span><span class="p">}</span><span class="k">return</span> <span class="k">this</span><span class="p">};</span><span class="nx">s</span><span class="p">.</span><span class="nx">hover</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="nx">t</span><span class="p">.</span><span class="nx">hide</span><span class="p">();</span><span class="nx">p</span><span class="p">.</span><span class="nx">show</span><span class="p">();</span><span class="nx">p</span><span class="p">.</span><span class="nx">mouseover</span><span class="p">(</span><span class="nx">a</span><span class="p">).</span><span class="nx">mouseout</span><span class="p">(</span><span class="nx">b</span><span class="o">||</span><span class="kd">function</span><span class="p">(){});</span><span class="k">return</span> <span class="k">this</span><span class="p">};</span><span class="nx">s</span><span class="p">.</span><span class="nx">hoverColumn</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="nx">p</span><span class="p">.</span><span class="nx">hide</span><span class="p">();</span><span class="nx">t</span><span class="p">.</span><span class="nx">show</span><span class="p">();</span><span class="nx">t</span><span class="p">.</span><span class="nx">mouseover</span><span class="p">(</span><span class="nx">a</span><span class="p">).</span><span class="nx">mouseout</span><span class="p">(</span><span class="nx">b</span><span class="o">||</span><span class="kd">function</span><span class="p">(){});</span><span class="k">return</span> <span class="k">this</span><span class="p">};</span><span class="nx">s</span><span class="p">.</span><span class="nx">each</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">Raphael</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="s2">&quot;function&quot;</span><span class="p">))</span><span class="k">return</span> <span class="k">this</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="nx">p</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">b</span><span class="o">--</span><span class="p">;)</span><span class="nx">a</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">p</span><span class="p">[</span><span class="nx">b</span><span class="p">]);</span><span class="k">return</span> <span class="k">this</span><span class="p">};</span><span class="nx">s</span><span class="p">.</span><span class="nx">eachColumn</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">Raphael</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="s2">&quot;function&quot;</span><span class="p">))</span><span class="k">return</span> <span class="k">this</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">b</span><span class="o">--</span><span class="p">;)</span><span class="nx">a</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">t</span><span class="p">[</span><span class="nx">b</span><span class="p">]);</span><span class="k">return</span> <span class="k">this</span><span class="p">};</span><span class="nx">s</span><span class="p">.</span><span class="nx">click</span><span class="o">=</span></div><div class='line' id='LC19'><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">t</span><span class="p">.</span><span class="nx">hide</span><span class="p">();</span><span class="nx">p</span><span class="p">.</span><span class="nx">show</span><span class="p">();</span><span class="nx">p</span><span class="p">.</span><span class="nx">click</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span><span class="k">return</span> <span class="k">this</span><span class="p">};</span><span class="nx">s</span><span class="p">.</span><span class="nx">clickColumn</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">p</span><span class="p">.</span><span class="nx">hide</span><span class="p">();</span><span class="nx">t</span><span class="p">.</span><span class="nx">show</span><span class="p">();</span><span class="nx">t</span><span class="p">.</span><span class="nx">click</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span><span class="k">return</span> <span class="k">this</span><span class="p">};</span><span class="nx">s</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">u</span><span class="p">,</span><span class="nx">p</span><span class="p">,</span><span class="nx">t</span><span class="p">);</span><span class="nx">s</span><span class="p">.</span><span class="nx">bars</span><span class="o">=</span><span class="nx">u</span><span class="p">;</span><span class="nx">s</span><span class="p">.</span><span class="nx">covers</span><span class="o">=</span><span class="nx">p</span><span class="p">;</span><span class="k">return</span> <span class="nx">s</span><span class="p">}</span><span class="kd">var</span> <span class="nx">y</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">,</span><span class="nx">C</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">,</span><span class="nx">G</span><span class="o">=</span><span class="kd">function</span><span class="p">(){};</span><span class="nx">G</span><span class="p">.</span><span class="nx">prototype</span><span class="o">=</span><span class="nx">Raphael</span><span class="p">.</span><span class="nx">g</span><span class="p">;</span><span class="nx">F</span><span class="p">.</span><span class="nx">prototype</span><span class="o">=</span><span class="nx">E</span><span class="p">.</span><span class="nx">prototype</span><span class="o">=</span><span class="k">new</span> <span class="nx">G</span><span class="p">;</span><span class="nx">Raphael</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">barchart</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">f</span><span class="p">,</span><span class="nx">m</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="nx">h</span><span class="p">){</span><span class="k">return</span> <span class="k">new</span> <span class="nx">E</span><span class="p">(</span><span class="k">this</span><span class="p">,</span><span class="nx">f</span><span class="p">,</span><span class="nx">m</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="nx">h</span><span class="p">)};</span><span class="nx">Raphael</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">hbarchart</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">f</span><span class="p">,</span><span class="nx">m</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="nx">h</span><span class="p">){</span><span class="k">return</span> <span class="k">new</span> <span class="nx">F</span><span class="p">(</span><span class="k">this</span><span class="p">,</span><span class="nx">f</span><span class="p">,</span><span class="nx">m</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="nx">h</span><span class="p">)}})();</span></div></pre></div>
            </td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.10431s from fe3.rs.github.com">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/mmoats/angular-barchart/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

    
  </body>
</html>
