frappe.ui.form.on('Invoice1', {
    refresh: function (frm) {
        frm.add_custom_button(__('Fetch Fee'), function () {
            fetchFee(frm);
        });
    },
});

function fetchFee(frm) {
    var feeType = frm.doc.fee_type;
    var applicationType = frm.doc.application_type;
    var programType = frm.doc.program_type; 
    var program = frm.doc.program;
    var programPg = frm.doc.program_pg;
    var programPhd = frm.doc.program_phd;
    var quotaRegular = frm.doc.quota_regular;
    var quotaSelfSupported = frm.doc.quota_self_supported;
    var categoryGeneralRegular = frm.doc.category_general_regular;
    var categoryGeneralSelfSupported = frm.doc.category_general_self_supported;
    var categoryDifferentlyAbled = frm.doc.category_differently_abled;
    var categoryDifferentlyAbledSelfSupported = frm.doc.category_differently_abled_self_supported;
    var feeSchedule = frm.doc.fee_schedule;
    var refundable = frm.doc.refundable;
    // Add other fields...
    var currencyType = frm.doc.currency_type; 

    frappe.call({
        method: 'fee_management.fee_management.doctype.invoice1.invoice1.get_fee_for_student',
        args: {
            fee_type: feeType,
            application_type: applicationType,
            program_type: programType,
            program: program,
            program_pg: programPg,
            program_phd: programPhd,
            quota_regular: quotaRegular,
            quota_self_supported: quotaSelfSupported,
            category_general_regular: categoryGeneralRegular,
            category_general_self_supported: categoryGeneralSelfSupported,
            category_differently_abled: categoryDifferentlyAbled,
            category_differently_abled_self_supported: categoryDifferentlyAbledSelfSupported,
            fee_schedule: feeSchedule,
            refundable: refundable,
            currency_type: currencyType
        },
        callback: function (r) {
            if (r.message) {
                frm.set_value('fee', r.message);
                frappe.msgprint(__('Fee fetched successfully.'));
            } else {
                frappe.msgprint(__('Fee not found for the specified criteria.'));
            }
        }
    });
}











// // <head>
// //     <script type="text/javascript" src="/assets/js/checkout.min.js"></script>
// // </head>



// // Function to handle payment initiation
// function initiateRazorpayPayment() {
//     // Call your backend to create Razorpay order
//     // This can be done using an AJAX request or any other method
//     // The response should contain the Razorpay order details, including the checkout URL

//     // Example AJAX request using jQuery
//     $.ajax({
//         url: 'fee_management.fee_management.doctype.invoice1.invoice1._init_',  // Replace with your actual backend endpoint
//         type: 'POST',
//         success: function(response) {
//             // Redirect to Razorpay Checkout
//             var options = {
//                 key: 'YOUR_RAZORPAY_KEY',  // Replace with your Razorpay API key
//                 amount: response.amount,
//                 currency: 'INR',  // Replace with your preferred currency code
//                 name: 'Your Company Name',
//                 description: 'Invoice Payment',
//                 image: 'your_logo_url.png',  // Replace with your company logo URL
//                 order_id: response.order_id,
//                 handler: function(response) {
//                     // Handle the success response after payment completion
//                     console.log('Payment successful:', response);
//                 },
//                 prefill: {
//                     // Pre-fill customer details if needed
//                     name: 'Customer Name',
//                     email: 'customer@example.com',
//                     contact: 'Customer Contact Number',
//                 },
//                 theme: {
//                     color: '#F37254'  // Customize the color theme
//                 }
//             };

//             var rzp = new Razorpay(options);
//             rzp.open();
//         },
//         error: function(error) {
//             console.error('Error:', error);
//             // Handle the error
//         }
//     });
// }

// // Call the function when a payment button or action is triggered
// initiateRazorpayPayment();










// // Integration with razorpay
// // Add this script to the "Script" tab of Sales Invoice DocType
// frappe.ui.form.on('Invoice1', {
//     refresh: function(frm) {
//         // Add the Razorpay checkout script
//         frm.add_script(`<script type="text/javascript" src="/assets/js/checkout.min.js"></script>`);

//         // Add the payment button
//         frm.add_custom_button(__('Pay with Razorpay'), function() {
//             startRazorpayCheckout(frm.doc);
//         });
//     }
// });

// function startRazorpayCheckout(doc) {
//         // Extract relevant information from the Sales Invoice document 'doc'
//         // var invoiceAmount = doc.grand_total;
//         var fee=doc.fee;
//         var invoiceNumber = doc.name;
    
//         // Create a Razorpay order
//         var options = {
//             key: 'rzp_test_xQ4k0EMACWQquf',  // Replace with your actual Razorpay API key
//             amount: fee * 100,  // Razorpay expects amount in paisa, so multiply by 100
//             currency: 'INR',  // Replace with your currency code
//             name: 'doc.campus1',
//             description: 'Invoice Payment',
//             order_id: 'doc.name',  // Replace with the actual order_id obtained from the server
//             handler: function(response) {
//                 // Handle the successful payment response
//                 console.log('Payment ID:', response.razorpay_payment_id);
//                 console.log('Invoice Number:', invoiceNumber);
    
//                 // You may want to update the Sales Invoice status or perform other actions
//                 // For example, you can make an API call to update the payment status on the server
//                 updatePaymentStatus(response.razorpay_payment_id, invoiceNumber);
//             },
//             prefill: {
//                 name: doc.customer_name,
//                 email: doc.customer_email,
//                 contact: doc.customer_mobile
//             },
//             notes: {
//                 'invoice_number': invoiceNumber
//             },
//             theme: {
//                 color: '#3498db'  // Customize the color theme
//             }
//         };
    
//         var rzp = new Razorpay(options);
//         rzp.open();
//     }
    
//     function updatePaymentStatus(paymentId, invoiceNumber) {
//         // Implement logic to update payment status on the server
//         // You might make an API call to your server to update the payment status in the database
//         // Example: Use frappe.call to make an API call to a server-side method
//         frappe.call({
//             method: 'your_app.your_module.update_payment_status',
//             args: {
//                 payment_id: paymentId,
//                 invoice_number: invoiceNumber
//             },
//             callback: function(response) {
//                 // Handle the callback if needed
//             }
//         });
//     }
    
//     // Add your Razorpay checkout logic here
//     // Use the 'doc' parameter to access the Sales Invoice data
//     // Example: console.log('Invoice Amount:', doc.grand_total);



// <head>
    
//     <script type="text/javascript" src="/assets/js/checkout.min.js"></script>
// </head>
