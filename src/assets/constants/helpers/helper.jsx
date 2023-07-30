// helper.jsx
import { useState } from 'react';

export function helper() {


  const toggleElementVisibility = (elementsToHide, elementsToShow) => {

    elementsToHide.forEach((elementId) => {
      const element = document.getElementById(elementId);
      if (element) {

        element.style.display = "none";
      }
    });

    elementsToShow.forEach((elementId) => {
      const element = document.getElementById(elementId);
      if (element) {

        element.style.display = "block";
      }
    });

  }
  return { toggleElementVisibility };

}
