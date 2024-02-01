// Copyright (c) 2023, iiht@gmail.com and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Naming Check", {
// 	refresh(frm) {

// 	},
// });



// to send email
// frappe.ui.form.on('Naming Check', {
//     refresh: function(frm) {
//         // Add a custom button to open email dialog
//         frm.add_custom_button(__('Send Email'), function() {
//             frm.email_doc();
//         });
//     }
// });




// to aend email with name1 value

frappe.ui.form.on('Naming Check', {
    refresh: function(frm) {
        // Add a custom button to open email dialog
        frm.add_custom_button(__('Send Email'), function() {
            frm.email_doc(`Hello ${frm.doc.name1}`);

        });
    }
});




// Send mail with filedlevel button
frappe.ui.form.on('Naming Check', {
    refresh: function(frm) {
        frm.fields_dict['send_email'].$wrapper.on('click', function() {
            frm.email_doc(`Hello ${frm.doc.name1}`);
        });
    }
});

// frm.email_doc(`Hello ${frm.doc.customer_name}`);
// // open email dialog
// frm.email_doc();

// // open email dialog with some message
// frm.email_doc(`Hello ${frm.doc.customer_name}`);



// to open list fees1 form
// frappe.ui.form.on('Naming Check', {
//     refresh: function(frm) {
// frm.add_custom_button('Open Fees Structure orm', () => {
//     frappe.set_route('Form', 'Fees1');
// });
//     }
// });Naming Check


// to redirect new form of fees1

frappe.ui.form.on('Naming Check', {
    refresh: function(frm) {
        frm.add_custom_button('Open Fees Structure Form', () => {
            frappe.new_doc('Fees1');  // Replace 'Fees1' with the actual doctype name
        });
    }
});





frappe.ui.form.on('Naming Check', {
    refresh: function(frm) {
        // Custom buttons in groups
        frm.add_custom_button('Closed', function() {
            frm.doc.status = 'Closed';
            frm.refresh(); // Refresh the form to reflect the changes
        }, 'Set Status');
    }
});




frappe.ui.form.on('Naming Check', {
    refresh: function(frm) {
        frappe.show_alert('Hi, do you have a new message', 5);
 // Replace 'Fees1' with the actual doctype name
        }
    });




    // frappe.ui.form.on('Naming Check', {
    //     refresh: function(frm) {
    //         frappe.prompt([
    //             {
    //                 fieldtype: 'Data',
    //                 label: 'Enter your name',
    //                 fieldname: 'user_name',
    //                 reqd: true
    //             }
               
    //         ], function(values) {
    //             frm.set_value('first_name', values.user_name);

    //             // Callback function to process the data
    //             // frappe.msgprint('User Name:', values.user_name);
    //             // frappe.msgprint('Selected Date:', values.selected_date);
                
    //             // You can perform further actions with the collected data here
    //         }, 'Enter Details', 'Submit','Cancel');
    //     }
    // });
    


    frappe.ui.form.on('Naming Check', {
        refresh: function(frm) {
            frappe.prompt([
                {
                    fieldtype: 'Data',
                    label: 'Enter your name',
                    fieldname: 'user_name',
                    reqd: true
                }
            ], function(values) {
                
                    // Process the data only if the user clicks on "Submit"
                    frm.set_value('first_name', values.user_name);
                
    
                // You can perform further actions with the collected data here
            }, 'Enter Details', 'Submit');
        }
    });
    


    frappe.confirm(
        'Are you sure to leave this page?',
        function(){
            window.close();
        },
        function(){
            frappe.show_alert('Thanks for continue here!')
        }
    )
    


    frappe.msgprint("<b>Server Status</b>"
    + "<hr/>"
    + "<ul>"
            + "<li><b>28%</b> Memory</li>"
            + "<li><b>12%</b> Processor</li>"
            + "<li><b>0.3%</b> Disk</li>"
    + "</ul>", 'Server Info')


    
    var d = new frappe.ui.Dialog({
        'fields': [
            {'fieldname': 'ht', 'fieldtype': 'HTML'},
            {'fieldname': 'today', 'fieldtype': 'Date', 'default': frappe.datetime.nowdate()}
        ],
        primary_action: function(){
            d.hide();
            show_alert(d.get_values());
        }
    });
    d.fields_dict.ht.$wrapper.html('Hello World');
    d.show();
    
// control action

// frappe.ui.form.ControlLink.link_options = function(link) {
//     return [
//         {
//             html: "<span class='text-primary link-option'>"
//                 + "<i class='fa fa-search' style='margin-right: 5px;'></i> "
//                 + __("Custom Link Option")
//                 + "</span>",
//             label: __("Custom Link Option"),
//             value: "custom__link_option",
//             action: () => {}
//         }
//     ];
// }


frappe.ui.form.ControlLink.link_options = function(link) {
    return [
        {
            html: "<span class='text-primary link-option'>"
                + "<i class='fa fa-search' style='margin-right: 5px;'></i> "
                + __("Custom Link Option")
                + "</span>",
            label: __("Custom Link Option"),
            value: "custom__link_option",
            action: function() {
                frappe.msgprint("Custom link option selected!");
                // Add your custom action here
            }
        }
    ];
}



// Calculating age
// frappe.ui.form.on("Naming Check", {
//     date_of_birth(frm) {
//     var birthdate=frm.doc.date_of_birth;
//     // Calculate age based on date of birth var dobDate = new Date(birthdate);
//     var today = new Date();
//     var age = today.getFullYear()-dobDate.getFullYear();
//     if (today.getMonth() < dobDate.getMonth() || (today.getMonth() ===dobDate.getMonth() && today.getDate() < dobDate.getDate())
//     age--;
//     }
//     frm.setValue("age", age);
//     }
//     })
    

    frappe.ui.form.on("Naming Check", {
        date_of_birth(frm) {
            var birthdate = frm.doc.date_of_birth;
            // Calculate age based on date of birth
            var dobDate = new Date(birthdate);
            var today = new Date();
            var age = today.getFullYear() - dobDate.getFullYear();
    
            // Adjust age if birthdate has not occurred yet this year
            if (
                today.getMonth() < dobDate.getMonth() ||
                (today.getMonth() === dobDate.getMonth() &&
                    today.getDate() < dobDate.getDate())
            ) {
                age--;
            }
    
            // Set the calculated age in the form
            frm.set_value("age", age);
        }
    });
    



    // SMS SENDING

    // frappe.ui.form.on('Naming Check', {
    //     refresh: function(frm){
    //     frm.add_custom_button("Welcome & Schedule SMS", function() {
    //     var message = 'Welcome to Sunstars Movers!\rGreetings!\r' + frm.doc.customer_primary_contact + "\rPlanned movement schedule:\r' + frm.doc.planned_start_date_time;
    //     frappe.call({
    //     method: "frappe.core.doctype.sms_settings.sms_settings.send_sms",
    //     args: {
    //     receiver_list: [frm.doc.mobile_no], msg: message,
    //     },
    //     callback: function(r) { if (r.exc) [Music] exc); return; }
    //     let
    //     });


        // frappe.ui.form.on('Naming Check', {
        //     refresh: function(frm) {
        //         frm.add_custom_button("Welcome & Schedule SMS", function() {
        //             var message = 'Welcome to Sunstars Movers!\rGreetings!\r' + frm.doc.mobile_no ;
                    
        //             frappe.call({
        //                 method: "fee_management.fee_management.doctype.naming_check.naming_check.send_welcome_sms",
        //                 args: {
        //                     receiver_list: [frm.doc.mobile_no],
        //                     msg: message
        //                 },
        //                 callback: function(r) {
        //                     if (r.exc) {
        //                         frappe.msgprint(__('Error: ') + r.exc);
        //                         return;
        //                     }
        //                     frappe.msgprint(__('SMS sent successfully!'));
        //                 }
        //             });
        //         });
        //     }
        // });
        

        frappe.ui.form.on('Naming Check', {
            refresh: function(frm) {
                frm.add_custom_button("Welcome & Schedule SMS", function() {
                    frappe.call({
                        method: "fee_management.fee_management.doctype.naming_check.naming_check.send_welcome_sms",
                        args: { 'doc': frm.doc },
                        callback: function(r) {
                            if (r.message) {
                                frappe.msgprint(__('SMS sent successfully!'));
                            } else if (r.exc) {
                                frappe.msgprint(__('Error: ') + r.exc);
                            }
                        }
                    });
                });
            }
        });
        









        // Add fuction to button

        frappe.ui.form.on('Naming Check', {
            refresh: function(frm) {
                frm.fields_dict['open_fees'].$input.on('click', function() {
                    // Replace 'fees1' with the actual doctype name
                    frappe.new_doc('Fees1');
                });
            }
        });
        

        // frappe.ui.form.on('Naming Check', {
        //     refresh: function(frm) {
        //         frm.fields_dict['open_fees'].on_click = function() {
        //             // Replace 'fees1' with the actual doctype name
        //             frappe.new_doc('fees1');
        //         };
        //     }
        // });
        

// on github How To Improve A Standard Control

// import "./base_control";
// import "./base_input";
// import "./data";
// import "./int";
// import "./float";
// import "./currency";
// import "./date";
// import "./time";
// import "./datetime";
// import "./date_range";
// import "./select";
// import "./link";
// import "./dynamic_link";
// import "./text";
// import "./code";
// import "./text_editor";
// import "./comment";
// import "./check";
// import "./image";
// import "./attach";
// import "./attach_image";
// import "./table";
// import "./color";
// import "./signature";
// import "./password";
// import "./button";
// import "./html";
// import "./markdown_editor";
// import "./html_editor";
// import "./heading";
// import "./autocomplete";
// import "./barcode";
// import "./geolocation";
// import "./multiselect";
// import "./multicheck";
// import "./table_multiselect";
// import "./multiselect_pills";
// import "./multiselect_list";
// import "./rating";
// import "./duration";
// import "./icon";
// import "./phone";
// import "./json";

// frappe.ui.form.make_control = function (opts) {
// 	var control_class_name = "Control" + opts.df.fieldtype.replace(/ /g, "");
// 	if (frappe.ui.form[control_class_name]) {
// 		return new frappe.ui.form[control_class_name](opts);
// 	} else {
// 		console.log("Invalid Control Name: " + opts.df.fieldtype);
// 	}
// };


// Import necessary modules (assuming they are available)
// import "./base_control";
// import "./data";

// // Create a text form control dynamically
// const textControl = frappe.ui.form.make_control({
//     df: {
//         fieldtype: 'Data',  // Example fieldtype, replace with the desired type
//         // Add other necessary field options
//     }
// });

// // Use the created control (e.g., append it to a form)
// document.body.appendChild(textControl.wrapper);


