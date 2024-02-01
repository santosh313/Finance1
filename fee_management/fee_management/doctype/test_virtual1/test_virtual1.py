# Copyright (c) 2023, iiht@gmail.com and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
import os
import json



# class TestVirtual1(Document):
# 	pass



class TestVirtual1(Document):
    """This is a virtual doctype controller for demo purposes.

    - It uses a single JSON file on disk as "backend".
    - Key is docname and value is the document itself.

    Example:
    {
            "doc1": {"name": "doc1", ...}
            "doc2": {"name": "doc2", ...}
    }
    """

    DATA_FILE = "data_file.json"

    @staticmethod
    def get_current_data() -> dict[str, dict]:
        """Read data from disk"""
        if not os.path.exists(TestVirtual1.DATA_FILE):
                  return {}

        with open(TestVirtual1.DATA_FILE) as f:
            return json.load(f)
        

        

		

    @staticmethod
    def update_data(data: dict[str, dict]) -> None:
        """Flush updated data to disk"""
        with open(TestVirtual1.DATA_FILE, "w+") as data_file:
            json.dump(data, data_file)

    def db_insert(self, *args, **kwargs):
        d = self.get_valid_dict(convert_dates_to_str=True)

        data = self.get_current_data()
        data[d.name] = d

        self.update_data(data)

    def load_from_db(self):
        data = self.get_current_data()
        d = data.get(self.name)
        super(Document, self).__init__(d)

    def db_update(self, *args, **kwargs):
        # For this example insert and update are same operation,
        # it might be  different for you.
        self.db_insert(*args, **kwargs)

    def delete(self):
        data = self.get_current_data()
        data.pop(self.name, None)
        self.update_data(data)

    @staticmethod
    def get_list(args):
        data = TestVirtual1.get_current_data()
        return [frappe._dict(doc) for name, doc in data.items()]

    @staticmethod
    def get_count(args):
        data = TestVirtual1.get_current_data()
        return len(data)

    @staticmethod
    def get_stats(args):
        return {}






# from git
    

# import inspect
# from typing import Protocol, runtime_checkable

# import frappe
# from frappe import _

# from frappe.model.base_document import get_controller
# from frappe.model.document import BaseDocument


# @runtime_checkable
# class TestVirtual1(Protocol):
# 	"""This class documents requirements that must be met by a doctype controller to function as virtual doctype


# 	Additional requirements:
# 	- DocType controller has to inherit from `frappe.model.document.Document` class

# 	Note:
# 	- "Backend" here means any storage service, it can be a database, flat file or network call to API.
# 	"""

# 	# ============ class/static methods ============

# 	@staticmethod
# 	def get_list(args) -> list[frappe._dict]:
# 		"""Similar to reportview.get_list"""
# 		...

# 	@staticmethod
# 	def get_count(args) -> int:
# 		"""Similar to reportview.get_count, return total count of documents on listview."""
# 		...

# 	@staticmethod
# 	def get_stats(args):
# 		"""Similar to reportview.get_stats, return sidebar stats."""
# 		...

# 	# ============ instance methods ============

# 	def db_insert(self, *args, **kwargs) -> None:
# 		"""Serialize the `Document` object and insert it in backend."""
# 		...

# 	def load_from_db(self) -> None:
# 		"""Using self.name initialize current document from backend data.

# 		This is responsible for updatinng __dict__ of class with all the fields on doctype."""
# 		...

# 	def db_update(self, *args, **kwargs) -> None:
# 		"""Serialize the `Document` object and update existing document in backend."""
# 		...

# 	def delete(self, *args, **kwargs) -> None:
# 		"""Delete the current document from backend"""
# 		...


# def validate_controller(doctype: str) -> None:
# 	try:
# 		controller = get_controller(doctype)
# 	except ImportError:
# 		frappe.msgprint(
# 			_("Failed to import virtual doctype {}, is controller file present?").format(doctype)
# 		)
# 		return

# 	def _as_str(method):
# 		if hasattr(method, "__module__"):
# 			return f"{method.__module__}.{method.__qualname__}"
# 		return "None"

# 	expected_static_method = ["get_list", "get_count", "get_stats"]
# 	for m in expected_static_method:
# 		method = inspect.getattr_static(controller, m, None)
# 		if not isinstance(method, staticmethod):
# 			frappe.msgprint(
# 				_("Virtual DocType {} requires a static method called {} found {}").format(
# 					frappe.bold(doctype), frappe.bold(m), frappe.bold(_as_str(method))
# 				),
# 				title=_("Incomplete Virtual Doctype Implementation"),
# 			)

# 	expected_instance_methods = ["db_insert", "db_update", "load_from_db", "delete"]
# 	parent_class = controller.mro()[1]
# 	for m in expected_instance_methods:
# 		method = getattr(controller, m, None)
# 		original_method = getattr(parent_class, m, None)
# 		if method == original_method:
# 			frappe.msgprint(
# 				_("Virtual DocType {} requires overriding an instance method called {} found {}").format(
# 					frappe.bold(doctype), frappe.bold(m), frappe.bold(_as_str(method))
# 				),
# 				title=_("Incomplete Virtual Doctype Implementation"),
# 			)