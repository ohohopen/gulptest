(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.surfing_1 = function() {
	this.initialize(img.surfing_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,44);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0DCC1").s().p("AgjAlQgPgPgBgWQABgUAPgPQAPgPAUgBQAWABAPAPQAOAPAAAUQAAAWgOAPQgPAOgWAAQgUAAgPgOg");
	this.shape.setTransform(5.15,5.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.3,10.3);


(lib.mov4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.元件1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(5.25,5.25,0.5147,0.5147,0,0,0,5.4,5.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:5.2,regY:5.2,scaleX:0.1748,scaleY:0.1748,x:5.15,y:5.15},14,cjs.Ease.get(1)).to({regX:5.4,regY:5.4,scaleX:0.5146,scaleY:0.5146,x:5.25,y:5.25},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.5,2.5,5.4,5.4);


(lib.mov3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.元件1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(5.2,5.2,0.6699,0.6699,0,0,0,5.2,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.2719,scaleY:0.2719,x:5.15,y:5.15},8,cjs.Ease.get(1)).to({scaleX:0.6699,scaleY:0.6699,x:5.2,y:5.2},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.7,1.7,6.8999999999999995,6.8999999999999995);


(lib.mov2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.元件1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(5.15,5.15,0.2719,0.2719,0,0,0,5.2,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.5437,scaleY:0.5437,x:5.25,y:5.25},7,cjs.Ease.get(1)).to({scaleX:0.2719,scaleY:0.2719,x:5.15,y:5.15},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.4,2.4,5.6,5.6);


(lib.mov1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.元件1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(5.15,5.15,0.2719,0.2719,0,0,0,5.2,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.7573,scaleY:0.7573,x:5.25,y:5.25},14,cjs.Ease.get(1)).to({scaleX:0.2719,scaleY:0.2719,x:5.15,y:5.15},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.3,1.3,7.8,7.8);


// stage content:
(lib.surfing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.surfing_1();
	this.instance.parent = this;
	this.instance.setTransform(2,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(107));

	// 圖層_2
	this.instance_1 = new lib.mov4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(50.85,129.05,1,1,160.7588,0,0,5.2,5.2);

	this.instance_2 = new lib.mov2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(46.3,126.25,1,1,160.7588,0,0,5.2,5.1);

	this.instance_3 = new lib.mov4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(45.1,128.6,1,1,160.7588,0,0,5.2,5.2);

	this.instance_4 = new lib.mov3("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(52.9,124,1,1,160.7588,0,0,5.2,5.2);

	this.instance_5 = new lib.mov2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(58.7,123.15,1,1,160.7588,0,0,5.2,5.1);

	this.instance_6 = new lib.mov1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(31.4,140.4,1,1,160.7588,0,0,5.2,5.2);

	this.instance_7 = new lib.mov4("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(44.2,136.85,1,1,0,0,0,5.2,5.2);

	this.instance_8 = new lib.mov3("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(34.75,137.25,1,1,0,0,0,5.2,5.2);

	this.instance_9 = new lib.mov2("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(40.5,133.55,1,1,0,0,0,5.2,5.2);

	this.instance_10 = new lib.mov1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(38.95,138.05,1,1,0,0,0,5.2,5.2);

	this.instance_11 = new lib.mov4("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(50.35,126.15,1,1,160.7588,0,0,5.2,5.2);

	this.instance_12 = new lib.mov2("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(48.45,128.05,1,1,160.7588,0,0,5.2,5.1);

	this.instance_13 = new lib.mov4("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(37.25,129.15,1,1,160.7588,0,0,5.2,5.2);

	this.instance_14 = new lib.mov3("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(44.8,129.45,1,1,160.7588,0,0,5.2,5.2);

	this.instance_15 = new lib.mov2("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(55.35,124.1,1,1,160.7588,0,0,5.2,5.1);

	this.instance_16 = new lib.mov1("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(31.1,138.05,1,1,160.7588,0,0,5.2,5.2);

	this.instance_17 = new lib.mov4("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(36.35,137.4,1,1,0,0,0,5.2,5.2);

	this.instance_18 = new lib.mov3("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(26.9,137.8,1,1,0,0,0,5.2,5.2);

	this.instance_19 = new lib.mov2("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(32.65,134.1,1,1,0,0,0,5.2,5.2);

	this.instance_20 = new lib.mov1("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(40.7,133.5,1,1,0,0,0,5.2,5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(107));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(77,175,-15.5,-30.69999999999999);
// library properties:
lib.properties = {
	id: 'B43F65E771AB3947A793DF35548058F0',
	width: 150,
	height: 150,
	fps: 30,
	color: "#0033CC",
	opacity: 1.00,
	manifest: [
		{src:"images/surfing_1.png", id:"surfing_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B43F65E771AB3947A793DF35548058F0'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;