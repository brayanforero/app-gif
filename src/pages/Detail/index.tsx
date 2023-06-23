import useSingleGif from "../../hooks/useSingleGif";
import { BallTriangle } from "react-loader-spinner";
import "./index.css";
import { useRouter } from "wouter";
import useLocation from "wouter/use-location";

interface Props {
  params: { id: string };
}

function Detail({ params }: Props) {
  const [_, setLocation] = useLocation();
  const { gif, loading, error } = useSingleGif(params.id);

  const handleReturn = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const keyword = localStorage.getItem("last-keyword");
    setLocation(`/search/${keyword}`);
  };
  return (
    <section className="Detail">
      <a href="#" onClick={handleReturn} className="active">
        Regresar
      </a>

      {error && <span className="alert">{error}</span>}
      {loading && <BallTriangle color="#5747eb" height={80} width={80} />}
      {!loading && !error && (
        <section className="Detail__item">
          <img src={gif?.image.hd} alt={gif?.name} />
          <h2>{gif?.name}</h2>
        </section>
      )}
    </section>
  );
}

export default Detail;
