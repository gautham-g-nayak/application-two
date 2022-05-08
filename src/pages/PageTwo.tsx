import InputField from "../components/InputField";
import useSession from "../hooks/useSession";
import "./PageOne.css"


const PageTwo = () => {
  const [searchText, setSearchText] = useSession("searchTerm2", "");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value);
  }
  return (
    <div  className = "pageHead">
      <h1>Page 2</h1>
      <InputField
          searchText={searchText}
          onChange={handleChange}
          id="searchBox"
        >
          Search
        </InputField>
    </div>
  );
};

export default PageTwo;
