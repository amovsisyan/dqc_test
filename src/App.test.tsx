import { render } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import App from "./App";

describe('Text data tests', () => {
  test("Correctly calculate overall score", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("happinessScore").textContent).toMatch(/58/);
  });

  test("Correctly group data and show table", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("FreeTextTable").textContent).toMatch(
        /What data is NOT always reliable and correct\?\(6\)/
    );
  });

  test("Expanded item inner data existence", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("FreeTextTable").textContent).toMatch(
        /Values of different items and tasks/
    );
  });

  test("Collapsed items inner data should not exist", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("FreeTextTable").textContent).not.toMatch(
        /It is not directly a tool, but access to some anonymized employee performance data would be great/
    );
    expect(getByTestId("FreeTextTable").textContent).not.toMatch(
        /Analytics in BI tools/
    );
  });
})

test("All Groups Exist", () => {
  const { getByTestId } = render(<App />);
  const table = getByTestId("FreeTextTable")
  expect(table.getElementsByClassName('ms-GroupHeader-expand').length).toBe(3);
});


describe('Expand/Collapse', () => {
  test("First item expanded", () => {
    const { getByTestId } = render(<App />);
    const table = getByTestId("FreeTextTable")
    expect(table.getElementsByClassName('ms-GroupHeader-expand')[0].getElementsByTagName('i')[0]).not.toHaveClass('is-collapsed');
  });

  test("Second and Third items collapsed", () => {
    const { getByTestId } = render(<App />);
    const table = getByTestId("FreeTextTable")
    expect(table.getElementsByClassName('ms-GroupHeader-expand')[1].getElementsByTagName('i')[0]).toHaveClass('is-collapsed');
    expect(table.getElementsByClassName('ms-GroupHeader-expand')[2].getElementsByTagName('i')[0]).toHaveClass('is-collapsed');
  });

  test("Expand/Collapse logic on Click", () => {
    const { getByTestId } = render(<App />);
    const table = getByTestId("FreeTextTable")

    // initially should be collapsed
    expect(table.getElementsByClassName('ms-GroupHeader-expand')[1].getElementsByTagName('i')[0]).toHaveClass('is-collapsed');

    const secondItemIcon = table.getElementsByClassName('ms-GroupHeader-expand')[1].getElementsByTagName('i')[0]
    fireEvent.click(secondItemIcon)
    expect(table.getElementsByClassName('ms-GroupHeader-expand')[1].getElementsByTagName('i')[0]).not.toHaveClass('is-collapsed');
    fireEvent.click(secondItemIcon)
    expect(table.getElementsByClassName('ms-GroupHeader-expand')[1].getElementsByTagName('i')[0]).toHaveClass('is-collapsed');
  });
})
