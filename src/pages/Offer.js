import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // Pour importer les paramètres d'une URL

const Offer = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/v2/offers/" + id
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <div>
      <h2>{data.product_name}</h2>
      {data.product_details.map((detail, index) => {
        const keyName = Object.keys(detail);
        return (
          <div key={index}>
            <span>{keyName[0]}</span> <span>{detail[keyName[0]]}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Offer;
