// 高亮代码
hljs.highlightAll();
// ============ 看板娘 ============
isDesktop = !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
i=0
$('.menu-inner').children().each(function(){
    switch(i){
        case 0:
            $(this).addClass('menu-item-posts');
            break;
        case 1:
            $(this).addClass('menu-item-tags');
            break;
        case 2:
            $(this).addClass('menu-item-categories');
            break;
    }
    i=i+1;
})
if (isDesktop) {
    // $('head').append($('<link rel="stylesheet" href="https://fastly.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/css/all.min.css">'));
    $('body').append($('<script src="/js/autoload.js"></script>'));
}
// ============ 评论 ============
if ($('#toc-auto').length == 1) {
    $('#fixed-buttons').after($('<script defer src="https://cusdis.com/js/widget/lang/zh-cn.js"></script>'))
    $('#fixed-buttons').after($('<script async defer src="https://cusdis.com/js/cusdis.es.js"></script>'))
    // var commentdiv = document.createElement('div');
    // commentdiv.setAttribute('id', 'cusdis_thread');
    // commentdiv.setAttribute('data-host', 'https://cusdis.com');
    // commentdiv.setAttribute('data-app-id', '5dd45457-2056-48d1-8d1d-82f40fa80738');
    // commentdiv.setAttribute('data-page-id', sha256($('.single-title').eq(0).html()));
    // commentdiv.setAttribute('data-page-url', document.baseURI);
    // commentdiv.setAttribute('data-page-title', $('.single-title').eq(0).html());
    $('#back-to-top').after($('<a href="#cusdis_thread" id="view-comments" class="fixed-button" title="查看评论" style="display: block;"><i class="fas fa-comment fa-fw" aria-hidden="true"></i></a>'))
    $('main').append($(`<div class="container" style="padding-top:0rem;"><div class="page" style="padding-top:0rem;">
        <br><br><h4>😍😝😤😯👍✍️评论:</h4>
        <div id="cusdis_thread" data-host="https://cusdis.com"
        data-app-id="5dd45457-2056-48d1-8d1d-82f40fa80738"
        data-page-id="${sha256($('.single-title').eq(0).html())}" data-page-url="${document.baseURI}"
        data-page-title="${$('.single-title').eq(0).html()}"></div></div></div>`));
    //$('main').eq(0).append(commentdiv);
}
