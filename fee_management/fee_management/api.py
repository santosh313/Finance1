# import frappe
# from frappe import _

# @frappe.whitelist()
# def get_fee_details(student_invoice):
#     # Your logic to fetch fee details based on input parameters
#     # Replace 'Fee Admin' with the actual name of your Fee Admin doctype
#     # Assuming you have a child table named 'fee_details_table' in Fee Admin
#     fee_details = frappe.get_all('Fee Admin', filters={
#         'types_of_quota': student_invoice.quota_type,
#         'type_of_courses': student_invoice.course_type,
#         'category': student_invoice.category,
#         'state': student_invoice.subcategory,
#     }, fields=['total_demand', 'paid_at_college', 'payable_at_college'])

#     # Check if any data is found
#     if fee_details:
#         return fee_details[0]
#     else:
#         return None



import frappe
from frappe import _

@frappe.whitelist()
def get_fee_for_student(program_type, program, application_type, category, fee_type):
    fee = frappe.db.get_value('Check Fee', {
           'program_type': program_type,
           'program': program,
           'application_type': application_type,
           'category': category,
           'fee_type': fee_type
    }, 'fee')
    return fee

@frappe.whitelist(allow_guest=True)
def ping():
    return 'pong'



# @frappe.whitelist()
# def naming_check():
#     # Replace "Naming Check" with the actual doctype name
#     # Make sure the fields like "first_name" exist in the doctype
#     naming_check_doc = frappe.get_doc({
#         "doctype": "Naming Check",
#         "name": "First",
#         "first_name": "test",
#         "naming_series":"pppooo"
#     })

#     # Insert the document
#     naming_check_doc.insert()

# # Call the function to execute it
# naming_check()
