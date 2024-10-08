export const calculateMoveUp = (project) => {
  const heightOnScreen = (project.imgHeight / project.imgWidth) * 274; // calculate the height of the Image on the screen from actual height and weight
  const height = heightOnScreen + 84; // top-[84px]
  const moveUpInPixels = height - 489; // parent div height
  const moveUp = "-" + moveUpInPixels + "px";

  return moveUp;
};

export const calculateMoveDown = (project) => {
  const heightOnScreen = (project.imgHeight / project.imgWidth) * 274; 
  const moveUpInPixels = heightOnScreen - 489; 

  return moveUpInPixels;
};

export const calculateMovingDuration = (project) => {
  const movingDuration = (project.imgHeight / project.imgWidth) * 0.9; // to keep the moving speed consistent for every image

  return movingDuration;
};
