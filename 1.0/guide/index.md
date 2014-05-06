## 综述

NewbieGuide是一个新功能引导组件，主要是集成slide组件，只要简单的设置图片地址就可以。

* 版本：1.0
* 作者：圆影
* demo：[http://gallery.kissyui.com/newbie-guide/1.0/demo/index.html](http://gallery.kissyui.com/newbie-guide/1.0/demo/index.html)

## 初始化组件
		
    S.use('gallery/newbie-guide/1.0/index', function (S, NewbieGuide) {
        var newbie = new NewbieGuide({
            closable:true,
            cls: 'newbie',
            type: 'image', // image | html
            effect: 'vSlide', // vSlide | hSlide
            contents: [
                'http://gtms03.alicdn.com/tps/i3/T1O4h_FG4cXXazuKP7-520-280.jpg',
                'http://i.mmcdn.cn/simba/img/T15_F7FGpdXXb1upjX.jpg',
                'http://i.mmcdn.cn/simba/img/T1U0JuFHBbXXb1upjX.jpg'
            ] 
        });
        newbie.show();
    })
	
	

## API说明
