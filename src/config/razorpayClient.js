const Razorpay = require('razorpay');

apiKey="rzp_test_cMSwkdiQm9d4m1"
apiSecret="i9SPK57TjuiJ62n6LqXcEYEH"

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;
