## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Questions
Below are the answers to your questions.
- How will you ensure quality in future iterations?

  - We can add many things like linter, typescript etc to enhance the quality.
- How will users authenticate with your application?
  - I'll use token authentication using JWT.
- How will you authorize users to specific resources?
  We potentially have 3 different 'types' of users (homeowner, contractor, internal)
    - For this we will have separate routes define for all different roles in separate files. When user will be logged in we can check which file to load in this way we will only load the related routes to that role which will kill the chance of accessing other roles pages.
- What is your approach to code reuse?
    - For code reuse-ability I would say make components of all smaller things and make it customizable so we have the leverage to implement it in some different ways. These components can be very useful in reusing the code.
- When do you build vs import an external package?
    - We import external package when we find something that is fulfilling our needs so we can just plug & play with that and we can save time as well.
    - We build a package where we have to build a whole new thing. We   can build it and it is very useful 
- What backend technologies would you select?
    - I'll go with Ruby on Rails with postgresql as the DB design will require many relations if we extend this project. There are many other advantages of rails as well That I can't describe here.
- What improvements would you make with more time?
  1. Design Improvements
  2. More Test Coverage
  3. Add redux etc for data storage
