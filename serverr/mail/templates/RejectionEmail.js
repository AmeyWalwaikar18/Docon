exports.RejectionEmail = (
    email,
    firstname,
    lastname,
    formattedDate,
    formattedTime
  ) => {
    return `<!DOCTYPE html>
        <html>
        
        <head>
            <meta charset="UTF-8">
            <title>Booking Form Confirmation</title>
            <style>
                body {
                    background-color: #ffffff;
                    font-family: Arial, sans-serif;
                    font-size: 16px;
                    line-height: 1.4;
                    color: #333333;
                    margin: 0;
                    padding: 0;
                }
        
        
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    text-align: center;
                }
        
                .logo {
                    max-width: 200px;
                    margin-bottom: 20px;
                }
        
                .message {
                    font-size: 18px;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
        
                .body {
                    font-size: 16px;
                    margin-bottom: 20px;
                }
        
                .cta {
                    display: inline-block;
                    padding: 10px 20px;
                    background-color: #FFD60A;
                    color: #000000;
                    text-decoration: none;
                    border-radius: 5px;
                    font-size: 16px;
                    font-weight: bold;
                    margin-top: 20px;
                }
        
                .support {
                    font-size: 14px;
                    color: #999999;
                    margin-top: 20px;
                }
        
                .highlight {
                    font-weight: bold;
                }
            </style>
        
        </head>
        
        <body>
        <div class="container">
      <a href="https://studynotion-edtech-project.vercel.app">
          <img class="logo" src="https://i.ibb.co/sVGwC0q/Logo-Docon.jpg" alt="Docon Logo">
      </a>
      <div class="message">Appointment Rejection Notification</div>
      <div class="body">
          <p>Dear ${firstname} ${lastname},</p>
          <p>We hope this message finds you well.</p>
          <p>We regret to inform you that your requested appointment with us on ${formattedDate} at ${formattedTime} has been declined.</p>
          <p>We truly appreciate your interest in scheduling with us, however, due to unforeseen circumstances, we are unable to accommodate your appointment request at this time.</p>
          <p>We apologize for any inconvenience this may cause. Please rest assured that your health and well-being remain our utmost priority, and we are committed to providing you with the highest quality of care.</p>
          <p>If you have any questions or concerns, or if you would like to reschedule your appointment, please don't hesitate to contact us.</p>
      </div>
      <div class="support">If you need further assistance, please feel free to reach out to us at <a href="mailto:walwaikaramey18@gmail.com">walwaikaramey18@gmail.com</a>. We are here to support you!</div>
  </div>
  
    
        </body>
        
        </html>`;
  };
  