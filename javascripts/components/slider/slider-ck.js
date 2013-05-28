(function(e,t,n){"use strict";function s(t,n){this.$el=e(t);this.options=e.extend({},i,n);this.init()}var r="Slider",i={};s.prototype.init=function(){this.outputValue=0;this.$bar=e("<div>").addClass("slider-bar");this.$knob=e("<div>").addClass("knob");this.$val=e("<span>").addClass("val");this.$el.append(this.$bar,this.$knob,this.$val);var t=e("<span>").addClass("slider-left"),r=e("<span>").addClass("slider-right"),i=e("<span>").addClass("slider-middle");this.$bar.append(t,i,r);this.$el.find(".val").html(this.options.type+": 0.00");this.$knob.bind("mousedown",function(t){var r=t.pageX;this.sliderWidth=this.$el.find(".slider-middle").width();e(n).bind("mouseup.slider.drag",function(){this.unbindSliderDrag();var t=parseInt(this.$knob.css("left"),10);if(t>this.sliderWidth)return;var r={type:this.$el.attr("id"),value:this.getSliderValue(t)};e(n).trigger("sliderValueChanged",r)}.bind(this));e(n).bind("mousemove.slider.drag",function(e){this.setSliderPosition(e.pageX-r);r=e.pageX}.bind(this));n.body.focus();n.onselectstart=function(){return!1};t.target.ondragstart=function(){return!1};return!1}.bind(this))};s.prototype.getSliderValue=function(e){var t=e+this.$knob.width()/2,n=this.$bar.find(".slider-middle").width();return(t/n).toFixed(2)};s.prototype.setSliderPosition=function(e){var t=this.$knob.width(),n=e<0,r=e>0,i=0-t/2,s=this.$bar.find(".slider-middle").width()-t/2,o=this.$knob.position().left+e,u=n&&o<i,a=r&&o>s,f=this.$knob.position().left+e;if(u||a)return;this.$knob.css("left",+f+"px");this.$el.find(".val").html(this.options.type+": "+this.getSliderValue(f))};s.prototype.unbindSliderDrag=function(){e(n).unbind("mousemove.slider.drag");e(n).unbind("mouseup.slider.drag")};e.fn[r]=function(t){return this.each(function(){e.data(this,"plugin_"+r)||e.data(this,"plugin_"+r,new s(this,t))})}})(jQuery,window,document);