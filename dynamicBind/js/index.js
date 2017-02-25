function Observer(object) {
    this.data = object;
    this.watch(this.data);
}
Observer.prototype.watch = function(obj) {
    var val;
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            val = obj[key];
            if (Object.prototype.toString.toString(obj[key]) === '[object Object]') {
                new Observer(val);
            } else {
                this.define(key, val);
            }
        }
    }
}
Observer.prototype.define = function(key, val) {
    Object.defineProperty(this.data, key, {
        enumerable: true,
        configurable: true,
        get: function() {
            console.log('你访问了 ' + key);
            return val;
        },
        set: function(newVal) {
            console.log('你设置了 ' + key + '，新的值为' + newVal);
            val = newVal; 
        }
    });
}
