class LRUCache:
    def __init__(self, capacity: int):
        self.cache = OrderedDict()
        self.cap = capacity

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value

        if len(self.cache) > self.cap:
            self.cache.popitem(last=False)
        




# class Node:
#     def __init__(self, key: int = -1, val: int = -1, prev: Node = None, next: Node = None):
#         self.key = key
#         self.val = val
#         self.prev = prev
#         self.next = next

# class LRUCache:
#     def __init__(self, capacity: int):
#         self.__cacheSize = 0
#         self.__maxSize = capacity
#         self.__head = Node()
#         self.__tail = Node()
#         self.__head.next = self.__tail
#         self.__tail.prev = self.__head
#         self.__mpp = {}
    
#     def __moveNodeToEnd(self, used: Node) -> None:
#         if used == self.__tail.prev:
#             return
        
#         used.prev.next = used.next
#         used.next.prev = used.prev

#         used.next = self.__tail
#         used.prev = self.__tail.prev
#         self.__tail.prev.next = used
#         self.__tail.prev = used

#     def get(self, key: int) -> int:
#         if key not in self.__mpp:
#             return -1

#         node = self.__mpp[key]
#         self.__moveNodeToEnd(node)
#         return node.val

#     def put(self, key: int, value: int) -> None:
#         if key in self.__mpp:
#             node = self.__mpp[key]
#             node.val = value
#             self.__moveNodeToEnd(node)
#         else:
#             if self.__cacheSize < self.__maxSize:
#                 temp = Node(key, value)
#                 temp.prev = self.__tail.prev
#                 temp.next = self.__tail
#                 self.__tail.prev.next = temp
#                 self.__tail.prev = temp

#                 self.__cacheSize += 1
#                 self.__mpp[key] = temp
#             else:
#                 temp = self.__head.next
#                 del self.__mpp[temp.key]

#                 self.__head.next = temp.next
#                 temp.next.prev = self.__head

#                 temp.next = self.__tail
#                 temp.prev = self.__tail.prev
#                 self.__tail.prev.next = temp
#                 self.__tail.prev = temp

#                 temp.key = key
#                 temp.val = value
#                 self.__mpp[key] = temp