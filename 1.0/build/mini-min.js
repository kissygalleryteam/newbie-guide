/*!build time : 2014-04-30 10:44:02 PM*/
KISSY.add("gallery/newbie-guide/1.0/index",function(a,b,c,d,e){function f(){this._init.apply(this,arguments)}var g=b.all,h={closable:!0,cls:"newbie",type:"image",contents:[]},i='<div class="newbie-wrap"><ul class="tab-nav"></ul><div class="tab-content">{{#each contents}}<div class="tab-pannel newbie-pannel{{xindex}}">{{#if type==="html"}}{{this}}{{else}}<img src="{{this}}" border=0>{{/if}}</div>{{/each}}</div><a class="newbie-pre">\u524d</a><a class="newbie-next">\u540e</a></div>';return a.augment(f,{_init:function(b){this.cfg=a.merge(h,b),this.overlay=this._createOverlay(),this.el=g(this.overlay.el),this.slide=this._bindSlide(),this._bind()},_createOverlay:function(){var a=this,b=new c({mask:!0,closeAction:"destroy",closable:a.cfg.closable,effect:{effect:"fade"},align:{points:["cc","cc"]},content:a._renderSlideHTML(),elCls:a.cfg.cls});return b.render(),b},_renderSlideHTML:function(){return new d(i).render(this.cfg)},_bindSlide:function(){var a=this,b=g(this.overlay.el),c=new e(b.one(".newbie-wrap"),{effect:a.cfg.effect,colspan:1,carousel:!1});return c},_bind:function(){var a=this;g(this.el).on("click",function(b){var c=g(b.target);c.hasClass("newbie-pre")&&a.slide.previous(),c.hasClass("newbie-next")&&a.slide.next(),b.halt()}).unselectable()},close:function(){this.overlay.destroy()},show:function(){this.overlay.show()}}),f},{requires:["node","overlay","xtemplate","gallery/slide/1.3/"]}),KISSY.add("gallery/newbie-guide/1.0/mini",function(a,b){return b},{requires:["./index"]});