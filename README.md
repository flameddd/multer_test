## Multer fileFilter test
This repo is for reproduce `multer`'s `fileFilter feature in specific scenario.

I don't knon why can not get `req.body` when POST a form and fields after `files`?  
Why order make this happen?  

### version
- "express": "^4.16.4"
- "multer": "^1.4.1"

### install
> git clone https://github.com/flameddd/multer_test.git  
> cd multer_test  
> npm install  
> npm start

### code
```js
// index.js
const upload = multer({
  dest: './uploads',
  fileFilter: (req, file, cb) => {
    console.log("req.body")
    console.log(req.body) // <--
    cb(null, true)
  }
}).any();
```

### test
use `postman` send an POST request `127.0.0.1:3000`

#### test1
![image info](https://github.com/flameddd/multer_test/blob/master/assets/001.jpg)  
##### result: 
> { gid: 'aaaa', uid: 'bbbb' }

#### test2
![image info](https://github.com/flameddd/multer_test/blob/master/assets/002.jpg)  
##### result: 
> { gid: 'aaaa' }

#### test3
![image info](https://github.com/flameddd/multer_test/blob/master/assets/003.jpg)  
##### result: 
> {}
