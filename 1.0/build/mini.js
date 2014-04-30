/*
combined files : 

gallery/newbie-guide/1.0/index
gallery/newbie-guide/1.0/mini

*/
/**
 * @fileoverview 
 * @author 圆影<yuanying.xh@alibaba-inc.com>
 * @module newbie-guide

config = {
    closeable:true,
    type: 'image', // image | html
    effect: 'vSlide', // vSlide | hSlide
    contents: ['']
}

 **/
KISSY.add('gallery/newbie-guide/1.0/index',function(S, N, Overlay, Xtemplate, Slide) {
    var $ = N.all;

    var Config = {
        closable:true,
        cls: 'newbie',
        type: 'image', // image||html
        contents: []
    }

    var TPL = '<div class="newbie-wrap">'+
            '<ul class="tab-nav">'+
            '</ul>'+
            '<div class="tab-content">'+
                '{{#each contents}}'+
                '<div class="tab-pannel newbie-pannel{{xindex}}">'+
                '{{#if type==="html"}}'+
                '{{this}}'+
                '{{else}}'+
                '<img src="{{this}}" border=0>'+
                '{{/if}}'+
                '</div>'+
                '{{/each}}'+
            '</div>'+
            '<a class="newbie-pre">前</a>'+
            '<a class="newbie-next">后</a>'+
        '</div>';

    function NewbieGuide(){
        this._init.apply(this,arguments);
    }

    S.augment(NewbieGuide,{
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
                closeAction: 'destroy',
                closable: self.cfg.closable,
                effect: {
                    effect: 'fade'
                },
                align: {
                    points: ['cc', 'cc']
                },
                content: self._renderSlideHTML(),
                elCls: self.cfg.cls
            });
            overlay.render();
            return overlay;
        },
        _renderSlideHTML: function(){
            return new Xtemplate(TPL).render(this.cfg);
        },
        _bindSlide: function(){
            var self = this;
            var el = $(this.overlay.el);
            var slide = new Slide(el.one('.newbie-wrap'),{
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
                if (target.hasClass('newbie-pre')) {
                    self.slide.previous();
                };
                if (target.hasClass('newbie-next')) {
                    self.slide.next();
                };
                e.halt();
            }).unselectable();
        },
        close: function(){
            this.overlay.destroy();
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

/**
 * @fileoverview 
 * @author 圆影<yuanying.xh@alibaba-inc.com>
 * @module newbie-guide
 **/
KISSY.add('gallery/newbie-guide/1.0/mini',function(S, Component) {

  return Component;

}, {
  requires: ["./index"]
});
