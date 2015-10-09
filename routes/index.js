var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Calc-O-Tron.js' });
});

router.post('/calculate', function(request, response, next) {
  //console.log(request.body.operator);
  if (request.body.operator == "add") {
    response.json((parseInt(request.body.firstOperand) + parseInt(request.body.secondOperand)));
  } else if (request.body.operator == "minus") {
    response.json((parseInt(request.body.firstOperand) - parseInt(request.body.secondOperand)));
  } else if (request.body.operator == "multiply") {
    response.json((parseInt(request.body.firstOperand) * parseInt(request.body.secondOperand)));
  } else if (request.body.operator == "divide") {
    response.json((parseInt(request.body.firstOperand) / parseInt(request.body.secondOperand)));
  }

});

module.exports = router;
