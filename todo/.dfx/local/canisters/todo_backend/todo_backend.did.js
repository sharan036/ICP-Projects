export const idlFactory = ({ IDL }) => {
  const Todo = IDL.Record({
    'value' : IDL.Text,
    'done' : IDL.Bool,
    'index' : IDL.Nat,
  });
  return IDL.Service({
    'getArrayData' : IDL.Func([], [IDL.Vec(Todo)], []),
    'updateObject' : IDL.Func([IDL.Nat, IDL.Bool], [IDL.Vec(Todo)], []),
  });
};
export const init = ({ IDL }) => { return []; };
