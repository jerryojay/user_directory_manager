import Map "mo:base/HashMap";
import Text "mo:base/Text";
import Time "mo:base/Time";
import Result "mo:base/Result"

actor {

  type Name = Text;
  type Phone = Text;

  type Gender = {
    #male;
    #female;
  };
  type Entry = {
    desc : Text;
    phone_number : Phone;
    gender : Gender;
    location : Text;
    age : Nat;
    time : Time.Time

  };

  let user_directory_list = Map.HashMap<Name, Entry>(0, Text.equal, Text.hash);

  public query func insert(name : Name, entry : Entry) : async () {
    user_directory_list.put(name, entry);
  };

  public query func intialize_args(arg : Entry) : async Result.Result<Text, Text> {
    return #ok "args intialized";
  };

  public query func update_user_data(name : Name, entry : Entry) : async ?Entry {
    user_directory_list.replace(name, entry);
  };

  public query func delete_user(name : Name) : async () {
    user_directory_list.delete(name);
  };

  public query func pop_retrieve_user(name : Name) : async ?Entry {
    user_directory_list.remove(name);
  };

  public query func get_num_users() : async Nat {
    user_directory_list.size();
  };

  public query func lookup(name : Name) : async ?Entry {
    user_directory_list.get(name);
  };
};
