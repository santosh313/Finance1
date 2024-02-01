# from __future__ import unicode_literals
# import frappe
# from frappe.model.document import Document

# class addfee(Document):
#     @frappe.whitelist()
#     def get_fee_for_student(self,program_type, program, application_type, category, fee_type):
#         fee = frappe.db.get_value('FEES', {
#             'program_type': program_type,
#             'program': program,
#             'application_type': application_type,
#             'category': category,
#             'fee_type': fee_type
#         }, 'fee_component')
#         return fee


import frappe




@frappe.whitelist(allow_guest=True)

def ping():
    return 'pong'