export const idlFactory = ({ IDL }) => {
  const Name = IDL.Text;
  const Time = IDL.Int;
  const Gender = IDL.Variant({ 'female' : IDL.Null, 'male' : IDL.Null });
  const Phone = IDL.Text;
  const Entry = IDL.Record({
    'age' : IDL.Nat,
    'desc' : IDL.Text,
    'time' : Time,
    'gender' : Gender,
    'phone_number' : Phone,
    'location' : IDL.Text,
  });
  const Result = IDL.Variant({ 'ok' : IDL.Text, 'err' : IDL.Text });
  return IDL.Service({
    'delete_user' : IDL.Func([Name], [], ['query']),
    'get_num_users' : IDL.Func([], [IDL.Nat], ['query']),
    'insert' : IDL.Func([Name, Entry], [], ['query']),
    'intialize_args' : IDL.Func([Entry], [Result], ['query']),
    'lookup' : IDL.Func([Name], [IDL.Opt(Entry)], ['query']),
    'pop_retrieve_user' : IDL.Func([Name], [IDL.Opt(Entry)], ['query']),
    'update_user_data' : IDL.Func([Name, Entry], [IDL.Opt(Entry)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
