import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useLocation } from "wouter";
import "./index.css";
function Form() {
  const [keyword, setKeyword] = useState<string>("");
  const [, setLocation] = useLocation();
  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      if (!keyword) {
        return alert("Please, type something");
      }

      setLocation(`/search/${keyword}`);
    },
    [keyword]
  );

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }, []);

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        onChange={handleChange}
        value={keyword}
        className="form__input"
        type="text"
      />
      <button className="form__submit">Search</button>
    </form>
  );
}

export default Form;
