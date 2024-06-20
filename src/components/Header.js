import { Link } from "react-router-dom";

const Header = ({ handleToken, userToken }) => {
  return (
    <div>
      <p>Logo</p>
      {!userToken ? (
        <>
          <Link to="/login">
            <button>Connexion</button>
          </Link>

          <Link to="/signup">
            <button>S'inscrire</button>
          </Link>
        </>
      ) : (
        <Link>
          <button
            onClick={() => {
              handleToken();
            }}
          >
            Déconnexion
          </button>
        </Link>
      )}
    </div>
  );
};

export default Header;
