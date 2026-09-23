# Resume Builder

- Build a project using vite + react
  npm create vite@latest resume-builder -- --template react
  remove unwanted elements from component
- install packages for styling
    -> install material ui
    -> google fonts
    -> bootstrap cdn link
    -> react icons
- Project structuring (component creation)
- structured into pages and components
- Header and footer is given as global to come in every page
- for routing - react router dom is used - install react router dom to create path and routing related actions 
- inside -<Routes> tag <Route> is used for setting path.-wrap app.jsxwith browser router in main.jsx
- define path and elements inside routes using route in app.jsx
- design components
- collect resume details from user inputs using state(onchange) state defined in parent component as an object.
- display dresume details in preview component using state lifting , because react only supports unidirectional dataflow.
