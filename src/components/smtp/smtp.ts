const Email = {
    send: function (a: any) {
      return new Promise(function (n, _e) {
        a.nocache = Math.floor(1e6 * Math.random() + 1);
        a.Action = "Send";
        var t = JSON.stringify(a);
        Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) {
          n(e);
        });
      });
    },
    ajaxPost: function (e: any, n: any, t: any) {
      var a = new XMLHttpRequest();
      a.open("POST", e, true); // Ensure you open the request properly
      a.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      a.onload = function () {
        var response = a.responseText;
        if (t) t(response);
      };
      a.send(n);
    },
    ajax: function (e: any, n: any) {
      var t = new XMLHttpRequest();
      t.open("GET", e, true); // Ensure you open the request properly
      t.onload = function () {
        var response = t.responseText;
        if (n) n(response);
      };
      t.send();
    },
    createCORSRequest: function (e: any, n: any) {
      var t = new XMLHttpRequest();
      t.open(e, n, true); // Ensure you open the request properly
      return t;
    },
  };

export {Email};
  