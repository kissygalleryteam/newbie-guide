## 综述

NewbieGuide是一个新功能引导组件，主要是集成slide组件，只要简单的设置图片地址就可以。

* 版本：2.0.1
* 作者：圆影
* demo：[http://kg.kissyui.com/newbie-guide/2.0.1/demo/index.html](http://kg.kissyui.com/newbie-guide/2.0.1/demo/index.html)

## 初始化组件
		
    S.use('kg/newbie-guide/2.0.1/index', function (S, NewbieGuide) {
        var newbie = new NewbieGuide({
            closable:true,
            cls: 'newbie',
            type: 'image', // image | html
            effect: 'vSlide', // vSlide | hSlide
            width: 520,
            height: 280,
            contents: [
                'http://gtms03.alicdn.com/tps/i3/T1O4h_FG4cXXazuKP7-520-280.jpg',
                'http://i.mmcdn.cn/simba/img/T15_F7FGpdXXb1upjX.jpg',
                'http://i.mmcdn.cn/simba/img/T15_F7FGpdXXb1upjX.jpg'
            ] 
        });
        newbie.show();
    })
	
	

## API说明


`closable` 是否显示关闭按钮 

`cls` 容器CLASS

`type` 容器内容类型，可选: image | html

`effect` 滚动效果，可选：vSlide | hSlide

`width` 容器内容区域宽度

`height` 容器内容区域高度

`contents` 容器内容数组，type=image时内容为图片地址，type=html时内容为HTML代码