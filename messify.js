function waitme(){
    //console.info("trying get cur");
    if(window.cur) {
      //console.info("the cur is " + window.cur);
      window.clearInterval(intrvl);
      //console.info("intrvl cleared");
      createWebkitNotifyObj();
    }
}

var intrvl = window.setInterval(function(){waitme()},250);

var notify = null;
function createWebkitNotifyObj(){
  cur.notify_on = true;
  window.webkitNotifications = {
    body: "defaultBody",
    title: "defaultTitle",
    icon: "favicon.ico",
    onshow: null, //function() {return true;},
    ondisplay: null, //function() {return true;},
    onclose: null, //function() {return true;},
    onclick: null, //function() {return true;},
    show: function() {
      return notify = new Notification(this.title, {body: this.body, icon: this.icon})
    },
    cancel: function() {return 1;},
    createNotification: function(iconUrl, title, body) {
      this.body = body;
      this.icon = iconUrl;
      this.title = title;
      //return notify = new Notification(title, {body: body, icon: iconUrl});
      return this; //notify = new Notification(title, {body: body, icon: iconUrl});
 /*     return { title: this.title,
               body: this.body,
               iconUrl: this.icon,
               show: this.show(),
               cancel: this.cancel(),
              };*/
    },
    createHTMLNotification: function(url){return true;},
    checkPermission: function(){return 0;},
    requestPermission: function authorizeNotification() {
      Notification.requestPermission(function(perm) {
        console.log("Уведомления разрешены!");
      });
    },
  replceId: null,
  permisson: "granted",
  tag: null,
  dir: "",
  addEventListener: function(){addEventListener();},
  removeEventListener: function(){removeEventListener();},
  dispatchEvent: function(){dispatchEvent();},
  }
}