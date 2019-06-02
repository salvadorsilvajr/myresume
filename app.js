var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  serveStatic = require("serve-static"),
  nodemailer = require("nodemailer");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// // INDEX ROUTE show all campgrounds !!
// app.get("/landing", function(req, res) {
//   // get all campgrouds from DB:
// });

app.get("/", function(req, res) {
  res.render("landing");
});

// app.get("/coment", function(req, res) {
//   res.render("coment.ejs");
// });

// app.post("/coment", function(req, res) {
//   var name = req.body.name;
//   var company = req.body.company;
//   var phone = req.body.phone;
//   var email = req.body.email;
//   var coment = req.body.coment;
//   var newcoment = { name: name, phone: phone, enail: email, coment: coment };
//   console.log(newcoment);

//   let transporter = nodemailer.createTransport({
//     service: "gmail",
//     secure: false,
//     port: 25,
//     auth: {
//       user: "ssilvasweb@gmail.com",
//       pass: "Fried@3306"
//     },
//     tls: {
//       rejectUnauthorarized: false
//     }
//   });
//   let HelperOptions = {
//     from: '"salvadorform" <ssilvasweb@gmail.com> ',
//     to: "ssilvasweb@gmail.com",
//     subject: "test from my form",
//     text: " A new Coment from app",
//     html:
//       "<p><h1> nombre " +
//       name +
//       "</h1></P><p><h2>cellphone " +
//       phone +
//       "</h2> </p> <p><h3> Comentario" +
//       coment +
//       "</h3></P>"
//   };
//   transporter.sendMail(HelperOptions, (error, info) => {
//     if (error) {
//       return console.log(error);
//     }
//     console.log("the message has sended it"), console.log(info);
//     res.render("coment.ejs");
//   });
// });


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The Resume Server Has Started!" + this.address().port);
});