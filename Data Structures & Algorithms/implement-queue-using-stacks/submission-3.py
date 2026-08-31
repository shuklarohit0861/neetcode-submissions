class MyQueue:
    def __init__(self):
        self.stackPush = []
        self.stackPop = []

    def push(self, x: int) -> None:
        self.stackPush.append(x)

    def pop(self) -> int:
        if self.stackPop:
            return self.stackPop.pop()
        else:
            for i in range(len(self.stackPush)):
                self.stackPop.append(self.stackPush.pop())
        return self.stackPop.pop()

    def peek(self) -> int:
        if not self.stackPop:
            return self.stackPush[0]
        elif self.stackPop or self.stackPush:
            return self.stackPop[-1]

    def empty(self) -> bool:
        if self.stackPush or self.stackPop:
            return False
        else:
            return True


# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()
