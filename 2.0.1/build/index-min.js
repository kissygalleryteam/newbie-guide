KISSY.add('kg/newbie-guide/2.0.1/index',[],function(S ,require, exports, module) {KISSY.add(function(e,t,n,s,i){function a(){this._init.apply(this,arguments)}var l=t.all,c={closable:!0,cls:"ks-newbie",type:"image",width:300,height:300,points:["cc","cc"],contents:[]},o='<div class="ks-newbie-wrap"><ul class="tab-nav"></ul><div class="tab-content">{{#each contents}}<div class="tab-pannel ks-newbie-pannel{{xindex}}">{{#if type==="html"}}{{this}}{{else}}<img src="{{this}}" border=0>{{/if}}</div>{{/each}}</div><a class="ks-newbie-pre">前</a><a class="ks-newbie-next">后</a></div>';return e.augment(a,{_init:function(t){this.cfg=e.merge(c,t),this.overlay=this._createOverlay(),this.el=l(this.overlay.el),this.slide=this._bindSlide(),this._bind()},_createOverlay:function(){var e=this,t=new n({mask:!0,zIndex:99999,closeAction:"destroy",closable:e.cfg.closable,effect:{effect:"fade"},align:{points:e.cfg.points},content:e._renderSlideHTML(),elCls:e.cfg.cls});t.render();var s=l(t.el);return t.on("show",function(){var e=s.all(".tab-nav").offset().top-s.offset().top+s.all(".tab-nav").height()+5;s.all(".ks-newbie-next").css("top",e).fadeIn(.05)}),s.all(".tab-content,.tab-pannel").css({width:e.cfg.width,height:e.cfg.height}),t},_renderSlideHTML:function(){return new s(o).render(this.cfg)},_bindSlide:function(){var e=this,t=l(this.overlay.el),n=new i(t.one(".ks-newbie-wrap"),{effect:e.cfg.effect,colspan:1,carousel:!1});return n},_bind:function(){var e=this;l(this.el).on("click",function(t){var n=l(t.target);n.hasClass("ks-newbie-pre")&&e.slide.previous(),n.hasClass("ks-newbie-next")&&e.slide.next(),t.halt()}).unselectable()},close:function(){this.overlay.destroy()},show:function(){this.overlay.show()}}),a},{requires:["node","overlay","xtemplate","gallery/slide/1.3/"]});});