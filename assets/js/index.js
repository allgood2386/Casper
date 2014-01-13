/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        $(".post-content").fitVids();

    });

    /* Not-Ghost */
    $(function(){
        if($(".adsbygoogle").css('display')=="none") {
            $('.adsbygoogle').replaceWith('<div class="adblocker">Hey, I noticed you have an ad blocker.' +
                ' Well I\'m a developer paying off student loans still and every bit helps. I\'ve gone and ' +
                'made this small ad as un-intrusive as possible so if you could consider white listing this site ' +
                'it would be much appreciated!</div>');
            $('.adsbygoogle').css('display','block!important' );
        }
    });

}(jQuery));