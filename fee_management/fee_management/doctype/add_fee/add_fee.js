// Copyright (c) 2023, iiht@gmail.com and contributors
// For license information, please see license.txt

// frappe.ui.form.on("add fee", {
// 	refresh(frm) {

// 	},
// });


// frappe.ui.form.on('add fee', {
//     refresh: function (frm) {
//         frm.add_custom_button(__('Fetch Fee'), function () {
//             fetchFee(frm);
//         });
//     }
// });

// function fetchFee(frm) {
//     var programType = frm.doc.program_type; // Update with the actual fieldname
//     var program = frm.doc.program;
//     var applicationType = frm.doc.application_type; // Update with the actual fieldname
//     var category = frm.doc.category;
//     var feeType = frm.doc.fee_type;


//     frappe.call({
//         method: 'fee_management.fee_management.doctype.add_fee.add_fee.get_fee_for_student',
//         args: {
//             program_type: programType,
//             program: program,
//             application_type: applicationType,
//             category: category,
//             fee_type: feeType
//         },
//         callback: function (r) {
//             if (r.message) {
//                 frm.set_value('fee', r.message);
//                 frappe.msgprint(__('Fee fetched successfully.'));
//             } else {
//                 frappe.msgprint(__('Fee not found for the specified criteria.'));
//             }
//         }
//     });
// }


frappe.ui.form.on('add fee', {
    refresh: function (frm) {
        frm.add_custom_button(__('Fetch Fee'), function () {
            fetchFee(frm);
        });
    }
});

function fetchFee(frm) {
    var programType = frm.doc.program_type; // Update with the actual fieldname
    var program = frm.doc.program;
    var applicationType = frm.doc.application_type; // Update with the actual fieldname
    var category = frm.doc.category;
    var feeType = frm.doc.fee_type;


    frappe.call({
        method: 'fee_management.fee_management.doctype.add_fee.add_fee.get_fee_for_student',
        // fee_management.fee_management.doctype.check_fee.check_fee.get_fee_for_student
        // frappe.client.get
        // fee_management.fee_management.doctype.add_fee.add_fee.get_fee_for_student
        // /api/method/{module}.{doctype}.{method_name}

        args: {
            program_type: programType,
            program: program,
            application_type: applicationType,
            category: category,
            fee_type: feeType
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




