## Morty Code Challenge

Steps to run the app:
1. `git clone` or just download the zip
2. `cd` into this project directory
3. `yarn`
4. `yarn start`
5. navigate to `http://localhost:3000/`

### Comments from me:
The boilerplate is from `create-react-app`. With a tweak to use SCSS instead
of what was baked in.

Most of the code is in `src/containers/App.jsx` and `src/components/Table.jsx`.
I put the sorting functions in the main App file because I wanted to keep
the Table component stateless. I feel kind of mixed about this, because
I don't think the App container needs to know about the sorting functions.

Wanting to keep the table stateless also prevented me from tracking the
descending/ascending sorting in state, which is why there are two separate
buttons/functions for sorting the table columns.

Other decisions I made were to filter liberally and without case-sensitivity -- 
Banana Bank and Apple Bank would both be results of 'ban'.
