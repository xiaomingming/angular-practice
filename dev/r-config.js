// 路径配置
require.config({
    baseUrl: 'js/',
    paths: {
        'jquery': 'libs/jquery-1.8.2',
        'HelloController':'app/HelloController'
    }
});
// 非AMD模块配置
requirejs.config({
    baseUrl: 'js/',
    shim: {
        
    }
});