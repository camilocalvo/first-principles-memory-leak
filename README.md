# Reproducing the Memory Leak

1. Click on the "go to the app" button
2. Using the Chrome memory profile, take a snapshot
3. Click on one of the "Number Pad Field" items
4. Close the modal
5. Repeat steps 2 and 3 a few more times
6. Take another memory snapshot, noting the increase in memory
7. In the memory tool, search for "Detached". Note the detached buttons (with a "fee-button" classname) in memory
8. If desired, repeat steps 3-7 to watch the memory further go up and confirm it never plateaus