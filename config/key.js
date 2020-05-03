if(process.env.NODE_ENV === 'production'){
    module.exports = require('./prod');

}else {
    module.exports = require('./dev');
}
// 테스트를 위한 문구를 입력