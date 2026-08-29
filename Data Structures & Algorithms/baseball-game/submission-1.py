class Solution:
    def calPoints(self, operations: List[str]) -> int:
        stack = []
        for op in operations:
            if op == "+":
                top = stack.pop()
                sL = len(stack) -1;
                vSum = top + stack[sL]
                stack.append(top)
                stack.append(vSum)
            elif op == 'C':
                stack.pop()
            elif op == 'D':
                top = stack.pop()
                vMul = top * 2
                stack.append(top)
                stack.append(vMul)
            else :
                stack.append(int(op))

        res = 0

        for v in stack:
            res += v
        return res


