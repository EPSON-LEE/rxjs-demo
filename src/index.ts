// RxJS v6+
import { interval } from 'rxjs';
import { sample } from 'rxjs/operators';

//emit value every 1s
const source = interval(1000);
//sample last emitted value from source every 2s
const example = source.pipe(sample(interval(2000)));
//output: 2..4..6..8..
const subscribe = example.subscribe(val => console.log(val));

var callback = function () {
  console.log("Dom changed");
};

// observe
var mutationObserver = new MutationObserver(callback);
var otpions = {
  subtree: true,
  childList: true
};
mutationObserver.observe(document.body, otpions);
window.onload = function () {
  for (var i = 0; i < 10; i++) {
    var li = document.createElement("li");
    li.innerText = "这是";
    document.getElementById("container").appendChild(li);
  }
};

(function startObservation() {
  var
    /* 1) Create a MutationObserver object*/
    observer = new MutationObserver(
      function (mutations) {
        console.log(mutations);
      }),
    /* 2) Create a config object */
    config = { childList: true };

  /* 3) Glue'em all */
  observer.observe(document.body, config);
})();