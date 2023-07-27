import photo from '../assets/account.png';
import '../App.css';

export const Review = () => {
  
  return (
  <article className="review-box">
    <img 
        src={photo}
        className="App-logo"
        alt="logo"
    />
    <div className='App-text'> 
    <h3 className="review-title">Thanos</h3>
    <p className="review-test">Soy un functional component en react</p>
    </div>
  </article>
  );
};
