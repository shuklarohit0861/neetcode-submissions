class Solution:
    def numRescueBoats(self, people: List[int], limit: int) -> int:
        people.sort()
        left = 0
        right = len(people) - 1
        boats = 0

        while left <= right:
        # Heaviest person always takes a boat
            if people[left] + people[right] <= limit:
               left += 1  # Lightest person can share the boat
            right -= 1  # Move to next heaviest
            boats += 1

        return boats
