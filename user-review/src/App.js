import "./App.css";
import { Review } from "./components/ReviewBox";
import { Commets } from "./helpers/Reviews"



function App() {
  return (
    <div className="App">
      <h1>Reseñas</h1> 
      
      <Review
        user_name="Ana"
        user_review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis dui enim, sed rhoncus ligula dapibus et. Praesent cursus ornare molestie. Integer vestibulum leo a nulla dignissim, eget iaculis purus placerat. Phasellus sodales purus nec diam venenatis mattis. Fusce varius, erat eget molestie gravida, urna nunc placerat sem, vel lacinia ante nisi eu sapien. Vivamus vitae elit sit amet ipsum vestibulum aliquam vel et ipsum. Nullam porttitor sem ac lectus ornare tempor. Pellentesque suscipit, massa sit amet sodales pharetra, justo dolor condimentum ligula, id mattis nunc diam id urna. Sed at augue quis tortor varius condimentum. Praesent at augue eu lorem condimentum rutrum sit amet vitae metus. Quisque rutrum rhoncus nulla at ultrices. Vivamus dignissim dictum nisi a molestie."
      />
      <Review />
      <Review />

      {/* crear reseñas desde el arregl en helpers*/}
    </div>
  );
}

export default App;
