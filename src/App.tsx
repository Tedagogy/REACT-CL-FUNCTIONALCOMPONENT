import './App.css';
import { MyComponent } from './components/MyComponent';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <p>React is a JavaScript library for making a component-based front-end application. A component is a reusable part
        of your site that may contain the JavaScript or Typescript code needed for your site to function, styling, as well 
        as code similar to HTML in a format named 'JSX' (JavaScript XML), in which this text is displayed in the 'App.tsx' 
        component under the 'src' folder. The 'App.tsx' component is the central component of the site, which you may think
        of as the 'root' component of the site.
      </p>
      <p>Our first task is going to be to include another component as part of this component's template. You'll find this
        is part of what makes React a useful improvement over raw JavaScript - a component may be included in a format
        reminiscent of a custom HTML element. Check out the comments in the App.tsx file under the 'src' folder for how to
        add the component 'MyComponent' (from the 'src/components' folder) to the site. Here's a tip: when you run the 
        React app, it should auto-reload when you save files, so any changes you make to the site will be reflected there.
      </p>
      {/* add the following line below to add 'MyComponent' to the page: 
          <MyComponent></MyComponent>  
        */}
      <MyComponent></MyComponent>  
      {/* You can also try adding 'MyComponent' any number of times to this component to display is again and again.*/}
      <p>Addendum: You may also note that there are a variety of ways to write a React app, and from 
        this point onwards, we will be using functional components and TypeScript. Function-based components are newer and
        are generally regarded as preferable to class-based components, and likewise TypeScript allows for more
        maintainable code, since it provides compile-time checking that catches many potential bugs that would be unnoticed
        in JavaScript. On a real project, it is possible that you will run into class components, and/or components written
        in JavaScript, particularly on older projects. Much of the underlying code functions the same there as it does in 
        our chosen style of React.</p>

    </div>
  );
}

export default App;
