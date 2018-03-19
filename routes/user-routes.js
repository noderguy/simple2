const router = require('express').Router(),
      User = require('../model/user-model');

router.get('/', (req, res)=>{
  res.render('index', {errors:null});
});

router.post('/', (req, res)=>{

  const email = req.body.email,
        password = req.body.password;

  req.checkBody('email', 'Email field is required').notEmpty().isEmail().withMessage('Invalid email address');
  req.checkBody('password', 'password is required').notEmpty().isLength(6).withMessage('at least 6');

  const errors = req.validationErrors(true);
  // console.log(errors);
  if(errors){
    console.log(errors);
    res.render('index', {errors:errors});
    console.log('----------------------');
  }else{
    console.log('Success!');
    res.render('index', {errors:'OK. Success'});
  }

  // User.findOne({email:email},function(user, error){
  //
  // })

});

module.exports = router;
