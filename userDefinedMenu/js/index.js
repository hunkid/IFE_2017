window.onload = function() {
    var dom = document.getElementById('userDefinedArea');
    var menu = document.getElementById('contextMenu');
    var menuH = 120;
    var menuW = 307;
    dom.addEventListener('contextmenu', function(e) {
        var event = e || window.e;
        var eveX = event.clientX;
        var eveY = event.clientY;
        var clientW = document.documentElement.clientWidth;
        var clientH = document.documentElement.clientHeight;
        console.log('鼠标：' + eveX + ',' + eveY);
        console.log('窗口：' + clientW + ',' + clientH);
        var x = 0;
        var y = 0;
        if (eveX + menuW > clientW) {
            x = eveX - menuW;
        } else {
            x = eveX;
        }
        if (eveY + menuH > clientH) {
            y = eveY - menuH;
        } else {
            y = eveY;
        }
        menu.style.left = x + 'px';
        menu.style.top = y + 'px';
        menu.style.display = 'block';
        e.stopPropagation();
        e.preventDefault();
    });
    document.body.addEventListener('click', function(e) {
        menu.style.display = 'none';
        e.stopPropagation();
        e.preventDefault();
    });
    document.body.addEventListener('contextmenu', function(e) {
        menu.style.display = 'none';
    });
    menu.addEventListener('contextmenu', function(e) {
        menu.style.display = 'none';
        e.stopPropagation();
        e.preventDefault();
    });

};
