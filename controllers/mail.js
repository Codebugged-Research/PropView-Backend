const fromEmail = 'admin@propdial.com';
const toEmails = 'majhisambit2@gmail.com';

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'propview.app@gmail.com',
           pass: 'propview123@#'
       }
   });


function genData(lat, lang, name, type) {
    return `
    <!DOCTYPE html>
  <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
  
  <head>
      <title></title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
      <!--[if !mso]><!-->
      <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css">
      <link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet" type="text/css">
      <!--<![endif]-->
      <style>
          * {
              box-sizing: border-box
          }
  
          body {
              margin: 0;
              padding: 0
          }
  
          a[x-apple-data-detectors] {
              color: inherit !important;
              text-decoration: inherit !important
          }
  
          #MessageViewBody a {
              color: inherit;
              text-decoration: none
          }
  
          p {
              line-height: inherit
          }
  
          @media (max-width:620px) {
              .icons-inner {
                  text-align: center
              }
  
              .icons-inner td {
                  margin: 0 auto
              }
  
              .row-content {
                  width: 100% !important
              }
  
              .image_block img.big {
                  width: auto !important
              }
  
              .column .border {
                  display: none
              }
  
              table {
                  table-layout: fixed !important
              }
  
              .stack .column {
                  width: 100%;
                  display: block
              }
          }
      </style>
  </head>
  
  <body style="background-color:#d9dffa;margin:0;padding:0;-webkit-text-size-adjust:none;text-size-adjust:none">
      <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"
          style="mso-table-lspace:0;mso-table-rspace:0;background-color:#d9dffa">
          <tbody>
              <tr>
                  <td>
                      <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
                          role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#cfd6f4">
                          <tbody>
                              <tr>
                                  <td>
                                      <table class="row-content stack" align="center" border="0" cellpadding="0"
                                          cellspacing="0" role="presentation"
                                          style="mso-table-lspace:0;mso-table-rspace:0;color:#000;width:600px"
                                          width="600">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" width="100%"
                                                      style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:20px;padding-bottom:0;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                                      <table class="image_block" width="100%" border="0" cellpadding="0"
                                                          cellspacing="0" role="presentation"
                                                          style="mso-table-lspace:0;mso-table-rspace:0">
                                                          <tr>
                                                              <td style="width:100%;padding-right:0;padding-left:0">
                                                                  <div align="center" style="line-height:10px"><img
                                                                          class="big"
                                                                          src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/3991/animated_header.gif"
                                                                          style="display:block;height:auto;border:0;width:600px;max-width:100%"
                                                                          width="600"
                                                                          alt="Card Header with Border and Shadow Animated"
                                                                          title="Card Header with Border and Shadow Animated">
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
                          role="presentation"
                          style="mso-table-lspace:0;mso-table-rspace:0;background-color:#d9dffa;background-image:url(https://d1oco4z2z1fhwp.cloudfront.net/templates/default/3991/body_background_2.png);background-position:top center;background-repeat:repeat">
                          <tbody>
                              <tr>
                                  <td>
                                      <table class="row-content stack" align="center" border="0" cellpadding="0"
                                          cellspacing="0" role="presentation"
                                          style="mso-table-lspace:0;mso-table-rspace:0;color:#000;width:600px"
                                          width="600">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" width="100%"
                                                      style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-left:50px;padding-right:50px;padding-top:15px;padding-bottom:15px;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                                      <table class="text_block" width="100%" border="0" cellpadding="10"
                                                          cellspacing="0" role="presentation"
                                                          style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                                          <tr>
                                                              <td>
                                                                  <div style="font-family:sans-serif">
                                                                      <div class="txtTinyMce-wrapper"
                                                                          style="font-size:14px;mso-line-height-alt:16.8px;color:#506bec;line-height:1.2;font-family:Helvetica Neue,Helvetica,Arial,sans-serif">
                                                                          <p style="margin:0;font-size:14px"><strong><span
                                                                                      style="font-size:38px;">Update:
                                                                                      ${type}</span></strong></p>
                                                                      </div>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table class="text_block" width="100%" border="0" cellpadding="10"
                                                          cellspacing="0" role="presentation"
                                                          style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                                          <tr>
                                                              <td>
                                                                  <div style="font-family:sans-serif">
                                                                      <div class="txtTinyMce-wrapper"
                                                                          style="font-size:12px;mso-line-height-alt:14.399999999999999px;color:#40507a;line-height:1.2;font-family:Helvetica Neue,Helvetica,Arial,sans-serif">
                                                                          <p style="margin:0;font-size:12px">User: ${name} just ${type} for work</p>
                                                                      </div>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table class="text_block" width="100%" border="0" cellpadding="10"
                                                          cellspacing="0" role="presentation"
                                                          style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                                          <tr>
                                                              <td>
                                                                  <div style="font-family:sans-serif">
                                                                      <div class="txtTinyMce-wrapper"
                                                                          style="font-size:14px;mso-line-height-alt:16.8px;color:#40507a;line-height:1.2;font-family:Helvetica Neue,Helvetica,Arial,sans-serif">
                                                                          <p style="margin:0;font-size:14px"><span
                                                                                  style="font-size:16px;">Coordinates:
                                                                                  ${lat}, ${lang}</span></p>
                                                                      </div>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table class="button_block" width="100%" border="0" cellpadding="10"
                                                          cellspacing="0" role="presentation"
                                                          style="mso-table-lspace:0;mso-table-rspace:0">
                                                          <tr>
                                                              <td>
                                                                  <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.google.co.in/maps/@20.3114178,85.823836,17z" style="height:34px;width:115px;v-text-anchor:middle;" arcsize="12%" stroke="false" fillcolor="#3AAEE0"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:12px"><![endif]-->
                                                                  <a href="https://www.google.co.in/maps/@${lat},${lang}z"
                                                                      target="_blank"
                                                                      style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#3AAEE0;border-radius:4px;width:auto;border-top:1px solid #3AAEE0;border-right:1px solid #3AAEE0;border-bottom:1px solid #3AAEE0;border-left:1px solid #3AAEE0;padding-top:5px;padding-bottom:5px;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;"><span
                                                                          style="padding-left:20px;padding-right:20px;font-size:12px;display:inline-block;letter-spacing:normal;"><span
                                                                              style="font-size: 12px; line-height: 2; word-break: break-word; mso-line-height-alt: 24px;">Launch
                                                                              Maps!</span></span></a>
                                                                  <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
                          role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                          <tbody>
                              <tr>
                                  <td>
                                      <table class="row-content stack" align="center" border="0" cellpadding="0"
                                          cellspacing="0" role="presentation"
                                          style="mso-table-lspace:0;mso-table-rspace:0;color:#000;width:600px"
                                          width="600">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" width="100%"
                                                      style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:0;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                                      <table class="image_block" width="100%" border="0" cellpadding="0"
                                                          cellspacing="0" role="presentation"
                                                          style="mso-table-lspace:0;mso-table-rspace:0">
                                                          <tr>
                                                              <td style="width:100%;padding-right:0;padding-left:0">
                                                                  <div align="center" style="line-height:10px"><img
                                                                          class="big"
                                                                          src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/3991/bottom_img.png"
                                                                          style="display:block;height:auto;border:0;width:600px;max-width:100%"
                                                                          width="600"
                                                                          alt="Card Bottom with Border and Shadow Image"
                                                                          title="Card Bottom with Border and Shadow Image">
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
                          role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                          <tbody>
                              <tr>
                                  <td>
                                      <table class="row-content stack" align="center" border="0" cellpadding="0"
                                          cellspacing="0" role="presentation"
                                          style="mso-table-lspace:0;mso-table-rspace:0;color:#000;width:600px"
                                          width="600">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" width="100%"
                                                      style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-left:10px;padding-right:10px;padding-top:10px;padding-bottom:20px;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                                      <table class="image_block" width="100%" border="0" cellpadding="10"
                                                          cellspacing="0" role="presentation"
                                                          style="mso-table-lspace:0;mso-table-rspace:0">
                                                          <tr>
                                                              <td>
                                                                  <div align="center" style="line-height:10px">
                                                                      <a href="http://www.example.com/" target="_blank"
                                                                          style="outline:none" tabindex="-1"><img
                                                                              src="https://propview.ap-south-1.linodeobjects.com/logo.png"
                                                                              style="display:block;height:auto;border:0;width:145px;max-width:100%"
                                                                              width="145" alt="Your Logo"
                                                                              title="Your Logo"></a>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table class="text_block" width="100%" border="0" cellpadding="10"
                                                          cellspacing="0" role="presentation"
                                                          style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                                          <tr>
                                                              <td>
                                                                  <div style="font-family:sans-serif">
                                                                      <div class="txtTinyMce-wrapper"
                                                                          style="font-size:14px;mso-line-height-alt:16.8px;color:#97a2da;line-height:1.2;font-family:Helvetica Neue,Helvetica,Arial,sans-serif">
                                                                          <p
                                                                              style="margin:0;font-size:14px;text-align:center">
                                                                              Sent from PropView App</p>
                                                                      </div>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>                                                    
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>                    
                  </td>
              </tr>
          </tbody>
      </table><!-- End -->
  </body>
  
  </html>`;
}

exports.sendMail = (req, res) => {
    var data = {
        from: fromEmail,
        to: toEmails,
        "subject": "email_subject",
        "text": "email_body",
        "html": genData(req.body.lat, req.body.long, req.body.name, req.body.type)
    };
    transporter.sendMail(data, (error, body) => {
        if (error) {
            console.log(error);
            res.status(500).send(error);
        }
        else {
            console.log(body);
            res.status(200).send(body);
        }
    });
}