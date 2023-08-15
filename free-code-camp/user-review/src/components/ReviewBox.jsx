import PropTypes from "prop-types";
import photo from "../assets/account.png";
import "../styles/ReviewBox.css";

/*Componente Review: Recibe 3 props para generar la reseña */
export const Review = ({ user_avatar, user_name, user_review }) => {
  return (
    <article className="review-box">
      <img src={user_avatar} className="app-logo" alt={`foto de ${user_name}` }/>
      <div className="app-text">
        <h3>{user_name}</h3>
        <p>"{user_review}"</p>
      </div>
    </article>
  );
};

//Definir propTypes
Review.propTypes = {
  user_avatar: PropTypes.string,
  user_name: PropTypes.string.isRequired,
  user_review: PropTypes.string.isRequired
};

//Definir defaults
Review.defaultProps = { 
  user_avatar: photo,
  user_name: "Chris",
  user_review: "I'm using React"
};