const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

// https://github.com/deadlock314/FetchSentiment.git

const createTransporter = async () => {

    const oauth2Client = new OAuth2(
      process.env.ClientId,
      process.env.ClientSecret,
      "https://developers.google.com/oauthplayground"
    );
  
    oauth2Client.setCredentials({
      refresh_token: process.env.RefreshToken
    });
  
    const accessToken = await new Promise((resolve, reject) => {

      oauth2Client.getAccessToken((err, token) => {
        if (err) {
          console.log(err);
          reject();
        }
        resolve(token);
      });
    });
  
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.Email,
        accessToken,
        clientId: process.env.ClientId,
        clientSecret: process.env.ClientSecret,
       // refreshToken: process.env.RefreshToken
      }
    });
  // console.log(oauth2Client,accessToken);
  // console.log(transporter);
    return transporter;
  };

const sendEmail = async (emailOptions) => {
  
    let emailTransporter = await createTransporter();
    await emailTransporter.sendMail(emailOptions);
  
    
};


const mailSenderFun= async(client,sub,data)=>{
  try{
    await sendEmail({
    from: process.env.Email,
    to: client,
    subject: sub,
    html: `<h4>Dear ${data.name},</h4>
            <p>Thank you for Signing up in website <b>FetchSetiment</b>. </p>
            <p> please enter following  </p>
             <h3>One Time Password (OTP) : ${data.otp}</h3> 
            <p> That will expire soon so hurry up.. </p> 
            <p>In case you have not did this please ignore this mail</p> `

});
return true;
  }
  catch(err){
    return false
  }
  
  
}

module.exports = {  mailSenderFun };