//点击页面出现爱心
(function(window,document,undefined){
    var hearts = [];
    window.requestAnimationFrame = (function(){
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback){
                setTimeout(callback,1000/60);
            }
    })();
    init();
    function init(){
        css(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: absolute;}.heart:after{top: -5px;}.heart:before{left: -5px;}");
        attachEvent();
        gameloop();
    }
    function gameloop(){
        for(var i=0;i<hearts.length;i++){
            if(hearts[i].alpha <=0){
                document.body.removeChild(hearts[i].el);
                hearts.splice(i,1);
                continue;
            }
            hearts[i].y--;
            hearts[i].scale += 0.004;
            hearts[i].alpha -= 0.013;
            hearts[i].el.style.cssText = "left:"+hearts[i].x+"px;top:"+hearts[i].y+"px;opacity:"+hearts[i].alpha+";transform:scale("+hearts[i].scale+","+hearts[i].scale+") rotate(45deg);background:"+hearts[i].color;
        }
        requestAnimationFrame(gameloop);
    }
    function attachEvent(){
        var old = typeof window.onclick==="function" && window.onclick;
        window.onclick = function(event){
            old && old();
            createHeart(event);
        }
    }
    function createHeart(event){
        var d = document.createElement("div");
        d.className = "heart";
        hearts.push({
            el : d,
            x : event.clientX - 5,
            y : event.clientY - 5,
            scale : 1,
            alpha : 1,
            color : randomColor()
        });
        document.body.appendChild(d);
    }
    function css(css){
        var style = document.createElement("style");
        style.type="text/css";
        try{
            style.appendChild(document.createTextNode(css));
        }catch(ex){
            style.styleSheet.cssText = css;
        }
        document.getElementsByTagName('head')[0].appendChild(style);
    }
    function randomColor(){
        return "rgb("+(~~(Math.random()*255))+","+(~~(Math.random()*255))+","+(~~(Math.random()*255))+")";
    }
})(window,document);
// 倒计时
var Day;
var Minute;
var Second;
var mia;
// 页面加载事件
window.onload = function () {
    Day = document.querySelectorAll(".sj>div>span")[1];
    // console.log(Day);
    Minute = document.querySelectorAll(".sj>div>span")[3];
    // console.log(Minute);
    Second = document.querySelectorAll(".sj>div>span")[5];
    // console.log(Second);
    mia = document.querySelectorAll(".sj>div>span")[7];
    // console.log(mia);
}
// 闭包函数  具体代码
function getNowToNewYear() {
    // 时间对象
    var Now = new Date();
    // 验证
    console.log(Now.getTime());
    // 新年时间
    var NewYear = new Date("2024-07-22 15:48:59");
    // 验证
    console.log(NewYear.getFullYear(), NewYear.getMonth(), NewYear.getDate());
    console.log(NewYear.getTime());
    console.log(NewYear.getTime() - Now.getTime());
    // 时间戳 新年到现在的差值
    var sjc = NewYear.getTime() - Now.getTime();
    // console.log((sjc / 1000 / 60 / 60 / 24));
    // 时间戳 单位是毫秒 /1000得到秒数
    sjc = (sjc / 1000);
    // 天数
    var day = parseInt(sjc / 60 / 60 / 24);
    console.log(day);
    // 去掉整天数  余下的小时数
    var hours = parseInt(sjc / 60 / 60 % 24);
    console.log(hours);
    // 去掉整小时数 余下的分钟数
    var minutes = parseInt(sjc / 60 % 60);
    console.log(minutes);
    // 去掉整分钟数 余下的秒数
    var miao = parseInt(sjc % 60);
    console.log(miao);
    // 将得到的值 赋值给相对应的元素对象的innerHTML  在页面显示出来
    mia.innerHTML=miao;
    Second.innerHTML=minutes;
    Minute.innerHTML=hours;
    Day.innerHTML=day;
}
// 定时器  每隔一秒计算一下时间
window.setInterval(function (){
    // 计时器执行的程序   闭包函数
    return getNowToNewYear;
}(),1000);


 /*
        
        * Settings
        
        */
        
 var settings = {
        
    particles: {
    
    length: 400, // maximum amount of particles
    
    duration: 2, // particle duration in sec
    
    velocity: 80, // particle velocity in pixels/sec
    
    effect: -0.75, // play with this for a nice effect
    
    size: 20, // particle size in pixels
    
    },
    
    };
    
    
    /*
    
    * RequestAnimationFrame polyfill by Erik M?ller
    
    */
    
    (function(){var b=0;var c=["ms","moz","webkit","o"];for(var a=0;a<c.length&&!window.requestAnimationFrame;++a){window.requestAnimationFrame=window[c[a]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[c[a]+"CancelAnimationFrame"]||window[c[a]+"CancelRequestAnimationFrame"]}if(!window.requestAnimationFrame){window.requestAnimationFrame=function(h,e){var d=new Date().getTime();var f=Math.max(0,16-(d-b));var g=window.setTimeout(function(){h(d+f)},f);b=d+f;return g}}if(!window.cancelAnimationFrame){window.cancelAnimationFrame=function(d){clearTimeout(d)}}}());
    
    
    /*
    
    * Point class
    
    */
    
    var Point = (function() {
    
    function Point(x, y) {
    
    this.x = (typeof x !== 'undefined') ? x : 0;
    
    this.y = (typeof y !== 'undefined') ? y : 0;
    
    }
    
    Point.prototype.clone = function() {
    
    return new Point(this.x, this.y);
    
    };
    
    Point.prototype.length = function(length) {
    
    if (typeof length == 'undefined')
    
    return Math.sqrt(this.x * this.x + this.y * this.y);
    
    this.normalize();
    
    this.x *= length;
    
    this.y *= length;
    
    return this;
    
    };
    
    Point.prototype.normalize = function() {
    
    var length = this.length();
    
    this.x /= length;
    
    this.y /= length;
    
    return this;
    
    };
    
    return Point;
    
    })();
    
    
    /*
    
    * Particle class
    
    */
    
    var Particle = (function() {
    
    function Particle() {
    
    this.position = new Point();
    
    this.velocity = new Point();
    
    this.acceleration = new Point();
    
    this.age = 0;
    
    }
    
    Particle.prototype.initialize = function(x, y, dx, dy) {
    
    this.position.x = x;
    
    this.position.y = y;
    
    this.velocity.x = dx;
    
    this.velocity.y = dy;
    
    this.acceleration.x = dx * settings.particles.effect;
    
    this.acceleration.y = dy * settings.particles.effect;
    
    this.age = 0;
    
    };
    
    Particle.prototype.update = function(deltaTime) {
    
    this.position.x += this.velocity.x * deltaTime;
    
    this.position.y += this.velocity.y * deltaTime;
    
    this.velocity.x += this.acceleration.x * deltaTime;
    
    this.velocity.y += this.acceleration.y * deltaTime;
    
    this.age += deltaTime;
    
    };
    
    Particle.prototype.draw = function(context, image) {
    
    function ease(t) {
    
    return (--t) * t * t + 1;
    
    }
    
    var size = image.width * ease(this.age / settings.particles.duration);
    
    context.globalAlpha = 1 - this.age / settings.particles.duration;
    
    context.drawImage(image, this.position.x - size / 2, this.position.y - size / 2, size, size);
    
    };
    
    return Particle;
    
    })();
    
    
    /*
    
    * ParticlePool class
    
    */
    
    var ParticlePool = (function() {
    
    var particles,
    
    firstActive = 0,
    
    firstFree = 0,
    
    duration = settings.particles.duration;
    
    function ParticlePool(length) {
    
    // create and populate particle pool
    
    particles = new Array(length);
    
    for (var i = 0; i < particles.length; i++)
    
    particles[i] = new Particle();
    
    }
    
    ParticlePool.prototype.add = function(x, y, dx, dy) {
    
    particles[firstFree].initialize(x, y, dx, dy);
    
    // handle circular queue
    
    firstFree++;
    
    if (firstFree == particles.length) firstFree = 0;
    
    if (firstActive == firstFree ) firstActive++;
    
    if (firstActive == particles.length) firstActive = 0;
    
    };
    
    ParticlePool.prototype.update = function(deltaTime) {
    
    var i;
    
    // update active particles
    
    if (firstActive < firstFree) {
    
    for (i = firstActive; i < firstFree; i++)
    
    particles[i].update(deltaTime);
    
    }
    
    if (firstFree < firstActive) {
    
    for (i = firstActive; i < particles.length; i++)
    
    particles[i].update(deltaTime);
    
    for (i = 0; i < firstFree; i++)
    
    particles[i].update(deltaTime);
    
    }
    
    // remove inactive particles
    
    while (particles[firstActive].age >= duration && firstActive != firstFree) {
    
    firstActive++;
    
    if (firstActive == particles.length) firstActive = 0;
    
    }
    
    };
    
    ParticlePool.prototype.draw = function(context, image) {
    
    // draw active particles
    
    if (firstActive < firstFree) {
    
    for (i = firstActive; i < firstFree; i++)
    
    particles[i].draw(context, image);
    
    }
    
    if (firstFree < firstActive) {
    
    for (i = firstActive; i < particles.length; i++)
    
    particles[i].draw(context, image);
    
    for (i = 0; i < firstFree; i++)
    
    particles[i].draw(context, image);
    
    }
    
    };
    
    return ParticlePool;
    
    })();
    
    
    /*
    
    * Putting it all together
    
    */
    
    (function(canvas) {
    
    var context = canvas.getContext('2d'),
    
    particles = new ParticlePool(settings.particles.length),
    
    particleRate = settings.particles.length / settings.particles.duration, // particles/sec
    
    time;
    
    // get point on heart with -PI <= t <= PI
    
    function pointOnHeart(t) {
    
    return new Point(
    
    140 * Math.pow(Math.sin(t), 3),
    
    100 * Math.cos(t) - 50 * Math.cos(2 * t) - 20 * Math.cos(3 * t) - 10 * Math.cos(4 * t) + 25
    
    );
    
    }
    
    // creating the particle image using a dummy canvas
    
    var image = (function() {
    
    var canvas = document.createElement('canvas'),
    
    context = canvas.getContext('2d');
    
    canvas.width = settings.particles.size;
    
    canvas.height = settings.particles.size;
    
    // helper function to create the path
    
    function to(t) {
    
    var point = pointOnHeart(t);
    
    point.x = settings.particles.size / 2 + point.x * settings.particles.size / 350;
    
    point.y = settings.particles.size / 2 - point.y * settings.particles.size / 350;
    
    return point;
    
    }
    
    // create the path
    
    context.beginPath();
    
    var t = -Math.PI;
    
    var point = to(t);
    
    context.moveTo(point.x, point.y);
    
    while (t < Math.PI) {
    
    t += 0.01; // baby steps!
    
    point = to(t);
    
    context.lineTo(point.x, point.y);
    
    }
    
    context.closePath();
    
    // create the fill
    
    context.fillStyle = '#ea80b0';
    
    context.fill();
    
    // create the image
    
    var image = new Image();
    
    image.src = canvas.toDataURL();
    
    return image;
    
    })();
    
    // render that thing!
    
    function render() {
    
    // next animation frame
    
    requestAnimationFrame(render);
    
    // update time
    
    var newTime = new Date().getTime() / 1000,
    
    deltaTime = newTime - (time || newTime);
    
    time = newTime;
    
    // clear canvas
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    // create new particles
    
    var amount = particleRate * deltaTime;
    
    for (var i = 0; i < amount; i++) {
    
    var pos = pointOnHeart(Math.PI - 2 * Math.PI * Math.random());
    
    var dir = pos.clone().length(settings.particles.velocity);
    
    particles.add(canvas.width / 2 + pos.x, canvas.height / 2 - pos.y, dir.x, -dir.y);
    
    }
    
    // update and draw particles
    
    particles.update(deltaTime);
    
    particles.draw(context, image);
    
    }
    
    // handle (re-)sizing of the canvas
    
    function onResize() {
    
    canvas.width = canvas.clientWidth;
    
    canvas.height = canvas.clientHeight;
    
    }
    
    window.onresize = onResize;
    
    // delay rendering bootstrap
    
    setTimeout(function() {
    
    onResize();
    
    render();
    
    }, 10);
    
    })(document.getElementById('pinkboard'));


      
