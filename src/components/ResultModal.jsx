import React from "react";
import { createPortal } from "react-dom";

export default function ResultModal({ result, targetTime, ref }) {

    // createPortal
  return createPortal(
    <dialog className="result-modal" ref={ref}>
      <h2>your {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left</strong> .
      </p>

      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
}
