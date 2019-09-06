import * as singleSpa from 'single-spa';



singleSpa.registerApplication('login-1', () =>

  import ('../login/login-form.js'), pathPrefix('/login'));

singleSpa.registerApplication('upload-2', () =>

  import ('../log/upload-form.js'), pathPrefix('/upload'));

 
singleSpa.start();



function pathPrefix(prefix) {

  return function(location) {

    return location.pathname.startsWith(`${prefix}`);

  }

}