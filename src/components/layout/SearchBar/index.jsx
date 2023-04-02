import React, { useState, useEffect } from "react";
import { StyledSearchBar } from "../../../styles/components/SearchBar.styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useProductsStore } from "../../../utils/stateManagement/dataManagement";
import { shallow } from "zustand/shallow";

export default function SearchBar() {
  const [userInput, setUserInput] = useState("");

  const [suggestions, setSuggestions] = useState([]);

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const { availableProducts } = useProductsStore(
    (state) => ({
      availableProducts: state.availableProducts,
    }),
    shallow
  );

  useEffect(() => {
    //remove options from searchbar
    setSuggestions([]);
    setUserInput("");
  }, [pathname]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setUserInput(query);

    const filteredSuggestions = availableProducts.filter((product) =>
      product.title.toLowerCase().includes(query)
    );

    //limit the suggestions displayed for a better UX
    const limitedSuggestions = filteredSuggestions.slice(0, 4);
    setSuggestions(limitedSuggestions);

    if (query.length === 0) {
      setSuggestions([]);
    }
  }

  let selected = -1;

  function handleNavigation(event) {
    const key = event.key;

    switch (key) {
      case "Enter":
        goToPage();
        break;
      case "ArrowDown":
        navigateSuggestions(1, event.target);
        break;
      case "ArrowUp":
        navigateSuggestions(-1, event.target);
        break;
      case "Backspace":
        removeStyles();
        break;
      default:
        break;
    }
  }

  function goToPage() {
    const chosenSuggestion = suggestions[selected];
    chosenSuggestion
      ? navigate(`/product/${chosenSuggestion.id}`)
      : navigate(`/searchResults/${userInput}`);
  }

  function navigateSuggestions(direction, target) {
    const newSelected = selected + direction;
    if (newSelected >= 0 && newSelected < suggestions.length) {
      selected = newSelected;
      target.value = suggestions[selected].title;
      const selectedSuggestion = suggestions[selected].id;
      suggestions.forEach((suggestion) => {
        const li = document.getElementById(suggestion.id);
        suggestion.id === selectedSuggestion
          ? li.classList.add("selected")
          : li.classList.remove("selected");
      });
    }
  }

  function removeStyles() {
    suggestions.forEach((suggestion) => {
      const li = document.getElementById(suggestion.id);
      li.classList.remove("selected");
    });
  }

  return (
    <StyledSearchBar>
      <div className="input-wrapper">
        <label htmlFor="search-bar"></label>
        
        <input
        className="searchfield"
          type="text"
          placeholder="Search"
          name="search"
          value={userInput}
          onChange={handleChange}
          onKeyDown={handleNavigation}
        />
      </div>
      <ul>
        {suggestions.map((item) => {
          return (
            <li key={item.id} id={item.id}>
              <Link to={`/product/${item.id}`}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </StyledSearchBar>
  );
}
