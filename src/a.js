import b from './b.js';
//import c from './c.js';
const c = ()=>{
    import('./c.js')
}

import React from 'react'

console.log("我是a.js,我开始加载了");
export default function say(){
    console.log("我是a.js,我被调用了")
}