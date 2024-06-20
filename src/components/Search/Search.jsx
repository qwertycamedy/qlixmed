import { disableScroll } from "@hooks/disableScroll";
import { enableScroll } from "@hooks/enableScroll";
import { clsx } from "clsx";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Search = ({
  classNames,
  labelCl,
  icoCl,
  inputCl,
  placeholder = "Искать на qlix.kz",
  value,
  setValue,
}) => {
  const dispatch = useDispatch();
  // const sorts = [
  //   {
  //     sort: "category",
  //     text: "Категории",
  //   },
  //   {
  //     sort: "product",
  //     text: "Товары",
  //   },
  //   {
  //     sort: "seller",
  //     text: "Продавцы",
  //   },
  // ];

  const [sortIsActive, setSortIsActive] = useState(false);
  // const [curSort, setCurSort] = useState(sorts[0]);

  const onSort = () => {
    if (sortIsActive) {
      enableScroll();
    } else {
      disableScroll();
    }
    setSortIsActive(!sortIsActive);
  };

  // const onCurSort = cur => {
  //   setCurSort(cur);
  //   onSort();
  // };

  return (
    <>
      <div className={`${classNames} search-outer`}>
        <label className={`${labelCl} search`}>
          <svg
            className={`${icoCl} ico-18 search-ico stroke`}
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="search">
              <path
                id="Vector"
                d="M7.79167 13.4583C10.9213 13.4583 13.4583 10.9213 13.4583 7.79167C13.4583 4.66205 10.9213 2.125 7.79167 2.125C4.66205 2.125 2.125 4.66205 2.125 7.79167C2.125 10.9213 4.66205 13.4583 7.79167 13.4583Z"
                strokeWidth="1.41667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_2"
                d="M14.8752 14.8752L11.7939 11.7939"
                strokeWidth="1.41667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
          <input
            className={`${inputCl} search-field`}
            placeholder={placeholder}
            type="text"
            value={value}
            onChange={e => dispatch(setValue(e.target.value))}
          />
        </label>
        {/* <span className="search-letter">в</span>
        <div className="search-sort-outer">
          <button
            className={clsx("search-sort-btn btn", {
              active: sortIsActive,
            })}
            onClick={onSort}
          >
            <span>{curSort.text}</span>
            <svg
              className="ico-18 stroke"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="chevron-down">
                <path
                  id="Vector"
                  d="M6.75 4.5L11.25 9L6.75 13.5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </button>
          <ul
            className={clsx(" search-sort-list", {
              active: sortIsActive,
            })}
            onClick={onSort}
          >
            {sorts.map(item => (
              <li
                className={clsx(
                  "search-sort-list-item btn",
                  { active: curSort.sort === item.sort }
                )}
                onClick={() => onCurSort(item)}
                key={item.sort}
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div> */}
        <span
          className={clsx("search-sort-overlay", { active: sortIsActive })}
          onClick={onSort}
        ></span>
      </div>
    </>
  );
};

export default Search;
