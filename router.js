/* 
function route(pathname) {
  console.log("About to route a request for " + pathname);
}

exports.route = route;
*/

/**
在C++或C#中，當我們談到物件，指的是類別(Class)或者結構體(Struct)的實體。物件根據他們實體化的範本（就是所謂的類別），會擁有不同的屬性和方法。但在JavaScript裡物件不是這個概念。在JavaScript中，物件就是一個鍵/值對的集合 -- 你可以把JavaScript的物件想象成一個鍵為字串類型的字典。
**/

function route(handle, pathname) {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === 'function') {
    return handle[pathname]();
  } else {
    console.log("No request handler found for " + pathname);
    return "404 Not found";
  }
}

exports.route = route;