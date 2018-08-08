## Morty Code Challenge

Steps to run the app:
1. `git clone` or just download the zip
2. `cd` into this project directory
3. `yarn`
4. `yarn start`
5. navigate to `http://localhost:3000/`

Comments:
I put the sorting functions in the main App file because I wanted to keep
the Table component stateless. I feel kind of mixed about this, because
I don't really think the App container needs to know about the sorting functions
at all.

Wanting to keep the table stateless also prevented me from tracking the
descending/ascending sorting in state, which is why there are two separate
buttons for sorting the table columns.
