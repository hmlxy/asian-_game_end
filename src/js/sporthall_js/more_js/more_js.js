$(function() {
    // 导航栏js
    function showContent() {
        var url = "https://chatmindai.aabiji.com/#/chat/1684761047947";
        var content = document.getElementById("chat-content");
        var iframe = document.getElementById("chat-iframe");
        iframe.src = url;
        content.style.display = "block";
        document.body.style.width = "70%";
        document.querySelector(".navbar").style.width = "70%";
    }

    function hideContent() {
        document.getElementById("chat-content").style.display = "none";
        document.getElementById("chat-iframe").src = "";
        document.body.style.width = "100%";
        document.querySelector(".navbar").style.width = "100%";
    }
    $(document).ready(function() {
        // 点击导航菜单按钮展开并隐藏
        $("#menu-button").click(function() {
            $(".navbar-collapse").slideToggle();
        });
    });
    var previousScroll = 0;

    $(window).scroll(function() {
        var currentScroll = $(this).scrollTop();

        if (currentScroll < previousScroll) {
            //意味着上滑
            $('.navbar').css('top', '0');
        } else {
            $('.navbar').css('top', '-80px');
        }
        previousScroll = currentScroll;
    });

    // 底部js
    $('.sjmt_box div').hover(function() {
        // 使用toggleClass()方法切换.active类
        $(this).find('.sjmt_img').toggleClass('disactive');
    });

    $('.sjmt_box div')
        .mouseenter(function() {
            // 获取当前div的索引
            var index = $(this).index();
            // 显示相应的二维码
            $('.linkbox img').eq(index).show();
        })
        .mouseleave(function() {
            // 隐藏所有二维码
            $('.linkbox img').hide();
        });
})