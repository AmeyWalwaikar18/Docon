exports.BookingEmail = (email, firstname, lastname,formattedDate,formattedTime) => {
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
    <div class="message">Booking Appointment Confirmation</div>
    <div class="body">
        <p>Dear ${firstname} ${lastname},</p>
        <p>Thank you for booking an appointment with us. Your request has been received, and we will get back to you shortly to confirm the appointment details.</p>
        <p>Here are the details you provided:</p>
        <p>Name: ${firstname} ${lastname}</p>
        <p>Doctor's Email: ${email}</p>
        <p>Appointment Date and Time: ${formattedDate} ${formattedTime}</p>
        <p>We appreciate your trust in us and look forward to assisting you with your healthcare needs.</p>
    </div>
    <div class="support">If you have any further questions or need immediate assistance, please feel free to reach out to us at <a href="mailto:walwaikaramey18@gmail.com">walwaikaramey18@gmail.com</a>. We are here to help!</div>
</div>

    </body>
    
    </html>`;
};
