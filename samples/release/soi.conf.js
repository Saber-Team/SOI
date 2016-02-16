/**
 * Created by baidu on 15/12/15.
 */
// 配置线上路径
//soi
//    .addRule(/merchant\/img\/.*\.png$/, {
//      to: 'static/images/'
//    })
//    .addRule(/merchant\/(.*)\/.*\.js$/, {
//      to: 'static/js/'
//    });

soi.deploy.task('dev',
  {
    receiver: 'http://cp01-zhida-mkt.epc.baidu.com:8343/receiver',
    dir: '/home/work/webroot/soi-test',
    mapTo: './map.json',
    scandirs: ['src'],
    loaders: [
      new soi.Loaders.ImageLoader(),
      new soi.Loaders.CSSLoader(),
      new soi.Loaders.JSLoader()
    ],
    watch: true,
    cmdWrapper: {
      usestrict: false,
      commentdoc: ''
    }
  });

soi.release.task('dev',
  {
    dir: './dist/',
    mapTo: './dist/map.json',
    scandirs: ['src'],
    loaders: [
      new soi.Loaders.ImageLoader(),
      new soi.Loaders.CSSLoader(),
      new soi.Loaders.JSLoader()
    ],
    pack: {
      '/static/pkg/build.css': ['src/css/*.css'],
      '/static/pkg/build.js': ['src/js/*.js']
    }
  })
  .addRule(/src\/(.*)\/.*/, {
    to : '/static/$1/'
  })
  .use('wrapper', {
    define: '__d',
    commentdoc: '/* Build by @Saber.T */'
  })
  .use('less')
  .use('messid')
  .use('hash', {
    length: 7,
    encoding: 'hex',
    noname: false
  })
  .use('packager', {
    length: 7,
    encoding: 'base64',
    noname: true
  });