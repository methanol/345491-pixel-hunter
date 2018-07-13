export default function resize(frame, given) {
  let newSize = {
    width: given.width,
    height: given.height
  };

  if (frame.width < newSize.width) {
    const ratioW = newSize.width / frame.width;

    newSize.width = frame.width;
    newSize.height = given.height / ratioW;
  }

  if (frame.height < newSize.height) {
    const ratioH = newSize.height / frame.height;

    newSize.width = Math.floor(frame.width / ratioH);
    newSize.height = frame.height;
  }

  return newSize;
}
