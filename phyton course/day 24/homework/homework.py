#  1)
# def sort_keys(dictionary):
#     sorted_keys = sorted(dictionary.keys())
#     return sorted_keys

#  2)
# def find_max(dictionary):
#     max_value = max(dictionary.values())
#     max_key = [key for key, value in dictionary.items() if value == max_value][0]
#     return max_key, max_value

#  3)
# def combine_dicts(*dicts):
#     combined_dict = {}
#     for d in dicts:
#         combined_dict.update(d)
#     return combined_dict

#  4)
# def check_key(dictionary, key):
#     value = dictionary.get(key)
#     return value is not None

#  5)
# def remove_and_return(dictionary, key):
#     return dictionary.pop(key, None)

#  6)
# def manual_keys(dictionary):
#     return list(dictionary.keys())

#  7)
# def manual_values(dictionary):
#     return list(dictionary.values())

#  8)
# def manual_items(dictionary):
#     return list(dictionary.items())

#  9)
# def manual_get(dictionary, key):
#     return dictionary.get(key)

#  10)
def manual_pop(dictionary, key):
     return dictionary.pop(key)

