
import frappe
from frappe.model.document import Document

class Invoice1(Document):
    pass


@frappe.whitelist()

def get_fee_for_student(fee_type, application_type, program_type, program=None,
                        program_pg=None, program_phd=None, 
                        quota_regular=None,
quota_self_supported=None, 
category_general_regular=None,
category_general_self_supported=None, category_differently_abled=None,
category_differently_abled_self_supported=None,
fee_schedule=None,refundable=None,
# campus=None,school=None,
currency_type=None):

    # Query the database for the fee
    fee = frappe.db.get_value('Fees1', {
        'fee_type': fee_type,
        'application_type': application_type,
        'program_type': program_type,
        'program': program or None,
        'program_pg': program_pg or None,
        'program_phd': program_phd or None,
        'quota_regular': quota_regular or None,
        'quota_self_supported': quota_self_supported or None,
        'category_general_regular': category_general_regular or None,
        'category_general_self_supported': category_general_self_supported or None,
        'category_differently_abled': category_differently_abled or None,
        'category_differently_abled_self_supported': category_differently_abled_self_supported or None,
        'fee_schedule':fee_schedule or None,
        'refundable':refundable or None,
        # 'campus':campus,
        # 'school':school,
        'currency_type':currency_type or None
    }, 'fee_component')

    return fee




# # Import necessary libraries and modules
# from frappe import get_payment_gateway_controller

# # Your Order controller class
# class YourOrderController:
#     # Other methods and attributes
    
#     def get_razorpay_order(self):
#         # Get the Razorpay payment gateway controller
#         controller = get_payment_gateway_controller("Razorpay")

#         # Payment details for creating the order
#         payment_details = {
#             "amount": 1,  # Set the amount as needed
#             # Other payment details
#             "reference_doctype": "Invoice1",
#             "reference_docname": self.name,
#             "receipt": self.name
#         }

#         # Create the Razorpay order using the controller
#         return controller.create_order(**payment_details)









# Last Updated
# # Import necessary libraries and modules
# import frappe
# from frappe import get_payment_gateway_controller

# # Your Python script
# class InvoicePaymentProcessor:
#     def __init__(self, name, applicant_name,fee_type, fee):
#         self.name = name
#         self.applicant_name = applicant_name
       
#         self.fee_type= fee_type
#         self.fee= fee
     
#     def create_razorpay_order(self):
#         # Get the Razorpay payment gateway controller
#         controller = get_payment_gateway_controller("Razorpay")

#         # Payment details for creating the order
#         payment_details = {
#             "reference_doctype": "Invoice1",
#             "reference_docname": self.name,
#             "receipt": self.name,
#             "applicant_name": self.applicant_name,
#             "fee_type": self.fee_type,
#             "fee": self.fee

           
#             # Add other payment details as needed
#         }

#         # Create the Razorpay order using the controller
#         return controller.create_order(**payment_details)

# # Example usage:
# if __name__ == "__main__":
#     # Replace the values with actual data
#     name = "INV-001"
#     fee = 5000
#     applicant_name = "John Doe"
#     fee_type="Application Fee"
    

#     # Create an instance of the InvoicePaymentProcessor
#     payment_processor = InvoicePaymentProcessor(
#         name, applicant_name,fee_type ,fee
#     )

#     # Get Razorpay order details
#     razorpay_order = payment_processor.create_razorpay_order()

#     # Print or use the Razorpay order details as needed
#     print("Razorpay Order Details:", razorpay_order)
