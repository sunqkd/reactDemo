//  封装方法

var appStorage = {

    // 1、设置
    set(key,value){
        sessionStorage.setItem( key,JSON.stringify(value) );
    },

    // 2、获取
    get(key){
        return JSON.parse( sessionStorage.getItem(key) ) ;
    },
    
    // 3、删除
    remove(key){
        sessionStorage.removeItem(key);
    }

}

export default appStorage;