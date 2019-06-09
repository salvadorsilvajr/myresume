var express = require("express"),
  app = express(),
    
  
	  
  bodyParser = require("body-parser"),
  serveStatic = require("serve-static"),
  nodemailer = require("nodemailer"),
  mailgun  =  require("nodemailer-mailgun-transport");
  

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");


app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/coment", function(req, res){
   res.render("coment.ejs");
});

app.post("/", function(req, res){
  var name = req.body.name;
  var phone = req.body.phone;
  var email = req.body.email;
  var coment = req.body.coment;
  var newcoment = {name: name, phone: phone, enail: email, coment: coment};
  console.log(newcoment);
	
  console.log(process.env.EMAIL_KEY);
	
  const auth = {
  	auth: {
		api_key: "'" + process.env.EMAIL_KEY + "'",
		domain: "'" + process.env.DOMAIN + "'"
	}
  };	

    const transporter = nodemailer.createTransport(mailgun(auth));
	
	
    const HelperOptions = {
        from: '"Resume form" <salvadorsilvajr@att.net>',
        to: "ssilvasweb@gmail.com",
        subject: "test from my form",
        text: " A new Coment from app",
        html: "<p><h1> nombre " + name + "</h1></P><p><h2>cellphone "  + phone +"</h2> </p> <p><h3> Comentario" + coment+ "</h3></P>"
    
    };
    transporter.sendMail(HelperOptions, (error, info) =>{
        if(error){
            return console.log(error);
        }
        console.log("the message has sended it");
        console.log(info);
        res.render("landing.ejs");
    });
}); 

require('dotenv').config();

app.listen(9000, process.env.IP, function(){
   console.log("The Resume Server Has Started!" + this.address().port);
});