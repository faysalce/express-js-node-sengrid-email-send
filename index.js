var express = require('express')
  , path = require('path')
  , app = express()
  ,cors = require('cors')
  ,sgMail = require('@sendgrid/mail');
const bodyParser = require('body-parser');
 require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(cors());
const PORT = process.env.PORT || 3010;
app.set('port', process.env.PORT || 3010);
app.use(express.static(path.join(__dirname, 'public')));
 app.listen(PORT, function () {
  console.log('Node.js server is running on port ' + PORT);
});
app.use(bodyParser.json());

app.post('/sendmail',(req, res) => {
  console.log(req.body);

  const {name,email,phone,code,message}=req.body;
  
  var emailBody='Hi,<br/> <b>New lead info</b> <hr/> <br/> '+`Full Name: ${name}<br/> Email: ${email}<br/> Phone Number: ${phone} <br/> Post Code: ${code}<br/> Message: ${message}`;
  var msg = {
    to: process.env.TO_EMAIL,
    from: process.env.FROM_EMAIL,
    subject: process.env.EMAIL_SUBJECT,
  //  text: message,
   html: emailBody,
  };
  try {
    sgMail.send(msg);
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
  
  return res.status(200).json({ success:true,message:'Successfully! Sent mail' });

});