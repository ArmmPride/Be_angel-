import { BenevolentModel } from '../models';
import nodemailer from 'nodemailer';

export default class BenevolentService{

    static async sendMail( email) {
        const transport = nodemailer.createTransport({
          service: "gmail",
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            // company mail
    
            user:process.env.ADMIN_EMAIL,
            pass: process.env.ADMIN_EMAIL_PASS,
          },
        });
    
        const mailOptions = {
          // company mail
          from:process.env.ADMIN_EMAIL,
          to: email,
          subject: "Email",
          text: `Շնորհակալություն 1 օր հրեշտակ դառնալու համար`,
        };
    
        return new Promise((resolve, reject) => {
          transport.sendMail(mailOptions, function (error, info) {
            if (error) {
              reject({ succes: false, error: error });
            } else {
              resolve({
                succes: true,
                info_response: "Email sent: " + info.response,
              });
            }
          });
        });
      }
    

    static buyGift(dreams){
        return BenevolentModel.buyGift(dreams);
    }     
    static takeLetter(dreams){
        return BenevolentModel.takeLetter(dreams);
    }  
    static getBenevolent(child_id){
        return BenevolentModel.getBenevolent(child_id);
    }  
    
}