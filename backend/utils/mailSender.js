import nodemailer from "nodemailer";
const sendResetPasswordMail = async (to, url) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_SENDER_EMAIL,
      pass: process.env.MAIL_SENDER_PASS,
    },
  });

  const mailOptions = {
    from: process.env.MAIL_SENDER_EMAIL,
    to: to,
    subject: "[MelodyMatch] Password Reset",
    html: `
        <div style="width: 100%; background-color: rgb(250, 250, 250); text-align: center">
            <br>
            <a href="https://demo-melodymatch.onrender.com/" style="text-align: center; font-size: 26px; color: #199890; text-decoration: none;font-weight: bold">MelodyMatch</a>
            <br>
            <br>
            <div style="font-size: 16px; margin: 0 auto; width: 50%; color: black; background-color: white; padding: 40px; ">
                <div style="margin-bottom: 20px;">Someone requested to reset the password for the following account:</div>
                <div style="margin-bottom: 20px;">If this was a mistake, just ignore this email and nothing will happen.</div>
                <div style="margin-bottom: 30px;">To reset your password, click the button below.</div>
        
                <a href=${url} style="text-align: center; font-size: 15px; text-align: center; background-color: #199890; padding: 10px 24px; text-decoration: none; border-radius: 3px; color:white">Reset Password</a>
            </div>
            <br>
            <br>
            <p>© ${new Date().getFullYear()} MelodyMatch LLC</p>
            <p>All rights reserved.</p>
            <br>
            <br>
        </div>
        `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully to:", to);
  } catch (err) {
    console.error("SMTP Transport Error:", err);
    throw err;
  }
};
const sendContactMail = async (to, subject, message) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_SENDER_EMAIL,
      pass: process.env.MAIL_SENDER_PASS,
    },
  });

  const mailOptions = {
    from: process.env.MAIL_SENDER_EMAIL,
    to: process.env.MAIL_SENDER_EMAIL,
    replyTo: to,
    subject: "[Ponno] Contact Form",
    html: `
      <table width="100%" cellpadding="0" cellspacing="0" border="0"
        style="background-color:#f4f6f9;padding:40px 0;font-family:'Segoe UI',Arial,sans-serif;font-size:14px;color:#444444;">
        <tr>
          <td align="center">

            <table width="600" cellpadding="0" cellspacing="0" border="0"
              style="max-width:600px;width:100%;background-color:#ffffff;border-radius:8px;
                     box-shadow:0 2px 12px rgba(0,0,0,0.08);overflow:hidden;">

              <tr>
                <td align="center" style="background-color:#0438a1;padding:28px 40px 22px;">
                  <a href="https://ponno-demo.myshopify.com/" style="text-decoration:none;">
                    <img
                      src="https://ponno-demo.myshopify.com/cdn/shop/files/logo2_300x300.png?v=1613171497"
                      alt="Ponno" width="130"
                      style="display:block;margin:0 auto;filter:brightness(0) invert(1);" />
                  </a>
                </td>
              </tr>

              <tr>
                <td align="center"
                  style="background-color:#f0f3f8;padding:10px 40px;border-bottom:1px solid #e2e8f0;">
                  <p style="margin:0;font-size:12px;color:#888888;letter-spacing:0.5px;">
                    <a href="https://ponno-demo.myshopify.com/"
                      style="color:#0438a1;text-decoration:none;">Home</a>
                    &nbsp;/&nbsp;
                    <span style="color:#555555;">Contact Form Submission</span>
                  </p>
                </td>
              </tr>

              <tr>
                <td style="padding:36px 44px 28px;">

                  <h2 style="margin:0 0 24px 0;text-align:center;font-size:22px;
                              font-weight:700;color:#0438a1;letter-spacing:-0.3px;">
                    New Contact Form Submission
                  </h2>

                  <table width="100%" cellpadding="0" cellspacing="0" border="0"
                    style="margin-bottom:24px;">
                    <tr>
                      <td style="height:2px;background:linear-gradient(to right,#0438a1,#1e90ff,transparent);
                                  border-radius:2px;"></td>
                    </tr>
                  </table>

                  <!-- Email + Subject box -->
                  <table width="100%" cellpadding="0" cellspacing="0" border="0"
                    style="background-color:#f8fafd;border:1px solid #dce6f5;
                            border-radius:6px;margin-bottom:20px;">
                    <tr>
                      <td style="padding:20px 24px;">

                        <table width="100%" cellpadding="0" cellspacing="0" border="0"
                          style="margin-bottom:14px;">
                          <tr>
                            <td width="80" valign="top"
                              style="font-size:12px;font-weight:700;color:#888888;
                                      text-transform:uppercase;letter-spacing:0.6px;padding-top:2px;">
                              Email
                            </td>
                            <td style="font-size:14px;">
                              <a href="mailto:${to}"
                                style="color:#0438a1;text-decoration:none;font-weight:600;">
                                ${to}
                              </a>
                            </td>
                          </tr>
                        </table>

                        <table width="100%" cellpadding="0" cellspacing="0" border="0"
                          style="margin-bottom:14px;">
                          <tr>
                            <td style="height:1px;background-color:#e2e8f0;"></td>
                          </tr>
                        </table>

                        <!-- Subject row -->
                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td width="80" valign="top"
                              style="font-size:12px;font-weight:700;color:#888888;
                                      text-transform:uppercase;letter-spacing:0.6px;padding-top:2px;">
                              Subject
                            </td>
                            <td style="font-size:14px;color:#333333;font-weight:500;">
                              ${subject}
                            </td>
                          </tr>
                        </table>

                      </td>
                    </tr>
                  </table>

                  <table width="100%" cellpadding="0" cellspacing="0" border="0"
                    style="background-color:#ffffff;border:1px solid #dce6f5;
                            border-left:4px solid #0438a1;border-radius:6px;margin-bottom:30px;">
                    <tr>
                      <td style="padding:20px 24px;">
                        <p style="margin:0 0 8px 0;font-size:11px;font-weight:700;
                                   color:#0438a1;text-transform:uppercase;letter-spacing:0.8px;">
                          Message
                        </p>
                        <p style="margin:0;font-size:15px;color:#333333;line-height:1.7;">
                          ${message}
                        </p>
                      </td>
                    </tr>
                  </table>

                  <table width="100%" cellpadding="0" cellspacing="0" border="0"
                    style="margin-bottom:10px;">
                    <tr>
                      <td align="center">
                        <a href="mailto:${to}"
                          style="display:inline-block;background-color:#0438a1;color:#ffffff;
                                  text-decoration:none;font-size:13px;font-weight:700;
                                  letter-spacing:0.8px;text-transform:uppercase;
                                  padding:13px 34px;border-radius:4px;">
                          Reply to Customer
                        </a>
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>

              <tr>
                <td style="background-color:#f0f3f8;border-top:1px solid #dce6f5;padding:22px 44px;">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td align="center" width="33%" style="padding:0 8px;">
                        <p style="margin:0 0 4px 0;font-size:20px;">🚚</p>
                        <p style="margin:0;font-size:11px;font-weight:700;color:#0438a1;
                                   text-transform:uppercase;letter-spacing:0.5px;">Free Shipping</p>
                        <p style="margin:4px 0 0 0;font-size:11px;color:#888888;line-height:1.4;">
                          Most products are free shipping
                        </p>
                      </td>
                      <td width="1" style="background-color:#dce6f5;"></td>
                      <td align="center" width="33%" style="padding:0 8px;">
                        <p style="margin:0 0 4px 0;font-size:20px;">🎧</p>
                        <p style="margin:0;font-size:11px;font-weight:700;color:#0438a1;
                                   text-transform:uppercase;letter-spacing:0.5px;">Customer Support</p>
                        <p style="margin:4px 0 0 0;font-size:11px;color:#888888;line-height:1.4;">
                          24x7 Customer Support
                        </p>
                      </td>
                      <td width="1" style="background-color:#dce6f5;"></td>
                      <td align="center" width="33%" style="padding:0 8px;">
                        <p style="margin:0 0 4px 0;font-size:20px;">🔒</p>
                        <p style="margin:0;font-size:11px;font-weight:700;color:#0438a1;
                                   text-transform:uppercase;letter-spacing:0.5px;">Secure Payment</p>
                        <p style="margin:4px 0 0 0;font-size:11px;color:#888888;line-height:1.4;">
                          Most secure payment for customer
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- FOOTER -->
              <tr>
                <td align="center" style="background-color:#0438a1;padding:20px 40px;">
                  <p style="margin:0 0 8px 0;font-size:12px;color:rgba(255,255,255,0.7);">
                    Copyright &copy; ${new Date().getFullYear()}
                    <a href="https://ponno-demo.myshopify.com/"
                      style="color:#ffffff;text-decoration:none;">Ponno</a>
                    &nbsp;|&nbsp; Built with Ponno by
                    <a href="#" style="color:#ffffff;text-decoration:none;">HasThemes</a>
                  </p>
                  <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.5);">
                    All rights reserved.
                  </p>
                </td>
              </tr>

            </table>
            <!-- /Card -->

          </td>
        </tr>
      </table>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (err) {
    console.error("Failed to send email:", err);
    throw err;
  }
};

export { sendContactMail, sendResetPasswordMail };
