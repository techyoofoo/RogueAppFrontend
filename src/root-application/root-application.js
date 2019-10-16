import * as singleSpa from "single-spa";

singleSpa.registerApplication(
  "login-1",
  () => import("../login/login-form.js"),
  pathPrefix("/login")
);

singleSpa.registerApplication(
  "upload-2",
  () => import("../log/upload-form.js"),
  pathPrefix("/upload")
);

singleSpa.registerApplication(
  "uninstall-2",
  () => import("../un-install/login-form.js"),
  pathPrefix("/uninstall")
);
// singleSpa.registerApplication('uninstall-3', () =>  
//   import ('../un-install/un-install.js'), pathPrefix('/uninstall'));

singleSpa.registerApplication('plugin-1', () =>
  import('../plugin/pulgin-form.js'), pathPrefix('/plugin'));

  singleSpa.registerApplication('server-1', () =>
  import('../server/server-form.js'), pathPrefix('/server'));

singleSpa.start();

function pathPrefix(prefix) {
  return function(location) {
    return location.pathname.startsWith(`${prefix}`);
  };
}
