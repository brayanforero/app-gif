import { Link } from "wouter";

function TermsList({ terms }: { terms: string[] }) {
  return (
    <>
      {terms.map((t) => (
        <Link key={t} href={`/search/${t}`} className="active">
          {t}
        </Link>
      ))}
    </>
  );
}

export default TermsList;
