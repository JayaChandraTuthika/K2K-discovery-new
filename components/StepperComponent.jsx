"use client";

import { IoRadioButtonOffSharp, IoRadioButtonOn } from "react-icons/io5";
import { IoIosArrowDropdown } from "react-icons/io";

const StepperComponent = ({ childPath }) => {
  return (
    <div className="child-path-container">
      <ol class="path-list">
        <hr className="steps-connector-line" />
        {childPath.map((ch, chi) => {
          return (
            <li class="path-list-item" key={chi}>
              <span class="icon-wrapper">
                {chi < childPath.length - 1 ? (
                  <IoIosArrowDropdown className="child-path-step-icon" />
                ) : (
                  <IoRadioButtonOn className="child-path-step-icon" />
                )}
              </span>
              <h3 class=" font-medium label">{ch.label}</h3>
              <p class="description">{ch.value}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default StepperComponent;
