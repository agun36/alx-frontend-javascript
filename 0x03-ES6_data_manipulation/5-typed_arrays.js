const createInt8TypedArray = (length, position, value) => {
  const buffer = new ArrayBuffer(length);
  const view = new Int8Array(buffer);
  if (position > int8Array.length) throw new Error('Position outside range');
  view[position] = value;
  return new DataView(buffer);
};

export default createInt8TypedArray;
