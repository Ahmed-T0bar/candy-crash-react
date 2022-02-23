import { useEffect, useState } from "react";

const width = 8;
const candyColors = ["blue", "red", "green", "yellow", "orange", "purple"];

const Game = () => {
  const [currentColorArrangment, setCurrentColorArrangment] = useState([]);
  const [blockBeingDragged, setBlockBeingDragged] = useState(null);
  const [blockBeingReplaced, setBlockBeingReplaced] = useState(null);

  // Check if match (row of four, row of three, column of four, column of three)
  const checkForColumnOfFour = () => {
    for (var i = 0; i <= 39; i++) {
      const columnofFour = [i, i + width, i + width * 2, i + width * 3];
      const currentColor = currentColorArrangment[i];

      if (
        columnofFour.every(
          (block) => currentColorArrangment[block] === currentColor
        )
      ) {
        columnofFour.forEach((block) => (currentColorArrangment[block] = ""));
        return true;
      }
    }
  };

  const checkForRowOfFour = () => {
    for (var i = 0; i < 64; i++) {
      const rowOfFour = [i, i + 1, i + 2, i + 3];
      const currentColor = currentColorArrangment[i];

      const notValid = [
        5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53,
        54, 55, 62, 63, 64,
      ];

      if (notValid.includes(i)) continue;

      if (
        rowOfFour.every(
          (block) => currentColorArrangment[block] === currentColor
        )
      ) {
        rowOfFour.forEach((block) => (currentColorArrangment[block] = ""));
        return true;
      }
    }
  };
  const checkForColumnOfThree = () => {
    for (var i = 0; i <= 47; i++) {
      const columnOfThree = [i, i + width, i + width * 2];
      const currentColor = currentColorArrangment[i];

      if (
        columnOfThree.every(
          (block) => currentColorArrangment[block] === currentColor
        )
      ) {
        columnOfThree.forEach((block) => (currentColorArrangment[block] = ""));
        return true;
      }
    }
  };
  const checkForRowOfThree = () => {
    for (var i = 0; i < 64; i++) {
      const rowOfThree = [i, i + 1, i + 2];
      const currentColor = currentColorArrangment[i];
      const notValid = [
        6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64,
      ];

      if (notValid.includes(i)) continue;
      if (
        rowOfThree.every(
          (block) => currentColorArrangment[block] === currentColor
        )
      ) {
        rowOfThree.forEach((block) => (currentColorArrangment[block] = ""));
        return true;
      }
    }
  };

  // Generate candy colors
  const generateListOfCandies = () => {
    let ListOfCandies = [];
    for (var i = 0; i < width * width; i++) {
      const randomNum = Math.floor(Math.random() * candyColors.length);
      const randomColor = candyColors[randomNum];
      ListOfCandies.push(randomColor);
    }
    setCurrentColorArrangment(ListOfCandies);
  };

  // Move blank blocks to the top and re-fill it
  const moveToTheTop = () => {
    for (let i = 0; i < 64 - width; i++) {
      const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];
      const isFirstRow = firstRow.includes(i);

      if (isFirstRow && currentColorArrangment[i] === "") {
        let randomNum = Math.floor(Math.random() * candyColors.length);
        currentColorArrangment[i] = candyColors[randomNum];
      }

      if (currentColorArrangment[i + width] === "") {
        // make the filled block go down
        currentColorArrangment[i + width] = currentColorArrangment[i];
        // make the blank block go up
        currentColorArrangment[i] = "";
      }
    }
  };

  // Drag Functions
  const dragStart = (e) => {
    setBlockBeingDragged(e.target);
  };
  const dragDrop = (e) => {
    setBlockBeingReplaced(e.target);
  };
  const dragEnd = (e) => {
    const blockBeingDraggedID = blockBeingDragged.getAttribute("data-id");
    const blockBeingReplacedID = blockBeingReplaced.getAttribute("data-id");

    currentColorArrangment[blockBeingDraggedID] =
      blockBeingReplaced.style.backgroundColor;
    currentColorArrangment[blockBeingReplacedID] =
      blockBeingDragged.style.backgroundColor;

    const validMoves = [
      blockBeingDraggedID - 1,
      blockBeingDraggedID - width,
      blockBeingDraggedID + width,
      blockBeingDraggedID + 1,
    ];

    const ValidMove = validMoves.includes(blockBeingReplacedID);

    const ifRowOfFour = checkForRowOfFour();
    const ifColumnOfFour = checkForColumnOfFour();
    const ifRowOfThree = checkForRowOfThree();
    const ifColumnOfThree = checkForColumnOfThree();

    if (
      blockBeingReplacedID &&
      ValidMove &&
      (ifRowOfFour || ifColumnOfFour || ifRowOfThree || ifColumnOfThree)
    ) {
      setBlockBeingDragged(null);
      setBlockBeingReplaced(null);
    } else {
      // currentColorArrangment[blockBeingDraggedID] =
      //   blockBeingDragged.style.backgroundColor;
      // currentColorArrangment[blockBeingReplacedID] =
      //   blockBeingReplaced.style.backgroundColor;
      setCurrentColorArrangment([...currentColorArrangment]);
    }
  };

  useEffect(() => {
    generateListOfCandies();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      checkForRowOfFour();
      checkForColumnOfFour();
      checkForRowOfThree();
      checkForColumnOfThree();
      moveToTheTop();
      setCurrentColorArrangment([...currentColorArrangment]);
    }, 100);
    return () => clearInterval(timer);
  }, [
    checkForRowOfFour,
    checkForColumnOfFour,
    checkForRowOfThree,
    checkForColumnOfThree,
    moveToTheTop,
    currentColorArrangment,
  ]);

  return (
    <main className="app">
      <div className="game">
        {currentColorArrangment.map((candy, index) => {
          return (
            <img
              key={index}
              style={{ backgroundColor: candy }}
              alt={candy}
              data-id={index}
              draggable={true}
              onDragStart={dragStart}
              onDragOver={(e) => e.preventDefault()}
              onDragEnter={(e) => e.preventDefault()}
              onDragLeave={(e) => e.preventDefault()}
              onDrop={dragDrop}
              onDragEnd={dragEnd}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Game;
