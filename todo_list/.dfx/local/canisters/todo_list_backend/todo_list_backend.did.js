export const idlFactory = ({ IDL }) => {
  const Todo = IDL.Record({ 'value' : IDL.Text, 'done' : IDL.Bool });
  return IDL.Service({
    'getArrayData' : IDL.Func([], [IDL.Vec(Todo)], []),
    'storeArray' : IDL.Func([IDL.Vec(Todo)], [IDL.Vec(Todo)], []),
  });
};
export const init = ({ IDL }) => { return []; };
