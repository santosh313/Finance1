# Copyright (c) 2023, iiht@gmail.com and contributors
# For license information, please see license.txt

# import frappe
# from frappe.model.document import Document

# from __future__ import unicode_literals
# import frappe
# from frappe.model.document import Document

# class addfee(Document):
#       @frappe.whitelist()
#       def get_fee_for_student(program_type, program, application_type, category, fee_type):
#               fee = frappe.db.get_value('Check Fee', {
#                      'program_type': program_type,
#                      'program': program,
#         'application_type': application_type,
#         'category': category,
#         'fee_type': fee_type
#     }, 'fee')
#               return fee


# from __future__ import unicode_literals
# import frappe
# from frappe.model.document import Document

# class addfee(Document):
#     @frappe.whitelist()
#     def get_fee_for_student(program_type, program, application_type, category, fee_type):
#         fee = frappe.db.get_value('FEES', {
#             'program_type': program_type,
#             'program': program,
#             'application_type': application_type,
#             'category': category,
#             'fee_type': fee_type
#         }, 'fee_component')
#         return fee


# working one
# from __future__ import unicode_literals
# import frappe

# @frappe.whitelist()
# def get_fee_for_student(program_type, program, application_type, category, fee_type):
#     # Your logic to fetch the fee from the table based on program, quota, and category
#     # Example logic:
#     fee = frappe.db.get_value('Fees', {
#         'program_type': program_type,
#         'program': program,
#         'application_type': application_type,
#         'category': category,
#         'fee_type': fee_type
#     }, 'fee_component')

#     return fee

# Working one
# from __future__ import unicode_literals
# import frappe
# from frappe.model.document import Document

# class addfee(Document):
#     pass  


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


# apps/fee_management/fee_management/doctype/add_fee/add_fee.py
# from __future__ import unicode_literals
# import frappe
# from frappe.model.document import Document

# class AddFee(Document):
#     pass

# @frappe.whitelist()
# def get_fee_for_student(program_type, program, application_type, category, fee_type):
#     fee = frappe.db.get_value('Check Fee', {
#         'program_type': program_type,
#         'program': program,
#         'application_type': application_type,
#         'category': category,
#         'fee_type': fee_type
#     }, 'fee')

#     return fee


import frappe
from frappe.model.document import Document


class addfee(Document):
	pass



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
