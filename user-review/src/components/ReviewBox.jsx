import PropTypes from "prop-types";
import photo from "../assets/account.png";
import "../styles/ReviewBox.css";

export const Review = ({ user_avatar, user_name, user_review }) => {
  return (
    <article className="review-box">
      <img src={user_avatar} className="App-logo" alt={`foto de ${user_name}` }/>
      <div className="App-text">
        <h3 className="review-title">{user_name}</h3>
        <p className="review-test">"{user_review}"</p>
      </div>
    </article>
  );
};

Review.propTypes = {
  user_avatar: PropTypes.string,
  user_name: PropTypes.string.isRequired,
  user_review: PropTypes.string.isRequired
};

Review.defaultProps = { 
  user_avatar: photo,
  user_name: "Chris",
  user_review: "I'm using React"
};