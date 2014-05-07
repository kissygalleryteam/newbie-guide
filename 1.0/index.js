/**
 * @fileoverview 
 * @author 圆影<yuanying.xh@alibaba-inc.com>
 * @module newbie-guide

config = {
    closeable:true,
    type: 'image', // image | html
    effect: 'vSlide', // vSlide | hSlide
    width: 300,
    height: 300,
    contents: ['']
}

 **/
KISSY.add(function(S, N, Overlay, Xtemplate, Slide) {
    var $ = N.all;

    var Config = {
        closable:true,
        cls: 'ks-newbie',
        type: 'image', // image||html
        width: 300,
        height: 300,
        points: ['cc', 'cc'],
        contents: []
    }

    var TPL = '<div class="ks-newbie-wrap">'+
            '<ul class="tab-nav">'+
            '</ul>'+
            '<div class="tab-content">'+
                '{{#each contents}}'+
                '<div class="tab-pannel ks-newbie-pannel{{xindex}}">'+
                '{{#if type==="html"}}'+
                '{{this}}'+
                '{{else}}'+
                '<img src="{{this}}" border=0>'+
                '{{/if}}'+
                '</div>'+
                '{{/each}}'+
            '</div>'+
            '<a class="ks-newbie-pre">前</a>'+
            '<a class="ks-newbie-next">后</a>'+
        '</div>';

    function NewbieGuide(){
        this._init.apply(this,arguments);
    }

    S.augment(NewbieGuide,S.EventTarget,{
        _init: function(cfg){
            this.cfg = S.merge(Config,cfg);
            this.overlay = this._createOverlay();
            this.el = $(this.overlay.el);
            this.slide = this._bindSlide();
            this._bind();
        },
        _createOverlay: function(){
            var self = this;
            var overlay = new Overlay({
                mask: true,
                zIndex: 99999,
                closable: self.cfg.closable,
                effect: {
                    effect: 'fade'
                },
                align: {
                    points: self.cfg.points
                },
                content: self._renderSlideHTML(),
                elCls: self.cfg.cls
            });
            overlay.render();
            var el = $(overlay.el);
            overlay.on('show',function(){
                var nextTop = el.all('.tab-nav').offset().top-el.offset().top+el.all('.tab-nav').height()+5;
                el.all('.ks-newbie-next').css('top',nextTop).fadeIn(0.05);
            })
            overlay.on('hide',function(){
                self.close();
            })
            el.all('.tab-content,.tab-pannel').css({
                width: self.cfg.width,
                height: self.cfg.height
            });
            return overlay;
        },
        _renderSlideHTML: function(){
            return new Xtemplate(TPL).render(this.cfg);
        },
        _bindSlide: function(){
            var self = this;
            var el = $(this.overlay.el);
            var slide = new Slide(el.one('.ks-newbie-wrap'),{
                effect: self.cfg.effect,
                colspan: 1,
                carousel: false
            });
            return slide;
        },
        _bind: function(){
            var self = this;
            $(this.el).on('click',function(e){
                var target = $(e.target);
                if (target.hasClass('ks-newbie-pre')) {
                    self.slide.previous();
                };
                if (target.hasClass('ks-newbie-next')) {
                    self.slide.next();
                };
                e.halt();
            }).unselectable();
        },
        close: function(){
            this.overlay.destroy();
            this.fire('close');
        },
        show: function(){
            this.overlay.show();
        }
    });

    return NewbieGuide;

}, {
    requires: [
        'node',
        'overlay',
        'xtemplate',
        'gallery/slide/1.3/'
    ]
})