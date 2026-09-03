class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        let stack = [];
        let paths = path.split("/");
        for (let p of paths) {
            if (p === "" || p === ".") {
                continue;
            }
            if (p === "..") {
                if (stack.length) {
                    stack.pop();
                }
            } else {
                stack.push(p);
            }
        }
        return "/" + stack.join("/");
    }
}
