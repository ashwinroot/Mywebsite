(function (a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
})(navigator.userAgent || navigator.vendor || window.opera);

if (jQuery.browser.mobile) {
    // Mobile Variation
    var stars = $('.btn-group.responsive-btn-group.hidden-md.hidden-lg').find('a:first');
    stars.removeClass();
    var noOfReviews = stars.text().replace(/"/g, "").replace(/'/g, "").replace(/\(|\)/g, "");

    // No of reviews
    (stars).insertAfter($('.desc'));

    // Change Background color of In Stock
    $('.online').find('p:first').css({'background': 'lightgrey'});

    //Remove the Price infront the actual price
    $('span.black').remove();

    //Remove the quantity title
    $('.qtyBox').find('b').remove();

    //Quantity input selector
    var qtyBox = $('.qtyBox').find('input');
    $('.text-center').before(qtyBox).css({'display': 'inline-flex', 'width': '75%'});

    //Quantity selector text align center
    $('#qty').css({'text-align': 'center', 'line-height': '27px', 'vertical-align': 'top', 'margin-right': '2%'});

    // Save 5% left justify
    $('.save').css({'text-align': 'left'});

    //Save to music list section
    $('.dropCov').css({'border': 'none', 'background': 'none'});
    var saveToMusicText = '+' + $('.createMusicList_res').text();
    $('.createMusicList_res').text(saveToMusicText);

    //Remove customer rating
    $('div.rating').remove();

    // Changes done by Ashwin
    //removing the view enlarged and border
    $('.price.grey').find('span:first').remove();
    $('div.viewlarger').remove();
    $('.heroImage').css("border", "none");

    //  Add "See similar music" section to tabs/accordian.
    var ssmusicsection = window.$("article.anchorText > section");
    var accordiansection = window.$("section.productTabs.visible-xs.visible-sm.panel-group");
    window.$(accordiansection).append('<div class="panel panel-default responsive-panel "><div class="panel-heading" role="tab" id="seeSimilarMusicHeader"><h4 class="panel-title"><a class="collapsed" data-toggle="collapse" href="#seeSimilarMusic" aria-expanded="false" aria-controls="seeSimilarMusic">See Similar Music<i class="fa fa-chevron-right pull-right"></i><i class="fa fa-chevron-down pull-right"></i></a></h4></div><div id="seeSimilarMusic" class="panel-collapse collapse" role="tabpanel" aria-labelledby="seeSimilarMusicHeader" aria-expanded="false" style="height: 0px;"><div class="panel-body"><div class="description"></div></div></div>');
    window.$(accordiansection).find("#seeSimilarMusic .description").append(ssmusicsection);
    //cleanup ssmusicsection heading
    window.$("article.anchorText").remove();

    //Inversing Colors
    //carouselContent1 editing the background
    $('.carouselContent1').css("background-color", "#ffffff");
    window.$('.carouselTitle').each(function () {
        this.style.setProperty('background-color', '#F4F4F4', 'important');
    });

    //Customer Reviews
    var songTitle = $('h1').text(); //getting the song title
    $('.reviewName').find('h3').html("Customer review:<br/>" + songTitle); //heading
    $('.btn.btn-info.btn-xs.writeReview_res.btnCust_Rat').css("color", "#006db1"); ///write review Color Change
    $('.btn.btn-info.btn-xs.writeReview_res.btnCust_Rat').css("background", "none");
    $('.btn.btn-info.btn-xs.writeReview_res.btnCust_Rat').css("border", "none");
    $('.btn.btn-info.btn-xs.writeReview_res.btnCust_Rat').prepend('+');

    //removing pagination
    $('.reviewFilter').find('.pagination.search-align').remove();

    //dashed lines
    $('.reviewListContents').find('ul').css('border-bottom-style', 'none');
    $('.reviewListContents').find('ul').css('border-top-style', 'dashed');
    $('.reviewFilter_bottom').css("border-top-style", "dashed");

    //stars along with content
    var stars = $('header').find('.desc').next().clone();
    $('.btn-group.responsive-btn-group.hidden-md.hidden-lg').before(stars);
    var noOfReviews = $.trim(stars.text().replace(/"/g, "").replace(/'/g, "").replace(/\(|\)/g, "").replace(/\r?\n|\r/, ""));
    var place = $('.reviewName').next();
    var toWrite = "Based on " + noOfReviews + " Reviews";
    place.html(place.html().replace("(" + noOfReviews + ")", toWrite));
    stars.append("<br/>");

    //Buy together
    $('.col-sm-12.col-xs-12.buytogetherHead').css("font-size", "large");
    $('.col-sm-12.col-xs-12.buytogetherHead').css("color", "#006db1");
    var tipstext = $('.tipsText');
    $('.col-sm-12.col-xs-12.buytogetherHead').after(tipstext);
    $('.buySubtotal').find('p').css('font-weight', 'normal');
    $('.buyCon1').css('border', 'none'); //removing border for buy together

    //table for summary
    $('dt').css("font-weight", "normal"); // making the dt normal
    $('dt').css("text-align", "left"); //left align
    $('#skuLeadTimeStr').remove();
    //$( '.lookInside' ).each(function () {this.style.setProperty( 'background-color', 'white' , 'important' );});

    //"Look Inside" section style changes
    var lookinsidesection = window.$("article.infoBox section.clearfix li.lookInside");
    window.$("article.infoBox section.clearfix li.lookInside").css({
        "margin-bottom": "0px",
        "justify-content": "space-around",
        "display": "flex",
        "font-weight": "bold"
    });
    window.$(lookinsidesection).find("button").remove();//remove lookinside control buttons.
    //window.$(lookinsidesection).find("a").last().text().test("").remove();//remove "watch" control.
    if (/^Watch/.test(window.$(lookinsidesection).find("a").last().text())) {
        window.$(lookinsidesection).find("a").last().remove();//remove "watch" control.
    }
    window.$(lookinsidesection).find("a").first().remove();//remove "product thumbnail".
    window.$(lookinsidesection).find("a").css("cssText", "display:flex !important;");
    window.$("article.infoBox section.clearfix li.summary").remove();//remove "summary" section.

} else {

    //Desktop Variation

    //Share with social media section
    var share = window.$(".shareThis.hidden-xs.hidden-sm");
    window.$(share).css("width", "100%");
    d = document.createElement('div');
    window.$(d).append(window.$(share)).css("float", "right");
    var target = window.$("#GTMSocialTarget");
    window.$(d).prepend(window.$(target));
    window.$(".col-sm-9.col-sm-offset-3.productShop").before(window.$(d));
    window.$('dt').css("font-weight", "normal");
    window.$('li.summary').find("dt").css("text-align", "left");

    //Product Thumbnail - hide it.
    window.$(".lookInside").hide();

    //Manipulating look inside functions
    var look_inside = window.$(".icon_look.icon_lookPDP.hidden-sm.hidden-xs");
    var listen = window.$(".icon_listen.hidden-sm.hidden-xs");
    var watch = window.$(".icon_watch.hidden-sm.hidden-xs");
    var summary = window.$("li.summary");
    var rating = window.$("div.rating");
    rating.css({"border-top": "none", "margin": "0px", "padding": "0px"});
    var page = window.$(".hidden-xs.icon_lookPDPImage");
    window.$('.icon_look.icon_lookPDP.hidden-sm.hidden-xs, .icon_listen.hidden-sm.hidden-xs').wrapAll('<div class="wrapper"/>');
    var wrapper = window.$("div.wrapper");
    window.$(".infoBox").find(".clearfix").prepend(wrapper);
    window.$(".infoBox").find(".clearfix").prepend(rating);
    window.$(".col-sm-3.heroImage").append(page);
    window.$(".productTabs.hidden-xs.hidden-sm").css({'width': '75%', 'float': 'right'});

    //Look Inside & Listen - style changes.
    var lookInsideButtons = window.$("article.infoBox .clearfix .wrapper");
    var infoBoxInMainArea = window.$("article.infoBox");
    window.$(infoBoxInMainArea).append(lookInsideButtons);
    window.$(infoBoxInMainArea).find(".rating").after(window.$(lookInsideButtons));
    window.$(lookInsideButtons).css({
        "border-top": "#ececec solid 2px",
        "border-bottom": "#ececec solid 2px",
        "font-weight": 600,
        "padding": "8px 0px",
        'margin-top': '40px',
        'margin-bottom': '10px'
    });
    window.$(lookInsideButtons).find("a").css("padding-right", "30px"); // letting it stay within a specific region
    //border lines on top and bottom

    //Write a review - hide it.
    window.$(".rating").find(".writeReview_res").hide();

    window.$('.panel-title').find('a').removeAttr("href").css({
        "cursor": "default",
        'color': 'black',
        'padding-bottom': '5px'
    });
    window.$('.panel.panel-default.responsive-panel').css('background', 'none');
    window.$('.tabUnit').css({'margin-right': '10px', 'background': '#efefef'}); //tab spaces along with the tabs in Main area


    //Customers who also Bought Section
    //Making the headings of the sections light grey
    window.$('.carouselTitle').first().html('<h2 style="text-align: center;">Customers Who Bought Christmas Sanctus Also Bought</h2>');  // removing ':'
    window.$('.carouselTitle').each(function () {
        this.style.setProperty('background-color', '#f7f7f7', 'important');
    });

    //Aligning them to the center
    window.$('.carouselTitle').find('h2').css({'text-align': 'center'});

    // Making the products section to white according to the mockup
    window.$('.carouselContent1').css({'background-color': 'white'});

    //Adding width and display inline for cases where there is not buy together sections
    window.$('.carousel.productCarousel').css({'width': '100%', 'display': 'inline-block'});

    //customer reviews section
    //getting the product name
    var productName = $('.col-sm-9.col-sm-offset-3.productShop').find('h1').text();

    //replacing the customer + reviews section according to the mockup
    window.$('.reviewName').find('h3').text('Customer Reviews: ' + productName);

    //removing the pagination
    window.$('.pagination.search-align:first').remove();

    //making the review stars float right
    window.$('.reviewQty.hidden-xs.hidden-sm').css({'float': 'right'});

    //Moving the Write a review to the right
    var writeAReviewLabel = $('.hidden-xs.hidden-sm.writeReview_resJQ');
    window.$(writeAReviewLabel).insertAfter($('.reviewQty.hidden-xs.hidden-sm').find('div'));

    //Increase the width to allow Customer reivews: product name
    window.$('.reviewName').css({'width': '70%'});

    //Reviews section header background should be white
    window.$('.reviewFilter').css('background', 'white');

    //Bring pagination at the bottom to the middle
    window.$('.pagination.search-align').css({'margin-right': '38%'});

    /*
     See Similar Sheet Music Section
     */

    //grab <section> of .anchorText. This is where See Similar Music section is. Wrap it with tabpanel like div.
    window.$(".anchorText").find("section").wrapAll('<div role="tabpanel" class="tab-pane fade" id="similarMusic" aria-labelledby="similarMusic-label"> </div>');
    var sm = $("#similarMusic");
    window.$(".tab-content").append(sm);

    //new tab content has been set.
    window.$(".nav.nav-tabs").append('<li role="presentation" class="tabUnit"><a class="aj" id="songssimilarTab-label" href="#similarMusic" role="tab" data-toggle="tab" aria-controls="songsListTab">More Like This &nbsp;<span></span></a></li>');

    //remove the section
    window.$('.anchorText').remove();

    window.$('.nav.nav-tabs').css("padding", "0px");
    window.$('.col-sm-3.heroImage').find('.overlay').css({'padding-top': '20px', 'padding-bottom': '20px'});
    window.$('.clickToViewLarger').remove();


    //share section
    window.$('.shareThis').css({"width": '100%', 'display': 'flex'}); //aligning the parent to center
    window.$('.shareThis').children().css({'display': 'flex', 'align-self': 'center', 'margin': '0px 0px 0px 10px'}); //aligning the chi,dren to center
    window.$('#fb-root').remove(); //final alignment


    //Customer Review Section
    //Write a review adding '+' and making it bold

    window.$('.writeReview_resJQ').prepend('+');
    window.$('.writeReview_resJQ').css('font-weight', 'bold');


    //dashed lines
    window.$('.reviewListContents').find('ul').css('border-bottom-style', 'none');
    window.$('.reviewListContents').find('ul').css('border-top-style', 'dashed');
    window.$('.reviewFilter_bottom').css({"border-top-style": "dashed", 'padding': '10px'});
    window.$('.reviewListContents').find('ul').first().css('border-top', 'none');

    //removing the arrow
    window.$("<style type='text/css'>.nav-tabs li.active > a::after{ content: none; margin-left: 0px; position: static; top: 0px; display: none }</style>").appendTo("head");

    //The stars in customer review - static for 5 stars
    //window.$('.reviewFilter').find('span.img_rating.rating_5').css({'width': '90px','height': '20px' , 'background-size': '95%', 'background-position-y': '-170px'});

    window.$("<style type='text/css'>.img_rating{height: 20px !important;width:90px !important;background-size:95% !important;}.rating_0{background-position: 0 4 !important;}.rating_0_5{background-position: 0 -16px !important;}.rating_1{background-position: 0 -33px !important;}.rating_1_5{background-position: 0 -50px !important;}.rating_2{background-position: 0 -67px !important;}.rating_2_5{background-position: 0 -84px !important;}.rating_3{background-position: 0 -101px !important;}.rating_3_5{background-position: 0 -118px !important;}.rating_4{background-position: 0 -135px !important;}.rating_4_5{background-position: 0 -152px !important;}.rating_5{background-position: 0 -170px !important;}</style>").appendTo("head");
    //review header
    window.$("article.reviewList .reviewFilter ul").css({"justify-content": "space-between", "display": "flex"});
    window.$("article.reviewList .reviewFilter ul li.reviewName").css({"display": "flex"});
    window.$("article.reviewList .reviewFilter ul li.reviewName h3").css({"align-self": "center"});
    window.$("article.reviewList .reviewFilter ul li.reviewQty").children().css("float", "right");

    var timeoutAmountInSeconds = 3; // Delete or comment this line out to run continuously
    var cssSelector = ".buyCon1 .buytogetherHead";
    var intervalInMilliseconds = 50;
    var codeToRun = function () {

        // Replace this entire line (including "//") with the code that should run after the element is found
        //Buy Together Section
        console.log("Doing Look inside==1==");
        window.$('.buyTogether .buytogetherHead').css({"font-size": "25px", "color": "steelblue"});
        var tipsText = window.$('.buyTogether .tipsText');
        tipsText.insertAfter(window.$('.buyTogether .buytogetherHead'));
        window.$('.buyTogether .default-add-to-cart').css({"background-color": "orange"});
        console.log("Buy Together Section : ==2==");

        //Buy together Font details
        window.$('.tipsText').css('font-size', '14px'); // making it 14px
        window.$('.buyCon1').find('.add-to-cart-button').css({'color': '#00000'});
        window.$('.buyCon1').find('span.price').css('font-size', '14px');
        window.$('.buySubtotal').css('font-weight', 'normal');
        window.$('.buyCon1').css({'padding-right': '0px', 'padding-left': '0px', 'display': 'flex'});
        window.$('.col-sm-5.col-xs-5.col-md-2.col-lg-2').last().find('.price').css({
            'font-weight': 'normal',
            'color': '#000000'
        });


        //Buy Together section - finer details
        window.$(".buyCon1").css("border", "none");
        window.$(".buyCon1 .buytogetherHead").css({
            "float": "none",
            "display": "inline-block",
            "margin": "auto",
            "vertical-align": "middle",
            "padding": "0px",
            "margin-right": "23px"
        });
        window.$(".buyCon1 .buytogetherHead").after('<img src="https://s14.postimg.org/aq3vhrsw1/greaterthansymbol.png" class="buyTogetherArrow" style="width: 30px;display: inline-block;vertical-align: middle;margin: auto;float: none;">');
        window.$(".buyCon1 > div").css({
            "float": "none",
            "display": "inline-block",
            "margin": "auto",
            "vertical-align": "middle",
            "padding": "0px"
        });

        window.$("#tempHide").remove(); // Leave this line
    };
    // Don't change anything below this line
    window.$("head").append("<style id='tempHide' type='text/css'>" + cssSelector + "{visibility:hidden !important;}</style>");
    var timeoutCodeToRun = function () {
        window.$("#tempHide").remove();
    };
    var count = 0, optimizelyInterval1 = setInterval(function () {
        if (window.$(cssSelector).length > 0) {
            codeToRun();
            clearInterval(optimizelyInterval1);
        }
        if (typeof(timeoutAmountInSeconds) === "number" && count === 0) {
            setTimeout(function () {
                timeoutCodeToRun();
                clearInterval(optimizelyInterval1);
            }, timeoutAmountInSeconds * 1000);
            count++;
        }
    }, intervalInMilliseconds);

    //Price box waiting and performing activities
    //var timeoutAmountInSeconds1 = 3; // Delete or comment this line out to run continuously
    var cssSelector1 = ".rightAside";
    var intervalInMilliseconds1 = 50;
    var codeToRun1 = function () {
        window.$('.rightAside').css({'width': '250px'});
        window.$(".price.grey").find(".thin").not(".thin.strikePrice").hide();
        window.$('.online').find('strong').css('font-size', '14px');
        $('.thin.strikePrice').css({'font-size': '14px'});
        $('.price.salePrice').css({'font-size': '21px'});
        window.$(".price.salePrice").find(".black").hide();
        window.$("#skuLeadTimeStr").hide();
        window.$(".qtyBox").find("b").hide();
        window.$(".price.savePrice").after("<hr / >");
        window.$("div.buttonBox").css("background", "none");
        window.$(".price.savePrice").css("color", "grey");
        window.$(".price.savePrice").css("font-weight", "normal");
        window.$(".price.savePrice").find("span").css("color", "#c60202");
        window.$(".btn_addToCart").css("width", "95%");
        window.$(".btn.btn-default.add-to-cart-button.default-add-to-cart.jQ_addtoCart.GoogleAnalyticsPDPAddtoCart.hidden-xs.btn_addToCart").removeClass("btn_addToCart").removeClass("add-to-cart-button").html("<strong style='color:black;font-size:21px'>Add to Cart</strong>");
        window.$(".btn_addToCart").css("background-color", "orange");
        window.$(".createMusicList_res").css("background", "white").prepend("+");
        window.$(".musicListPopup").css("background", "white");
        window.$('.priceBox').find('.default-add-to-cart').css({'background-color': '#ffa600', 'width': '100%'});   //change of color //changing the button width 100%
        window.$('.online').css('background-color', '#efefef');   //In stock background color
        var savetext = $('.save').text(); //coping the text value
        window.$('#qty').after(savetext);
        window.$('.qtyBox').css({'color': '#939393'});
        window.$('.save').hide();
        window.$("#tempHide1").remove(); // Leave this line
    };
    // Don't change anything below this line
    window.$("head").append("<style id='tempHide1' type='text/css'>" + cssSelector1 + "{visibility:hidden !important;}</style>");
    var timeoutCodeToRun1 = function () {
        console.log("timeoutCodeToRun1 happened!");
        window.$("#tempHide1").remove();
    };
    var count1 = 0, optimizelyInterval2 = setInterval(function () {
        if (window.$(cssSelector1).length > 0) {
            codeToRun1();
            clearInterval(optimizelyInterval2);
        }
        if (typeof(timeoutAmountInSeconds1) === "number" && count1 === 0) {
            setTimeout(function () {
                timeoutCodeToRun1();
                clearInterval(optimizelyInterval2);
            }, timeoutAmountInSeconds1 * 1000);
            count1++;
        }
    }, intervalInMilliseconds1);


    //font and spacing
    //header spacing
    window.$('.col-sm-9.col-sm-offset-3.productShop').find('h1').css('margin-bottom', '12px');
    window.$('header').find('.desc').css('margin-bottom', '12px');
    window.$('.col-sm-3.heroImage').css('width', '196px');
    window.$('.infoBox').find('.clearfix').css('padding-right', '20px');
    window.$("#buyTogether_addToCart_form input").css("color", "#000000");


}
