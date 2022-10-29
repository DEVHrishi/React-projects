/* eslint-disable jsx-a11y/anchor-is-valid */

import './App.css';

function App() {
  return (
    <div class="text-Purple-400">
      <div>
        <nav>
          <div>
            <h1>
              <a href="/">Food Ninja</a>
            </h1>
          </div>
          <ul>
            <li>
              <a href="#">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <main>
        <div>
          <a href="#">Log in</a>
          <a href="#">Sign up</a>
        </div>

        <header>
          <h2 class="text-red-400 text-3x">Recipes</h2>
          <h3>For Ninjas</h3>
        </header>

        <div>
          <h4>Latest Recipes</h4>

          <div class="mt-8 p-8">
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp_Vvp27d3Xa5WyEkplV3rRsSFVis6p_oRXw&usqp=CAU" alt="stew" />
                <div>
                  <span>5 Bean Chili Stew</span>
                  <span>Recipe by Mario</span>
                </div>
            </div>
          </div>

          <h4>Most Popular</h4>

          <div>
          </div>
        </div>

        <div>
          <div>Load more</div>
        </div>
      </main>
    </div>
  );
}

export default App;
