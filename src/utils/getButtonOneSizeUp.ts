import {ESize} from "dyna-ui-button";

export const getButtonOneSizeUp = (size: ESize): ESize => {
  const sizes = Object.keys(ESize);
  const index = sizes.indexOf(size);
  let newIndex = index + 1;
  if (newIndex > sizes.length - 1) newIndex = sizes.length - 1;
  return sizes[newIndex] as ESize;
};
