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