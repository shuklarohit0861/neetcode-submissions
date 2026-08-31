class MyQueue:
    def __init__(self):
        self.stackPush = []
        self.stackPop = []

    def push(self, x: int) -> None:
        self.stackPush.append(x)

    def pop(self) -> int:
        self._move_push_to_pop()
        return self.stackPop.pop()

    def peek(self) -> int:
        self._move_push_to_pop()
        return self.stackPop[-1]

    def empty(self) -> bool:
        return not self.stackPush and not self.stackPop

    def _move_push_to_pop(self) -> None:
        # Helper method to transfer elements lazily when stackPop is empty
        if not self.stackPop:
            while self.stackPush:
                self.stackPop.append(self.stackPush.pop())


# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()
