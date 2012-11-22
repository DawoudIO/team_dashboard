// initialize all sources, this happens usually in application.html.erb
beforeEach(function() {
  $.Sources = JSON.parse('{"boolean":{"demo":{"name":"demo","available":true,"supports_target_browsing":false,"supports_functions":false,"fields":[]},"http_proxy":{"name":"http_proxy","available":true,"supports_target_browsing":false,"supports_functions":false,"fields":[{"name":"http_proxy_url","title":"Proxy Url","mandatory":true},{"name":"value_path","title":"Value Path"}]}},"datapoints":{"demo":{"name":"demo","available":true,"supports_target_browsing":true,"supports_functions":false,"fields":[]},"ganglia":{"name":"ganglia","available":true,"supports_target_browsing":true,"supports_functions":false,"fields":[]},"graphite":{"name":"graphite","available":true,"supports_target_browsing":true,"supports_functions":true,"fields":[]}},"number":{"demo":{"name":"demo","available":true,"supports_target_browsing":false,"supports_functions":false,"fields":[]},"http_proxy":{"name":"http_proxy","available":true,"supports_target_browsing":false,"supports_functions":false,"fields":[{"name":"http_proxy_url","title":"Proxy Url","mandatory":true},{"name":"value_path","title":"Value Path"}]}},"ci":{"demo":{"name":"demo","available":true,"supports_target_browsing":false,"supports_functions":false,"fields":[]},"jenkins":{"name":"jenkins","available":true,"supports_target_browsing":false,"supports_functions":false,"fields":[{"name":"server_url","title":"Server Url","mandatory":true},{"name":"project","title":"Project","mandatory":true}]},"travis":{"name":"travis","available":true,"supports_target_browsing":false,"supports_functions":false,"fields":[{"name":"server_url","title":"Server Url","mandatory":true},{"name":"project","title":"Project","mandatory":true}]}}}');
});

// remove bootstrap modal backdrop
// since it will render the jasminerice test page all black otherwise
afterEach(function() {
  $(".modal-backdrop").remove();
});

