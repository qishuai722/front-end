myFocus.pattern.extend({//*********************液动风格******************
    'mF_liquid': function (settings, $) {
        var $focus = $(settings);
        var $picBox = $focus.find('.pic');
        var $picList = $picBox.find('li');
        var $txtList = $focus.addListTxt().find('li');
        var $numList = $focus.addListNum().find('li');
        var $picModList = $focus.addHtml('<div class="pic_mod"></div>').html($picBox.html()).find('img');
        //CSS
        var w = settings.width, h = settings.height;
        $picModList.each(function (i) {
            $picList[i].style.cssText = 'width:0px;z-index:1;';
            this.style.cssText = 'width:' + w * 10 + 'px;height:' + h + 'px;left:' + w + 'px;';
        });
        //PLAY
        $focus.play(function (i) {
            $picList.eq(i).stop()[0].style.width = 0 + 'px';
            $picModList.eq(i).stop()[0].style.left = w + 'px';
            $txtList[i].style.display = 'none';
            $numList[i].className = '';
        }, function (i) {
            $picModList.eq(i).slide({left: 0}, 100, 'linear', function () {
                $picList.eq(i).slide({width: w}, 700);
                $(this).slide({left: -9 * w}, 700);
            });
            $txtList[i].style.display = 'block';
            $numList[i].className = 'current';
        });
        //Control
        settings.delay = 0;//mouseover模式时延迟固定为0以兼容IE6
        $focus.bindControl($numList);
    }
});