# Copyright (c) 2023, iiht@gmail.com and contributors
# For license information, please see license.txt

import frappe
from frappe.website.website_generator import WebsiteGenerator
from frappe.website.website_generator import WebsiteGenerator


class NamingCheck(WebsiteGenerator):
	pass



@frappe.whitelist()
def execute_function(*args,**kwargs):
    """
    This fonction will be executed when the Execute Action Button will be clicked
    """
    frappe.msgprint('Hello World')
    # The data is transmitted via keyword argument
    print(kwargs)



# calculating borthdate
    


# @frappe.whitelist()
# def execute_function(*args, **kwargs):
#     """
#     This function will be executed when the Execute Action Button will be clicked
#     """
#     # Create a new 'Fees1' document
#     new_fees1_doc = frappe.new_doc('Fees1')

#     # Perform any additional operations on the new document if needed
#     # For example, set values using kwargs
#     new_fees1_doc.update(kwargs)
    

#     # Save the document
#     new_fees1_doc.save()
    

# frappe.msgprint(f"New Fees1 Doc Name: {new_fees1_doc.name}")

#     # Open the newly created 'Fees1' document
# frappe.set_route("Form", "Fees1", new_fees1_doc.name)




# naming_check.py

# import frappe
# import requests

# @frappe.whitelist()
# def send_welcome_sms(doc):
#     try:
#         sms_service_url = "https://www.fast2sms.com/dev/bulkV2"
#         api_key = "0IdBFo7pgyHVCGwq9sb2XWDfmR8ShTN3Y1uExZUz5OlJLkiPrvFARpTnDH5esaMw2qzVcUvWh6uyrZQK"

#         # Your logic to send SMS using the Fast2SMS service
#         response = requests.post(
#             sms_service_url,
#             headers={
#                 "authorization": api_key,
#                 "Content-Type": "application/json"
#             },
#             json={
#                 "route": "q",  # Replace with the appropriate route
#                 "message": get_welcome_message(doc),
#                 "language": "english",
#                 "flash": "0",
#                 "numbers": [doc.mobile_no]
#             }
#         )

#         if response.status_code == 200:
#             return "SMS sent successfully!"
#         else:
#             frappe.log_error(f"Failed to send SMS. Status code: {response.status_code}, Response: {response.text}")
#             return None

#     except Exception as e:
#         frappe.log_error(_("Failed to send SMS: {0}").format(str(e)))
#         return None  # Return None or handle error as per your requirement

# def get_welcome_message(doc):
#     return f"Welcome to Sunstars Movers!\rGreetings!\r{doc.mobile_no}\rPlanned movement schedule:\r{doc.planned_start_date_time}"


# naming_check.py

# import frappe
# import requests

# @frappe.whitelist()
# def send_welcome_sms(doc):
#     try:
#         sms_service_url = "https://www.fast2sms.com/dev/bulkV2"
#         api_key = "0IdBFo7pgyHVCGwq9sb2XWDfmR8ShTN3Y1uExZUz5OlJLkiPrvFARpTnDH5esaMw2qzVcUvWh6uyrZQK"

#         # Your logic to send SMS using the Fast2SMS service
#         response = requests.post(
#             sms_service_url,
#             headers={
#                 "authorization": api_key,
#                 "Content-Type": "application/x-www-form-urlencoded"
#             },
#             data={
#                 "message": get_welcome_message(doc),
#                 "route": "q",
#                 "flash": "0",
#                 "numbers": doc.mobile_no
#             }
#         )

#         if response.status_code == 200:
#             return "SMS sent successfully!"
#         else:
#             frappe.log_error(f"Failed to send SMS. Status code: {response.status_code}, Response: {response.text}")
#             return None

#     except Exception as e:
#         frappe.log_error(_("Failed to send SMS: {0}").format(str(e)))
#         return None  # Return None or handle error as per your requirement

# def get_welcome_message(doc):
#     return f"Welcome to Sunstars Movers!\rGreetings!\r{doc.mobile_no}\rPlanned movement schedule:\r{doc.planned_start_date_time}"



# naming_check.py

import frappe
import requests

@frappe.whitelist()
def send_welcome_sms(doc):
    try:
        sms_service_url = "https://www.fast2sms.com/dev/bulkV2"
        api_key = "0IdBFo7pgyHVCGwq9sb2XWDfmR8ShTN3Y1uExZUz5OlJLkiPrvFARpTnDH5esaMw2qzVcUvWh6uyrZQK"

        # Your logic to send SMS using the Fast2SMS service
        response = requests.post(
            sms_service_url,
            headers={
                "authorization": api_key,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data={
                "route": "q",
                "flash": "0",
                "numbers": doc.mobile_no,
                "message": get_welcome_message(doc),
            }
        )

        response.raise_for_status()  # Raise an error for bad response codes

        return "SMS sent successfully!"

    except requests.exceptions.HTTPError as errh:
        frappe.log_error(f"HTTP Error: {errh}")
        return None
    except requests.exceptions.ConnectionError as errc:
        frappe.log_error(f"Error Connecting: {errc}")
        return None
    except requests.exceptions.Timeout as errt:
        frappe.log_error(f"Timeout Error: {errt}")
        return None
    except requests.exceptions.RequestException as err:
        frappe.log_error(f"Request Error: {err}")
        return None

def get_welcome_message(doc):
    return f"Welcome to Sunstars Movers!\rGreetings!\r{doc.mobile_no}\rPlanned movement schedule:\r{doc.planned_start_date_time}"
